import express from 'express';
import session from 'express-session';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import { fileURLToPath } from 'url';
import flash from 'connect-flash';
import Recipe from './models/recipeModel.js';
import recipeRouter from './routes/recipeRoute.js';
import userRouter from './routes/userRoute.js';
import User from './models/userModel.js';

const app = express();

// Connect to MongoDB
const mongoDBURL = process.env.MONGODB_URL;

// Set up port
const port = process.env.PORT

// Manually recreate __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Session Setup
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Initialize flash messages
app.use(flash());

// Middleware to pass flash messages to response locals
app.use((req, res, next) => {
  res.locals.success_flash = req.flash('success');
  res.locals.error_flash = req.flash('error');
  next();
});

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Passport Local Strategy for Login
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// Serialize user ID into session
passport.serializeUser((user, done) => {
  done(null, user.username);
});

// Deserialize user from session
passport.deserializeUser(async (username, done) => {
  try {
    const user = await User.findOne({ username });
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

// Use the user routes
app.use('/users', userRouter);
// Use the recipe routes
app.use('/api/recipes', recipeRouter);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all handler to serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Connect to MongoDB
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');

    // Start the server
    app.listen(port, () => {
      console.log(`App is listening to port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
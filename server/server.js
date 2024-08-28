import express from 'express';
import session from 'express-session';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import passport from 'passport';
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

// Authentication check middleware
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { // Assuming req.isAuthenticated is correctly set up
    return next();
  }
  // Redirect to home page if not authenticated
  res.redirect('/');
};

// Use the user routes
app.use('/users', userRouter);
// Use the recipe routes
app.use('/api/recipes', recipeRouter);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Route for '/recipes'
app.get('/recipes', isAuthenticated, (req, res, next) => {
  // If authenticated, serve React app for '/recipes'
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/new', isAuthenticated, (req, res, next) => {
  // If authenticated, serve React app for '/new'
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

// Redirect login to recipes if auth
app.get('/login', (req, res, next) => {
  if (req.isAuthenticated()) {
    // If authenticated, redirect to the '/recipes' page
    return res.redirect('/recipes');
  }

  // If not authenticated, serve the login page
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

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
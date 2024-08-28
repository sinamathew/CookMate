import express from 'express';
import bcrypt from 'bcrypt';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import User from '../models/userModel.js';

const userRouter = express.Router();

// Passport Local Strategy for Login
passport.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'Invalid email.' });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (error) {
      console.error('Error in LocalStrategy:', error); // Log the error
      return done(error);
    }
  })
);

// Serialize user ID into session
passport.serializeUser((user, done) => {
  done(null, user._id); // Use user._id instead of username
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id); // Find user by ID
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

// Register Route
userRouter.post('/register', async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = uuidv4();

    // Create username from firstname and lastname
    const username = `${firstname.toLowerCase()}.${lastname.toLowerCase()}`;

    // Create a new user
    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      isVerified: false,
      verificationToken,
    });

    // Save new user
    await newUser.save();

    // Send verification email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      }
    });

    // Construct the verification URL
    const verificationUrl = `http://cookmate.sinamathew.tech/users/verify-email?token=${verificationToken}`;
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Please verify your email',
      html: `<p>Click the link to verify your email: <a href="${verificationUrl}">Verify Email</a></p>`,
    };

    await transporter.sendMail(mailOptions);

    res.redirect('/verify');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Email Verification Route
userRouter.get('/verify-email', async (req, res) => {
  try {
    const { token } = req.query;

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).json({ message: 'Invalid token.' });
    }

    user.isVerified = true;
    user.verificationToken = undefined;

    await user.save();
    res.status(200).json({ message: 'Email verified successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login Route
userRouter.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/recipes',
    failureRedirect: '/login',
    failureFlash: true,
  })
);

// Logout Route
userRouter.post('/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    req.session.destroy(); // Destroy the session after logout
    res.clearCookie('connect.sid'); // Clear the session cookie
    res.status(200).json({ message: 'Logged out successfully' });
    res.redirect('/');
  });
});

// Check the authentication status of the user
userRouter.get('/check-auth', (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({ isAuthenticated: true, user: req.user });
  } else {
    return res.status(200).json({ isAuthenticated: false });
  }
});

export default userRouter;
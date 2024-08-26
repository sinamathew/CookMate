import express from 'express';
import bcrypt from 'bcrypt';
import passport from 'passport';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import User from '../models/userModel.js';

const userRouter = express.Router();

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
    });

    // Construct the verification URL
    const verificationUrl = `http://localhost:3000/verify-email?token=${verificationToken}`;
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Please verify your email',
      html: `<p>Click the link to verify your email: <a href="${verificationUrl}">Verify Email</a></p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'User registered. Please check your email for verification.' });
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
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true,
  })
);

// Logout Route
userRouter.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.redirect('/');
  });
});

userRouter.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated()) {
    req.flash('error', 'Unauthorized. Please log in.'); // Set flash message
    return res.redirect('/login'); 
  }
  res.status(200).json({ message: 'Welcome to your dashboard.' });
});

export default userRouter;
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import Recipe from './models/recipeModel.js';
import recipeRouter from './routes/recipeRoute.js';

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

// Routes
app.use('/api/recipes', recipeRouter);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

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
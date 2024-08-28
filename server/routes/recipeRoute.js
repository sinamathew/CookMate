import express from 'express';
import mongoose from 'mongoose'; // Import mongoose to validate ObjectId
import Recipe from '../models/recipeModel.js';

const recipeRouter = express.Router();

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { // Assuming you have a method to check user authentication
    return next();
  }
  // If not authenticated, redirect to home or send an error
  res.redirect('/');
};

// All routes will now be protected by isAuthenticated middleware
recipeRouter.use(isAuthenticated);

// CREATE a new recipe
recipeRouter.post('/', async (req, res) => {
  try {
    const recipeData = { ...req.body };
    const recipe = new Recipe(recipeData);
    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({ message: 'Error creating recipe: ' + error.message });
  }
});

// READ all recipes
recipeRouter.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Fetch all recipes
    res.status(200).json(recipes); // Respond with HTTP 200 OK and the recipes
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes: ' + error.message });
  }
});

// READ a single recipe by ID
recipeRouter.get('/:id', async (req, res) => {
  try {
    // Validate if the id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid recipe ID format' });
    }

    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// UPDATE a recipe by ID
recipeRouter.put('/:id', async (req, res) => {
  try {
    // Validate if the id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid recipe ID format' });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (updatedRecipe) {
      res.status(200).json(updatedRecipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Validation error: ' + error.message });
  }
});

// DELETE a recipe by ID
recipeRouter.delete('/:id', async (req, res) => {
  try {
    // Validate if the id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid recipe ID format' });
    }

    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (deletedRecipe) {
      res.status(200).json({ message: 'Recipe deleted' });
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// SEARCH recipes by name only
recipeRouter.get('/search', async (req, res) => {
  try {
    const { name } = req.query; // Extract the search name

    // Build the query to search by name only
    let query = {};

    if (name) {
      query.name = { $regex: name, $options: 'i' }; // Case-insensitive regex search on name
    }

    // Fetch recipes based on the search query
    const recipes = await Recipe.find(query);
    res.status(200).json(recipes); // HTTP 200 OK
  } catch (error) {
    res.status(500).json({ message: 'Error searching recipes: ' + error.message });
  }
});

export default recipeRouter;
import express from 'express';
import Recipe from '../models/recipeModel.js';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for generating unique IDs

const recipeRouter = express.Router();

// CREATE a new recipe with auto-generated unique ID
recipeRouter.post('/', async (req, res) => {
    try {
      const recipeData = { ...req.body, id: uuidv4() }; // Generate a unique ID
      const recipe = new Recipe(recipeData);
      const savedRecipe = await recipe.save();
      res.status(201).json(savedRecipe);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

// READ all recipes
recipeRouter.get('/', async (req, res) => {
    try {
      const recipes = await Recipe.find(); // Fetch all recipes
      res.status(200).json(recipes); // Respond with HTTP 200 OK and the recipes
    } catch (error) {
      res.status(500).json({ message: error.message }); // Handle server errors
    }
});
  
// READ a single recipe by ID
recipeRouter.get('/:id', async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id); // Fetch a recipe by its ID
      if (recipe) {
        res.status(200).json(recipe); // Respond with HTTP 200 OK and the recipe
      } else {
        res.status(404).json({ message: 'Recipe not found' }); // Handle not found error
      }
    } catch (error) {
      res.status(500).json({ message: error.message }); // Handle server errors
    }
});
  
// UPDATE a recipe by ID
recipeRouter.put('/:id', async (req, res) => {
    try {
      const updatedRecipe = await Recipe.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true, runValidators: true }
      ); // Find recipe by ID and update with new data
      if (updatedRecipe) {
        res.status(200).json(updatedRecipe); // Respond with HTTP 200 OK and the updated recipe
      } else {
        res.status(404).json({ message: 'Recipe not found' }); // Handle not found error
      }
    } catch (error) {
      res.status(400).json({ message: error.message }); // Handle validation errors
    }
});
  
// DELETE a recipe by ID
recipeRouter.delete('/:id', async (req, res) => {
    try {
      const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id); // Find recipe by ID and delete it
      if (deletedRecipe) {
        res.status(200).json({ message: 'Recipe deleted' }); // Respond with HTTP 200 OK
      } else {
        res.status(404).json({ message: 'Recipe not found' }); // Handle not found error
      }
    } catch (error) {
      res.status(500).json({ message: error.message }); // Handle server errors
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
      res.status(500).json({ message: error.message });
    }
});  

export default recipeRouter;
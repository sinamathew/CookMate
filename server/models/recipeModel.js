import mongoose from 'mongoose';

// Define the schema for nutrition information
const nutritionSchema = new mongoose.Schema({
  prepTime: { type: String },
  cookTime: { type: String },
  serves: { type: Number },
  calories: { type: Number },
  fat: { type: String },
  protein: { type: String },
  carbs: { type: String },
  difficulty: { type: String },
  cuisine: { type: String },
  allergens: { type: [String] },
  tips: { type: String }
});

// Define the schema for recipe
const recipeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true, },
  img: { type: String },  // Assuming image will be stored as a string URL or path
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  steps: { type: [String], required: true },
  notes: { type: String },
  tags: { type: [String] },
  nutrition: nutritionSchema
}, { timestamps: true });

// Create the Recipe model
const Recipe = mongoose.model('Recipe', recipeSchema);
export default Recipe;
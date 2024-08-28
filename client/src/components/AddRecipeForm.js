import React, { useState } from 'react';
import './AddRecipeForm.css';

export default function AddRecipeForm() {
  const [formData, setFormData] = useState({
    name: '',
    img: '',
    description: '',
    ingredients: '',
    steps: '',
    notes: '',
    tags: '',
    nutrition: {
      prepTime: '',
      cookTime: '',
      serves: '',
      calories: '',
      fat: '',
      protein: '',
      carbs: '',
      difficulty: '',
      cuisine: '',
      allergens: '',
      tips: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevData => {
      if (name.startsWith('nutrition.')) {
        const nutritionKey = name.split('.')[1];
        return {
          ...prevData,
          nutrition: {
            ...prevData.nutrition,
            [nutritionKey]: nutritionKey === 'allergens' ? value.split(',').map(item => item.trim()) : value
          }
        };
      } else if (['ingredients', 'steps', 'tags'].includes(name)) {
        return {
          ...prevData,
          [name]: value.split(',').map(item => item.trim())
        };
      } else {
        return {
          ...prevData,
          [name]: value
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Recipe added successfully!');
        // Reset form after successful submission
        setFormData({
          name: '',
          img: '',
          description: '',
          ingredients: '',
          steps: '',
          notes: '',
          tags: '',
          nutrition: {
            prepTime: '',
            cookTime: '',
            serves: '',
            calories: '',
            fat: '',
            protein: '',
            carbs: '',
            difficulty: '',
            cuisine: '',
            allergens: '',
            tips: ''
          }
        });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
      alert('An error occurred while adding the recipe.');
    }
  };

  return (
    <div className="add-recipe-form-container">
      <form className="add-recipe-form" onSubmit={handleSubmit}>
        <h2>Add New Recipe</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Recipe Name"
          required
        />
        <input
          type="url"
          name="img"
          value={formData.img}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <textarea
          name="ingredients"
          value={formData.ingredients.join(', ')}
          onChange={handleChange}
          placeholder="Ingredients (comma separated)"
          required
        />
        <textarea
          name="steps"
          value={formData.steps.join(', ')}
          onChange={handleChange}
          placeholder="Steps (comma separated)"
          required
        />
        <input
          type="text"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Notes"
        />
        <input
          type="text"
          name="tags"
          value={formData.tags.join(', ')}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
        />
        <input
          type="text"
          name="nutrition.prepTime"
          value={formData.nutrition.prepTime}
          onChange={handleChange}
          placeholder="Prep Time"
        />
        <input
          type="text"
          name="nutrition.cookTime"
          value={formData.nutrition.cookTime}
          onChange={handleChange}
          placeholder="Cook Time"
        />
        <input
          type="number"
          name="nutrition.serves"
          value={formData.nutrition.serves}
          onChange={handleChange}
          placeholder="Serves"
        />
        <input
          type="number"
          name="nutrition.calories"
          value={formData.nutrition.calories}
          onChange={handleChange}
          placeholder="Calories"
        />
        <input
          type="text"
          name="nutrition.fat"
          value={formData.nutrition.fat}
          onChange={handleChange}
          placeholder="Fat"
        />
        <input
          type="text"
          name="nutrition.protein"
          value={formData.nutrition.protein}
          onChange={handleChange}
          placeholder="Protein"
        />
        <input
          type="text"
          name="nutrition.carbs"
          value={formData.nutrition.carbs}
          onChange={handleChange}
          placeholder="Carbs"
        />
        <input
          type="text"
          name="nutrition.difficulty"
          value={formData.nutrition.difficulty}
          onChange={handleChange}
          placeholder="Difficulty"
        />
        <input
          type="text"
          name="nutrition.cuisine"
          value={formData.nutrition.cuisine}
          onChange={handleChange}
          placeholder="Cuisine"
        />
        <textarea
          name="nutrition.allergens"
          value={formData.nutrition.allergens.join(', ')}
          onChange={handleChange}
          placeholder="Allergens (comma separated)"
        />
        <textarea
          name="nutrition.tips"
          value={formData.nutrition.tips}
          onChange={handleChange}
          placeholder="Tips"
        />
        <button type="submit" className="btn-submit">Add Recipe</button>
      </form>
    </div>
  );
}

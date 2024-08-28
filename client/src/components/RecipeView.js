import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RecipeView.css';

const RecipeView = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipes/${recipeId}`);
        const data = await response.json();
        setRecipe(data);
        setFormData(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  const handleDelete = async () => {
    try {
      await fetch(`/api/recipes/${recipeId}`, {
        method: 'DELETE',
      });
      navigate('/recipes');
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await fetch(`/api/recipes/${recipeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setRecipe(formData);
      setEditing(false);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-view">
      {editing ? (
        <form className="recipe-form" onSubmit={handleUpdate}>
          <h2>Edit Recipe</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="url"
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
            onChange={(e) => setFormData({ ...formData, ingredients: e.target.value.split(', ') })}
            placeholder="Ingredients (comma separated)"
            required
          />
          <textarea
            name="steps"
            value={formData.steps.join(', ')}
            onChange={(e) => setFormData({ ...formData, steps: e.target.value.split(', ') })}
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
            onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(', ') })}
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
            onChange={(e) => setFormData({ ...formData, nutrition: { ...formData.nutrition, allergens: e.target.value.split(', ') } })}
            placeholder="Allergens (comma separated)"
          />
          <textarea
            name="nutrition.tips"
            value={formData.nutrition.tips}
            onChange={handleChange}
            placeholder="Tips"
          />
          <button type="submit" className="btn-update">Update Recipe</button>
        </form>
      ) : (
        <div className="recipe-details">
          <h1>{recipe.name}</h1>
          <img src={recipe.img} alt={recipe.name} className="recipe-image" />
          <p>{recipe.description}</p>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Steps:</h3>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <p><strong>Notes:</strong> {recipe.notes}</p>
          <p><strong>Tags:</strong> {recipe.tags.join(', ')}</p>
          <p><strong>Prep Time:</strong> {recipe.nutrition.prepTime}</p>
          <p><strong>Cook Time:</strong> {recipe.nutrition.cookTime}</p>
          <p><strong>Serves:</strong> {recipe.nutrition.serves}</p>
          <p><strong>Calories:</strong> {recipe.nutrition.calories}</p>
          <p><strong>Fat:</strong> {recipe.nutrition.fat}</p>
          <p><strong>Protein:</strong> {recipe.nutrition.protein}</p>
          <p><strong>Carbs:</strong> {recipe.nutrition.carbs}</p>
          <p><strong>Difficulty:</strong> {recipe.nutrition.difficulty}</p>
          <p><strong>Cuisine:</strong> {recipe.nutrition.cuisine}</p>
          <p><strong>Allergens:</strong> {recipe.nutrition.allergens.join(', ')}</p>
          <p><strong>Tips:</strong> {recipe.nutrition.tips}</p>
          <button onClick={handleEdit} className="btn-edit">Edit Recipe</button>
          <button onClick={handleDelete} className="btn-delete">Delete Recipe</button>
        </div>
      )}
    </div>
  );
};

export default RecipeView;

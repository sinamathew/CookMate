import React from "react";
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.img} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <a href="#">View Recipe</a>
    </div>
  );
};

export default RecipeCard;
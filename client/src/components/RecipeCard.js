import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.img} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>I'll add here later</p>
      <a href="#">View Recipe</a>
    </div>
  );
};

export default RecipeCard;
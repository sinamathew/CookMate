// RecipeSection.js
import React from "react";
import RecipeCard from "./RecipeCard";
import './RecipeSection.css';

const RecipeSection = ({ recipes }) => {
  if (!recipes.length) {
    return <div className="loading">No recipes found</div>;
  }

  return (
    <section className="recipes">
      <h1>Featured Recipes</h1>
      <div className="recipe-section">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default RecipeSection;

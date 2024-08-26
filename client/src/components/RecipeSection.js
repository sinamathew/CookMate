import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import './RecipeSection.css';

const RecipeSection = () => {
  const [recipes, setRecipes] = useState([]); // State to hold fetched recipes
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Fetch recipes from the ExpressJS backend
    fetch('/api/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data); // Set fetched data to state
        setLoading(false); // Set loading to false when data is received
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="recipes">
      <h1>Featured Recipes</h1>
      <div className="recipe-section">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default RecipeSection;

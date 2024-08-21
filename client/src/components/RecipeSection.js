import React from "react";
import RecipeCard from "./RecipeCard";

// Array for recipe data (can be dynamic later)
const recipes = [
  { id: 1, title: "Strawberry Custard", img: "./images/dish-1.jpg" },
  { id: 2, title: "Chocolate Cake", img: "./images/dish-2.jpg" },
  { id: 3, title: "Fresh Fruit Salad", img: "./images/dish-3.jpg" },
  { id: 4, title: "Vegetable Stir-Fry", img: "./images/dish-4.jpg" }
];

const RecipeSection = () => {
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
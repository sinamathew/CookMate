import React, { useState, useEffect } from 'react';
import Header from './Header';
import RecipeHero from './RecipeHero';
import RecipeSection from './RecipeSection';
import Footer from './Footer';
import './Recipes.css';

function Recipes() {
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

  const handleSearch = async (query) => {
    if (query.trim() === '') {
      // If no query, fetch all recipes
      fetch('/api/recipes')
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error('Error fetching recipes:', error));
    } else {
      // Fetch recipes based on search query
      try {
        const response = await fetch(`/api/recipes/search?name=${query}`);
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error searching recipes:', error);
      }
    }
  };

  return (
    <div className="Home">
      <Header />
      <RecipeHero onSearch={handleSearch} />
      {loading ? <div className="loading">Loading...</div> : <RecipeSection recipes={recipes} />}
      <Footer />
    </div>
  );
}

export default Recipes;
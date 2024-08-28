// RecipeHero.js
import React, { useState } from "react";
import './RecipeHero.css';

// Define the RecipeHero component
const RecipeHero = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); // Call the onSearch function with the query
  };

  return (
    <section className="recipe-hero">
      <div className="recipe-hero-section">
        <h2>Welcome to Our Recipe Collection</h2>
        <p>Search mouth-watering recipes to satisfy your craving.</p>

        <form className="search-box" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Search Recipe" 
            value={query} 
            onChange={handleChange} 
          />
          <button type="submit">Search</button>
        </form>
        <button onClick={
            () => {
              window.location.href = '/new';
            } 
          } className="btn-add-recipe">Add New Recipe</button>
      </div>
    </section>
  );
};

export default RecipeHero;
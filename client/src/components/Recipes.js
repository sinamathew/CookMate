import React from 'react';
import Header from './Header';
import RecipeHero from './RecipeHero';
import RecipeSection from './RecipeSection';
import Footer from './Footer';
import './Recipes.css';

function Recipes() {
  return (
    <div className="Home">
      <Header />
      <RecipeHero />
      <RecipeSection />
      <Footer />
    </div>
  );
}

export default Recipes;
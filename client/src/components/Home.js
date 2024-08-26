import React from 'react';
import Header from './Header';
import Hero from './Hero';
import RecipeSection from './RecipeSection';
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <RecipeSection />
      <Footer />
    </div>
  );
}

export default Home;
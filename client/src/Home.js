import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecipeSection from "./components/RecipeSection";
import Footer from "./components/Footer";
import "./Home.css";

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
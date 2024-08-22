import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecipeSection from "./components/RecipeSection";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <RecipeSection />
      <Footer />
    </div>
  );
}
export default App;
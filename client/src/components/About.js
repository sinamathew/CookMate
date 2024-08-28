import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './About.css'

export default function About() {
  return (
    <>
      <Header />
        <section className="about-section">
          <h2>About CookMate</h2>
          <p>CookMate is your ultimate destination for discovering and sharing delicious recipes from around the world. Whether you're a beginner in the kitchen or a seasoned chef, our platform is designed to inspire your culinary journey.</p>

          <p>We believe in the power of cooking to bring people together. With CookMate, you can explore a wide variety of recipes, save your favorites, and even share your own creations with the community.Join us and turn your kitchen into a hub of creativity and connection.</p>

          <h3>Our Mission</h3>
          <p>Our mission is to make cooking accessible, fun, and rewarding for everyone. We aim to connect people through food, celebrate diverse cuisines, and empower home cooks with the tools they need to create amazing dishes.</p>
      </section>
      <Footer />
    </>
  );
};
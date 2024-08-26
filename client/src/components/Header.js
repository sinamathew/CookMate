import React, { useState } from "react";
import './Header.css';

const Header = () => {
  // State to track if the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <h1 className="logo">CookMate</h1>
        <nav>
          {/* Hamburger icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          {/* Navigation list */}
          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="recipes">Recipes</a></li>
            <li><a href="login">Login</a></li>
            <li><a href="register">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

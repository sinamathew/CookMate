import React, { useState, useEffect } from "react";
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await fetch('/users/logout', { method: 'POST' }); // Logout the user from the backend
      setIsAuthenticated(false); // Update state
      window.location.href = '/'; // Redirect to the home page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Check if the user is authenticated on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/users/check-auth'); // Check if the user is logged in
        const data = await response.json();
        if (data.isAuthenticated) {
          setIsAuthenticated(true); // Update the state if the user is authenticated
        }
      } catch (error) {
        console.error("Error checking authentication status:", error);
      }
    };

    checkAuthStatus();
  }, []);

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
            <li><a href="/about">About</a></li>
            <li><a href="/recipes">Recipes</a></li>
            {!isAuthenticated ? (
              <li><a href="/login">Login</a></li>
            ) : (
              <li><a href="/" onClick={handleLogout}>Logout</a></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="logo">Delicious Recipe</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

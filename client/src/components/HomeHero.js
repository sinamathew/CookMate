import React from "react";
import './HomeHero.css';

export default function HomeHero() {
    return (
        <div className="hero-section">
            <h1>Find the best meal for your cherish ones</h1>
            <p>Connect with amazing chefs and enjoy delicious meals.</p>
        <div className="hero-button">
          <button className="start" onClick={
            () => {
              window.location.href = '/recipes';
            }
          } type="button">Get Started</button>
          <button className="learn" onClick={
            () => {
              window.location.href = '/about';
            }
          } type="button">Learn More</button>
        </div>
      </div>
    );
}
import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-section">
        <h2>Welcome to Our Recipe Collection</h2>
        <p>Search mouth-watering recipes to satisfy your craving.</p>

        <form action="#" className="search-box">
          <input type="text" placeholder="Search Recipe" />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;

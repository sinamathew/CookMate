import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './HomeHero';
import Discover from './Discover';
import "./Home.css";

function Home() {
  return (
    <>
      <Header/>
      <HomeHero/>
      <Discover/>
      <Footer/>
    </>
  );
}

export default Home;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './About.css'

export default function About() {
    return (
        <>
            <Header />
            <div className="about-section">
                <p className="tagline">About Us</p>
            </div>
            <Footer />
        </>
    );
}
import React from "react";
import './Discover.css'
import mime1 from './images/mime1.png';
import mime2 from './images/mime2.png';
import assess from './images/assess.png';
import message from './images/message.png';
import search from './images/search.png';

export default function Discover() {
    return (
        <>
            <div className="discover-section">
                <div className="discover">
                    <p className="tagline">Discover</p>
                    <h2>Get personalized recipe recommendations</h2>
                    <p>Recipes tailored to you allergens with more health benefits.</p>
                </div>

                <div className="discover-features">
                    <span>
                        <img src={search} alt="Search" />
                        <h3>Advanced Search Filters</h3>
                        <p>Narrow down your search with our powerful recipe search filters.</p>
                    </span>

                    <span>
                        <img src={message} alt="Message" />
                        <h3>Direct Messaging</h3>
                        <p>Communicate directly with fellow cooks and chefs.</p>
                    </span>

                    <span>
                        <img src={assess} alt="Assess" />
                        <h3>Global Recipe Collection</h3>
                        <p>Try out food recipes of other tribes and races.</p>
                    </span>
                </div>
            </div>

            <div className="discover-mime">
                <div className="mime">
                    <img src={mime1} alt="Mime 1" />
                    <span className="text">
                        <h2>Easy & Enjoyable Cooking.</h2>
                        <p>CookMate offers a variety of features, including ease of use, a vast recipe library, and successful culinary outcomes. With our intuitive platform, you can simplify your cooking journey and explore new, delicious recipes with ease.</p>
                        <span className="subtext-parent">
                            <span className="subtext">
                                <h3>New Flavors</h3>
                                <p>Explore a wide range of international and local recipes, all carefully curated to bring excitement to your kitchen.</p>
                            </span>
                            <span className="subtext">
                                <h3>Community-Driven</h3>
                                <p>Join a vibrant community of cooking enthusiasts who love to share their favorite recipes and culinary tips.</p>
                            </span>
                        </span>
                    </span>
                </div>

                <div className="mime">
                    <img src={mime2} alt="Mime 2" />
                    <span className="text">
                        <h2>Enhance Your Cooking Journey.</h2>
                        <p>CookMate offers tools to elevate your cooking experience, from saving and sharing your favorite recipes to getting personalized meal suggestions.</p>
                        <span className="subtext-parent">
                            <span className="subtext">
                                <h3>Save & Share</h3>
                                <p>Save and share your favorite recipes with friends and family to inspire new cooking adventures together.</p>
                            </span>
                            <span className="subtext">
                                <h3>Personalized</h3>
                                <p>Get recipe suggestions tailored to your preferences and discover new dishes that match your taste.</p>
                            </span>
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
}
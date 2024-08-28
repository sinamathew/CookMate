import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Recipes from './components/Recipes';
import RecipeView from './components/RecipeView';
import AddRecipeForm from './components/AddRecipeForm'
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Verify from './components/Verify';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/new" element={<AddRecipeForm />} />
        <Route path="/recipes/:recipeId" element={<RecipeView />} />
      </Routes>
    </Router>
  );
}

export default App;
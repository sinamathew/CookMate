import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Recipes from './components/Recipes';
import RecipeView from './components/RecipeView';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Verify from './components/Verify'; // Import the Verify component
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'; // Import the protected route
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          {/* Protected route for recipes */}
          <Route
            path="/recipes"
            element={<ProtectedRoute element={<Recipes />} />}
          />
          <Route
            path="/recipes/:recipeId"
            element={<ProtectedRoute element={<RecipeView />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

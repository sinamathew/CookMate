import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <div className="recipe-card" onClick={handleClick}>
      <img src={recipe.img} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
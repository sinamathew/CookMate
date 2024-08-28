import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.email.includes('@') || formData.password.length < 6) {
      setError('Please enter a valid email and password (min 6 characters).');
      return;
    }

    setError('');

    // Sending data to the backend using POST
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Navigate to the recipes page after successful login
        navigate('/recipes');
      } else {
        // Display error message
        setError(data.message || 'Login failed, please try again.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    });
  };

  return (
    <>
      <Header />
      <div className="auth">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="lagbaja.tamedu@ogbeni.awa"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password@1234"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{' '}
          <span onClick={() => navigate('/register')} className="register-link">
            Register
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Login;
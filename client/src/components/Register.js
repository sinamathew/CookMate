import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
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
    fetch('/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setSuccessMessage('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Redirect after 2 seconds
      } else {
        setError(data.message || 'Registration failed, please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    });
  };

  return (
    <>
      <Header />
      <div className="auth">
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="firstname" 
            placeholder="Lagbaja" 
            value={formData.firstname} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="lastname" 
            placeholder="Tamedu" 
            value={formData.lastname} 
            onChange={handleChange} 
            required 
          />
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
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <span onClick={() => navigate('/login')} className="login-link">Login</span></p>
      </div>
      <Footer />
    </>
  );
};

export default Register;
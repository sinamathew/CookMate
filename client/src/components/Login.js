import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Sending data to the backend using POST
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle response
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <span onClick={() => navigate('/register')}>Register</span></p>
    </div>
  );
};

export default Login;

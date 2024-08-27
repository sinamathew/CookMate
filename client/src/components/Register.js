import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Auth.css'

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      
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
    // Handle response
    console.log(data);
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <>
      <Header/>
      <div className="auth">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
          <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>
      </div>
      <Footer/>
    </>
  );
};

export default Register;

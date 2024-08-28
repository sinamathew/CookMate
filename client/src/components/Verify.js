import React from 'react';
import { Link } from 'react-router-dom';
import './Verify.css'; // Optional: For styling the page

const Verify = () => {
  return (
    <div className="verify-container">
      <h1>Email Verification</h1>
      <p>
        Thank you for registering! We’ve sent a verification link to your email. Please check your inbox (and spam folder) to verify your account.
      </p>
      <p>
        Once verified, <Link to="/login">click here to login</Link>.
      </p>
    </div>
  );
};

export default Verify;
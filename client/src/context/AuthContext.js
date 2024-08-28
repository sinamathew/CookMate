import React, { createContext, useState, useEffect } from 'react';

// Create Auth Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check auth status when app loads
  useEffect(() => {
    // You would typically check with your backend API here
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/users/check-auth', {
          credentials: 'include', // include credentials (e.g., cookies)
        });
        const data = await response.json();
        if (data.isAuthenticated) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

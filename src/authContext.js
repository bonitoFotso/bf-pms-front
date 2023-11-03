// AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUserData(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserData(null);
  }; 

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

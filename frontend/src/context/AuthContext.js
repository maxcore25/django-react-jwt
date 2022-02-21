import React, { useEffect, useState, createContext } from 'react';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: 'Max' }}>
      {children}
    </AuthContext.Provider>
  );
};

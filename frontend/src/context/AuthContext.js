import React, { useEffect, useState, createContext } from 'react';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authTokens, setAuthTokens] = useState(null);

  let loginUser = async e => {
    e.preventDefault();
    console.log('form submitted');
    // let response = fetch('http://127.0.0.1:8000/api/token/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username: null, password: null }),
    // });
  };

  let contextData = { loginUser: loginUser };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

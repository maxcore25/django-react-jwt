import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PrivateRoute({ children }) {
  console.log('private route');
  //   const auth = useAuth();
  const auth = false;

  return auth ? children : <Navigate to='/login' />;
}

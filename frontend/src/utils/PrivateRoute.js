import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
// import useAuth from '../hooks/useAuth';

export default function PrivateRoute({ children }) {
  let { user } = useContext(AuthContext);

  return user ? children : <Navigate to='/login' />;
}

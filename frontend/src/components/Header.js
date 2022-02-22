import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Header() {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <header className='topmenu'>
      <Link to='/'>Home</Link>
      {user ? (
        <p onClick={logoutUser}>Logout</p>
      ) : (
        <Link to='/login'>Login</Link>
      )}

      {user && <p>Hello {user.username}</p>}
    </header>
  );
}

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Header() {
  const { user } = useContext(AuthContext);
  return (
    <header className='topmenu'>
      <Link to='/'>Home</Link>
      {user ? <p>Logout</p> : <Link to='/login'>Login</Link>}

      {user && <p>Hello {user.username}</p>}
    </header>
  );
}

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Header() {
  const { name } = useContext(AuthContext);
  return (
    <header className='topmenu'>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </header>
  );
}

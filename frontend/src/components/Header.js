import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='topmenu'>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </header>
  );
}

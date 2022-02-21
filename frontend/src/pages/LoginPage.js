import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function LoginPage() {
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={loginUser}>
        <div>
          <div>Login</div>
          <input type='text' name='username' />
        </div>
        <div>
          <div>Password</div>
          <input type='password' name='password' />
        </div>
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
}

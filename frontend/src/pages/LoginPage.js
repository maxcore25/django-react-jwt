import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <form>
        <div>
          <div>Login</div>
          <input type='text' name='username' />
        </div>
        <div>
          <div>Password</div>
          <input type='text' name='password' />
        </div>
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
}

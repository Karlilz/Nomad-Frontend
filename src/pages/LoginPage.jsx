import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function login(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    } else {
      alert('Wrong password');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

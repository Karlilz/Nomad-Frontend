import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  async function signUp(e) {
    e.preventDefault();
    const response = await fetch('https://nomad-vt3u.onrender.com/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      history('/login');
    } else {
      alert('Sign up Failed!');
    }
  }

  return (
    <div>
      <form className="login signUp" onSubmit={signUp}> {/* Apply both "login" and "signUp" classes */}
        <h1 style={{ fontFamily: "Pacifico", fontSize: "35px" }}>Create a Nom@d Account</h1>

        <input
          type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
          style={{ fontSize: "14px", padding: "8px", width: "100%" }}/>
        
        <input
          type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          style={{ fontSize: "14px", padding: "8px", width: "100%" }}/>
        
        <button
          style={{ fontSize: "16px", padding: "10px", marginTop: "10px" }}>
          Sign Up
          </button>
        
        <button
          style={{ fontSize: "16px", padding: "10px", marginTop: "10px" }}>
          <Link to="/">Back</Link>
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;


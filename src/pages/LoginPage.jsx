import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = ({setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  async function login(e) {
    e.preventDefault();
    const response = await fetch('https://nomad-vt3u.onrender.com/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      const user = await response.json()
      setUser (user)
      navigate('/nomad'); 
    } else {
      alert('Wrong password');
    }
  }

  return (
    <div>
      <form className="login" onSubmit={login}>
        <h1 style={{ fontFamily: "Pacifico", fontSize: "40px" }}>Login to Nom@d!</h1>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ fontSize: "14px", padding: "8px", width: "100%" }}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ fontSize: "14px", padding: "8px", width: "100%" }}/>
        <button style={{fontFamily:"Quicksand"}}>Login</button>
        <button style={{fontFamily:"Quicksand"}}>
          <Link to="/">Back</Link>
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginPageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', 
  };

  const backgroundImageStyle = {
    backgroundImage: 'url("images/Nomad-Background3.png")',
    backgroundSize: '100% 100%', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    opacity: 0.8, 
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  async function login(e) {
    e.preventDefault();
    // const response = await fetch('http://localhost:4000/login', {
    const response = await fetch('https://nomad-vt3u.onrender.com/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      const user = await response.json();
      setUser(user);
      navigate('/nomad');
    } else {
      alert('Wrong password');
    }
  }

  return (
    <div style={loginPageStyle}>
      <div style={backgroundImageStyle}></div>
      <form className="login" onSubmit={login}>
        <h1 style={{ fontFamily: "Pacifico", fontSize: "40px" }}>Login to Nom@d!</h1>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ fontSize: "14px", padding: "8px", width: "100%" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ fontSize: "14px", padding: "8px", width: "100%" }} />
        <button style={{ fontSize: "16px", padding: "10px", marginTop: "10px", cursor: "pointer" }}>Login</button>
        <button style={{ fontSize: "16px", padding: "10px", marginTop: "10px", cursor: "pointer" }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Back</Link>
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

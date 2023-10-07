import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const signUpPageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', 
  };

  const backgroundImageStyle = {
    backgroundImage: 'url("images/Nomad-Background4.png")', 
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

  async function signUp(e) {
    e.preventDefault();
    // const response = await fetch('http://localhost:4000', {
    const response = await fetch('https://nomad-vt3u.onrender.com', {
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
    <div style={signUpPageStyle}>
      <div style={backgroundImageStyle}></div>
      <form className="login signUp" onSubmit={signUp}>
        <h1 style={{ fontFamily: "Pacifico", fontSize: "40px", whiteSpace: 'nowrap'}}>Welcome to Nom@d!</h1>
        <h2 style={{ fontFamily: "Pacifico", fontSize: "35px", whiteSpace: 'nowrap' }}>Create an account</h2>

        <input
          type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
          style={{ fontSize: "14px", padding: "8px", width: "100%" }}/>
        
        <input
          type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          style={{ fontSize: "14px", padding: "8px", width: "100%" }}/>
        
        <button
          style={{ fontSize: "16px", padding: "10px", marginTop: "10px", cursor: "pointer"  }}>
          Sign Up
        </button>
        
        <button style={{ fontSize: "16px", padding: "10px", marginTop: "10px", cursor: "pointer"  }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Back</Link>
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;


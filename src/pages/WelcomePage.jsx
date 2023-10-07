import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

const WelcomePage = () => {
  const [showSignUp] = useState(false);
  const [showLogin] = useState(false);

  const welcomePageStyle = {
    backgroundImage: 'url("images/Nomad-Background1.png")',
    backgroundSize: '100% 100%', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', 
  };

  return (
    <div style={welcomePageStyle} className="welcome-container">
      <h1 style={{ fontFamily: "Pacifico", fontSize: "75px" }} className="welcome-title">Nom@d</h1>
      <h2 style={{ fontFamily: "Quicksand", fontSize: "35px" }}>Travel the World, One Post at a Time</h2>

      {showSignUp ? (
        <SignUpPage />
      ) : showLogin ? (
        <LoginPage />
      ) : (
        <div className="welcome-buttons">
          <p style={{ fontFamily: "Quicksand", fontSize: "18px", color:"black", fontStyle: "italic" }}>
            {/* <b>New User ?</b> */}
            <Link to="/signup" style={{color:"white"}} className="welcome-button">Sign Up</Link>
          </p>

          <p style={{ fontFamily: "Quicksand", fontSize: "18px", color:"black", fontStyle: "italic" }}>
            {/* <b>Already Have an Account ?</b>{' '} */}
            <Link to="/login" style={{color:"white"}} className="welcome-button">Login</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;


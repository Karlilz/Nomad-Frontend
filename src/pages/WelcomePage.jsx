import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

const WelcomePage = () => {
  const [showSignUp] = useState(false);
  const [showLogin] = useState(false);
  // const [showSignUp, setShowSignUp] = useState(false);
  // const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="welcome-container">
      <h1 style={{fontFamily:"Pacifico", fontSize:"75px"}} className="welcome-title">Nom@d</h1>
      <h2  style={{fontFamily:"Quicksand", fontSize:"35px"}}>Travel the World, One Post at a Time</h2>

      {showSignUp ? (
        <SignUpPage />
      ) : showLogin ? (
        <LoginPage />
      ) : (
        <div className="welcome-buttons">
          <p style={{fontFamily:"Quicksand", fontSize:"18px"}}>
            New user? 
            <Link to="/signup" className="welcome-button">Sign Up</Link>
          </p>

          <p style={{fontFamily:"Quicksand", fontSize:"18px"}}>
            Already have an account?{' '}
            <Link to="/login" className="welcome-button">Login</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;



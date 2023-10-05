import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:3000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUsername(null);
  }

  return (
    <header>
      <h1 style={{fontSize:"65px", fontFamily:"Pacifico"}}>Nom@d</h1>
      <nav>
        {username ? (
          <>
            <Link to="/nomad/about" className="header-button">
              <b>About</b>
            </Link>

            <Link to="/nomad/create" className="header-button">
              <b>Create Post</b>
            </Link>

            <Link to="/nomad/profile" className="header-button">
              <b>Profile</b>
            </Link>

            <button onClick={logout} className="header-button">
              <b>Logout</b>
            </button>
          </>
        ) : (
          <>
            <Link to="/nomad/create" className="header-button">
              <b>Create Post</b>
            </Link>

            <Link to="/nomad/profile" className="header-button">
              <b>Profile</b>
            </Link>

            <button onClick={logout} className="header-button">
              <b>Logout</b>
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;


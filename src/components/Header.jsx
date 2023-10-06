import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({user, setUser}) => {
  
  useEffect(() => {
    fetch('https://nomad-vt3u.onrender.com/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then((userInfo) => {
        setUser(userInfo);
      });
    });
  }, []);

  // FOR MISSING SET DEPENDENCY?
  // useEffect(() => {
  //   fetch('https://nomad-vt3u.onrender.com/profile', {
  //     credentials: 'include',
  //   }).then((response) => {
  //     response.json().then((userInfo) => {
  //       setUser(userInfo);
  //     });
  //   }, [setUser]); // Add setUser to the dependency array
  // }, []);
  
  function logout() {
    fetch('https://nomad-vt3u.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUser(null);
  }

  return (
    <header>
      <h1 style={{fontSize:"65px", fontFamily:"Pacifico"}}>Nom@d</h1>
      <nav>
        {user ? (
          <>
            {/* <Link to="/nomad/about" className="header-button">
              <b>About</b>
            </Link> */}

            <Link to="/nomad/create" className="header-button">
              <b style={{fontFamily:"Quicksand"}}>Create Post</b>
            </Link>

            <Link to="/nomad/profile" className="header-button">
              <b style={{fontFamily:"Quicksand"}}>Profile</b>
            </Link>

            <button onClick={logout} className="header-button">
              <b style={{fontFamily:"Quicksand"}}>Logout</b>
            </button>
          </>
        ) : (
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
        )}
      </nav>
    </header>
  );
};

export default Header;


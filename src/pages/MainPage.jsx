import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const MainPage = ({ posts, user, setUser }) => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const filtered = posts.filter(post =>
      post.location.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredPosts(filtered);
  }, [searchInput, posts]);

  // const mainPageStyle = {
  //   backgroundImage: 'url("images/Nomad-Background5.png")', 
  //   backgroundSize: 'cover', // Adjust as needed (cover, contain, etc.)
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center center',
  //   minHeight: '100vh',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  //   opacity: 0.8, 
  // };

  return (
    <div>
    {/* <div style={mainPageStyle}> */}
      <Nav user={user} setUser={setUser} />
      <input
        type="text"
        placeholder="Search for Blog by location"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {filteredPosts.length === 0 ? (
        <p>No blog posts available for the searched location.</p>
      ) : (
        filteredPosts.map((post, index) => (
          <div key={index} className="post-container">
            <div className="image-container">
              <Link to={`/posts/${post._id}`}>
                <img src={post.image} alt={post.title} className="post-image" />
              </Link>
            </div>

            <div className="post-details">
              <Link to={`/posts/${post._id}`} style={{ textDecoration: 'none' }}>
                <h3 style={{ fontSize: '30px', color: 'black', fontFamily: "Quicksand" }}>{post.title}</h3>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MainPage;


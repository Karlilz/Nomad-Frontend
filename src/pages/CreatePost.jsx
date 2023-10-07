import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

const CreatePost = ({user, setAllPosts, posts}) => {
  const [post, setPost] = useState({
    title: '',
    location: '',
    image: '',
    caption: '',
    username: user.username
  });

  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const sendPostRequest = async (post) => {
    try {
      const response = await fetch('http://localhost:4000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      if (response.ok) {
        console.log(response)
        const post = await response.json()
        console.log(post)
        setAllPosts (post)
        history('/nomad/profile')
      } else {
      }
    } catch (error) {
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPostRequest(post); 
    setPost({
      title: '',
      location: '',
      image: '',
      caption: '',
      username: user.username
    });
    history('/nomad'); 
  };

  return (
    <div>
      <h2 style={{ fontFamily: 'Pacifico', fontSize: '40px' }}>Create a Nom@d Post</h2>

      <form onSubmit={handleSubmit} className="create-post-form">

        <div>
          <label style={{ fontFamily: "Quicksand", fontSize: "20px" }} htmlFor="title"><b>Title:</b></label>
          <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/>
        </div>

        <div>
          <label style={{ fontFamily: "Quicksand", fontSize: "20px" }} htmlFor="location"><b>Location:</b></label>
          <input type="text" id="location" name="location" value={post.location} onChange={handleChange}/>
        </div>

        <div>
          <label style={{ fontFamily: "Quicksand", fontSize: "20px" }} htmlFor="image"><b>Image URL:</b></label>
          <input type="text" id="image" name="image" value={post.image} onChange={handleChange} placeholder="HTTP IMAGE SOURCE"/>
        </div>

        <div>
          <label style={{fontFamily: "Quicksand", fontSize: "20px" }} htmlFor="caption"><b>Caption:</b></label>
          <textarea id="caption" name="caption" value={post.caption} onChange={handleChange} style={{ width: '100%', padding: '5px 7px', border: '2px solid #ddd', borderRadius: '5px', backgroundColor: '#eee' }}/>
        </div>

        <button style={{fontFamily:"Quicksand", cursor: "pointer", textDecoration:"none", color:"white" }}type="submit" className="page-button">
          Upload Blog Post
          </button> 

        <button style={{ fontFamily: "Quicksand", cursor: "pointer", textDecoration: "none", color: "white" }} onClick={() => history('/nomad')} className="page-button">
            Back to Home
        </button>

      </form>
    </div>
  );
};

export default CreatePost;






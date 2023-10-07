import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const PostEditPage = ({ posts,setPost }) => {
  const {id} = useParams ()
  const post = posts?.find((post) => post?._id === id);
  const [formData, setFormData] = useState(post);
  const navigate = useNavigate ()

  console.log(post)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/post/' + post._id, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json()
        const foundPost = posts?.filter((post) => post?._id !== id);
        console.log(posts, foundPost, data)
        setPost ([data,...foundPost])
        navigate('/nomad/profile')
      }
  };

  return (
    <div>
      <h2 style={{fontFamily:"Pacifico", fontSize:"40px"}}>Edit Nom@d Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{fontFamily:"Quicksand"}} htmlFor="title"><b>Title:</b></label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>
        </div>

        <div>
          <label style={{fontFamily:"Quicksand"}} htmlFor="image"><b>Image URL:</b></label>
          <input type="text" id="image"name="image" value={formData.image} onChange={handleChange}/>
        </div>

        <div>
          <label style={{fontFamily:"Quicksand"}} htmlFor="caption"><b>Caption:</b></label>
          <textarea id="caption"name="caption" value={formData.caption} onChange={handleChange}/>
        </div>

        <div>
          <label style={{fontFamily:"Quicksand"}} htmlFor="location"><b>Location:</b></label>
          <input type="text"id="location" name="location" value={formData.location} onChange={handleChange}/>
        </div>

        <button style={{fontFamily:"Quicksand"}} className="page-button" type="submit">Save</button>

        {/* <button style={{fontFamily:"Quicksand"}}>
        <Link className="page-button" to="/nomad/profile"> Back to Profile </Link>
        </button>

        <button style={{fontFamily:"Quicksand"}}>
        <Link className="page-button" to="/nomad"> Back to Home</Link>
        </button> */}

        <button
          style={{ fontFamily: "Quicksand", cursor: "pointer", textDecoration: "none", color: "white" }}
          onClick={() => navigate('/nomad/profile')}
          className="page-button">
          Back to Profile
        </button>

        <button
          style={{ fontFamily: "Quicksand", cursor: "pointer", textDecoration: "none", color: "white" }}
          onClick={() => navigate('/nomad')}
          className="page-button">
          Back to Home
        </button>

      </form>
    </div>
  );
};

export default PostEditPage;

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';


const PostEditPage = ({ posts }) => {
  const {id} = useParams ()
  const post = posts?.find((post) => post?._id === id);
  const [formData, setFormData] = useState(post);

  console.log(post)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,});
  };
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // DO I NEED AN UNDERSCORE
    const response = await fetch('http://localhost:4000/update/' + post._id, {
        method: 'POST',
        // INCLUDE DATA WE WANT TO UPDATE
        body: post,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
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

        <button style={{fontFamily:"Quicksand"}}>
        <Link className="page-button" to="/nomad/profile"> Back to Profile </Link>
        </button>

        <button style={{fontFamily:"Quicksand"}}>
        <Link className="page-button" to="/nomad"> Back to Home</Link>
        </button>

      </form>
    </div>
  );
};

export default PostEditPage;

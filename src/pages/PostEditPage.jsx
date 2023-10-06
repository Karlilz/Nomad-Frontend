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
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image"name="image" value={formData.image} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="caption">Caption:</label>
          <textarea id="caption"name="caption" value={formData.caption} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input type="text"id="location" name="location" value={formData.location} onChange={handleChange}/>
        </div>

        <button className="page-button" type="submit">Save</button>

        <button>
        <Link className="page-button" to="/nomad/profile"> Back to Profile </Link>
        </button>

        <button>
        <Link className="page-button" to="/nomad"> Back to Home</Link>
        </button>

      </form>
    </div>
  );
};

export default PostEditPage;

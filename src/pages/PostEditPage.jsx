import React, { useState } from 'react';

const PostEditPage = ({ post }) => {
  const [formData, setFormData] = useState({
    title: post.title,
    image: post.image,
    caption: post.caption,
    location: post.location,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send the updated data to your server
    // You can use an API call or other methods to update the post
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

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default PostEditPage;

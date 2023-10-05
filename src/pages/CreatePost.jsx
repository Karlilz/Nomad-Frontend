// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const CreatePost = () => {
// //   const [post, setPost] = useState({
// //     title: '',
// //     location: '',
// //     image: '',
// //     caption: '',
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setPost({ ...post, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Submitted post:', post);
// //     setPost({
// //       title: '',
// //       location: '',
// //       image: '',
// //       caption: '',
// //     });
// //   };

// //   return (
// //     <div>
// //       <Link to="/nomad">Back</Link>
// //       <h2>Create a New Nom@d Post</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="title">Title:</label>
// //           <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/>
// //         </div>

// //         <div>
// //           <label htmlFor="location">Location:</label>
// //           <input type="text" id="location" name="location" value={post.location} onChange={handleChange}/>
// //         </div>

// //         <div>
// //           <label htmlFor="image">Image URL:</label>
// //           <input type="text" id="image" name="image" value={post.image} onChange={handleChange}/>
// //         </div>

// //         <div>
// //           <label htmlFor="caption">Caption:</label>
// //           <textarea id="caption" name="caption" value={post.caption} onChange={handleChange}></textarea>
// //         </div>

// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default CreatePost;





import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [post, setPost] = useState({
    title: '',
    location: '',
    image: '',
    caption: '',
  });

  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const sendPostRequest = async (post) => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      if (response.ok) {
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
    });
    history.push('/nomad'); 
  };

  return (
    <div>
      <h2>Create a New Nom@d Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"><b>Title:</b></label>
          <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="location"><b>Location:</b></label>
          <input type="text" id="location" name="location" value={post.location} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="image"><b>Image URL:</b></label>
          <input type="text" id="image" name="image" value={post.image} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="caption"><b>Caption:</b></label>
          <textarea id="caption" name="caption" value={post.caption} onChange={handleChange}></textarea>
        </div>

        <button type="submit">Submit</button>
        <button>
        <Link to="/nomad">Back</Link>
        </button>
      </form>
    </div>
  );
};

export default CreatePost;

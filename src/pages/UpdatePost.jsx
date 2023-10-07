// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const UpdatePost = () => {
//   const { id } = useParams();
//   const [formData, setFormData] = useState({
//     name: '',
//     image: '',
//     title: '',
//   });

//   useEffect(() => {
//     // Fetch the post data based on the 'id' parameter
//     // Replace this with your actual API request to get post data
//     fetch(`/api/posts/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setFormData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching post data:', error);
//       });
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(`/api/posts/${id}`, {
//       method: 'PUT', 
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Post updated successfully:', data);
//       })
//       .catch((error) => {
//         console.error('Error updating post:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Edit Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter a Name"/>
//         </div>

//         <div>
//           <label htmlFor="image">Image:</label>
//           <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} placeholder="Enter an Image"/>
//         </div>

//         <div>
//           <label htmlFor="title">Title:</label>
//           <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="Enter a Title"/>
//         </div>

//         <button type="submit">Update Post</button>
//       </form>
//     </div>
//   );
// };

// export default UpdatePost;

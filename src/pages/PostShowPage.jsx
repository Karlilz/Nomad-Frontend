// WORKING CODE
// import React from 'react';
// import { Link, useParams } from 'react-router-dom';

// const PostShowPage = ({ posts }) => {
//   const { index } = useParams();

//   if (!posts[index]) {
//     return <div className="center">Post not found.</div>;
//   }

//   const selectedPost = posts[index];

//   return (
//     <div className="center">
//       <h2>{selectedPost.title}</h2>
//       <img src={selectedPost.image} alt={selectedPost.title} className="small-image" />
//       <p><b>Username:</b> {selectedPost.username}</p>
//       <p><b>Location:</b> {selectedPost.location}</p>
//       <p>{selectedPost.caption}</p>

//       {/* Replace the "Edit" link with a button */}
//       <Link to={`/posts/${index}/edit`}>
//         <button className="page-button">Edit</button>
//       </Link>
//       <Link to="/nomad">
//         <button className="page-button">Back</button>
//       </Link>
//     </div>
//   );
// };

// export default PostShowPage;


// EDIT IF YOU ARE THE USER - WORKING 
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostShowPage = ({ posts, user, setUser }) => {
  const { index } = useParams();

  if (!posts[index]) {
    return <div className="center">Post not found.</div>;
  }

  const selectedPost = posts.find(post => post._id = index);
  console.log(selectedPost)

  const isCurrentUserAuthor = user && user.id === selectedPost.userId;

  return (
    <div className="center">
      <h2 style={{fontFamily:"Quicksand"}}>{selectedPost.title}</h2>
      <img src={selectedPost.image} alt={selectedPost.title} className="small-image" />
      <p style={{fontFamily:"Quicksand"}}><b>Username:</b> {selectedPost.username}</p>
      <p style={{fontFamily:"Quicksand"}}><b>Location:</b> {selectedPost.location}</p>
      <p style={{fontFamily:"Quicksand"}}>{selectedPost.caption}</p>

      {isCurrentUserAuthor && (
        <Link to={`/posts/${index}/edit`}>
          <button className="page-button">Edit</button>
        </Link>
      )}

      <Link to="/nomad">
        <button className="page-button">Back</button>
      </Link>
    </div>
  );
};

export default PostShowPage;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import CommentForm from '../components/CommentForm';


// const PostShowPage = ({ posts, currentUser }) => {
//   const { index } = useParams();

//   if (!posts[index]) {
//     return <div className="center">Post not found.</div>;
//   }

//   const selectedPost = posts[index];

//   const isCurrentUserAuthor = currentUser && currentUser.id === selectedPost.userId;

//   // Define comments state at the top of the component
//   const [comments, setComments] = useState([]);

//   const handleCommentSubmit = (commentText) => {
//     const newComment = {
//       text: commentText,
//       userId: currentUser.id, // Assuming you have user information
//     };

//     // Add the new comment to the comments list
//     setComments([...comments, newComment]);
//   };

//   return (
//     <div className="center">
//          <h2 style={{fontFamily:"Quicksand"}}>{selectedPost.title}</h2>
// //       <img src={selectedPost.image} alt={selectedPost.title} className="small-image" />
// //       <p style={{fontFamily:"Quicksand"}}><b>Username:</b> {selectedPost.username}</p>
// //       <p style={{fontFamily:"Quicksand"}}><b>Location:</b> {selectedPost.location}</p>
// //       <p style={{fontFamily:"Quicksand"}}>{selectedPost.caption}</p>
      
//       {/* Comments section */}
//       <div>
//         <h3 style={{ fontFamily: "Quicksand" }}>Comments</h3>
//         {comments.map((comment, index) => (
//           <div key={index} className="comment">
//             <p>{comment.text}</p>
//             <p>Comment by: {comment.userId}</p>
//           </div>
//         ))}
//       </div>

//       {/* CommentForm component */}
//       <div>
//         <h3 style={{ fontFamily: "Quicksand" }}>Add a Comment</h3>
//         <CommentForm onSubmit={handleCommentSubmit} />
//       </div>

//       {/* Rest of your component */}
//     </div>
//   );
// };

// export default PostShowPage;




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


// EDIT IF YOU ARE THE USER 
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostShowPage = ({ posts, currentUser }) => {
  const { index } = useParams();

  if (!posts[index]) {
    return <div className="center">Post not found.</div>;
  }

  const selectedPost = posts[index];

  const isCurrentUserAuthor = currentUser && currentUser.id === selectedPost.userId;

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


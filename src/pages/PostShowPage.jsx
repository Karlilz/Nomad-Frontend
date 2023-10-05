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
//         <button>Edit</button>
//       </Link>
//       <Link to="/nomad">
//         <button>Back</button>
//       </Link>
//     </div>
//   );
// };

// export default PostShowPage;

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostShowPage = ({ posts }) => {
  const { index } = useParams();

  if (!posts[index]) {
    return <div className="center">Post not found.</div>;
  }

  const selectedPost = posts[index];

  return (
    <div className="center">
      <h2>{selectedPost.title}</h2>
      <img src={selectedPost.image} alt={selectedPost.title} className="small-image" />
      <p><b>Username:</b> {selectedPost.username}</p>
      <p><b>Location:</b> {selectedPost.location}</p>
      <p>{selectedPost.caption}</p>

      {/* Replace the "Edit" link with a button */}
      <Link to={`/posts/${index}/edit`}>
        <button className="page-button">Edit</button>
      </Link>
      <Link to="/nomad">
        <button className="page-button">Back</button>
      </Link>
    </div>
  );
};

export default PostShowPage;

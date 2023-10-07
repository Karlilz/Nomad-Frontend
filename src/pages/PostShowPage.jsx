import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostShowPage = ({ posts, user, setUser }) => {
  const { index } = useParams();
  const selectedPost = posts.find(post => post._id === index);

  if (!selectedPost) {
    return <div className="center">Post not found.</div>;
  }
  console.log(selectedPost)
  console.log(posts)


  return (
    <div className="center">
      <h2 style={{fontFamily:"Quicksand"}}>{selectedPost.title}</h2>
      <img src={selectedPost.image} alt={selectedPost.title} className="small-image" />
      <p style={{fontFamily:"Quicksand", fontSize:"18px"}}><b>Username:</b> {selectedPost.username}</p>
      <p style={{fontFamily:"Quicksand", fontSize:"18px"}}><b>@:</b> {selectedPost.location}</p>
      <p style={{fontFamily:"Quicksand", fontSize:"16px"}}>{selectedPost.caption}</p>

      {/* {isCurrentUserAuthor && (
        <Link to={`/posts/${index}/edit`}>
          <button className="page-button">Edit</button>
        </Link>
      )} */}

      <Link to="/nomad">
        <button className="page-button">Back to Home</button>
      </Link>
    </div>
  );
};

export default PostShowPage;

import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = ({ user, posts, onDeletePost }) => {
  const userPosts = posts?.filter((post) => post?.username === user?.username);

  const handleDeletePost = (postId) => {
    onDeletePost(postId);
  };

  return (
    <div>
      <h2 style={{ fontFamily: "Pacifico", fontSize: "40px" }}> {user?.username}'s Profile & Blog Posts</h2>
      <p><b>Username:</b> {user?.username}</p>
      <p><b>Password:</b> *****</p>

      <table>
        {/* <thead>
          <tr>
            <th style={{fontFamily:"Quicksand"}}><u>Blog Title</u></th>
            <th style={{fontFamily:"Quicksand"}}><u>Edit Post</u></th>
            <th style={{fontFamily:"Quicksand"}}><u>Delete Post</u></th>
          </tr>
        </thead> */}
        <tbody>
          {userPosts.map((post, index) => (
            <tr key={index}>
              <td style={{fontFamily:"Quicksand"}}><b>{post.title}</b></td>
              <td>
                <button>
                <Link to={`/posts/${post._id}/edit`} style={{ textDecoration: 'none', color: 'white' }}> Edit</Link>
                </button>
              </td>
              <td><button onClick={() => handleDeletePost(post._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

        <button>
        <Link className="page-button" to="/nomad"> Back to Home</Link>
        </button>

    </div>
  );
};

export default ProfilePage;

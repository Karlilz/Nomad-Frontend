// import React from 'react';
// import { Link, useNavigate, useParams} from 'react-router-dom';



// const ProfilePage = ({ user, posts, deletePost}) => {
//   const userPosts = posts?.filter((post) => post?.username === user?.username);
//   const {id} = useParams ()
//   const post = posts?.find((post) => post?._id === id);
//   const navigate = useNavigate ()

//   const handleDeletePost = async (postId) => {
//     const response = await fetch('http://localhost:4000/post/' + postId, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include',
//       });
//       // if (response.ok) {
//         deletePost (id)
//         navigate('/nomad/profile', {replace:true})
//       // }
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h2 style={{ fontFamily: "Pacifico", fontSize: "40px" }}>{user?.username}'s Nom@d Blog Posts</h2>
      
//       <table style={{margin: '0 auto'}}>
//         <tbody>
//           {userPosts.map((post, index) => (
//             <tr key={index}>
//               <td style={{ fontFamily: "Quicksand", fontSize: "18px" }}><b>{post.title}</b></td>
//               <td>
//                 <button>
//                   <Link to={`/posts/${post._id}/edit`} style={{ textDecoration: 'none', color: 'white', background: "black" }}>Edit</Link>
//                 </button>
//               </td>
//               <td>
//                 <button onClick={() => handleDeletePost(post._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button style={{ fontSize: "16px", padding: "10px", marginTop: "10px", cursor: "pointer"  }}>
//         <Link className="page-button" to="/nomad">Back to Home</Link>
//       </button>
//     </div>
//   );
// };

// export default ProfilePage;

// WITH NO BLOG POST MESSAGE
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProfilePage = ({ user, posts, deletePost }) => {
  const userPosts = posts?.filter((post) => post?.username === user?.username);
  const { id } = useParams();
  const post = posts?.find((post) => post?._id === id);
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  const handleDeletePost = async (postId) => {
    const response = await fetch('http://localhost:4000/post/' + postId, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    deletePost(id);
    navigate('/nomad/profile', { replace: true });
  };

  const createPost = () => {
    setShowMessage(false);
    navigate('/nomad/create');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Pacifico', fontSize: '40px' }}>
        {user?.username}'s Nom@d Blog Posts
      </h2>

      {userPosts.length === 0 && !showMessage ? (
        <div>
          <p style={{ fontFamily: 'Quicksand', fontSize: '18px' }}>
            You don't have any blog posts yet.
          </p>
          <button
            onClick={createPost}
            style={{
              fontSize: '16px',
              padding: '10px',
              marginTop: '10px',
              cursor: 'pointer',
              margin: '0 auto', // Center horizontally
              display: 'block', // Make it a block-level element
              width: '150px', // Set a specific width
            }}
          >
            Create a Blog Post
          </button>
        </div>
      ) : (
        <table style={{ margin: '0 auto' }}>
          <tbody>
            {userPosts.map((post, index) => (
              <tr key={index}>
                <td style={{ fontFamily: 'Quicksand', fontSize: '18px' }}>
                  <b>{post.title}</b>
                </td>
                <td>
                  <button>
                    <Link
                      to={`/posts/${post._id}/edit`}
                      style={{
                        textDecoration: 'none',
                        color: 'white',
                        background: 'black',
                      }}
                    >
                      Edit
                    </Link>
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeletePost(post._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        style={{
          fontSize: '16px',
          padding: '10px',
          marginTop: '10px',
          cursor: 'pointer',
          margin: '0 auto', // Center horizontally
          display: 'block', // Make it a block-level element
          width: '150px', // Set a specific width
          color: 'white',
          textDecoration: 'none'
        }}
      >
        <Link className="page-button" to="/nomad">
          Back to Home
        </Link>
      </button>
    </div>
  );
};

export default ProfilePage;


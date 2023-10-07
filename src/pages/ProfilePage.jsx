// import React, { useState} from 'react';
// import { Link, useNavigate, useParams} from 'react-router-dom';

// const ProfilePage = ({ user, posts, deletePost }) => {
//   const userPosts = posts?.filter((post) => post?.username === user?.username);
//   const { id } = useParams();
//   const post = posts?.find((post) => post?._id === id);
//   const navigate = useNavigate();
//   const [showMessage, setShowMessage] = useState(false);

//   const handleDeletePost = async (postId) => {
//     const response = await fetch('http://localhost:4000/post/' + postId, {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include',
//     });
//     deletePost(id);
//     navigate('/nomad/profile', { replace: true });
//   };

//   const createPost = () => {
//     setShowMessage(false);
//     navigate('/nomad/create');
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h2 style={{ fontFamily: 'Pacifico', fontSize: '40px' }}>
//         {user?.username}'s Nom@d Blog Posts
//       </h2>

//       {userPosts.length === 0 && !showMessage ? (
//         <div>
//           <p style={{ fontFamily: 'Quicksand', fontSize: '18px' }}>
//             You don't have any blog posts yet.
//           </p>
//           <button
//             onClick={createPost}
//             style={{fontSize: '16px', padding: '10px', marginTop: '10px',cursor: 'pointer', margin: '0 auto', display: 'block', width: '150px'}}>
//             Create a Blog Post
//           </button>
//         </div>
//       ) : (
//         <table style={{ margin: '0 auto' }}>
//           <tbody>
//             {userPosts.map((post, index) => (
//               <tr key={index}>
//                 <td style={{ fontFamily: 'Quicksand', fontSize: '18px' }}>
//                   <b>{post.title}</b>
//                 </td>
//                 <td>
//                   <button>
//                     <Link
//                       to={`/posts/${post._id}/edit`}
//                       style={{textDecoration: 'none', color: 'white', background: 'black'}}>
//                       Edit
//                     </Link>
//                   </button>
//                 </td>
//                 <td>
//                   <button onClick={() => handleDeletePost(post._id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

// <button
//   style={{fontSize: '16px', padding: '10px', marginTop: '10px', cursor: 'pointer',margin: '0 auto', display: 'block', width: '150px', color: 'white', textDecoration: 'none'}}
//   onClick={() => navigate('/nomad')}
//   className="page-button">
//   Back to Home
// </button>


//     </div>
//   );
// };

// export default ProfilePage;


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
    deletePost(postId);
    navigate('/nomad/profile', { replace: true });
  };

  const createPost = () => {
    setShowMessage(false);
    navigate('/nomad/create');
  };

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundImage: `url("/images/Nomad-Background11.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', 
        minHeight: '100vh', 
        // opacity: '0.8',
      }}
    >
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
              margin: '0 auto',
              display: 'block',
              width: '150px',
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
                      style={{ textDecoration: 'none', color: 'white', background: 'black' }}
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
          margin: '0 auto',
          display: 'block',
          width: '150px',
          color: 'white',
          textDecoration: 'none',
        }}
        onClick={() => navigate('/nomad')}
        className="page-button"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ProfilePage;


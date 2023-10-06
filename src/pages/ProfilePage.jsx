// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProfilePage = ({ user, posts, onDeletePost }) => {
//   const userPosts = posts?.filter((post) => post?.username === user?.username);

//   const handleDeletePost = (postId) => {
//     onDeletePost(postId);
//   };

//   return (
//     <div>
//       <h2 style={{ fontFamily: "Pacifico", fontSize: "40px" }}> {user?.username}'s Nom@d Blog Posts</h2>
      
//       <table>
//         <thead>
//           <tr>
//             <th style={{fontFamily:"Quicksand", fontSize:"18px"}}><u>Blog Title</u></th>
//           </tr>
//         </thead>
//         <tbody>
//           {userPosts.map((post, index) => (
//             <tr key={index}>
//               <td style={{fontFamily:"Quicksand", fontSize:"18px"}}><b>{post.title}</b></td>
//               <td>
//                 <button>
//                 <Link to={`/posts/${post._id}/edit`} style={{ textDecoration: 'none', color: 'white', background:"black" }}> Edit</Link>
//                 </button>
//               </td>
//               <td><button onClick={() => handleDeletePost(post._id)}>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//         <button>
//         <Link className="page-button" to="/nomad"> Back to Home</Link>
//         </button>

//     </div>
//   );
// };

// export default ProfilePage;


import React from 'react';
import { Link} from 'react-router-dom';

const ProfilePage = ({ user, posts, onDeletePost }) => {
  const userPosts = posts?.filter((post) => post?.username === user?.username);

  const handleDeletePost = (postId) => {
    onDeletePost(postId);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: "Pacifico", fontSize: "40px" }}>{user?.username}'s Nom@d Blog Posts</h2>
      
      <table style={{margin: '0 auto'}}>
        <tbody>
          {userPosts.map((post, index) => (
            <tr key={index}>
              <td style={{ fontFamily: "Quicksand", fontSize: "18px" }}><b>{post.title}</b></td>
              <td>
                <button>
                  <Link to={`/posts/${post._id}/edit`} style={{ textDecoration: 'none', color: 'white', background: "black" }}>Edit</Link>
                </button>
              </td>
              <td>
                <button onClick={() => handleDeletePost(post._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button>
        <Link className="page-button" to="/nomad">Back to Home</Link>
      </button>
    </div>
  );
};

export default ProfilePage;

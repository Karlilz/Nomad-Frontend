// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProfilePage = ({ user, posts }) => {
//   return (
//     <div>
//       <h2>Your Profile</h2>
//       <p><b>Username:</b> {user.username}</p>
//       {/* <p><b>Password:</b> *****</p> Avoid displaying the actual password */}
      
//       <h3>Your Blog Posts</h3>
//       <ul>
//         {posts.map((post, index) => (
//           <li key={index}>
//             <Link to={`/posts/${post.id}`}>{post.title}</Link>
//             {' | '}
//             <Link to={`/posts/${post.id}/edit`}>Edit</Link>
//           </li>
//         ))}
//       </ul>

//       <Link to="/profile/edit">Edit Profile</Link>
//     </div>
//   );
// };

// export default ProfilePage;

import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = ({ user, posts }) => {
  const userPosts = posts?.filter((post) => post?.username === user?.username);
console.log(posts, user)
  return (
    <div>
      <h2>Your Profile</h2>
      <p><b>Username:</b> {user?.username}</p>
      <p><b>Password:</b> *****</p>
      
      <h3>Your Blog Posts</h3>
      <ul>
        {userPosts.map((post, index) => (
          <li key={index}>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
            {' | '}
            <Link to={`/posts/${post._id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>

      <button>
        <Link to="/profile/edit">Edit Profile</Link>
      </button>
    </div>
  );
};

export default ProfilePage;



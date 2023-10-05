// import React from 'react';
// import { Link } from 'react-router-dom';
// import Nav from '../components/Nav';

// const MainPage = ({ posts }) => {
//   return (
//     <div>
//       <Nav />
//       {posts.map((post, index) => (
//         <div key={index} className="post-container">
//           <div className="image-container">
//             <img src={post.image} alt={post.title} />
//           </div>
//           <div className="post-details">
//           <Link
//                 to={`/posts/${index}`}
//                 style={{ textDecoration: 'none' }} // Remove underline
//               >
//                 <h3 style={{ fontSize: '18px' }}>{post.title}</h3>
//               </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MainPage;





import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const MainPage = ({ posts }) => {
  return (
    <div>
      <Nav />
      {posts.map((post, index) => (
        <div key={index} className="post-container">
          <div className="image-container">
            <img
              src={post.image}
              alt={post.title}
              className="post-image" // Added CSS class for images
            />
          </div>
          <div className="post-details">
            <Link
              to={`/posts/${index}`}
              style={{ textDecoration: 'none' }}
            >
              <h3 style={{ fontSize: '18px', color: 'black' }}>{post.title}</h3>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;




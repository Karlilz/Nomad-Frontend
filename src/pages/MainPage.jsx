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
//             <Link to={`/posts/${index}`}>
//               <img src={post.image} alt={post.title} className="post-image"/>
//             </Link>
//           </div>
//           <div className="post-details">
//             <Link
//               to={`/posts/${index}`}
//               style={{ textDecoration: 'none' }}
//             >
//               <h3 style={{ fontSize: '18px', color: 'black', fontFamily:"Quicksand" }}>{post.title}</h3>
//             </Link>
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
            <Link to={`/posts/${index}`}>
              <img src={post.image} alt={post.title} className="post-image" />
            </Link>
          </div>
          <div className="post-details">
            <Link to={`/posts/${index}`} style={{ textDecoration: 'none' }}>
              <h3 style={{ fontSize: '30px', color: 'black', fontFamily: "Quicksand" }}>{post.title}</h3>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;




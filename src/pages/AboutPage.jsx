// import React from 'react';

// const AboutPage = () => {
//   return (
//     <div className="about-page">
//       <h1 style={{fontFamily:"Pacifico", fontSize:"40px"}}>About Nom@d</h1>
//       <p style={{fontFamily:"Quicksand", fontSize:"18px"}}>Welcome to <b>Nom@d</b>, where the world becomes your canvas for adventure! We're not just an app; we're a global community of travel enthusiasts, explorers, and storytellers.</p>

//       <h2 style={{fontFamily:"Pacifico", fontSize:"25px"}}><u>What We Offer</u></h2>
//       <ul style={{fontFamily:"Quicksand", fontSize:"18px"}}>
//         <li><b>Travel Stories:</b> Post a picture from your recent adventure, along with its location, a captivating title, and a meaningful caption.</li>
//         <li><b>Global Community:</b> Join a vibrant community of like-minded explorers from all corners of the globe and discover new destinations.</li>
//         <li><b>Inspiration Galore:</b> Find inspiration for your next trip and vicariously experience the world.</li>
//       </ul>

//       <h2 style={{fontFamily:"Pacifico", fontSize:"25px"}}><u>Join Our Journey</u></h2>
//       <p style={{fontFamily:"Quicksand", fontSize:"18px"}}>The world is waiting to be explored, and your travel story is an essential chapter in its grand narrative. Join us on this incredible journey as we collectively celebrate the beauty of travel, culture, and adventure!</p>

//       <p style={{fontFamily:"Quicksand", fontSize:"18px"}}>Let's bring the world closer together, one travel story at a time.</p>
// </div>
//   );
// }

// export default AboutPage;



import React from 'react';
import { Link } from 'react-router-dom';

// const backgroundImageStyle = {
//   backgroundImage: 'url("images/Nomad-Background7.png")',
//   backgroundSize: '100% 100%',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center center',
//   opacity: 0.8,
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: -1,
// };

// const containerStyle = {
//   minHeight: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'flex-start',
// };

const AboutPage = () => {
  return (
    <div>
    {/* <div style={backgroundImageStyle}> */}
      <div className="about-page">
      {/* <div style={containerStyle} className="about-page"> */}
        <h1 style={{ fontFamily: "Pacifico", fontSize: "40px", textAlign:"left" }}>About Nom@d</h1>
        <p style={{ fontFamily: "Quicksand", fontSize: "18px" }}>Welcome to <b>Nom@d</b>, where the world becomes your canvas for adventure! We're not just an app; we're a global community of travel enthusiasts, explorers, and storytellers.</p>

        <h2 style={{ fontFamily: "Pacifico", fontSize: "25px" }}><u>What We Offer</u></h2>
        <ul style={{ fontFamily: "Quicksand", fontSize: "18px" }}>
          <li><b>Travel Stories:</b> Post a picture from your recent adventure, along with its location, a captivating title, and a meaningful caption.</li>
          <li><b>Global Community:</b> Join a vibrant community of like-minded explorers from all corners of the globe and discover new destinations.</li>
          <li><b>Inspiration Galore:</b> Find inspiration for your next trip and vicariously experience the world.</li>
        </ul>

        <h2 style={{ fontFamily: "Pacifico", fontSize: "25px" }}><u>Join Our Journey</u></h2>
        <p style={{ fontFamily: "Quicksand", fontSize: "18px" }}>The world is waiting to be explored, and your travel story is an essential chapter in its grand narrative. Join us on this incredible journey as we collectively celebrate the beauty of travel, culture, and adventure!</p>

        <p style={{ fontFamily: "Quicksand", fontSize: "18px" }}>Let's bring the world closer together, one travel story at a time.</p>
      </div>

      <button style={{ fontSize: "16px", padding: "10px", marginTop: "10px", cursor: "pointer"}}>
          <Link to="/nomad" style={{ textDecoration: 'none', color: 'white' }}>Back</Link>
        </button>

    </div>
  );
}

export default AboutPage;

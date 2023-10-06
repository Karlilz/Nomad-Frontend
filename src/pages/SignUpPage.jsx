// import React, { useState } from 'react'

// const SignUpPage = () => {
//     const[username,setUsername] = useState('');
//     const[password,setPassword] = useState('');
//     async function signUp(e){
//         console.log(JSON.stringify({username,password}))
//         e.preventDefault();
//            const response = await fetch('http://localhost:4000/signup',{
//             method: 'POST',
//             body: JSON.stringify({username,password}),
//             headers:{'Content-Type': 'application/json'},
//         });
//         console.log(response)
//     if(response.status === 200){
//         alert('Sign up Success!');
//     } else {
//         alert('Sign up Failed!');
//      }
// }

//   return (
//     <form className ="signUp" onSubmit ={signUp}>
//         <h1>Sign Up</h1>
//         <input type ="text" placeholder="Username" value = {username} 
//         onChange={e =>setUsername(e.target.value)}/>
//         <input type ="password" placeholder = "password" value={password}
//         onChange={e =>setPassword(e.target.value)}/>
//         <button>Sign Up</button> 
//     </form>
//   )
// }

// export default SignUpPage




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const SignUpPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   async function signUp(e) {
//     e.preventDefault();
//     const response = await fetch('http://localhost:3000/signup', {
//       method: 'POST',
//       body: JSON.stringify({ username, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.status === 200) {
//       alert('Sign up Success!');
//     } else {
//       alert('Sign up Failed!');
//     }
//   }

//   return (
//     <div>
//       <form className="signUp" onSubmit={signUp}>
//         <h1 style={{fontFamily:"Pacifico", fontSize:"45px"}}>Create Nom@d Account</h1>
//         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//         <button>Sign Up</button>
//         <button>
//         <Link to="/">Back</Link> 
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpPage;


// REDIRECT TO LOGIN PAGE ONCE SIGNUP COMPLETE 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  async function signUp(e) {
    e.preventDefault();
    const response = await fetch('https://nomad-vt3u.onrender.com/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      // alert('Sign up Success!');
      history('/login');
    } else {
      alert('Sign up Failed!');
    }
  }

  return (
    <div>
      <form className="login signUp" onSubmit={signUp}> {/* Apply both "login" and "signUp" classes */}
        <h1 style={{ fontFamily: "Pacifico", fontSize: "35px" }}>Create a Nom@d Account</h1>

        <input
          type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
          style={{ fontSize: "14px", padding: "8px", width: "100%" }}/>
        
        <input
          type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          style={{ fontSize: "14px", padding: "8px", width: "100%" }}/>
        
        <button
          style={{ fontSize: "16px", padding: "10px", marginTop: "10px" }}>
          Sign Up
          </button>
        
        <button
          style={{ fontSize: "16px", padding: "10px", marginTop: "10px" }}>
          <Link to="/">Back</Link>
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;


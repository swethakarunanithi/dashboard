import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ setShowLogin, setIsAdmin }) => {
  const [currState, setCurrState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminEmail = "admin@123";
    const adminPassword = "admin123";

    if (currState === "Login") {
      if (email && password) {
        alert("✅ User login successful");
        setShowLogin(false);
        setIsAdmin(false);
        navigate("/");
      } else {
        setError("❌ Please fill in all fields");
      }
    }

    if (currState === "Admin") {
      if (email === adminEmail && password === adminPassword) {
        alert("✅ Admin login successful");
        setIsAdmin(true);
        setShowLogin(false);
        navigate("/dashboard");
      } else {
        setError("❌ Invalid admin credentials");
      }
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState === "Login" ? "User Login" : "Admin Login"}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        {error && <p className="error">{error}</p>}

        <div className="login-popup-inputs">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          {currState === "Login" ? "Login" : "Login as Admin"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>
            Are you an admin?{" "}
            <span onClick={() => setCurrState("Admin")}>Click here</span>
          </p>
        ) : (
          <p>
            Want to go back?{" "}
            <span onClick={() => setCurrState("Login")}>Login as User</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;





// import React from 'react'
// import './LoginPopup.css'
// import { assets } from '../../assets/assets'
// import { useState } from 'react'
// const LoginPopup = ({setShowLogin}) => {
//   const [currState,setCurrState] = useState("Login")
//   return (
//     <div className='login-popup'>
//       <form className='login-popup-container'>
//         <div className='login-popup-title'>
//           <h2>{currState}</h2>
//           <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
//         </div>
//         <div className='login-popup-inputs'>
//           {currState==="Login"?<></>: <input type="text" placeholder='Your name' required/>}
//           <input type="email" placeholder='Your email' required/>
//           <input type="password" placeholder='Your Password' required/>
//         </div>
//         <button>{currState==="Sign Up"?"Create account":"Login"}</button>
//         <div className='login-popup-condition'>
//           <input type="checkbox" required />
//           <p>By continuing,i agree to the terms of use & privacy policy.</p>
//         </div>
//          {currState==="Login"?<p>Create a new Account <span onClick={()=>setCurrState("Sign          Up")}>Click here</span></p>:  <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        
      
//       </form>
//     </div>
//   )
// }

// export default LoginPopup

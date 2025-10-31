// import React from "react";
// import './Navbar.css'
// import { assets  } from "../../assets/assets";

// const Navbar = () => {
//   return(
//     <div className="navbar">
//       <img src={assets.logo} alt="logo" />
//       <ul className="navbar-menu">
//         <li>home</li>
//           <li>menu</li>
//             <li>mobile-app</li>
//               <li>contact us</li>
//       </ul>
//        <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />
//         <div className="navbar-search-icon">
//           <img src={assets.basket_icon} alt="" />``
//           <div className="dot"></div>
//         </div>
//         <button>sign in</button>
//        </div>
//     </div>
//   )
// }
































import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin, adminLoggedIn, setAdminLoggedIn }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      {/* Menu Links */}
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>

        {/* Show Dashboard link only if admin logged in */}
        {adminLoggedIn && (
          <Link
            to="/dashboard"
            onClick={() => setMenu("dashboard")}
            className={menu === "dashboard" ? "active" : ""}
          >
            dashboard
          </Link>
        )}
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className="dot"></div>
        </div>

        {/* Login / Logout button */}
        {!adminLoggedIn ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <button
            onClick={() => {
              setAdminLoggedIn(false);
              setMenu("home");
            }}
          >
            logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;


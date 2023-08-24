import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-box1">
        <div className="logo">
          <h1>Logo</h1>
        </div>
      </div>

      <div className="navbar-box2">
        <div className="navbar-element1">
          <ul>
            <li>Home</li>
            <li>Tenant</li>
            <li>Owner</li>
            <li>Services</li>
            <li>About</li>
          </ul>
        </div>

        <div className="navbar-element2">
          <button>Sign Up</button>
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

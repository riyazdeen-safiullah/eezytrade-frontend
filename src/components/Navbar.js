// components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>EezyTrade</h1>
        <p>Your Trade Made Easy</p>
      </div>
      <nav>
        <NavLink to="/profile" activeClassName="active-link" className="nav-link">
          Profile Update
        </NavLink>
      </nav>
      <nav>
        <NavLink to="/config" activeClassName="active-link" className="nav-link">
          Trading Configuration
        </NavLink>
        </nav>
        <nav>
        <NavLink to="/" activeClassName="active-link" className="nav-link">
          Signout
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
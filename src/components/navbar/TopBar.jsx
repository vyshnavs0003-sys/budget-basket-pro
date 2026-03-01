import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const TopBar = () => {
  return (
    <div className="topbar topbar-green">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Email */}
        <div className="topbar-left">
          <span className="topbar-email">info@budgetbasket.com</span>
        </div>

        {/* Locations and Links */}
        <div className="topbar-right d-flex align-items-center gap-3">

          {/* Locations Dropdown */}
          <select className="location-select">
            <option>Kozhikode</option>
            <option>Mankavu</option>
            <option>Vellimadukunnu</option>
            <option>Chevayoorr</option>
            <option>West Hill</option>
            <option>Palazhi</option>
            <option></option>
          </select>

          <Link to="/contact" className="top-link">Contact</Link>
          <span className="top-link">Login</span>
          <span className="top-link">Register</span>

        </div>

      </div>
    </div>
  );
};

export default TopBar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const CategoryBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = [
    "Fruits & Vegetables",
    "Dairy & Bakery",
    "Grocery & Staples",
    "Snacks & Branded Food",
    "Personal Care",
    "Home Care"
  ];

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\s+/g, "-");

  return (
    <div className="categorybar-container desktop-only"> {/* Added desktop-only class */}
      <div className="categorybar-content container d-flex justify-content-between align-items-center">

        {/* Categories Dropdown */}
        <div
          className="category-left"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          ☰ Categories

          {showDropdown && (
            <div className="category-dropdown">
              {categories.map((item, index) => (
                <Link
                  key={index}
                  to={`/category/${slugify(item)}`}
                  className="dropdown-item"
                  onClick={() => setShowDropdown(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Major links */}
        <div className="category-right">
          <Link to="/monthly-planner">Monthly Planner</Link>
          <Link to="/my-orders">My Orders</Link>
          <Link to="/my-profile">My Profile</Link>
          <Link to="/offers">Offers</Link>
        </div>

      </div>
    </div>
  );
};

export default CategoryBar;

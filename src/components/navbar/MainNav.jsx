import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/icons/logo-icon.png";
import logoText from "../../assets/icons/logo-text.png";
import "./Navbar.css";

const MainNav = () => {
  return (
    <div className="mainnav shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo Section */}
        <Link to="/" className="logo-container">
          <img src={logoIcon} alt="Logo Icon" className="logo-icon" />
          <img src={logoText} alt="BudgetBasket" className="logo-text" />
        </Link>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>

        {/* Cart + Remaining */}
        <div className="cart-remaining">
          <div className="cart-section">
            <FaShoppingCart size={22} />
            <span className="cart-badge">2</span>
          </div>

          <div className="remaining-badge">
            ₹ 1200 Remaining
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainNav;

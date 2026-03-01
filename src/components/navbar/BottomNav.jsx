import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaThLarge, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css";

const BottomNav = ({ cartCount = 0, onMenuClick, onCategoryClick }) => {
  const location = useLocation();

  return (
    <div className="bottom-nav mobile-only">
      {/* Menu */}
      <button 
        className={`bottom-nav-item ${location.pathname === '/' ? 'active' : ''}`}
        onClick={onMenuClick}
      >
        <FaBars className="bottom-nav-icon" />
        <span>Menu</span>
      </button>

      {/* Category */}
      <button 
        className="bottom-nav-item"
        onClick={onCategoryClick}
      >
        <FaThLarge className="bottom-nav-icon" />
        <span>Category</span>
      </button>

      {/* Cart */}
      <Link to="/cart" className="bottom-nav-item">
        <div className="bottom-nav-icon">
          <FaShoppingCart />
          {cartCount > 0 && (
            <span className="bottom-cart-badge">{cartCount}</span>
          )}
        </div>
        <span>Cart {cartCount > 0 ? cartCount : ''}</span>
      </Link>

      {/* Account */}
      <Link to="/my-profile" className="bottom-nav-item">
        <FaUser className="bottom-nav-icon" />
        <span>Account</span>
      </Link>
    </div>
  );
};

export default BottomNav;
import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/icons/logo-icon.png";
import logoText from "../../assets/icons/logo-text.png";
import "./Navbar.css";

const MainNav = ({ cartCount = 2, remainingBudget = 1200, onSearchClick, onMenuClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (onMenuClick) onMenuClick();
  };

  return (
    <>
      <div className="mainnav shadow-sm">
        <div className="container">
          
          <FaBars 
            className="hamburger-icon mobile-only" 
            onClick={handleMenuClick}
          />

          <Link to="/" className="logo-container">
            <img src={logoIcon} alt="Logo Icon" className="logo-icon" />
            <img src={logoText} alt="BudgetBasket" className="logo-text" />
          </Link>

          <div className="search-box desktop-only">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>

          <div className="right-section">
            <FaSearch 
              className="search-icon mobile-only" 
              onClick={onSearchClick}
            />
            
            <Link to="/cart" className="cart-section">
              <FaShoppingCart size={22} />
              <span className="cart-badge">{cartCount}</span>
            </Link>
            
            <div className="remaining-badge desktop-only">
              ₹ {remainingBudget} Remaining
            </div>
          </div>

        </div>
      </div>

      <div className="mobile-budget-bar mobile-only">
        <div className="mobile-budget-badge">
          ₹ {remainingBudget} Remaining
        </div>
      </div>
    </>
  );
};

export default MainNav;


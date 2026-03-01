import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import TopBar from "../navbar/TopBar";
import MainNav from "../navbar/MainNav";
import CategoryBar from "../navbar/CategoryBar";
import BottomNav from "../navbar/BottomNav";
import HamburgerSidebar from "../navbar/HamburgerSidebar";
import Footer from "../footer/Footer";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCategoryClick = () => {
    setSidebarOpen(true);
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <TopBar />
      <MainNav 
        cartCount={2}
        remainingBudget={1200}
        onSearchClick={handleSearchClick}
        onMenuClick={handleMenuClick}
      />
      <CategoryBar />

     {/* Mobile Search Bar with Button */}
{searchOpen && (
  <div className="mobile-search-bar mobile-only active">
    <div className="mobile-search-container">
      <input
        type="text"
        placeholder="Search products..."
        className="mobile-search-input"
        autoFocus
      />
      <button className="mobile-search-btn">Search</button>
    </div>
  </div>
)}

      <Outlet />

      <Footer />
      
      {/* Bottom Navigation */}
      <BottomNav 
        cartCount={2}
        onMenuClick={handleMenuClick}
        onCategoryClick={handleCategoryClick}
      />

      {/* Hamburger Sidebar */}
      <HamburgerSidebar 
        isOpen={sidebarOpen}
        onClose={handleSidebarClose}
      />
    </>
  );
};

export default Layout;



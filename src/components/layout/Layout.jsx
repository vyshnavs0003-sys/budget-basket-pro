import React from "react";
import { Outlet } from "react-router-dom";

import TopBar from "../navbar/TopBar";
import MainNav from "../navbar/MainNav";
import CategoryBar from "../navbar/CategoryBar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <TopBar />
      <MainNav />
      <CategoryBar />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
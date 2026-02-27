import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import MonthlyPlanner from "./pages/MonthlyPlanner";
import MyOrders from "./pages/MyOrders";
import MyProfile from "./pages/MyProfile";
import Offers from "./pages/Offers";
import CancellationRefund from "./pages/CancellationRefund";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Home */}
          <Route index element={<Home />} />

          {/* Main Pages */}
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="offers" element={<Offers />} />

          {/* User Pages */}
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="monthly-planner" element={<MonthlyPlanner />} />

          {/* Policy Pages */}
          <Route path="cancellation-refund" element={<CancellationRefund />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />

          {/* Dynamic Category Route */}
          <Route path="category/:categoryName" element={<Category />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
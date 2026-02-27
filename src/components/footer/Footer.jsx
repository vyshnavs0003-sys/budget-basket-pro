import React from "react";
import { Link } from "react-router-dom";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone 
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {

  const categories = [
    "Fruits & Vegetables",
    "Dairy & Bakes",
    "Grocery & Staples",
    "Home Care",
    "Personal Care",
    "Snacks & Branded Food"
  ];

  const slugify = (text) =>
    text.toLowerCase().replace(/ & | /g, "-");

  return (
    <footer className="footer-section mt-5">
      <div className="container">
        <div className="row gy-4">

          {/* Brand Section */}
          <div className="col-12 col-md-4">
            <h4 className="footer-logo">BudgetBasket</h4>
            <p className="footer-tagline">
              Plan smart. Shop smarter.  
              <br />
              Helping Kozhikode households stay within budget.
            </p>
            <div className="social-icons mt-3">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/my-orders">My Orders</Link></li>
              <li><Link to="/my-profile">My Profile</Link></li>
              <li><Link to="/offers">Offers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/cancellation-refund">Cancellation & Refund</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-6 col-md-3">
            <h6 className="footer-title">Categories</h6>
            <ul className="footer-links">
              {categories.map((item, index) => (
                <li key={index}>
                  <Link to={`/category/${slugify(item)}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-3">
            <h6 className="footer-title">Contact</h6>
            <p><FaMapMarkerAlt /> Kozhikode, Kerala</p>
            <p><FaEnvelope /> info@budgetbasket.com</p>
            <p><FaPhone /> +91 00000 00000</p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom text-center">
        © {new Date().getFullYear()} BudgetBasket. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;



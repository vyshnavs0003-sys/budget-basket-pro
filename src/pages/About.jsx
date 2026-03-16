// src/pages/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">About Us</h1>
              <p className="lead text-muted">
                Your trusted partner for fresh groceries and smart budgeting since 2024
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="src\assets\images\about-hero1.jpg" 
                alt="About Us"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Story</h2>
            </div>
            <div className="col-md-6 mb-4">
              <div className="story-card p-4 bg-white rounded-3 h-100">
                <h3 className="h5 mb-3">Who We Are</h3>
                <p className="text-muted">
                  We are a passionate team of developers, designers, and grocery enthusiasts 
                  who came together with a shared vision: to make grocery shopping smarter, 
                  more affordable, and hassle-free for everyone. Founded in 2024, we've 
                  quickly grown into a trusted platform serving thousands of happy customers 
                  across the city.
                </p>
                <p className="text-muted mt-3">
                  Our team combines years of experience in e-commerce, technology, and 
                  retail to bring you a seamless shopping experience that puts your needs first.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="story-card p-4 bg-white rounded-3 h-100">
                <h3 className="h5 mb-3">What We Do</h3>
                <p className="text-muted">
                  We provide a comprehensive grocery platform that connects you with local 
                  stores, helps you track your monthly spending, and ensures you never 
                  overshoot your budget. From fresh vegetables to daily essentials, we 
                  bring quality products right to your doorstep.
                </p>
                <p className="text-muted mt-3">
                  Our unique budget planner feature sets us apart - it helps you set 
                  monthly limits, track expenses in real-time, and make informed decisions 
                  about your grocery spending. We're not just a store; we're your partner 
                  in smart financial planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="mission-card p-4 text-center h-100">
                <div className="icon-circle mb-3">
                  <i className="fa-solid fa-bullseye fa-2x text-success"></i>
                </div>
                <h3 className="h4 mb-3">Our Mission</h3>
                <p className="text-muted">
                  To revolutionize the way people shop for groceries by combining 
                  convenience with intelligent budget management. We strive to make 
                  quality food accessible to every household while empowering them 
                  to take control of their monthly expenses.
                </p>
                <p className="text-muted mt-3">
                  We believe that smart shopping shouldn't be complicated. Our mission 
                  is to simplify the entire process - from browsing to delivery - while 
                  giving you the tools you need to stay within your budget.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="vision-card p-4 text-center h-100">
                <div className="icon-circle mb-3">
                  <i className="fa-solid fa-eye fa-2x text-success"></i>
                </div>
                <h3 className="h4 mb-3">Our Vision</h3>
                <p className="text-muted">
                  To become India's most trusted grocery platform, known not just for 
                  quality products and fast delivery, but for genuinely caring about 
                  our customers' financial well-being. We envision a future where 
                  everyone can enjoy fresh groceries without the stress of overspending.
                </p>
                <p className="text-muted mt-3">
                  We're working towards expanding our reach to every neighborhood, 
                  partnering with more local stores, and continuously innovating our 
                  budget planning tools to help you save more, eat better, and live well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Core Values</h2>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-card text-center p-4 h-100">
                <i className="fa-solid fa-heart text-success fa-3x mb-3"></i>
                <h3 className="h5 mb-3">Quality First</h3>
                <p className="text-muted small">
                  We personally ensure every product meets our strict quality standards 
                  before it reaches you. From farm-fresh vegetables to premium packaged 
                  goods, we never compromise on quality.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-card text-center p-4 h-100">
                <i className="fa-solid fa-hand-holding-heart text-success fa-3x mb-3"></i>
                <h3 className="h5 mb-3">Customer Trust</h3>
                <p className="text-muted small">
                  We believe in complete transparency - from pricing to delivery times. 
                  Our customers trust us because we deliver on our promises and always 
                  put their needs first. Your satisfaction is our success.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-card text-center p-4 h-100">
                <i className="fa-solid fa-leaf text-success fa-3x mb-3"></i>
                <h3 className="h5 mb-3">Sustainability</h3>
                <p className="text-muted small">
                  We're committed to reducing plastic waste, supporting local farmers, 
                  and promoting eco-friendly practices. Every order is packed with 
                  care for both your needs and our planet's future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <h3 className="display-4 fw-bold text-success">5000+</h3>
              <p className="text-muted">Happy Customers</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h3 className="display-4 fw-bold text-success">50+</h3>
              <p className="text-muted">Store Partners</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h3 className="display-4 fw-bold text-success">1000+</h3>
              <p className="text-muted">Products</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h3 className="display-4 fw-bold text-success">24/7</h3>
              <p className="text-muted">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';
import './Offers.css';

const Offers = () => {
  return (
    <div className="offers-page">
      <div className="container py-5">
        <div className="text-center">
          <h2 className="mb-4">Special Offers</h2>
          <div className="no-offers-card">
            <img src="/src/assets/images/no-offers.png" alt="No offers" />
            <h3>No Offers Running Right Now</h3>
            <p>Check back later for exciting deals and offers!</p>
            <button className="shop-now-btn" onClick={() => window.location.href = '/'}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
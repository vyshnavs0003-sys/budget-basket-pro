import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        {/* Add description here */}
        <p className="product-description">{product.description}</p>
        
        <div className="price-section">
          <span className="current-price">₹{product.price}</span>
          <span className="original-price">₹{product.originalPrice}</span>
          <span className="discount">{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF</span>
        </div>
        
        <p className="product-unit">{product.unit}</p>
        
        <button className="add-btn">Add</button>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import './OfferCard.css';
import { useNavigate } from 'react-router-dom';

const OfferCard = ({ title, description, image, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/offers');
  };

  return (
    <div className="offer-card" onClick={handleClick}>
      <div className="offer-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="offer-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="offer-btn">Grab Offer →</button>
      </div>
    </div>
  );
};

export default OfferCard;
import React from 'react';
import '../stylesheets/StarRating.css';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="star full">&#9733;</span>
      ))}
      {halfStar && <span className="star half">&#9733;</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="star empty">&#9733;</span>
      ))}
      <span className="lexend-font stevens-rating">(Steven's Rating) </span>
    </div>
  );
};

export default StarRating;
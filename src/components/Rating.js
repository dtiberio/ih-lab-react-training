import React from 'react';
import './Rating.css';

function Rating(props) {
  // Convert the children prop to a number and round to the nearest integer.
  const ratingValue = Math.round(Number(props.children));

  // Create an array of 5 stars based on the rating value.
  const stars = Array.from(
    { length: 5 },
    (_, i) => (i < ratingValue ? '★' : '☆') // If the index is less than the rating value, display a filled star; otherwise, display an empty star.
  );

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}

export default Rating;

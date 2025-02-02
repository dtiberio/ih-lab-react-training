import React from 'react';
import './DriverCard.css';
import Rating from './Rating'; // import the Rating component

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card">
      <img className="driver-img" src={img} alt={name} />
      <div className="driver-info">
        <h2 className="driver-name">{name}</h2>
        {/* Use the Rating component */}
        <Rating>{rating}</Rating>
        <p className="driver-car">
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;

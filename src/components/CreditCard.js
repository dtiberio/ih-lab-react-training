import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  // Define logos for Visa and MasterCard
  const cardLogos = {
    Visa: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
    MasterCard:
      'https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg',
  };

  // Function to mask the credit card number
  const maskCardNumber = (number) => {
    return number.replace(/\d{12}/, '•••• •••• •••• ');
  };

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      {/* Logo at the top-right */}
      <div className="card-header">
        <img src={cardLogos[type]} alt={type} className="card-logo" />
      </div>

      {/* Card Number */}
      <div className="card-number">{maskCardNumber(number)}</div>

      {/* Expiration Date and Bank */}
      <div className="card-info">
        <span>
          Expires {expirationMonth}/{expirationYear}
        </span>
        <span className="bank">{bank}</span>
      </div>

      {/* Card Owner */}
      <div className="card-owner">{owner}</div>
    </div>
  );
}

export default CreditCard;

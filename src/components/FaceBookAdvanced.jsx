import React from 'react';
import './FaceBookAdvanced.css';

function FaceBookAdvanced({
  firstName,
  lastName,
  country,
  img,
  isStudent,
  selectedCountry,
}) {
  return (
    <div
      className={`profile-card ${
        selectedCountry === country ? 'highlight' : ''
      }`}
    >
      <img src={img} alt={`${firstName} ${lastName}`} />
      <div className="profile-info">
        <p>
          <strong>First name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong>Country:</strong> {country}
        </p>
        <p>
          <strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}
        </p>
      </div>
    </div>
  );
}

export default FaceBookAdvanced;

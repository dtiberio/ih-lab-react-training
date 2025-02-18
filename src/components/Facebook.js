import React from 'react';
import './Facebook.css';

function Facebook({ firstName, lastName, country, img, isStudent }) {
  return (
    <div className="facebook">
      <img className="fb__img" src={img} alt="profile" />
      <div className="fb__info">
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
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
export default Facebook;

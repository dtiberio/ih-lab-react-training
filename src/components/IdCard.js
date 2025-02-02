import React from 'react';
import './IdCard.css';

function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;

  const heightInMeters = height / 100 + 'm';
  const birthText = `Born: ${birth.toDateString()}`;

  const genderClass = gender === 'male' ? 'gender-male' : 'gender-female';

  const message = gender === 'male' ? '♂' : '♀';

  return (
    <div className={`id-card ${genderClass}`}>
      <img src={picture} alt="" />
      <div className="info">
        <div>
          <strong>First Name: </strong>
          {firstName}
        </div>
        <div>
          <strong>Last Name:</strong>
          {lastName}
        </div>
        <div>
          <strong>Gender: </strong>
          {gender}
        </div>
        <div>
          <strong>Height: </strong>
          {heightInMeters}
        </div>
        <div>{birthText}</div>
        {message}
      </div>
      {height > 175 && <div>🚀</div>}
      {height < 175 && <div>🚗</div>}
    </div>
  );
}

export default IdCard;

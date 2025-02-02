import React from 'react';
import './Random.css';

function Random(props) {
  const { min, max } = props;

  const random = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="random">
      Random value between {min} and {max}: <strong>{random}</strong>
    </div>
  );
}

export default Random;

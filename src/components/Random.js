import React from 'react';
import './Random.css';

function Random(props) {
  const { min, max } = props;

  // generates a random integer between min (inclusive) and max (exclusive)
  // const random = Math.floor(Math.random() * (max - min) + min);

  // generates a random integer between min (inclusive) and max (inclusive)
  const random = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div className="random">
      Random value between {min} and {max}: <strong>{random}</strong>
    </div>
  );
}

export default Random;

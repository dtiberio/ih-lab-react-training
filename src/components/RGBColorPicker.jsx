import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';
import './RGBColorPicker.css';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(255);
  const [gValue, setGValue] = useState(150);
  const [bValue, setBValue] = useState(0);

  return (
    <div className="rgb-color-picker">
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(e) => setRValue(Number(e.target.value))}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(e) => setGValue(Number(e.target.value))}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(e) => setBValue(Number(e.target.value))}
      />

      <div className="final-color-box">
        <div
          className="color-preview"
          style={{ backgroundColor: `rgb(${rValue},${gValue},${bValue})` }}
        ></div>
        <p>
          rgb({rValue},{gValue},{bValue})
        </p>
      </div>
    </div>
  );
};

export default RGBColorPicker;

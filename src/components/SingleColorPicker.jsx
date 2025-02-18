import React from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  const colorMap = {
    r: 'red',
    g: 'green',
    b: 'black',
  };

  return (
    <div className="single-color-picker">
      <div
        className="color-preview"
        style={{ backgroundColor: colorMap[color] }}
      ></div>
      <label>
        {color.toUpperCase()}:
        <input
          type="number"
          min="0"
          max="255"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default SingleColorPicker;

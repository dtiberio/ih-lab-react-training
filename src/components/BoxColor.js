// BoxColor.js
import React from 'react';
import './BoxColor.css'; // Optional: Create this file for styling if needed

function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div className="box" style={divStyle}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;

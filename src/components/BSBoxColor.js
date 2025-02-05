// BSBoxColor.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BoxColor({ r, g, b }) {
  const divStyle = {
    margin: '20px',
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div className="p-3 mb-3 border rounded" style={divStyle}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-auto">
            with Bootstrap: rgb({r}, {g}, {b})
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxColor;

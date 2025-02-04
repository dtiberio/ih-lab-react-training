import React from 'react';
import './NumbersTable.css';

const NumbersTable = ({ limit }) => {
  const squares = [];
  for (let i = 1; i <= limit; i++) {
    squares.push(
      <div
        // add a key to the div element to avoid the warning
        key={i}
        className="square"
        style={{ backgroundColor: i % 2 === 0 ? 'red' : 'white' }}
      >
        {i}
      </div>
    );
  }

  // return the div with the class name numbers-table and the squares array
  return <div className="numbers-table">{squares}</div>;
};

export default NumbersTable;

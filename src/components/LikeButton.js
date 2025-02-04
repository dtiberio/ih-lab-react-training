import { useState } from 'react';
import './LikeButton.css';

function LikeButton() {
  const INITIAL_COUNT = 0;
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [likes, setLikes] = useState(INITIAL_COUNT);
  const [colorIndex, setColorIndex] = useState(0); // Tracks the current color index

  //   const getNextColor = () => {
  //     return colors[(colorIndex + 1) % colors.length]; // Cycle through colors
  //   };

  const handleAdd = () => {
    setLikes((atual) => atual + 1);
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Update color index on each click
  };

  const handleReset = () => {
    setLikes(INITIAL_COUNT);
  };

  return (
    <div className="likes">
      <span>{likes > 0 ? '😊'.repeat(likes) : '😒'}</span>
      <div>
        <button
          className="button"
          onClick={handleAdd}
          style={{ backgroundColor: colors[colorIndex] }} // Use the current color
        >
          {likes} likes
        </button>
        <button
          className="button"
          onClick={handleReset}
          style={{ backgroundColor: 'blueviolet' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default LikeButton;

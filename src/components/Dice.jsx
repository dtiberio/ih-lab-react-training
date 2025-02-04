import React, { useState } from 'react';
import './Dice.css'; // Import the CSS file

// Import images here, so they are packed by Webpack
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [myPic, setMyPic] = useState(diceEmpty); // Start with empty dice
  const [prevIndex, setPrevIndex] = useState(null); // Store previous index

  const getRandomDice = () => {
    let newIndex;
    // start a loop to get a new dice image
    do {
      newIndex = Math.floor(Math.random() * diceImages.length);
    } while (newIndex === prevIndex); // If the new index is the same as the previous one, get a new one

    setPrevIndex(newIndex); // Store new index as the previous one
    return diceImages[newIndex]; // Return new dice image
  };

  const handleClick = () => {
    setMyPic(diceEmpty); // Show empty dice first
    setTimeout(() => {
      setMyPic(getRandomDice()); // After 1 sec, set a new random dice
    }, 1000);
  };

  return (
    <div className="picture-container">
      <img
        src={myPic}
        alt="Dice"
        className="square-image"
        onClick={handleClick}
      />
    </div>
  );
}

export default Dice;

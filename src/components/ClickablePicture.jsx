import { useState } from 'react';
import './ClickablePicture.css'; // Import the CSS file

function ClickablePicture(props) {
  const { img, imgClicked } = props; // these are my pics
  const [myPic, setMyPic] = useState(img); // these are my states

  const handleClick = () => {
    // prevPic is not explicitly defined anywhere else in the code.
    // It is automatically provided by React.
    // React passes the most recent state value (in this case, myPic) to this function.
    // prevPic is essentially a placeholder variable representing the current state value (myPic).
    setMyPic((prevPic) => (prevPic === img ? imgClicked : img));
  };
  //   When setMyPic receives a function, React automatically:
  //   Takes the current state value of myPic.
  //   Passes that value into the function as prevPic.
  //   Computes the new state value based on the logic inside the function.
  //   Updates myPic with the new return value from the logic inside the function.

  return (
    <div className="picture-container">
      <img
        src={myPic}
        alt="Clickable"
        className="circle-image"
        onClick={handleClick}
      />
    </div>
  );
}

export default ClickablePicture;

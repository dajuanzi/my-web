import React, { useState } from 'react';
import '../styles/Introduction.css'; // Import CSS for styling

const loadImages = () => {
  // Array of profile pictures
  const imageNames = [
    'IMG_5734.PNG',
    'IMG_5735.PNG',
    'IMG_5736.PNG',
    'IMG_5737.PNG',
    'IMG_5738.PNG',
    'IMG_5739.PNG',
    'IMG_5740.PNG',
    'IMG_5741.PNG',
    'IMG_5742.PNG',
    'IMG_5743.PNG',
    // Add the rest of your image names here
  ];

  const gallery = imageNames.map(name => `/images/profiles/${name}`);
  return gallery//.map(image => image()); // Extract URLs from the imported modules
};

const Introduction = () => {
  
  const profilePics = loadImages();

  // State to track the current image index
  const [currentPic, setCurrentPic] = useState(0);

  // Function to change the picture when the image is clicked
  const handleImageClick = () => {
    setCurrentPic((prevPic) => (prevPic + 1) % profilePics.length); // Loop through pictures
  };

  return (
    <div className="introduction-container">
      {/* Left Section: Name and Title */}
      <div className="introduction-text">
        <h1>Daniella Zhou</h1>
        <p> {"I'm an AI Engineer who build future >_>"}</p>
      </div>

      {/* Right Section: Profile Picture */}
      <div className="introduction-image">
        <img 
          src={profilePics[currentPic]} 
          alt="Profile" 
          onClick={handleImageClick} 
          style={{ cursor: 'pointer' }} // Change cursor to indicate it's clickable
        />
      </div>
    </div>
  );
};

export default Introduction;
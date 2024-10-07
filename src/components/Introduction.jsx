import React, { useState } from 'react';
import '../styles/Introduction.css'; // Import CSS for styling

const loadImages = () => {
  // Array of profile pictures
  const imageNames = [
    'IMG_5719.JPG',
    'IMG_5720.JPG',
    'IMG_5721.JPG',
    'IMG_5722.JPG',
    'IMG_5723.JPG',
    'IMG_5724.JPG',
    'IMG_5725.JPG',
    'IMG_5726.JPG',
    'IMG_5727.JPG',
    'IMG_5728.JPG',
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
        <h1>John Doe</h1>
        <p>AI Engineer | Tech Speaker | Innovator</p>
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
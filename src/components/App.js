// create your App component here
import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImage, setDogImage] = useState(null);

  
  useEffect(() => {
    
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
    
        setDogImage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
      });
  }, []); 

  return (
    <div>
      {dogImage ? (
        
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import "./SignupLogin.css";
import SignupLogin from "./SignupLogin.jsx";
import Data from "../src/Api/HomepagePhotos/Homepage.json"; // Ensure correct path

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="homepage-container">

      <div className="signup-container">
        <SignupLogin />
      </div>
      <div className="slideshow-container">
        {Data.map((currElem, index) => (
          <img
            key={index}
            src={currElem.poster}
            alt={currElem.title}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
      </div>

  );
};

export default Homepage;

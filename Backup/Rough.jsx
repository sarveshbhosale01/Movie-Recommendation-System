import React, { useState, useEffect } from "react";
import "./SignupSlideshow.css";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

const SignupSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="signup-container">
      {/* Left Side - Slideshow */}
      <div className="slideshow-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={index === currentImage ? "active" : ""}
          />
        ))}
      </div>

      {/* Right Side - Signup/Login Form */}
      <div className="form-container">
        <h2>Student Signup</h2>
        <input type="text" placeholder="Enter your Name" />
        <input type="email" placeholder="Enter your Email" />
        <input type="tel" placeholder="Enter your Phone" />
        <input type="password" placeholder="Create Password" />
        <button className="signup-btn">Sign Up</button>
        <p>Or sign up with</p>
        <div className="social-buttons">
          <button>Google</button>
          <button>Facebook</button>
        </div>
        <p>Already have an account? <span>Sign in</span></p>
      </div>
    </div>
  );
};

export default SignupSlideshow;

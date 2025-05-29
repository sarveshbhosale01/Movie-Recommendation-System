import React from "react";
import { Link } from 'react-router-dom';
import  './Selection.css'
import { STREAMLIT_URL } from "../src/config";
const Selection =() => {
  return (
    <div className="training-container">
      <h2 className="heading">
        Welcome to  <span>SineVerse</span>
      </h2>
      <p className="subtext">
      Not sure what to watch next? Let our Movie Recommendation System suggest the best movies based on your preferences!
      </p>
      <h2 className="heading">
      Our <span>Movie Recommendation System </span> offers two powerful ways to help you find your next favorite movie
      </h2>

      <div className="courses">
        {/* Left Card */}
        <div className="course-card light">
          <h1>Standard Recommendation</h1>
          
          <div className="feature">
            <div>
              <p> Explore publicly accepted favorites like Top 10 Hollywood & Bollywood Movies, Best Drama, Comedy, Horror Picks, and more. </p>
            </div>
          </div>
          <div className="feature">
            <div>
              <p> Whether it's the hottest anime or trending web series, we’ve got the best of the best lined up for you! 🌟</p>
            </div>
          </div>
          <Link  className="apply-btn1" to="/InfoPage">Standard Recommendation</Link>
        </div>

        {/* Right Card */}
        <div className="course-card dark">
          <h1>Personalized Recommendations</h1>
         
          <div className="stats">
            <div>
              <p> Using Machine Learning & Cosine Similarity, our system analyzes your input, maps movie vectors, and finds the most relevant recommendations just for you!</p>
            </div>
            <br/>
            <div>
              <p> Get tailored suggestions that match your taste with precision. 🤖🎥</p>
            </div>
          </div>
          <a href={STREAMLIT_URL} target="_blank" className="apply-btn2">Personalized Recommendations</a>
        </div>
      </div>
    </div>
  );
};

export default Selection;

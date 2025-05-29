import React from "react";
import "./InfoPage.css"; // Import the CSS file
import { Link } from 'react-router-dom';

const InfoPage = () => {
  return (
    <div className="info-container">
      <div className="info-content">
        <h4 className="info-subtitle">Explore the latest in movie and anime industries</h4>
        <h1 className="info-title">
        Find Movies, Anime & Web Series Instantly <br/> Search, Discover, Watch Trailer!
        </h1>
        <button className="info-button">
          <Link to="/Movie">Explore Now</Link>
        </button>
        </div>
        <div className="info-details">
          <div className="info-youtube">
        <h1 className="info-question">Why Movie Recommendation System needed ?</h1>

        <h2>User Convience </h2>
        <p className="info-description">
        1.Quickly browse and find content without opening pages<br/>
        2.Instant access to key details saves time and effort.
        </p>
        <h2>Better Search & Discovery </h2>
        <p className="info-description">
        1.Users can explore new content based on their preferences.<br/>
        2.Categorization helps in easy filtering (e.g., genre, language).
        </p>
        <h2>Enhanced User Experience </h2>
        <p className="info-description">
        1.Visually appealing cards make the platform engaging.<br/>
        2.Compact information helps users make faster decisions.
        </p>
        </div>
        <div className="info-working">
          <h1>Basic Working of Movie System</h1>
        </div>
         {/* White Line */}
        <div className = "info-img">
          <img src="/content.jpg" alt="content"  width="250px" height="250px"/>
        <div>
          <p><h4>Search-Based Recommendation </h4> User enters a movie title in the search bar, and the system recommends similar movies using content-based filtering. <br/>
          <h4>Category-Based Suggestions </h4> API integration fetches movie recommendations based on categories like Drama, Horror, Comedy, etc.<br/>
          <h4>Actor/Actress-Based Exploration </h4> Clicking on an actor/actress shows a movie card featuring films they have starred in.<br/></p>
        </div>
        
        
        </div>
        </div>

      {/* Movie Posters Section */}
      <div className="poster-container">
        <div>
        <img src="/Fight Club.jpg" alt="Movie 1" className="poster poster-1" />
        <img src="/Inception.jpg" alt="Movie 1" className="poster poster-2" />
        </div>
        <div>
        <img src="/Forrest Gump.jpg" alt="Movie 1" className="poster poster-3" />
        <img src="/The Dark Knight.jpg" alt="Movie 1" className="poster poster-4" />
        </div>
        <div>
        <img src="/The Godfather.jpg" alt="Movie 1" className="poster poster-5" />
        <img src="/Sherlock.jpg" alt="Movie 1" className="poster poster-6" />
        </div>
        <div>
        <img src="/pulp fiction.jpg" alt="Movie 1" className="poster poster-5" />
        <img src="/The Matrix.jpg" alt="Movie 1" className="poster poster-3" />
        </div>
        <div>
        <img src="/Narcos.jpg" alt="Movie 1" className="poster poster-5" />
        <img src="/Gladiator.jpg" alt="Movie 1" className="poster poster-3" />
        </div>
       
      </div>
        
    </div>
  );
};

export default InfoPage;

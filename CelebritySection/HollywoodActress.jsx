import './Wishlist.css'
import ActressPhotos from '../src/Api/WishlistSectionData/ActressPhotosH.json';
import ActressMovies from '../src/Api/WishlistSectionData/ActressDataH.json';

import React, { useState, useEffect, useRef } from "react";
const HollywoodActress = () =>
{
      const [selectedActress, setSelectedActress] = useState(null);
      const scrollRef = useRef(null);
      // Function to handle smooth scrolling
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  // Filter movies based on selected actor
  const filteredMovies = selectedActress
    ? ActressMovies.filter((movie) => movie.actor.toLowerCase() === selectedActress.toLowerCase())
    : [];

    return(
        <div>
      <div className="Wishlist-Frontpage">
      <h1 onClick={() => setSelectedActress(null)} style={{ cursor: "pointer" }}>Hollywood Actress</h1>

      {/* Scrollable Section */}
      <div className="Wishlist-container">
        {/* Left Scroll Button */}
        <button className="Wishlist-nav-btn Wishlist-nav-left" onClick={scrollLeft}>
          ❮
        </button>

        {/* Scrollable Actor List */}
        <div className="Wishlist-Actor" ref={scrollRef}>
          {ActressPhotos.map((actress) => (
            <div 
              className="ActorName" 
              key={actress.name} 
              onClick={() => setSelectedActress(actress.name)} 
              style={{ cursor: "pointer", flexShrink: "0", margin: "0 10px" }}
            >
              <img className="WishList-item" src={actress.image} alt={actress.name} />
              <h4>{actress.name}</h4>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button className="Wishlist-nav-btn Wishlist-nav-right" onClick={scrollRight}>
          ❯
        </button>
      </div>
    </div>
    {selectedActress && filteredMovies.length > 0 && (
      <div className="Wishlist-movie-section">
        <h2>Movies Featuring {selectedActress}</h2>
        <div className="Wishlist-movie-container">
          {filteredMovies.map(({ name, genre, poster, language, summary }, index) => (
            <div key={index} className="Wishlist-movie-box">
              <img src={poster} alt={name} className="Wishlist-movie-poster" />
              <div className="Wishlist-movie-info">
                <h3>{name}</h3>
                <p><strong>Genre:</strong> {genre}</p>
                <p><strong>Language:</strong> {language}</p>
                <p><strong>Summary:</strong> {summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
    </div>
    )

}
export default HollywoodActress;
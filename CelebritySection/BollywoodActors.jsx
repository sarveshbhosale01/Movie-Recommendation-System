import './Wishlist.css'
import ActorPhotos from '../src/Api/WishlistSectionData/ActorPhotos.json';
import ActionMovies from '../src/Api/WishlistSectionData/ActorsData1.json';
import React, { useState, useEffect, useRef } from "react";
const BollywoodActor = () =>
{
      const [selectedActor, setSelectedActor] = useState(null);
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
  const filteredMovies = selectedActor
    ? ActionMovies.filter((movie) => movie.actor.toLowerCase() === selectedActor.toLowerCase())
    : [];

    return(
        <div>
      <div className="Wishlist-Frontpage">
      <h1 onClick={() => setSelectedActor(null)} style={{ cursor: "pointer" }}>Bollywood Actors</h1>

      {/* Scrollable Section */}
      <div className="Wishlist-container">
        {/* Left Scroll Button */}
        <button className="Wishlist-nav-btn Wishlist-nav-left" onClick={scrollLeft}>
          ❮
        </button>

        {/* Scrollable Actor List */}
        <div className="Wishlist-Actor" ref={scrollRef}>
          {ActorPhotos.map((actor) => (
            <div 
              className="ActorName" 
              key={actor.name} 
              onClick={() => setSelectedActor(actor.name)} 
              style={{ cursor: "pointer", flexShrink: "0", margin: "0 10px" }}
            >
              <img className="WishList-item" src={actor.image} alt={actor.name} />
              <h4>{actor.name}</h4>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button className="Wishlist-nav-btn Wishlist-nav-right" onClick={scrollRight}>
          ❯
        </button>
      </div>
    </div>
    {selectedActor && filteredMovies.length > 0 && (
      <div className="Wishlist-movie-section">
        <h2>Movies Featuring {selectedActor}</h2>
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
export default BollywoodActor;
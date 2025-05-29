import React, { useState } from "react";
import Data from "../src/Api/MoviesSectionData/MovieFounder.json";
import './Movie.css';

const FounderMovie = () => {
  const [filter, setFilter] = useState("all"); // State to track the filter
  const [wishlist, setWishlist] = useState([]); // State to track the wishlist

  // Filter movies based on selected language (Bollywood or Hollywood)
  const filteredMovies =
    filter === "all"
      ? Data
      : Data.filter((movie) =>
          filter === "bollywood" ? movie.language === "Hindi" : movie.language !== "Hindi"
        );

  // Function to toggle wishlist
  const toggleWishlist = (movie) => {
    if (wishlist.some((item) => item.title === movie.title)) {
      setWishlist(wishlist.filter((item) => item.title !== movie.title)); // Remove from wishlist
    } else {
      setWishlist([...wishlist, movie]); // Add to wishlist
    }
  };

  return (
    <>
      <div>
        <div className="Movie-filter-buttons">
          <button onClick={() => setFilter("bollywood")}>Bollywood</button>
          <button onClick={() => setFilter("hollywood")}>Hollywood</button>
          <button onClick={() => setFilter("all")}>All</button>
        </div>

        <div>
          <div className="Movie-slider-container">
            <div className="Movie-slider-track">
              {filteredMovies.map((currElem) => {
                const { title, language, summary, duration, poster, rating, trailer } = currElem;
                const isInWishlist = wishlist.some((item) => item.title === title);

                return (
                  <div key={title} className="Movie-box">
                    <img src={poster} alt={`${title} Poster`} className="Movie-poster" />
                    <div className="Movie-info">
                      <h2 className="Movie-title"> {title}</h2>
                      <p>Duration: {duration}</p>
                      <p>Language: {language}</p>
                      <p>Ratings: {rating}</p>
                      <p>Summary: {summary}</p>
                    </div>
                    <div className="Movie-buttons">
                      <a href={trailer} target="_blank" rel="noopener noreferrer">
                        <button className="Movie-Trailer">Watch Trailer</button>
                      </a>
                      <button
                        onClick={() => toggleWishlist(currElem)}
                        className={`Movie-wishlist-button ${isInWishlist ? "remove" : "add"}`}
                      >
                        {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Wishlist Section */}
          <div className="Movie-wishlist-section">
            <h2>Wishlist</h2>
            <div className="Movie-wishlist-container">
              {wishlist.length > 0 ? (
                wishlist.map((movie) => (
                  <div key={movie.title} className="Movie-wishlist-item">
                    <h4>{movie.title}</h4>
                    <img src={movie.poster} alt={`${movie.title} Poster`} className="Movie-wishlist-poster" />
                  </div>
                ))
              ) : (
                <p>Your wishlist is empty!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderMovie;

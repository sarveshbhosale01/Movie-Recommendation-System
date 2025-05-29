import React, { useState } from "react";
import Data from "../src/Api/MoviesSectionData/MovieTopData.json";
import './Movie.css'

const HollywoodMovie = () => {
    const [wishlist, setWishlist] = useState([]);

    // Function to toggle wishlist
    const toggleWishlist = (anime) => {
        if (wishlist.some((item) => item.title === anime.title)) {
            setWishlist(wishlist.filter((item) => item.title !== anime.title)); // Remove from wishlist
        } else {
            setWishlist([...wishlist, anime]); // Add to wishlist
        }
    };

    return (
        <div>
            <div className="Movie-slider-container">
                <div className="Movie-slider-track">
                    {Data.map((currElem) => {
                        const { title, language, summary, duration, poster, rating, youtubeTrailer } = currElem;
                        const isInWishlist = wishlist.some((item) => item.title === title);

                        return (
                            <div key={title} className="Movie-box">
                                <img
                                    src={poster}
                                    alt={`${title} Poster`}
                                    className="Movie-poster"
                                />
                                <div className="Movie-info">
                                    <h2 className="Movie-title">{title}</h2>
                                    <p>Title: {title}</p>
                                    <p>Duration: {duration}</p>
                                    <p>Language: {language}</p>
                                    <p>Ratings: {rating}</p>
                                    <p>Summary: {summary}</p>


                                </div>
                                <div className="Movie-buttons">
  <a href={youtubeTrailer} target="_blank" rel="noopener noreferrer">
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
                        wishlist.map((anime) => (
                            <div key={anime.title} className="Movie-wishlist-item">
                                <h4>{anime.title}</h4>
                                <img
                                    src={anime.poster}
                                    alt={`${anime.title} Poster`}
                                    className="Movie-wishlist-poster"
                                />
                            </div>
                        ))
                    ) : (
                        <p>Your wishlist is empty!</p>
                    )}
                </div>
            </div>

       

        </div>
    );
};

export default HollywoodMovie;

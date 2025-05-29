import React, { useState } from "react";
import Data from "../src/Api/AnimeSectionData/AnimeTop10.json";
import './Anime.css'

const AnimeS1 = () => {
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
            <div className="Anime-slider-container">
                <div className="Anime-slider-track">
                    {Data.map((currElem) => {
                        const { title, language, summary, duration, poster, rating, youtubeTrailer } = currElem;
                        const isInWishlist = wishlist.some((item) => item.title === title);

                        return (
                            <div key={title} className="Anime-box">
                                <img
                                    src={poster}
                                    alt={`${title} Poster`}
                                    className="Anime-poster"
                                />
                                <div className="Anime-info">
                                    <h2 className="Anime-title">{title}</h2>
                                    <p>Title: {title}</p>
                                    <p>Duration: {duration}</p>
                                    <p>Language: {language}</p>
                                    <p>Ratings: {rating}</p>
                                    <p>Summary: {summary}</p>


                                </div>
                                <div className="Anime-buttons">

                                    <a href={youtubeTrailer} target="_blank" rel="noopener noreferrer">
                                        <button class= "Anime-Trailer">Watch Trailer</button>
                                    </a>
                                    <button
                                        onClick={() => toggleWishlist(currElem)}
                                        className={`Anime-wishlist-button ${isInWishlist ? "remove" : "add"}`}
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
            <div className="Anime-wishlist-section">
                <h2>Wishlist</h2>
                <div className="Anime-wishlist-container">
                    {wishlist.length > 0 ? (
                        wishlist.map((anime) => (
                            <div key={anime.title} className="Anime-wishlist-item">
                                <h4>{anime.title}</h4>
                                <img
                                    src={anime.poster}
                                    alt={`${anime.title} Poster`}
                                    className="Anime-wishlist-poster"
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

export default AnimeS1;

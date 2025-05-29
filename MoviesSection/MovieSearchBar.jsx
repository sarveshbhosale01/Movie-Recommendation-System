import React, { useState, useEffect, useRef } from "react";
import data from "../src/Api/MoviesSectionData/MovieSearchBarData.json";
import "./MovieSearchBar.css";


const ImageSlider = ({ Images, title, isHovered }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startSlider = () => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === Images.length - 1 ? 0 : prevIndex + 1
          );
        }, 6000);
      }
    };

    const stopSlider = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    if (isHovered) {
      stopSlider();
    } else {
      startSlider();
    }

    return () => stopSlider();
  }, [isHovered, Images.length]);

  return (
    <div className="movie-slider-container">
      <img
        src={Images[currentImageIndex]}
        alt={`${title} Poster`}
        className="movie-slider-img"
      />
    </div>
  );
};





const NetflixTop10 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const movieResultsRef = useRef(null);
  const scrollInterval = useRef(null);

  const handleSearch = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setSearchQuery(query);

    if (query) {
      setIsLoading(true);
      const timeout = setTimeout(() => {
        const filtered = data.filter((movie) =>
          movie.title.toLowerCase().includes(query)
        );
        setFilteredMovies(filtered);
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timeout);
    } else {
      setFilteredMovies([]);
    }
  };

  useEffect(() => {
    if (filteredMovies.length > 0 && hoveredCardIndex === null) {
      scrollInterval.current = setInterval(() => {
        if (movieResultsRef.current) {
          movieResultsRef.current.scrollBy({ left: 2, behavior: "smooth" });
        }
      }, 20);
    } else {
      clearInterval(scrollInterval.current);
    }

    return () => clearInterval(scrollInterval.current);
  }, [filteredMovies, hoveredCardIndex]);

  return (
    <div className="Movie-searchsection">
      <div className="movie-search-frame">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={handleSearch}
          className="movie-search-input"
        />
      </div>

      {searchQuery && (
        <div className="movie-results-frame">
          {isLoading ? (
            <p>Loading...</p>
          ) : filteredMovies.length > 0 ? (
            <div
              className="movie-results"
              ref={movieResultsRef}
              onMouseEnter={() => clearInterval(scrollInterval.current)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              {filteredMovies.map((currElem, index) => {
                const { title, year, genres, extract, thumbnail } = currElem;
                return (
                  <div
                    key={index}
                    className="movie-card"
                    onMouseEnter={() => setHoveredCardIndex(index)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                  >
                    <ImageSlider
                      Images={[thumbnail]}
                      title={title}
                      isHovered={hoveredCardIndex === index}
                    />
                    <div className="movie-card-content">
                      <h2>{title}</h2>
                      <p>
                        <strong>Year:</strong> {year}
                      </p>
                      <p>
                        <strong>Genre:</strong> {genres.join(", ")}
                      </p>
                      <p>
                        <strong>Summary:</strong> {extract}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NetflixTop10;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
import "./MovieSlideShow.css";

const MovieSlideshow = () => {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const [playingStates, setPlayingStates] = useState({});
  const [mutedStates, setMutedStates] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);

  const moviePosters = [
    { id: 4, age: "All", video: "SlideshowVideos/Movies/Movie5.mp4", title: "Chava", description: "Sambhaji Maharaj leads resistance against Aurangzeb's forces." },
    { id: 2, age: "A+", video: "SlideshowVideos/Movies/Movie1.mp4", title: "The Revenant", description: "A frontiersman, badly injured by a bear, is abandoned." },
    { id: 1, age: "A++", video: "SlideshowVideos/Movies/Movie4.mp4", title: "Oppenheimer", description: "Oppenheimer the father atomic bomb" },
    { id: 3, age: "A", video: "SlideshowVideos/Movies/Movie2.mp4", title: "Don 2", description: "Don tries to escape treachery and betrayal."},
  ];

  const handleVideoEnd = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingStates((prev) => ({ ...prev, [index]: true }));
      } else {
        video.pause();
        setPlayingStates((prev) => ({ ...prev, [index]: false }));
      }
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setMutedStates((prev) => ({ ...prev, [index]: video.muted }));

      // If unmuted, ensure the video starts playing
      if (!video.muted) {
        video.play();
        setPlayingStates((prev) => ({ ...prev, [index]: true }));
      }
    }
  };

  const handleSlideChange = (current, next) => {
    setActiveSlide(next);

    // Pause previous video
    if (videoRefs.current[current]) {
      videoRefs.current[current].pause();
      setPlayingStates((prev) => ({ ...prev, [current]: false }));
    }

    // Play new slide video automatically
    if (videoRefs.current[next]) {
      videoRefs.current[next].play();
      setPlayingStates((prev) => ({ ...prev, [next]: true }));
    }
  };

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    beforeChange: handleSlideChange,
  };

  return (
    <div className="Movie-slideshow-container">
      <Slider ref={sliderRef} {...settings}>
        {moviePosters.map((movie, index) => (
          <div key={movie.id} className="Movie-slide">
            <video
              className="Movie-video"
              src={movie.video}
              loop
              muted
              playsInline
              autoPlay // Ensures the video plays automatically (muted)
              onEnded={handleVideoEnd}
              ref={(video) => (videoRefs.current[index] = video)}
            />
            
            {/* INFO BOX */}
            <div className={`MovieSlideShow-info ${index === activeSlide ? "scale-up" : ""}`}>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>

            {/* CONTROLS */}
            <div className="Movie-controls">
              {/* <button className="play-pause-btn" onClick={() => togglePlayPause(index)}>
                {playingStates[index] ? "❚❚" : "▶"}
              </button> */}
              <div className="MovieSlide-age">
                <p>Rating: {movie.age}</p>
              </div>
              <button className="Movie-mute-btn" onClick={() => toggleMute(index)}>
                {mutedStates[index] ? "🔊" : "🔇"}
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* NAVIGATION BUTTONS */}
      <button className="Movienav-btn left" onClick={() => sliderRef.current.slickPrev()}>
        &#10094;
      </button>
      <button className="Movienav-btn right" onClick={() => sliderRef.current.slickNext()}>
        &#10095;
      </button>
    </div>
  );
};

export default MovieSlideshow;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
import "./AnimeSlideShow.css";

const AnimeSlideshow = () => {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const [playingStates, setPlayingStates] = useState({});
  const [mutedStates, setMutedStates] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);

  const AnimePosters = [
    { id: 2, age: "A+", video: "SlideshowVideos/Anime/Anime1.mp4", title: "Bezerk", description: "Dark fantasy about revenge and fate" },
    { id: 2, age: "A+", video: "SlideshowVideos/Anime/Anime2.mp4", title: "Attack On Titan", description: "Humanity vs. giant Titans" },
    { id: 1, age: "A+", video: "SlideshowVideos/Anime/Anime3.mp4", title: "Black Clover", description: "Boy with no magic strives for greatness" },
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
    <div className="Anime-slideshow-container">
      <Slider ref={sliderRef} {...settings}>
        {AnimePosters.map((Anime, index) => (
          <div key={Anime.id} className="Anime-slide">
            <video
              className="Anime-video"
              src={Anime.video}
              loop
              muted
              playsInline
              autoPlay // Ensures the video plays automatically (muted)
              onEnded={handleVideoEnd}
              ref={(video) => (videoRefs.current[index] = video)}
            />
            
            {/* INFO BOX */}
            <div className={`AnimeSlideShow-info ${index === activeSlide ? "scale-up" : ""}`}>
              <h3>{Anime.title}</h3>
              <p>{Anime.description}</p>
            </div>

            {/* CONTROLS */}
            <div className="Anime-controls">
              {/* <button className="play-pause-btn" onClick={() => togglePlayPause(index)}>
                {playingStates[index] ? "❚❚" : "▶"}
              </button> */}
              <div className="AnimeSlide-age">
                <p>Rating: {Anime.age}</p>
              </div>
              <button className="Anime-mute-btn" onClick={() => toggleMute(index)}>
                {mutedStates[index] ? "🔊" : "🔇"}
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* NAVIGATION BUTTONS */}
      <button className="Animenav-btn left" onClick={() => sliderRef.current.slickPrev()}>
        &#10094;
      </button>
      <button className="Animenav-btn right" onClick={() => sliderRef.current.slickNext()}>
        &#10095;
      </button>
    </div>
  );
};

export default AnimeSlideshow;

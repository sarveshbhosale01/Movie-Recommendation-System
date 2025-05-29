import './Movie.css';
import '../src/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Slideshow from './MovieSlideshow';
import MoviesSearchBar from './MovieSearchBar';
import Footer from '../Footer/Footer.jsx'
import { Link } from 'react-router-dom';


import MovieS1 from './MovieS1';
import MovieS2 from './MovieS2';
import MovieS3 from './MovieS3';
import MovieS4 from './MovieS4';
import MovieS5 from './MovieS5';
import MovieS6 from './MovieS6';
import MovieS7 from './MovieS7';
import MovieS8 from './MovieS8';
import MovieS9 from './MovieS9';
import React, { useState, useEffect } from 'react';

const Movie = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update body class based on theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div>
      <nav className='Movie-Nav'>
        <ul>
          <li>
            <div className="Movie-logo">
              <a href="#">SineVerse</a>
            </div>
          </li>
          <div className="Movie-links">
            <li>
              <Link to="/Movie">Movies</Link>
            </li>
            <li>
              <Link to="/Anime">Anime</Link>
            </li>
            <li>
              <Link to="/Web-Series">Web-Series</Link>
            </li>
            

            {/* Theme Toggle Button */}
            <div className="Movie-icons" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#189efe"
                  stroke="white"
                  strokeWidth="0.1"
                  className="icon"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="4" />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="gray"
                  className="icon"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="4" />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              )}
            </div>

            <div className="Movie-link2">
              <li><Link to="/Celebrity">Celebrity</Link></li>
              <li><Link to="/CreditsDisclaimer">CreditsDisclaimer</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Logout">Logout</Link></li>
            </div>
          </div>
        </ul>
      </nav>

      {/* Apply correct class for theme */}
      <div className={`Movie-FrontPage ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="Movie-sliderwrapper">
          <Slideshow />
          <div className="Movie-searchsection">
            <p>Note : Currently this section only recommends the movie details</p>
            <h1> Tell me a movie title, and I'll recommend similar movies you'll love!</h1>
            <MoviesSearchBar />
          </div>

          <div className="Movie-navigationButtons">
            <button onClick={() => document.getElementById('bollywood').scrollIntoView({ behavior: 'smooth' })}>Bollywood</button>
            <button onClick={() => document.getElementById('hollywood').scrollIntoView({ behavior: 'smooth' })}>Hollywood</button>
            <button onClick={() => document.getElementById('horror').scrollIntoView({ behavior: 'smooth' })}>Horror</button>
            <button onClick={() => document.getElementById('biopic').scrollIntoView({ behavior: 'smooth' })}>Biopic</button>
            <button onClick={() => document.getElementById('founders').scrollIntoView({ behavior: 'smooth' })}>Founder</button>
            <button onClick={() => document.getElementById('spy').scrollIntoView({ behavior: 'smooth' })}>Spy</button>
            <button onClick={() => document.getElementById('comedy').scrollIntoView({ behavior: 'smooth' })}>Comedy</button>
            <button onClick={() => document.getElementById('romance').scrollIntoView({ behavior: 'smooth' })}>Romance</button>
            <button onClick={() => document.getElementById('self-improvement').scrollIntoView({ behavior: 'smooth' })}>Self-Improvement</button>
          </div>

          <h1 id="bollywood">Top Bollywood Movies</h1>
          <p>Where dreams dance to the rhythm of emotions, colors explode, and every story is a blockbuster!</p>
          {/* MovieS4 data is MovieBollywood */}
          <MovieS4 />

          <h1 id="hollywood">Top Hollywood Movies</h1>
          <p>Lights, camera, legend—Hollywood writes history with epic action, heartwarming tales, and cinematic brilliance!</p>
          {/* MovieS1 data is MoviesTopData */}
          <MovieS1 />

          <h1 id="horror">Top Horror Movies</h1>
          <p>Fear lurks in the shadows, nightmares come alive, and the unknown whispers... are you ready to face the terror?</p>
          {/* MovieS2 data is MovieHorrorData */}
          <MovieS2 />

          <h1 id="biopic">Top Biopics Movies</h1>
          <p>Real lives, reel magic—witness history unfold with untold struggles, legendary triumphs, and unforgettable journeys!</p>
          {/* MovieS3 data is MovieBiopicData */}
          <MovieS3 />

          <h1 id="founders">Top Founders Special Movies</h1>
          <p>From vision to victory—stories of game-changers, risk-takers, and pioneers who redefined the world!</p>
          {/* MovieS5 data is MovieFounderData */}
          <MovieS5 />

          <h1 id="spy">Top Spy Movies</h1>
          <p>Secrets, suspense, and spies—where deception meets danger, and every move could be the last!</p>
          {/* MovieS5 data is MovieFounderData */}
          <MovieS6 />

          <h1 id="comedy">Top Comedy Movies</h1>
          <p>Laughter is timeless, jokes are forever—because life’s too short to be serious all the time!</p>
          {/* MovieS5 data is MovieFounderData */}
          <MovieS7 />

          <h1 id="romance">Top Romance Movies</h1>
          <p>Where hearts meet, love writes the script, and every glance tells a story of passion, fate, and forever!</p>
          {/* MovieS5 data is MovieFounderData */}
          <MovieS8 />

          <h1 id="self-improvement">Top Self-Improvement Movies</h1>
          <p>Upgrade your mind, unlock your best self—because growth, success, and transformation start from within!</p>
          {/* MovieS5 data is MovieFounderData */}
          <MovieS9 />

          <Footer/> 
        </div>
      </div>
    </div>
  );
};



export default Movie;

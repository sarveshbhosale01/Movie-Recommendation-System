import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimeSlideshow from './AnimeSlideShow';
import './Anime.css'


import Footer from '../Footer/Footer.jsx'


import AnimeS1  from './AnimeS1';
import AnimeS2  from './AnimeS2';
import AnimeS3  from './AnimeS3';
import AnimeS4  from './AnimeS4';
import AnimeS5  from './AnimeS5';
import AnimeS6  from './AnimeS6';
import AnimeS7  from './AnimeS7';
import AnimeS8  from './AnimeS8';
import AnimeS9  from './AnimeS9';
import AnimeS10  from './AnimeS10';
import AnimeS11  from './AnimeS11';


const Anime = () => {
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
      <nav className='Anime-Nav'>
        <ul>
          <li>
            <div className="Anime-logo">
              <a href="#">SineVerse </a>
            </div>
          </li>
          <div className="Anime-links">
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
            <div className="Anime-icons" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#B2A5FF"
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

            <div className="Anime-link2">
              <li><Link to="/Celebrity">Celebrity</Link></li>
              <li><Link to="/CreditsDisclaimer">CreditsDisclaimer</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Logout">Logout</Link></li>
            </div>
          </div>
        </ul>
      </nav>

      {/* Apply correct class for theme */}
      <div className={`Anime-FrontPage ${isDarkMode ? "dark-mode" : "light-mode"}`}>
       
        <div className="Anime-SliderWrapper">

        <AnimeSlideshow></AnimeSlideshow>
        <p>Note : Currently this section only recommends the movie details</p>
            <h1 > Click the navigation button below to explore a world of epic anime adventures and unforgettable stories!</h1>
      <div className="Anime-navigationButtons">
            <button onClick={() => document.getElementById('Shounen').scrollIntoView({ behavior: 'smooth' })}>Shounen</button>
            <button onClick={() => document.getElementById('Shoujo').scrollIntoView({ behavior: 'smooth' })}>Shoujo</button>
            <button onClick={() => document.getElementById('Seinen').scrollIntoView({ behavior: 'smooth' })}>Seinen</button>
            <button onClick={() => document.getElementById('Josei').scrollIntoView({ behavior: 'smooth' })}>Josei</button>
            <button onClick={() => document.getElementById('Mecha').scrollIntoView({ behavior: 'smooth' })}>Mecha</button>
            <button onClick={() => document.getElementById('Isekai').scrollIntoView({ behavior: 'smooth' })}>Isekai</button>
            <button onClick={() => document.getElementById('Slice of Life').scrollIntoView({ behavior: 'smooth' })}>Slice of Life</button>
            <button onClick={() => document.getElementById('Horror').scrollIntoView({ behavior: 'smooth' })}>Horror</button>
            <button onClick={() => document.getElementById('Comedy').scrollIntoView({ behavior: 'smooth' })}>Comedy</button>
            <button onClick={() => document.getElementById('Psychological').scrollIntoView({ behavior: 'smooth' })}>Psychological</button>
          </div>
        <h1>Top 10 Animes</h1>
        <p> Highest Rated Anime in the world</p>
        <AnimeS1></AnimeS1>
        <h1 id='Shounen'>Top Shounen Anime (Action-Packed Adventure)</h1>
        <p>Shonen: Primarily aimed at young boys, typically between the ages of 12 and 18. These anime often feature action,
           adventure, and coming-of-age stories.</p>
        <AnimeS2></AnimeS2>
        <h1 id='Shoujo'>Top Shoujo Anime (Romantic Dreams)</h1>
        <p>Shojo: Targeted at young girls, generally aged 10 to 18. 
          These anime often revolve around romance, friendship, and personal growth.</p>
        <AnimeS3></AnimeS3>
        <h1 id='Seinen'>Top Seinen Anime (Mature Drama)</h1>
        <p>Seinen: Aimed at adult men, typically 18 and older.
           These anime often deal with more complex themes, darker stories, and mature content.</p>
        <AnimeS4></AnimeS4>
        <h1 id='Josei'>Top Josei Anime (Womens Stories)</h1>
        <p>Josei: Targeted at adult women, generally aged 18 and older. These anime often explore more mature and realistic relationships, 
          along with themes like romance and personal struggles.</p>
        <AnimeS5></AnimeS5>
        <h1 id='Mecha'>Top Mecha Anime (Robotic Warfare)</h1>
        <p>Mecha: Focused on giant robots or machines, often with futuristic or post-apocalyptic settings.</p>
        <AnimeS6></AnimeS6>
        <h1 id='Isekai'>Top Isekia Anime (Otherworld Adventure)</h1>
        <p>Isekai: Characters are transported or reincarnated into another world, 
          often with fantasy or game-like elements.</p>
        <AnimeS7></AnimeS7>
        <h1 id='Slice of Life'>Top Slice of Life Anime (Everyday Life)</h1>
        <p>Slice of Life: Focuses on the everyday lives of characters, often with a focus on their emotional and personal growth. 
          These can be light-hearted or serious.</p>
        <AnimeS8></AnimeS8>
        <h1 id='Horror'>Top Horror Anime (Horror)</h1>
        <p>Slice of Life: Focuses on the everyday lives of characters, often with a focus on their emotional and personal growth. 
          These can be light-hearted or serious.</p>
        <AnimeS9></AnimeS9>
        <h1 id='Comedy'>Top Comedy Anime (Comedy)</h1>
        <p>Slice of Life: Focuses on the everyday lives of characters, often with a focus on their emotional and personal growth. 
          These can be light-hearted or serious.</p>
        <AnimeS10></AnimeS10>
        <h1 id='Psychological'>Top Psychological Anime (Psychological)</h1>
        <p>Slice of Life: Focuses on the everyday lives of characters, often with a focus on their emotional and personal growth. 
          These can be light-hearted or serious.</p>
        <AnimeS11></AnimeS11>
        </div>
      <Footer/>
      </div>
    </div>
    );
};

export default Anime;

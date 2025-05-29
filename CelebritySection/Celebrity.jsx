import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import BollywoodActors from './BollywoodActors'
import BollywoodActress from "./BollywoodActress";
import HollywoodActor from "./HollywoodActors";
import HollywoodActress from "./HollywoodActress";

import Footer from '../Footer/Footer.jsx'

import "./Wishlist.css";

const Wishlist = () => {
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
      {/* Navigation Bar */}
      <nav className="Wishlist-Nav">
        <ul>
          <li>
            <div className="Wishlist-logo">
              <a href="#">SineVerse</a>
            </div>
          </li>
          <div className="Wishlist-links">
            <li><Link to="/Movie">Movies</Link></li>
            <li><Link to="/Anime">Anime</Link></li>
            <li><Link to="/Web-Series">Web-Series</Link></li>

            {/* Dark Mode Toggle */}
            {/* Theme Toggle Button */}
            <div className="Wishlist-icons" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="white"
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
            <div className="Wishlist-link2">
              <li><Link to="/Celebrity">Celebrity</Link></li>
              <li><Link to="/CreditsDisclaimer">CreditsDisclaimer</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Logout">Logout</Link></li>
            </div>
          </div>
        </ul>
      </nav>

      <div className={`Wishlist-FrontPage ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <BollywoodActors/>
        <BollywoodActress/>
        <HollywoodActor/>
        <HollywoodActress/>
      </div>
      <Footer />

 
      )
    </div>
  );
};

export default Wishlist;

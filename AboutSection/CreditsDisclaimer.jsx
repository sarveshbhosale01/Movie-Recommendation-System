import React,{useState , useEffect} from "react";
import Footer from '../Footer/Footer.jsx'
import "./About.css";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
const CreditsDisclaimer = () => {
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
      <nav className='CreditDisclaimer-Nav'>
        <ul>
          <li>
            <div className="CreditDisclaimer-logo">
              <a href="#">SineVerse</a>
            </div>
          </li>
          <div className="CreditDisclaimer-links">
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
            <div className="CreditDisclaimer-icons" onClick={() => setIsDarkMode(!isDarkMode)}>
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

            <div className="CreditDisclaimer-link2">
              <li><Link to="/Celebrity">Celebrity</Link></li>
              <li><Link to="/CreditsDisclaimer">CreditsDisclaimer</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Logout">Logout</Link></li>
            </div>
          </div>
        </ul>
      </nav>

      {/* Apply correct class for theme */}
      <div className={`CreditDisclaimer-FrontPage ${isDarkMode ? "dark-mode" : "light-mode"}`}>
    <div className="CreditDisclaimer-container">

      <h1>Letter of Credit</h1>
      <p><span>This project is an `Academic initiative` designed exclusively for learning and research as part of my college curriculum.</span> The goal is to provide users with a seamless movie discovery experience by recommending films based on their preferences and directing them to official streaming platforms. 
        <span>I do not claim ownership of any movie posters, trailers, or ratings displayed on this website. All intellectual property rights remain with their respective companies, including but not limited to Netflix, Amazon Prime Video, Disney+, Hulu, IMDb, and YouTube.</span>

As an intermediary, this website does not host, store, or distribute any copyrighted content. Instead, it acts as a guide, presenting users with publicly available information such as trailers from YouTube and ratings from trusted sources. 
The purpose is not to replace any existing streaming service but to enhance the audience's ability to discover and access content through legal platforms.

<span>In a time when viewers are often overwhelmed with choices, my project simplifies the search process, making it easier for users to find movies suited to their interests. This not only benefits the users but also the streaming platforms, as it helps reduce churn rates and encourages users to explore content on their respective services.</span>
 By providing direct redirection to official sources, this project contributes to the ecosystem by increasing engagement and visibility for movies across multiple platforms.

It is important to emphasize that this website is strictly for educational purposes, does not generate any revenue, and is not intended for public distribution. <span>If any content owners have concerns regarding the use of their material, I am open to addressing them and taking appropriate measures to ensure compliance with all copyright laws and guidelines.</span>
 My objective is solely to foster a deeper appreciation for cinema and connect audiences with the vast world of movies available through legitimate means.</p>
 <p>Regards</p>
 <p>Sarvesh Bhosale(Developer)</p>
    </div>
    </div>
    <Footer/>
    </div>
  );
}
export default CreditsDisclaimer;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Contact.css";


import Footer from '../Footer/Footer.jsx'



const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [genre, setCheckedItems] = useState([]);
  const [Category, setTypeItems] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setFeedback] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Checked Items:", genre);
    console.log("Feedback:", suggestion);
  
    if (!username) {
      alert("Form must have a Username");
      return;
    }
    if (!genre || genre.length === 0) {
      alert("Please select your preferences using the checkbox");
      return;
    }
    if (!Category || Category.length === 0) {
      alert("Please select your preferences using the checkbox");
      return;
    }
    if (!email) {
      alert("Add your Email for updates");
      return;
    }
  
    const requestData = {
      username: username,
      email: email,
      genre: genre, 
      Category :Category,
      suggestion: suggestion,
    };
  
    console.log("Sending Data:", requestData); // Debugging
  
    try {
      const response = await axios.post(
        "http://localhost/php-backend/dbconnection.php", 
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Response Data:", response.data); // Debug response
  
      if (response.data.status === "success") {
        alert("User Feedback Stored");
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data. Check console for details.");
    }
  };
  


  const handleCheckboxChange1 = (event) => {
    const { value, checked } = event.target;
    setCheckedItems((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  const handleCheckboxChange2 = (event) => {
    const { value, checked } = event.target;
    setTypeItems((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div>
      <nav className="Contact-Nav">
        <ul>
          <li>
            <div className="Contact-logo">
              <Link to="/">SineVerse</Link>
            </div>
          </li>
          <div className="Contact-links">
            <li>
              <Link to="/Movie">Movies</Link>
            </li>
            <li>
              <Link to="/Anime">Anime</Link>
            </li>
            <li>
              <Link to="/Web-Series">Web-Series</Link>
            </li>

            <div className="Contact-icons" onClick={() => setIsDarkMode(!isDarkMode)}>
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
          <div className="Contact-link2">
            <li><Link to="/Celebrity">Celebrity</Link></li>
            <li><Link to="/CreditsDisclaimer">CreditsDisclaimer</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Logout">Logout</Link></li>
          </div>
          </div>
        </ul>
      </nav>

      <div className={`Contact-FrontPage ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="Contact-leftside">

          <img src="/Contact-page.webp" width="500px" height="500px"></img>
        </div>
        <div className="Contact-container">
          <h1>Contact Us</h1>
          <p>We're here to help! If you have any questions, feedback, or suggestions about our Movie Recommendation System, we'd love to hear from you.</p>

          <div className="Contact-details">

            <div className="Contact-info">
              <span>📧</span>
              <strong>Email</strong>
              <p>bhosalesarvesh6@gmail.com</p>
            </div>
            <div className="Contact-info">
              <span>📞</span>
              <strong>Phone</strong>
              <p>9321789513</p>
            </div>
          </div>

          <form className="Contact-form" onSubmit={handleSubmit}>
            <h1>Enter your basic details</h1>
            <p>Give Geninue Answers for Personalized Recommendation</p>
            <input
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="Contact-likes">
              <h3>Select your Movie Genre:</h3>
              <div className="Contact-checkbox">
                <label>
                  <input
                    type="checkbox"
                    value="Action"
                    checked={genre.includes("Action")}
                    onChange={handleCheckboxChange1}
                  />
                  Action
                </label>
              </div>
              <div className="Contact-checkbox">
                <label>
                  <input
                    type="checkbox"
                    value="Horror"
                    checked={genre.includes("Horror")}
                    onChange={handleCheckboxChange1}
                  />
                  Horror
                </label>
              </div>

              <div className="Contact-checkbox">
                <label>
                  <input
                    type="checkbox"
                    value="Comedy"
                    checked={genre.includes("Comedy")}
                    onChange={handleCheckboxChange1}
                  />
                  Comedy
                </label>
              </div>
              <div className="Contact-checkbox">
                <label>
                  <input
                    type="checkbox"
                    value="Drama"
                    checked={genre.includes("Drama")}
                    onChange={handleCheckboxChange1}
                  />
                  Drama
                </label>
              </div>
              <div className="Contact-checkbox">
                <label>
                  <input
                    type="checkbox"
                    value="ScienceFiction"
                    checked={genre.includes("ScienceFiction")}
                    onChange={handleCheckboxChange1}
                  />
                  ScienceFiction
                </label>
              </div>

              <p>Selected: {genre.join(", ") || "None"}</p>
                    {/* 2nd checkbox */}
              <h3>Select your Entertaiment type:</h3>
              <div className="Contact-checkbox">
                <label>
                  <input
                    type="checkbox"
                    value="Movie"
                    checked={Category.includes("Movie")}
                    onChange={handleCheckboxChange2}
                  />
                  Movie
                </label>
              </div>

              <div className="Contact-checkbox">
                <label>
                  <input
                    type="checkbox"
                    value="WebSeries"
                    checked={Category.includes("WebSeries")}
                    onChange={handleCheckboxChange2}
                  />
                  WebSeries
                </label>
              </div>

              <div className="Contact-checkbox">
                <label>
                  <input
                    type="checkbox"
                    value="Anime"
                    checked={Category.includes("Anime")}
                    onChange={handleCheckboxChange2}
                  />
                  Anime
                </label>
              </div>

              <p>Selected: {Category.join(", ") || "None"}</p>
            </div>

            <textarea
              placeholder="Type your message..."
              value={suggestion}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;

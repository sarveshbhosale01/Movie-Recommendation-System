import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Anime from "../AnimeSection/Anime"; 
import Movie from "../MoviesSection/Movie"; 
import WebSeries from "../WebSeriesSection/WebSeries";
import Homepage from "../Homepage/Homepage";
import Contact from "../ContactSection/Contact";
import Celebrity from "../CelebritySection/Celebrity";
import InfoPage from '../InfoPage/InfoPage.jsx'
import CreditsDisclaimer from "../AboutSection/CreditsDisclaimer";
import Selection from '../InfoPage/Selection.jsx'

const App = () => {
    const runStreamlit = () => {
        window.open("http://localhost:8501", "_blank"); // Open Streamlit in new tab
        return null; // React requires returning something
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Movie" element={<Movie />} />
                <Route path="/Anime" element={<Anime />} />
                <Route path="/Web-Series" element={<WebSeries />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Celebrity" element={<Celebrity />} />
                <Route path="/Logout" element={<Homepage />} />
                <Route path="/InfoPage" element={<InfoPage />} />
                <Route path="/Selection" element={<Selection/>} />
                <Route path="/CreditsDisclaimer" element={<CreditsDisclaimer/>} />
            </Routes>
        </Router>
    );
};

export default App;

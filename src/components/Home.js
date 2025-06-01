import React from 'react';
import './Home.css';
import profileIcon from '../assets/img.png'; // adjust path as needed
import resumePDF from '../assets/Franesh-Resume.pdf'; // make sure to add your PDF in src/assets/

function Home() {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <div className="home-text">
                    <h1>Hi There! 👋🏻</h1>
                    <h2>I'M Franesh</h2>
                    <p>(Data Analyst | Data Scientist | ML Engineer | Developer)</p>
                    <a
                        href={resumePDF}
                        target="_blank"  // open in a new tab
                        rel="noopener noreferrer" // security best practice
                        className="resume-btn"
                    >
                        View Resume
                    </a>

                </div>
                <div className="home-image">
                    <img src={profileIcon} alt="Franesh" />
                </div>
            </div>
        </section>
    );
}

export default Home;

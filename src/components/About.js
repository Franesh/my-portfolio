import React from 'react';
import './About.css';
import aboutIcon from '../assets/home-main.svg';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-header">LET ME INTRODUCE MYSELF</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={aboutIcon} alt="About Me" />
        </div>
        <div className="about-text">
          <p>
            I fell in love with programming and have learned a lot along the way. I’m fluent in classics like <strong>C++</strong>, <strong>JavaScript</strong>, and <strong>Python</strong>.
          </p>
          <p>
            My interests include building new web technologies, application development, and exploring cloud solutions. I’m passionate about solving real-world problems through AI, ML, and data analytics.
          </p>
          <p>
            I love creating products using <strong>Node.js</strong> and modern frameworks like <strong>React.js</strong> and <strong>Next.js</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

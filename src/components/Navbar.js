import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const links = document.querySelectorAll('.navbar-menu a');

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
        setMenuOpen(false); // Close menu on link click
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => { });
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-special">&lt;Franesh/&gt;</span>
        </a>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

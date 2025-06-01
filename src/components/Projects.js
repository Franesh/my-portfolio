import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "AI Chatbot",
    description: "Built an intelligent chatbot using NLP and machine learning techniques.",
    link: "https://github.com/yourusername/ai-chatbot",
  },
  {
    title: "Data Analytics Dashboard",
    description: "Created an interactive dashboard with Power BI and Python for business data visualization.",
    link: "https://github.com/yourusername/data-dashboard",
  },
  {
    title: "Trading Strategy",
    description: "Developed an automated trading strategy using Python and backtesting.",
    link: "https://github.com/yourusername/trading-strategy",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-header">Projects</h2>
      <div className="projects-container">
        {projects.map(({ title, description, link }, index) => (
          <div key={index} className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

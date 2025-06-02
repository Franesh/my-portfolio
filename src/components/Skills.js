import React from 'react';
import './Skills.css';

const tools = [
  'VS Code', 'Jupyter Notebook', 'Postman', 'Docker', 'GitHub', 'Google Colab', 'Power BI'
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-header">MY SKILLS</h2>
      <div className="skills-container">
        <div className="skill">
          <h3>Languages</h3>
          <p>Python, C++, C, SQL</p>
        </div>
        <div className="skill">
          <h3>AI & ML</h3>
          <p>Scikit-Learn, NLTK, Langchain, Spacy</p>
        </div>
        <div className="skill">
          <h3>Data Analysis</h3>
          <p>Power BI, Excel, Google Analytics 4</p>
        </div>
        <div className="skill">
          <h3>Development</h3>
          <p>Firebase, MySQL, HTML5/CSS3, IoT & Embedded Systems</p>
        </div>
        <div className="skill">
          <h3>Version Control</h3>
          <p>Git, GitHub</p>
        </div>
        <div className="skill">
          <h3>Fundamentals</h3>
          <p>Data Structures, Algorithms, OOPS, Networks, DBMS</p>
        </div>
      </div>

      <h3 className="tools-header">Tools I Use</h3>
      <div className="tools-container">
        {tools.map((tool, index) => (
          <span key={`tool-${index}`}>{tool}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;

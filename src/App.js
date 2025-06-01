import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

 // Uncomment if you have a Projects component
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact /> 
      </main>
    </>
  );
}

export default App;

import React, {  useEffect } from 'react';
import './index.css';
import portfolioData from './components/PortfolioData';
import Hero from "./components/Hero";
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Header from './components/Header';

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.title = `${portfolioData.name.split(' ')[0]}'s Portfolio`;
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <Header scrollToSection={scrollToSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
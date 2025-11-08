import React from 'react'
import FloatingBubbles from './FloatingBubbles';
import {Mail, Linkedin, Github, ChevronRight } from 'lucide-react';
import portfolioData from './PortfolioData';

const Hero = () => {
  return <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-900 min-h-screen flex items-center justify-center">
    <FloatingBubbles /> 
    
    <div className="relative z-10 text-center max-w-4xl px-4">
      <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight mb-4 animate-fadeInUp">
        Hi, I'm <span className="text-teal-400">{portfolioData.name.split(' ')[0]}</span>.
      </h1>
      <p className="text-xl sm:text-2xl text-gray-400 mb-8 font-light animate-fadeInUp delay-500">
        {portfolioData.tagline}
      </p>
      <div className="flex justify-center space-x-4 mb-10 opacity-0 animate-fadeInUp delay-1000 fill-mode-forwards">
        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-teal-400 hover:scale-110 transition duration-300 shadow-lg">
          <Github className="w-6 h-6" />
        </a>
        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-teal-400 hover:scale-110 transition duration-300 shadow-lg">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href={`mailto:${portfolioData.email}`} className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-teal-400 hover:scale-110 transition duration-300 shadow-lg">
          <Mail className="w-6 h-6" />
        </a>
      </div>
      <button
        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
        className="inline-flex items-center text-teal-400 hover:text-teal-300 text-lg font-semibold border-b-2 border-teal-400 pb-1 transition duration-300"
      >
        View My Work
        <ChevronRight className="w-5 h-5 ml-1" />
      </button>
    </div>
  </section>
};

export default Hero;
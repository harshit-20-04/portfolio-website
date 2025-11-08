import {Linkedin, Github} from 'lucide-react';
import portfolioData from './PortfolioData';

const Footer = () => {
  return <footer className="bg-gray-950 py-8 border-t border-gray-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-gray-500 text-sm mb-4">
        &copy; {new Date().getFullYear()} {portfolioData.name.split(' ')[0]} Vex. All rights reserved. Built with React & Tailwind.
      </p>
      <div className="flex justify-center space-x-6">
        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-400 transition duration-300">
          <Github className="w-5 h-5" />
        </a>
        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-400 transition duration-300">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
};

export default Footer;
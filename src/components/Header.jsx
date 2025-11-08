import { Code } from "lucide-react";
import portfolioData from "./PortfolioData";

const Header = ({ scrollToSection }) => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <a href="#hero" className="text-xl font-bold text-teal-400 hover:text-teal-300 transition duration-300 flex items-center">
        <Code className="w-6 h-6 mr-2" />
        {portfolioData.name.split(' ')[0]}
      </a>
      <nav className="hidden md:flex space-x-6">
        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
          >
            {item}
          </button>
        ))}
      </nav>
      <button
        className="hidden sm:block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md shadow-teal-500/30 transform hover:scale-105"
        onClick={() => scrollToSection('contact')}
      >
        Hire Me
      </button>
    </div>
  </header>
};

export default Header;
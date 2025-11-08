import React, {useState, useRef, useEffect} from 'react'
import getDelayClass from './getDelayClass';
import SectionTitle from './SectionTitle';
import { Briefcase } from 'lucide-react';
import portfolioData from './PortfolioData';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
        if (ref.current) {
            observer.unobserve(ref.current);
        }
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={Briefcase} title="Key Projects" />
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              // Staggered slide-in animation
              className={`
                bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-700 ease-out border border-gray-700
                hover:shadow-teal-500/20 transform hover:-translate-y-1
                ${getDelayClass(index)}
                ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'}
              `}
            >
              <h3 className="text-2xl font-semibold text-teal-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-teal-900/50 text-teal-300 text-xs font-medium px-3 py-1 rounded-full border border-teal-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-5">
                <a href='https://wandrlyfindyourdestination.vercel.app/' target='_blank'><button className="hidden sm:block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md shadow-teal-500/30 transform hover:scale-105">Visit Now</button></a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
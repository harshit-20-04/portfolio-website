import React, { useState, useRef, useEffect } from 'react'
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

        <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
          <div className="flex gap-6 w-max">
            {portfolioData.projects.map((project, index) => (
              <div
                key={project.id}
                className={`
                  snap-start
                  w-[350px]
                  flex-shrink-0
                  flex flex-col
                  bg-gray-800
                  p-6
                  rounded-xl
                  shadow-lg
                  border
                  border-gray-700
                  transition-all
                  duration-700
                  ease-out
                  hover:shadow-teal-500/20
                  hover:-translate-y-2
                  ${getDelayClass(index)}
                  ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold text-teal-400 mb-3">
                  {project.title}
                </h3>

                {/* This grows to fill available space */}
                <div className="flex-grow">
                  <p className="text-gray-400 mb-5 leading-relaxed">
                    {project.description}
                  </p>

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
                </div>

                {/* Always sticks to the bottom */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6"
                >
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-md shadow-teal-500/30 hover:scale-105">
                    Visit Now
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

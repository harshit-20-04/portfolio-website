import { useState, useEffect, useRef } from 'react';
import React from 'react';
import getDelayClass from './getDelayClass';
import portfolioData from './PortfolioData';
import SectionTitle from './SectionTitle';
import { Code } from 'lucide-react';

const Skills = () => {
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
        { threshold: 0.1 }
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
        <section id="skills" className="py-20 bg-gray-800" ref={ref}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle icon={Code} title="Technical Stack" />
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {portfolioData.skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`
                                    px-6 py-3 bg-gray-900 text-lg font-medium text-white rounded-full border-2 border-teal-500 transition-all duration-500 ease-out cursor-default
                                    hover:bg-teal-500 hover:text-gray-900 shadow-md hover:shadow-teal-500/50 transform
                                    ${getDelayClass(index * 2)}
                                    ${isVisible
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-90'}
                                `}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
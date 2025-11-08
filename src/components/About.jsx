import React, {useState, useRef, useEffect} from 'react';
import SectionTitle from './SectionTitle';
import { User } from 'lucide-react';
import portfolioData from './PortfolioData';

const About = () => {
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
        <section id="about" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle icon={User} title="About Me" />
                <div 
                    ref={ref}
                    className={`max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700
                        transition duration-700 ease-out transform 
                        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'}
                    `}
                >
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {portfolioData.bio}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
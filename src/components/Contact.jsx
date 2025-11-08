import SectionTitle from "./SectionTitle";
import { Mail } from "lucide-react";
import portfolioData from "./PortfolioData";


const Contact = () =>{
  return <section id="contact" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <SectionTitle icon={Mail} title="Get In Touch" />
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-400 text-lg mb-8 transition duration-500 transform hover:text-white">
          Have a complex project or a challenge that requires an expert architect? I'm currently open to new opportunities. Let's build something exceptional together.
        </p>
        <a
          href={`mailto:${portfolioData.email}`}
          className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white text-xl font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg shadow-teal-500/50 hover:shadow-teal-400/70 transform hover:scale-[1.05] motion-safe:animate-pulse-once"
        >
          <Mail className="w-6 h-6 mr-3" />
          {portfolioData.email}
        </a>
      </div>
    </div>
  </section>
};

export default Contact;
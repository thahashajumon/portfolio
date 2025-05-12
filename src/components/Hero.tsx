import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white px-4 md:px-8"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
        {/* Abstract shapes for visual interest */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Hi, I'm <span className="text-blue-300">Thaha Shaju Mon</span>
        </h1>
        
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl md:text-3xl font-light mb-8">
            Software Engineer specializing in
            <div className="h-16">
              <span className="block animate-slideUp font-semibold mt-2">
                App Development
              </span>
              <span className="block animate-slideUp animation-delay-1000 font-semibold mt-2">
                Web Development
              </span>
            </div>
          </h2>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
          <button 
            onClick={scrollToContact}
            className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Contact Me
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <a 
            href="#services" 
            className="px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See My Work
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll to About section"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
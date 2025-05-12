import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a 
          href="#home" 
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-blue-600' : 'text-white'
          }`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          THAHA
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['home', 'about', 'services', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize font-medium transition-colors duration-300 hover:text-blue-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col py-4">
            {['home', 'about', 'services', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="capitalize font-medium py-3 px-8 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
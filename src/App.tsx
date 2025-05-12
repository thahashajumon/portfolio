import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Thaha Shaju Mon - Software Engineer";
    
    // Implement reveal-on-scroll animation
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const element = revealElements[i];
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('revealed');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
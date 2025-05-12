import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">THAHA SHAJU MON</h3>
            <p className="text-gray-400 mb-4">
              Software Engineer specializing in App Development and Web Development.
            </p>
            <p className="text-gray-400">
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">India</p>
            <p className="text-gray-400 mb-2">
              <a href="mailto:tmon396@gmail.com" className="hover:text-white transition-colors">
                tmon396@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
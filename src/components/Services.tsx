import React from 'react';
import { SmartphoneIcon, Monitor, TrendingUp } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'App Development',
    description: 'I design and develop mobile applications for iOS and Android platforms using Swift, Kotlin, and Flutter. My focus is on creating intuitive user experiences with clean, efficient code.',
    icon: <SmartphoneIcon className="w-12 h-12 text-blue-500" />,
  },
  {
    title: 'Web Development',
    description: 'I build responsive websites and web applications using modern technologies like React, Next.js, and Vue. I ensure that all my websites are fast, secure, and easy to use.',
    icon: <Monitor className="w-12 h-12 text-blue-500" />,
  },
  {
    title: 'Digital Marketing',
    description: 'I help businesses grow their online presence through effective digital marketing strategies, including SEO, social media marketing, and content creation.',
    icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            I offer a range of services to help businesses and individuals create exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 group"
            >
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
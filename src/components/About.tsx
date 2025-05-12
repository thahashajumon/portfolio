import React from 'react';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'Swift', level: 90 },
  { name: 'HTML & CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'Flutter', level: 75 },
  { name: 'Kotlin', level: 70 },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Who I Am</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate Software Engineer specializing in app and web development. With a strong 
              foundation in multiple programming languages and frameworks, I create elegant solutions 
              to complex problems. My goal is to build applications that are not only functional but also 
              provide an exceptional user experience.
            </p>
            
            <div className="pt-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h4 className="text-lg font-medium text-gray-800">Diploma in Computer Engineering</h4>
                  <span className="text-blue-600 font-medium">2016 - 2019</span>
                </div>
                <p className="text-gray-600">Kerala Govt Polytechnic College Calicut</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%`, animationDelay: '0.5s' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
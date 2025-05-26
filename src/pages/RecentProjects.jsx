import React from 'react';
import { ArrowRight } from 'lucide-react';

const RecentProjects = () => {
  const projects = [
    {
      image: 'disease.png', // Multiple Disease Prediction System
      category: '• Healthcare',
      title: 'Multiple Disease Prediction System',
      link: 'https://multi-diseaseprediction.streamlit.app/',
    },
    {
      image: 'lms-image.png', // Learning Management System
      category: '• Education',
      title: 'Learning Management System',
      link: 'https://rajankannaujiya.pythonanywhere.com/',
    },
  ];

  return (
    <section
      id="work"
      className="bg-gray-900 py-12 px-6 min-h-screen flex flex-col justify-center items-center relative isolate"
    >
      {/* Background Gradient Effect */}
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#1e3a8a] to-[#60a5fa] opacity-40"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Recent Projects</h2>
        </div>

        {/* Centered Project Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image with Frame */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-[#1a86eb] max-w-lg transition-transform duration-300 hover:scale-101"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto border border-gray-700 rounded-lg shadow-lg"
                />
              </a>
              {/* Label and Button Below Image */}
              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold text-lg">
                  {project.title}{' '}
                  <span className="text-gray-400 font-normal"> {project.category}</span>
                </h3>
                {/* View Project Button with Arrow Icon */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-2 rounded-full shadow-md hover:bg-white/11 hover:scale-105 transition-all duration-300 text-base font-semibold"
                >
                  View Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
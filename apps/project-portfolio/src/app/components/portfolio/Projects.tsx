import React from 'react';
import { projects } from '../../libs/data/projects';

function Projects() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-4">
      <section id="projects" className="relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-fadeInUp">
          My Projects
        </h2>
        <p className="mt-4 text-gray-400 text-lg md:text-xl animate-fadeIn delay-500">
          Here are some of the projects I have worked on.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-purple-600 text-white text-sm font-medium mr-2 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-400 hover:text-blue-600 transition duration-200"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        .animate-fadeIn {
          animation: fadeInUp 1.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Projects;

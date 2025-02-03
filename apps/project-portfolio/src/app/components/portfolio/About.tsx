import React, { useState } from 'react';
import { FaDownload, FaUserAlt } from 'react-icons/fa';

function About() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate a download process
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000); // Adjust this duration as needed
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-4">
      <section id="about" className="relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-fadeInUp">
          About Me
        </h2>
        <p className="mt-4 text-gray-300 text-lg md:text-xl animate-fadeIn delay-500">
          I’m a passionate developer with a knack for creating dynamic and
          innovative solutions. Dive into my journey and learn more about my
          skills, experiences, and the drive that fuels my coding adventures.
        </p>

        <div className="mt-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
              <FaUserAlt className="text-purple-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold text-white mb-2">My Journey</h3>
              <p className="text-gray-300">
                From starting with Javascript and Node.js to mastering
                TypeScript, microservices, RESTful APIs, and GraphQL, my journey
                has been filled with exciting challenges and opportunities. I
                thrive on solving complex problems and am always eager to
                embrace new technologies.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
              <FaDownload className="text-blue-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold text-white mb-2">
                Get My Resume
              </h3>
              <p className="text-gray-300">
                Want to see my detailed experience and skills? Download my
                resume and get a comprehensive view of what I bring to the
                table. Click the button below to get started!
              </p>
              <a
                href="https://drive.google.com/uc?export=download&id=1EtxQ825Xbs4Jk5ZjM4WmDGT1eg4bk7mi"
                className={`mt-4 inline-block relative bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-medium px-4 py-2 rounded-full shadow-lg transition duration-300 ease-in-out ${
                  isDownloading
                    ? 'cursor-wait'
                    : 'hover:bg-gradient-to-l hover:from-blue-600 hover:to-blue-500'
                }`}
                onClick={(e) => {
                  if (isDownloading) {
                    e.preventDefault();
                    return;
                  }
                  handleDownload();
                }}
                download
              >
                {isDownloading ? (
                  <div className="relative w-6 h-6 mx-auto">
                    <div className="absolute inset-0 border-t-4 border-blue-300 border-solid rounded-full animate-spin"></div>
                    <div className="absolute inset-0 border-t-4 border-blue-600 border-solid rounded-full animate-pulse"></div>
                  </div>
                ) : (
                  <>
                    <FaDownload className="inline-block mr-2" />
                    Download Resume
                  </>
                )}
              </a>
            </div>
          </div>
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
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: scale(0.9);
            opacity: 1;
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .animate-pulse {
          animation: pulse 1s infinite;
        }
      `}</style>
    </div>
  );
}

export default About;

import React from 'react';

function PortfolioHome() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 opacity-30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <section id="home" className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-fadeInUp">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-gray-400 text-lg md:text-xl animate-fadeIn delay-500">
          Explore my projects, learn more about me, and get in touch.
        </p>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
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
          animation: fadeIn 1s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default PortfolioHome;

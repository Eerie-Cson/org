import React from 'react';
import { FaTools, FaHardHat, FaExclamationTriangle } from 'react-icons/fa';

function Dashboard() {
  return (
    <div
      id="habit-tracker"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 opacity-30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative text-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-4 animate-bounce">
          <FaHardHat className="text-5xl text-indigo-600" />
          <FaTools className="text-5xl text-blue-600" />
        </div>
        <h2 className="mt-6 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-blue-600 animate-fadeInUp">
          Still Under Construction!
        </h2>
        <p className="mt-4 text-indigo-900 text-lg md:text-xl animate-fadeIn delay-500">
          The “Under Construction” sign is just a fancy way of saying, “I’ll get
          to it… eventually.”
          <br />
          Check back later when I’ve managed to finish this task—hopefully
          before ***** ****!
        </p>

        {/* Construction Animation */}
        <div className="mt-8 flex justify-center items-center space-x-8">
          <div className="flex flex-col items-center">
            <FaExclamationTriangle className="text-3xl text-yellow-500 animate-pulse" />
            <div className="w-2 h-10 bg-indigo-500 animate-scaleY"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full animate-bounceY"></div>
          </div>
          <div className="flex flex-col items-center">
            <FaExclamationTriangle className="text-3xl text-yellow-500 animate-pulse" />
            <div className="w-2 h-16 bg-indigo-500 animate-scaleY delay-500"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full animate-bounceY delay-500"></div>
          </div>
          <div className="flex flex-col items-center">
            <FaExclamationTriangle className="text-3xl text-yellow-500 animate-pulse" />
            <div className="w-2 h-20 bg-indigo-500 animate-scaleY delay-1000"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full animate-bounceY delay-1000"></div>
          </div>
        </div>
      </div>

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
        @keyframes scaleY {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.6);
          }
        }
        @keyframes bounceY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fadeInUp {
          animation: fadeIn 1s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out;
        }
        .animate-scaleY {
          animation: scaleY 2s infinite;
        }
        .animate-bounceY {
          animation: bounceY 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default Dashboard;

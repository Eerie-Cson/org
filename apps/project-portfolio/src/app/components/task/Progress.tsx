import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Progress() {
  return (
    <div
      id="progress"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 opacity-30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Coming Soon Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="flex items-center space-x-4">
          <AiOutlineLoading3Quarters className="text-6xl text-blue-500 animate-spin" />
          <AiOutlineLoading3Quarters className="text-6xl text-indigo-500 animate-spin delay-300" />
          <AiOutlineLoading3Quarters className="text-6xl text-purple-500 animate-spin delay-600" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-blue-600 animate-fadeIn">
            Coming Soon
          </h2>
          <p className="text-lg text-indigo-900 animate-fadeIn delay-500">
            Oh, you thought this was ready? 😏
            <br />
            Check back when I&apos;m done procrastinating.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
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
        .animate-spin {
          animation: spin 1.5s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Progress;

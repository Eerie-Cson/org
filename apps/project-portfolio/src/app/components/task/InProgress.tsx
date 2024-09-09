// components/InProgress.js
import React from 'react';

const InProgress = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
        <svg
          className="w-16 h-16 mb-4 animate-spin text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path className="opacity-75" fill="none" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          This Site is Still in Progress
        </h1>
        <p className="text-gray-600 mb-4">
          I am working hard to get things ready. Check back soon!
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default InProgress;

import React from 'react';
import Link from 'next/link';

function TaskHome() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 opacity-40 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 opacity-40 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div> */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 opacity-30 rounded-full filter blur-xl"></div>
      </div>

      <section
        id="task-home"
        className=" relative text-center px-4 sm:px-6 lg:px-8 mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-blue-600 animate-fadeInUp">
          Welcome to My Daily Habits
        </h1>
        <p className="mt-4 text-indigo-900 text-lg md:text-xl animate-fadeIn delay-500">
          Tracking daily routines keeps me on the path to growth.
        </p>

        {/* Call to Action */}
        <div className="mt-8 animate-fadeIn delay-1000">
          <Link
            href="#tasks"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Explore My Progress
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section
        id="tasks"
        className="relative mt-8 text-center px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold text-indigo-700">
              Morning Routine
            </h3>
            <p className="mt-2 text-indigo-800">
              Starting my day with meditation and exercise to stay focused and
              energized.
            </p>
          </div>
          <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold text-indigo-700">
              Learning Goals
            </h3>
            <p className="mt-2 text-indigo-800">
              Committing to learning something new every day, from coding to
              mindfulness.
            </p>
          </div>
          <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold text-indigo-700">
              Evening Reflection
            </h3>
            <p className="mt-2 text-indigo-800">
              Reflecting on the day’s achievements and setting goals for
              tomorrow.
            </p>
          </div>
        </div>
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

export default TaskHome;

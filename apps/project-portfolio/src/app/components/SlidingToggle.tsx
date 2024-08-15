'use client';

import { useState } from 'react';
import { FaBriefcase, FaTasks } from 'react-icons/fa';
import TaskNavbar from './task/TaskNavbar';
import PortfolioHome from './portfolio/PortfolioHome';
import PortfolioNavbar from './portfolio/PortfolioNavbar';
import Projects from './portfolio/Projects';
import About from './portfolio/About';
import Contact from './portfolio/Contact';
import TaskList from './task/TaskList';
import TaskHome from './task/home-components/TaskHome';
import Achivement from './task/AchievementList';
import Dashboard from './task/Dashboard';
import Progress from './task/Progress';

const SlidingToggle = () => {
  const [isPortfolio, setIsPortfolio] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {isPortfolio ? <PortfolioNavbar /> : <TaskNavbar />}

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {isPortfolio ? (
          <>
            <PortfolioHome />
            <Projects />
            <About />
            <Contact />
          </>
        ) : (
          <>
            <TaskHome />
            <TaskList />
            <Achivement />
            <Dashboard />
            <Progress />
          </>
        )}
      </main>

      {/* Fixed Sliding Toggle Button at the Bottom */}
      <div className="fixed bottom-0 left-0 w-full z-20 py-2 shadow-md">
        <div className="relative w-64 mx-auto">
          {/* Sliding Background */}
          <div
            className={`absolute top-0 bottom-0 w-1/2 transition-transform duration-300 ease-in-out ${
              isPortfolio
                ? 'bg-gray-800 translate-x-0'
                : 'bg-indigo-800 translate-x-full'
            }`}
            style={{ borderRadius: '9999px' }}
          ></div>
          {/* Toggle Buttons */}
          <div className="flex">
            <button
              onClick={() => setIsPortfolio(true)}
              className={`w-1/2 py-2 flex items-center justify-center font-medium transition-colors duration-300 ease-in-out relative ${
                isPortfolio
                  ? 'text-white bg-gray-500'
                  : 'text-gray-500 bg-transparent'
              }`}
              style={{ borderRadius: '9999px' }}
            >
              <FaBriefcase
                className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ease-in-out ${
                  isPortfolio ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`transition-opacity duration-300 ease-in-out ${
                  isPortfolio ? 'opacity-100' : 'opacity-0'
                }`}
              >
                My Portfolio
              </span>
            </button>
            <button
              onClick={() => setIsPortfolio(false)}
              className={`w-1/2 py-2 flex items-center justify-center font-medium transition-colors duration-300 ease-in-out relative ${
                !isPortfolio
                  ? 'text-white bg-indigo-500'
                  : 'text-gray-500 bg-transparent'
              }`}
              style={{ borderRadius: '9999px' }}
            >
              <FaTasks
                className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ease-in-out ${
                  !isPortfolio ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`transition-opacity duration-300 ease-in-out ${
                  !isPortfolio ? 'opacity-100' : 'opacity-0'
                }`}
              >
                My Daily Habits
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingToggle;

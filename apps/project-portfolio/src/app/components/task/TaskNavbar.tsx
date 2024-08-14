'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const TaskNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="#tasks" className="text-white text-2xl font-bold">
              Task Manager
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="#task-home"
              className="text-gray-100 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="#tasks"
              className="text-gray-100 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Tasks
            </Link>
            <Link
              href="#achievements"
              className="text-gray-100 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Achievements
            </Link>
            <Link
              href="#habit-tracker"
              className="text-gray-100 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Habit Tracker
            </Link>
            <Link
              href="#progress"
              className="text-gray-100 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Progress
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#task-home"
            className="text-gray-100 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="#tasks"
            className="text-gray-100 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Tasks
          </Link>
          <Link
            href="#achievements"
            className="text-gray-100 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Achievements
          </Link>
          <Link
            href="#habit-tracker"
            className="text-gray-100 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Habit Tracker
          </Link>
          <Link
            href="#progress"
            className="text-gray-100 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Progress
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TaskNavbar;

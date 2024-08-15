import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
  return (
    <div className="mt-8 animate-fadeIn delay-1000">
      <Link
        href="#tasks"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
        aria-label="Explore my progress"
      >
        Explore My Progress
      </Link>
    </div>
  );
};

export default CallToAction;

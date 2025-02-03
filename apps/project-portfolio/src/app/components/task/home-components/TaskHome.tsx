import { useState, useEffect } from 'react';
import ChartSection from './ChartHome';
import QuoteSection from './Quote';
import CallToAction from './Button';
import InfoCards from './InfoCard';
import { quotes } from '../../../libs/data/qoutes';

const barChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Daily Tasks Completed',
      data: [100, 90, 80, 90, 80, 90, 100], // Assuming these are percentage values
      backgroundColor: 'rgba(96, 165, 250, 0.5)',
      borderColor: 'rgba(99, 102, 241, 1)',
      borderWidth: 1,
    },
  ],
};

const getRandomQuote = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
};

const Home: React.FC = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-indigo-50 to-blue-100 overflow-hidden">
      {/* Random Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 20 Shapes with various sizes and rotations */}
        <div className="absolute top-8 left-1/2 w-32 h-32 bg-indigo-400 opacity-30 rotate-45 clip-path-pentagon"></div>
        <div className="absolute top-24 left-1/3 w-32 h-32 bg-rose-200 opacity-10 rotate-30 clip-path-pentagon"></div>
        <div className="absolute top-72 left-96 w-32 h-64 bg-blue-200 opacity-10 -rotate-12 clip-path-quadrilateral"></div>

        <div className="absolute top-16 left-96 w-40 h-40 bg-emerald-200 opacity-30 rotate-0 clip-path-quadrilateral"></div>
        <div className="absolute top-24 left-32 w-36 h-36 bg-pink-400 opacity-25 rotate-60 clip-path-square"></div>
        <div className="absolute top-36 right-24 w-48 h-48 bg-green-300 opacity-20 rotate-15 clip-path-pentagon"></div>
        <div className="absolute top-24 left-96 w-56 h-56 bg-sky-500 opacity-10 rotate-6 clip-path-pentagon"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-300 opacity-30 rotate-45 clip-path-square"></div>
        <div className="absolute top-72 left-1/2 w-32 h-32 bg-indigo-200 opacity-20 rotate-90 clip-path-pentagon"></div>
        <div className="absolute top-3 right-3 w-52 h-52 bg-pink-200 opacity-25 rotate-10 clip-path-quadrilateral"></div>
        <div className="absolute bottom-32 right-1/2 w-60 h-60 bg-purple-200 opacity-30 rotate-120 clip-path-square"></div>
        <div className="absolute top-8 right-32 w-44 h-44 bg-blue-200 opacity-20 rotate-180 clip-path-pentagon"></div>
        <div className="absolute top-48 left-48 w-36 h-36 bg-teal-400 opacity-30 rotate-135 clip-path-quadrilateral"></div>
        <div className="absolute bottom-8 right-1/2 w-40 h-40 bg-indigo-100 opacity-20 rotate-60 clip-path-square"></div>
        <div className="absolute top-40 left-48 w-32 h-32 bg-purple-400 opacity-25 rotate-150 clip-path-pentagon"></div>
        <div className="absolute top-64 right-1/3 w-48 h-48 bg-pink-300 opacity-30 rotate-75 clip-path-quadrilateral"></div>
        <div className="absolute top-16 left-8 w-56 h-56 bg-blue-200 opacity-20 rotate-90 clip-path-square"></div>
        <div className="absolute bottom-24 right-52 w-40 h-40 bg-teal-200 opacity-30 rotate-45 clip-path-pentagon"></div>
        <div className="absolute top-24 right-40 w-32 h-32 bg-indigo-300 opacity-25 rotate-120 clip-path-quadrilateral"></div>
        <div className="absolute bottom-32 left-8 w-52 h-52 bg-purple-300 opacity-20 rotate-60 clip-path-square"></div>
        <div className="absolute top-8 right-56 w-40 h-40 bg-blue-400 opacity-30 rotate-30 clip-path-pentagon"></div>
        <div className="absolute bottom-8 left-50 w-36 h-36 bg-teal-300 opacity-25 rotate-150 clip-path-quadrilateral"></div>
        <div className="absolute top-64 right-8 w-48 h-48 bg-indigo-400 opacity-20 rotate-45 clip-path-square"></div>
      </div>

      {/* Dashboard Section */}
      <div className="flex-1 p-8 md:p-12 lg:p-16 flex items-center justify-center relative">
        <div className="bg-white bg-opacity-90 p-12 rounded-2xl shadow-lg w-full max-w-3xl ">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 blur-sm">
            My Progress Dashboard
          </h2>
          <ChartSection data={barChartData} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-indigo-700 bg-white rounded-md p-4 shadow-md text-indigo-600">
          This page is under construction.
        </div>
      </div>

      {/* Welcome Section */}
      <div className="flex-2 p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center relative">
        <QuoteSection quote={quote} />
        <CallToAction />
        <InfoCards />
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
        .animate-fadeInUp {
          animation: fadeIn 1s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out;
        }

        /* Custom Clip Paths for Shapes */
        .clip-path-pentagon {
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        }
        .clip-path-quadrilateral {
          clip-path: polygon(20% 0%, 80% 0%, 100% 80%, 0% 80%);
        }
        .clip-path-square {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
};

export default Home;

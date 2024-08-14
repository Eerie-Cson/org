import React from 'react';
import AchievementCard from './AchievementCard'; // Import the separated AchievementCard component
import { achievements } from '../../data/achievements';

function Achievements() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 opacity-30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <section
        id="achievements"
        className="relative text-center px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-blue-600 animate-fadeInUp mb-8">
          My Achievements
        </h2>
        <p className="text-indigo-900 text-lg md:text-xl mb-8">
          Here’s a glimpse of the milestones I’ve unlocked through my dedication
          and consistency.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.title}
              title={achievement.title}
              description={achievement.description}
              unlocked={achievement.unlocked}
            />
          ))}
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
      `}</style>
    </div>
  );
}

export default Achievements;

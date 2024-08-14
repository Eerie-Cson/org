import React from 'react';
import {
  FaTrophy,
  FaLock,
  FaAward,
  FaMedal,
  FaFeatherAlt,
  FaStar,
} from 'react-icons/fa';

const iconMap: { [key: string]: React.ReactNode } = {
  'Daily Routine Master': <FaStar className="text-yellow-400 text-3xl" />,
  'Weekly Champion': <FaAward className="text-blue-400 text-3xl" />,
  'Monthly Hero': <FaMedal className="text-green-400 text-3xl" />,
  'Yearly Legend': <FaTrophy className="text-red-400 text-3xl" />,
  'Day One of One day': <FaFeatherAlt className="text-gray-500 text-3xl" />,
};

const AchievementCard = ({
  title,
  description,
  unlocked,
}: {
  title: string;
  description: string;
  unlocked: boolean;
}) => (
  <div
    className={`p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
      unlocked ? 'bg-white text-indigo-700' : 'bg-gray-100 text-gray-500'
    }`}
  >
    <div className="flex items-center justify-center mb-4">
      {iconMap[title] || <FaLock className="text-gray-500 text-3xl" />}
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-sm">{description}</p>
    <p className="mt-2 text-sm">{unlocked ? 'Unlocked' : 'Locked'}</p>
  </div>
);

export default AchievementCard;

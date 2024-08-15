import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => (
  <div className="bg-white bg-opacity-90 p-4 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
    <h3 className="text-2xl font-bold text-indigo-700">{title}</h3>
    <p className="mt-2 text-indigo-800">{description}</p>
  </div>
);

const InfoCards: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12 text-center">
      <InfoCard
        title="Morning Routine"
        description="Scroll through social media and regretting life choice"
      />
      <InfoCard
        title="Learning Goals"
        description="Spend the day procrastinating and binge watching TV."
      />
      <InfoCard
        title="Evening Reflection"
        description="Spend 20 minutes of questioning life choices"
      />
    </div>
  );
};

export default InfoCards;

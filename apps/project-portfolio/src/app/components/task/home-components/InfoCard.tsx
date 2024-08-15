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
        description="Kickstart the day with a structured morning routine to boost productivity and well-being."
      />
      <InfoCard
        title="Learning Goals"
        description="Set specific, measurable learning objectives to advance knowledge and skills."
      />
      <InfoCard
        title="Evening Reflection"
        description="Review the day’s accomplishments and challenges to foster growth and prepare for tomorrow."
      />
    </div>
  );
};

export default InfoCards;

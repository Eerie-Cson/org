import React from 'react';

interface Quote {
  text: string;
  author: string;
}

interface QuoteSectionProps {
  quote: Quote;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote }) => {
  return (
    <div className="text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-500 to-indigo-700 animate-fadeInUp">
        Welcome to My Daily Habits
      </h1>
      <div className="mt-4 text-indigo-900 text-lg md:text-xl animate-fadeIn delay-500">
        <div className="text-indigo-900 animate-wiggle">
          <p className="text-lg italic">&quot;{quote.text}&quot;</p>
          <footer className="mt-2 text-indigo-600 font-semibold">
            ~ {quote.author}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;

// components/SlidingCards.tsx
"use client"
// components/SlidingCards.tsx
import { useState } from 'react';
import { FaChartLine, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface CardProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  description: string;
}

const Card = ({ title, subtitle, icon, description }: CardProps) => {
  return (
    <div className="bg-gradient-to-b from-[#1f3c5b] to-[#68a0d4] rounded-xl p-6 text-white w-full max-w-sm shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold leading-tight">{title}</h2>
          {subtitle && <p className="text-xl leading-tight">{subtitle}</p>}
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const SlidingCards = () => {
  const cards = [
    {
      title: 'Fintech',
      subtitle: 'And Finance',
      icon: <FaChartLine />,
    },
    {
      title: 'Education',
      icon: <FaGraduationCap />,
    },
    {
      title: 'State/Local',
      subtitle: 'Government',
      icon: <FaUniversity />,
    },
  ];

  const description =
    "Studio Envious. Using OpenAI And ElevenLabs Wasn’t Financially Sustainable Given Their Game’s Unexpected Popularity And Replayability. What’s More, Playroom (Part Of Little Umbrella) Experienced Significant Issues With AI Latency.";

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prevCard = () => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="min-h-screen  px-4 py-12">
      {/* Mobile: One card with arrows */}
      <div className="sm:hidden flex flex-col items-center gap-4">
        <Card {...cards[currentIndex]} description={description} />
        <div className="flex justify-center gap-4 text-2xl text-gray-700">
          <button onClick={prevCard} aria-label="Previous">
            <FiChevronLeft />
          </button>
          <button onClick={nextCard} aria-label="Next">
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Tablet & Desktop: Centered grid */}
      <div className="hidden sm:flex justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} {...card} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingCards;

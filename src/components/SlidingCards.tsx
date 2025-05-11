"use client";
import {
  FaChartLine,
  FaGraduationCap,
  FaUniversity,
  FaRobot,
  FaComments,
  FaDatabase,
} from "react-icons/fa";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState, useEffect } from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  description: string;
}

const ServiceCard = ({ title, subtitle, icon, description }: CardProps) => {
  return (
    <Card className="w-full h-[280px] bg-gradient-to-b from-[#1f3c5b] to-[#68a0d4] text-white border-none shadow-lg overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold leading-tight text-white">
              {title}
            </CardTitle>
            {subtitle && (
              <p className="text-xl leading-tight text-white mt-1">
                {subtitle}
              </p>
            )}
          </div>
          <div className="text-4xl ml-4 text-white">{icon}</div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm leading-relaxed text-white/90 line-clamp-4">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const SlidingCards = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const cards = [
    {
      title: "Fintech",
      subtitle: "And Finance",
      icon: <FaChartLine />,
      description:
        "We offer tech-driven solutions for the fintech and finance sector, simplifying payments, analytics, and digital services for businesses.",
    },
    {
      title: "Education",
      icon: <FaGraduationCap />,
      description:
        "We deliver innovative tech solutions for the education sector, enhancing learning experiences and streamlining administrative processes.",
    },
    {
      title: "State/Local",
      subtitle: "Government",
      icon: <FaUniversity />,
      description:
        "We provide tech solutions for the government sector, optimizing operations, improving service delivery, and enhancing citizen engagement.",
    },
    {
      title: "AI Solutions",
      icon: <FaRobot />,
      description:
        "We develop intelligent AI solutions to automate workflows, generate insights, and power decision-making across various industries.",
    },
    {
      title: "Chatbots",
      icon: <FaComments />,
      description:
        "Our custom chatbots improve user engagement, automate support, and provide instant assistance to customers and users.",
    },
    {
      title: "CRM Integration",
      icon: <FaDatabase />,
      description:
        "We integrate powerful CRM systems to manage customer relationships, streamline sales pipelines, and boost team efficiency.",
    },
  ];

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className=" px-4 py-12">
      {/* Mobile: Carousel */}
      <div className="sm:hidden">
        <Carousel setApi={setApi} className="w-full max-w-sm mx-auto">
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index}>
                <ServiceCard {...card} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === current - 1
                    ? "bg-[#1f3c5b] w-3"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* Tablet & Desktop: Centered grid */}
      <div className="hidden sm:flex justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="max-w-sm">
              <ServiceCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingCards;

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectCard = ({ item, index }: { item: any; index: number }) => {
  const cardRef = useRef(null);
  const { scrollYProgress: cardScrollProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start center"],
  });

  const blurValue = useTransform(cardScrollProgress, [0, 1], [100, 0]);
  const opacityValue = useTransform(cardScrollProgress, [0, 1], [0, 1]);
  const bgOpacityValue = useTransform(cardScrollProgress, [0, 1], [0.1, 0.2]);

  const topPosition = 160 + index * 40;

  return (
    <div
      className={`h-[100vh] sticky scroll-smooth`}
      ref={cardRef}
      style={{ top: `${topPosition}px` }}
    >
      <motion.div
        style={{
          backdropFilter: `blur(${blurValue}px)`,
          opacity: opacityValue,
          backgroundColor: `rgba(255, 255, 255, ${bgOpacityValue})`,
        }}
      >
        <Card className="md:w-[55vw] 2xl:w-[50vw] w-[80vw] md:h-[400px] 2xl:h-[500px] flex md:flex-row flex-col justify-between md:px-10 items-center border border-black hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="md:w-[40%] 2xl w-[90%]">
            <Image
              src={item.image}
              height={500}
              width={500}
              quality={100}
              alt="project"
              className="w-full h-[300px] rounded-xl "
            />
          </div>
          <div className="space-y-4 md:w-[60%] w-full">
            <CardHeader className="">
              <CardTitle className="md:text-[40px] text-3xl md:text-left text-center">
                {item.heading}
              </CardTitle>
            </CardHeader>
            <CardContent className="md:text-left text-center text-base">
              <p>{item.description}</p>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProjectCard;

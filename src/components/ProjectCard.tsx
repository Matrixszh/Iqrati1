import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

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
        <Card className="md:w-[50vw] 2xl:w-[50vw] w-[80vw] md:h-[300px] 2xl:h-[500px] flex md:flex-row flex-col justify-between md:px-10 items-center border border-2 border-black">
          <div className="md:w-[35%] 2xl w-[90%]">
            <Image
              src={item.image}
              height={400}
              width={400}
              quality={100}
              alt="project"
              className="w-full h-[200px] 2xl:h-[300px]"
            />
          </div>
          <div className="space-y-4 md:w-[65%] w-full ">
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

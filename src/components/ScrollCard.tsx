"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/proof";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const ScrollCard = () => {
  const cardContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ["start end", "start start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      ref={cardContainer}
      className="flex flex-col"
      style={{ y: useTransform(smoothScroll, [0, 1], [0, 10]) }}
    >
      {projects.map((item, index) => (
        <ProjectCard key={index} item={item} index={index} />
      ))}
            
    </motion.div>
    
    
  );
};

export default ScrollCard;

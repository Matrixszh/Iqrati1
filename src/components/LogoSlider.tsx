import { StaticImageData } from "next/image";
import React from "react";
import ex1 from "../../public/ex1.png";
import ex2 from "../../public/ex2.png";
import ex3 from "../../public/ex3.png";
import ex4 from "../../public/ex2.png";
import ex5 from "../../public/ex5.png";

import Image from "next/image";

const LogoSlider = () => {
  interface Brand {
    image: StaticImageData;
  }

  const brands: Brand[] = [
    { image: ex5 },
    { image: ex1 },
    { image: ex2 },
    { image: ex3 },
    { image: ex4 },
    { image: ex5 },
    { image: ex2 },
    { image: ex1 },
  ];

  return (
    <div>
      <div className="slider-container overflow-hidden py-10">
        <div className="slider">
          {[...brands, ...brands, ...brands].map((data, index) => (
            <div
              key={index}
              className="slide flex items-center justify-center h-[10vh]  lg:h-[20vh] w-full px-4"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={data.image}
                  alt={`Brand ${(index % brands.length) + 1}`}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black -mt-[20vh] h-[30vh] md:-mt-[40vh] md:h-[40vh] relative">
      <div className="flex md:gap-[60vw] gap-[10vw] px-6 md:pl-30 py-10 z-10">
        <div>
          <Image
            src="/ex2.png"
            alt="logo"
            height={200}
            width={200}
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white text-sm font-bold 2xl:text-xl">
            +1 (331) 246-6413
          </p>
          <p className="text-white text-sm font-bold 2xl:text-xl">
            Faizanali.35157@gmail.com
          </p>
        </div>
      </div>
      <hr className="w-full border-gray-600" />

      <div className="absolute bottom-0 left-0 right-0 py-6 flex justify-center">
        <p className="text-white text-xs 2xl:text-sm">
          Copyright © 2025 IQRATI LLC. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

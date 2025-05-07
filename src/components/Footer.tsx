import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black md:-mt-[20vh] md:h-[30vh]  h-[28vh] relative">
      <div className="flex md:gap-[40vw] gap-[10vw] px-6 md:pl-30 py-10 z-10">
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
            IQRATI Mobile App
          </p>
          <p className="text-white text-sm font-normal 2xl:text-xl">
            List and manage your business with the Desis
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

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black md:-mt-[45vh] md:h-[50vh]  h-[58vh] relative">
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
      <div className="grid grid-cols-2 gap-10 p-6 pl-12 md:grid-cols-4 md:gap-4 md:pl-34 py-10 z-10">
        <ul className="text-white text-sm 2xl:text-xl space-y-2">
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              About Us
            </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Contact
            </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              FAQ
            </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Terms
            </button>
          </li>
        </ul>
        <ul className="text-white text-sm space-y-2 2xl:text-xl">
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Services
            </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Products
            </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Pricing
            </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Features
            </button>
          </li>
        </ul>
        <ul className="text-white text-sm space-y-2 2xl:text-xl">
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Blog
            </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              News
            </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Events
            </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Case Studies
            </button>
          </li>
        </ul>
        <ul className="text-white text-sm space-y-2 2xl:text-xl">
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Support
            </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Privacy
            </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Careers
            </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 focus:outline-none cursor-pointer z-10 w-full text-left">
              Partners
            </button>
          </li>
        </ul>
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

import Link from 'next/link';
import React from 'react';

const Intro= () => {
  return (
    <section className="relative w-full text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Heading */}
        <div className="flex flex-col items-center justify-center md:justify-start md:items-start w-full md:w-1/2">
          <h1 className="text-3xl lg:text-4xl text-center md:text-left font-medium leading-tight">
            Want to know <br />
            how we built this<br />
            Empire ?
          </h1>
          <div className="pt-6 pr-6">
          <Link href="/Formpage">
      <button className="px-4 py-1 bg-white text-black text-sm rounded-full shadow-md hover:bg-none hover:bg-[#334960] hover:text-white border border-1 transition duration-300">
        Contact Us
      </button>
    </Link>
          </div>
        </div>
        

        {/* Right Section: Description */}
        <div className="w-full md:w-1/2">
          <p className="text-lg md:text-lg font-normal text-justify text-black">
          At IQRATI, our journey began with a simple idea — to make technology accessible, efficient, and empowering for businesses of all sizes. Fueled by passion, innovation, and a deep understanding of client needs, we turned challenges into opportunities and ideas into solutions. Over time, our commitment to excellence, transparency, and results helped us earn trust, build strong partnerships, and grow into the tech powerhouse we are today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
import Link from "next/link";
import Intro from "@/components/Intro";
import LogoSlider from "@/components/LogoSlider";
import ScrollCard from "@/components/ScrollCard";
import AccordionInfo from "@/components/AccordionInfo";
import Footer from "@/components/Footer";
import SlidingCards from "@/components/SlidingCards";

export default function Home() {
  return (
    <div className="bg-white">
      <main className="overflow-hidden">
        <section
          className="sticky top-0 z-10 h-screen overflow-hidden bg-black"
          id="home"
        >

          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40 hidden md:block"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          >
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40 md:hidden"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          >
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative flex flex-col items-center justify-center h-screen md:gap-[8vh] gap-[8vh]">
            <p
              className="text-md md:text-lg lg:text-2xl font-normal text-center text-white md:max-w-[80vw] max-w-[90vw]"
              id="intro_content"
            >
              DISCOVER IQRATI
            </p>
            <p
              className="text-white md:text-7xl lg:text-7xl text-4xl text-center px-12 md:px-6 "
              id="intro_main"
            >
              Smart Solutions for a Digital World
            </p>

            <div id="intro_button">
              <Link href="/Formpage">
                <button className="px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-none hover:bg-[#334960] hover:text-white border transition duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <section id="about">
        <LogoSlider />
      </section>
      <section>
        <Intro />
      </section>
      <section className="w-full h-[50vh] md:h-[60vh] ">
        <SlidingCards/>
      </section>
      <section className="mb-12" id="FAQ">
        <AccordionInfo />
      </section>
      <section className="flex flex-col items-center justify-center gap-10 ">
        <h1 className="text-center font-semibold text-3xl sticky top-0">
          Proven Projects And Their Results{" "}
        </h1>
        <ScrollCard />
        <div className="md:mt-0 -mt-40 py-5 flex flex-col justify-center items-center" id="intro_button">
              <Link href="/Formpage">
                <button className="px-6 py-3 bg-white text-black rounded-full border border-black shadow-md hover:bg-none hover:bg-[#334960] hover:text-white border transition duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
      </section>
      <Footer />
    </div>
  );
}

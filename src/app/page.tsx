import Link from "next/link";
import Intro from "@/components/Intro";
import LogoSlider from "@/components/LogoSlider";
import ScrollCard from "@/components/ScrollCard";
import AccordionInfo from "@/components/AccordionInfo";
import Footer from "@/components/Footer";
import SlidingCards from "@/components/SlidingCards";

export default function Home() {
  return (
    <div className="bg-white relative">
      <Link href="/Formpage">
        <button className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-[#334960] transition duration-300 border border-white md:px-8 md:py-4 md:bottom-8 md:right-8 hover:cursor-pointer">
          Contact Us
        </button>
      </Link>

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

          <div className="relative flex flex-col items-center justify-center h-screen space-y-8 md:space-y-12">
            <p
              className="text-md md:text-lg lg:text-2xl font-normal text-center text-white md:max-w-[80vw] max-w-[90vw]"
              id="intro_content"
            >
              DISCOVER IQRATI
            </p>
            <p
              className="text-white md:text-7xl lg:text-7xl text-4xl text-center px-12 md:px-6"
              id="intro_main"
            >
              Smart Solutions for a Digital World
            </p>
          </div>
        </section>
      </main>

      <section id="about" className="py-12 md:py-16">
        <LogoSlider />
      </section>

      <section className="py-12 md:py-16">
        <Intro />
      </section>

      <section className="py-12 md:py-16">
        <div className="w-full flex flex-col items-center justify-center">
          <SlidingCards />
        </div>
      </section>

      <section id="FAQ" className="py-12 md:py-16">
        <AccordionInfo />
      </section>

      <section className="pt-12 md:pt-16 pb-6 md:pb-8 -mb-[20vh] md:-mb-[30vh]">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-center font-semibold text-[26px] px-6">
            Proven Projects And Their Results
          </h1>
          <ScrollCard />
        </div>
      </section>

      <Footer />
    </div>
  );
}

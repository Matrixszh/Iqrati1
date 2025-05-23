import Link from "next/link";
import LogoSlider from "@/components/LogoSlider";
import Footer from "@/components/Footer";
import AppointmentForm from "./AppointmentForm";
/* commiting for vercel*/
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
              A One Stop Solution To All Your Event Needs
            </p>

            <div id="intro_button">
              <Link href="#form">
                <button className="px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-none hover:bg-[#334960] hover:text-white border transition duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <section>
        <LogoSlider />
      </section>
      <section className="mb-[5vh] md:mb-[50vh]" id="form">
      <h1 className="text-center font-semibold text-3xl sticky top-0">
          Fill Out The Form{" "}
        </h1>
        <AppointmentForm />
      </section>

      <Footer />
    </div>
  );
}

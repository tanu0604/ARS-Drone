import { useEffect, useState } from 'react';
import Spline from "@splinetool/react-spline";
import { motion } from 'framer-motion';
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import About from '../About/About';
import Drones from '../Drones/Drones';
import ServiceTemplates from '../ServiceTemplates/ServiceTemplates';
import Milestone from '../Milestone/Milestone';
import DroneTemplates from '../Drones/DroneTemplates';
import Introduction from "../DroneServices/Introduction"
export default function Hero() {
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSplineLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <section
        className="relative bg-black min-h-screen flex flex-col lg:flex-row overflow-hidden w-full"
        id="home"
      >
        {/* Spline Scene */}
        <motion.div
          className="w-full h-[40vh] lg:h-screen lg:w-1/2 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: splineLoaded ? 1 : 0, scale: splineLoaded ? 1 : 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          data-aos="fade-right"
        >
          <Spline
            scene="https://prod.spline.design/xNKan9n-w1ZDG9wS/scene.splinecode"
            onLoad={() => setSplineLoaded(true)}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "0 auto",
              transform: "scale(0.9)", // Adjust scale for better fit
            }}
          />
        </motion.div>

        {/* Content Container */}
        <div
          className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12"
          data-aos="fade-left"
        >
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <h1
              className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              data-aos="fade-up"
            >
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                ARS
              </span>
            </h1>
            <p
              className="text-gray-300 text-lg sm:text-xl md:text-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Explore cutting-edge drone technology designed to elevate your
              vision. Discover precision-engineered solutions for all your aerial
              needs.
            </p>
            <button
              className="px-8 py-4 mt-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-medium rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About data-aos="fade-up" id="about" />
      <DroneTemplates/>
      {/* Drones Section */}
      <Drones data-aos="fade-up" />
      {/* Service Templates Section */}
      <ServiceTemplates data-aos="fade-up" />

      {/* Milestone Section */}
      <Milestone data-aos="fade-up" />
    </>
  );
}

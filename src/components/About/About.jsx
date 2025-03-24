import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSplineLoaded(true), 2000); // Fallback in case Spline doesn't load
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
    <section
      className="bg-black min-h-screen w-full p-6 overflow-hidden "
      id="about"
    >
      {/* Header */}
      <div
        className="text-white text-center py-4 text-3xl lg:text-4xl font-bold mt-10"
        data-aos="fade-down"
      >
        About Us
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row-reverse lg:items-center px-3 lg:h-[calc(100%-4rem)]">
        {/* Spline Model */}
        <motion.div
          className="w-full lg:w-1/2 flex-grow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: splineLoaded ? 1 : 0,
            scale: splineLoaded ? 1 : 0.8,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          data-aos="fade-left"
        >
          <div className="w-full aspect-[16/9] lg:aspect-[4/3] max-h-[500px] mx-auto">
            <Spline scene="https://prod.spline.design/WrM7Mwk8-JCXI0eK/scene.splinecode" />
          </div>
        </motion.div>

        {/* About Text */}
        <div
          className="text-white lg:w-1/2 flex items-center py-4 lg:py-0 lg:px-6"
          data-aos="fade-right"
        >
          <p className="text-lg lg:text-xl leading-relaxed lg:leading-loose text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            deserunt natus numquam aliquid suscipit ad expedita, quibusdam
            repellendus excepturi facere esse provident, omnis possimus nemo
            quasi libero, qui quisquam quo explicabo. Fuga debitis modi corrupti
            saepe ratione, consectetur quis asperiores soluta magni
            exercitationem recusandae hic autem odio esse rem.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

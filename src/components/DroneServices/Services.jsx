import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DroneServices from "./DroneServices";
import Working from "./Working";
import Benefits from "./Benefits";
import Template from "../../assets/DroneServicesImgs/Template.png";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="services w-full bg-black p-4 overflow-x-hidden"
      id="drone-services"
    >
      <div className="flex flex-col justify-center items-center w-full">
        {/* Template Image */}
        <div className="p-4" data-aos="zoom-in">
          <img
            src={Template}
            alt="Template"
            className="w-full max-w-4xl h-auto object-contain cursor-pointer"
          />
        </div>

        {/* Various drone services */}
        <div className="w-full" data-aos="fade-up">
          <DroneServices />
        </div>

        {/* Explaining the working */}
        <div className="w-full" data-aos="fade-up">
          <Working />
        </div>

        {/* Benefits of using ARS */}
        <div className="w-full" data-aos="fade-up">
          <Benefits />
        </div>
      </div>
    </section>
  );
}

export default Services;

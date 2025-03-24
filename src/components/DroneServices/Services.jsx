import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Introduction from "./Introduction";
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
    
    // Overflow-x hidden to remove right white space
    document.documentElement.style.overflowX = "hidden";

    return () => {
      document.documentElement.style.overflowX = "auto"; // Cleanup
    };
  }, []);

  return (
    <>
      <section className="services bg-black p-4 w-full overflow-x-hidden" id="drone-services">
        <div className="flex flex-col justify-center items-center bg-black w-full">
          <div className="flex flex-col p-4 space-y-8">
            <div className="flex flex-col items-center mb-6" data-aos="zoom-in">
              {/* Responsive Template Image */}
              <img
                src={Template}
                alt="Template"
                className="w-full max-w-screen-lg h-auto object-contain mb-4 cursor-pointer"
              />
            </div>
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
    </>
  );
}

export default Services;

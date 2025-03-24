import React, { useEffect } from "react";
import img1 from "../../assets/Templates/2.png";
import img2 from "../../assets/Templates/Rent.png";
import img3 from "../../assets/Templates/Sell.png";
import Introduction from "../DroneServices/Introduction";
// Import AOS for animation
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceTemplates() {
  const images = [
    {
      id: 1,
      img: img1,
      desc: "Repair",
      href: "/repair",
    },
    {
      id: 2,
      img: img2,
      desc: "Rent",
      href: "/rent",
    },
    {
      id: 3,
      img: img3,
      desc: "Sell",
      href: "/sell",
    },
  ];

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <>
      <section className="p-4 bg-black min-h-screen w-full">
        <div
          className="text-white flex justify-center items-center py-4 text-3xl lg:text-4xl font-bold"
          data-aos="fade-down" // AOS Animation
        >
          Services We Avail
        </div>
        <Introduction data-aos="fade-up"/>
        <div className="flex flex-col p-4 space-y-8"> {/* Added space between images */}
          {images.map((image, index) => (
            <div
              key={image.id}
              className="flex flex-col items-center mb-6"
              data-aos="zoom-in"
              data-aos-delay={index * 300} 
            >
              <a href={image.href}>
                <img
                  src={image.img}
                  alt={image.desc}
                  className="w-fit h-fit object-cover mb-4 cursor-pointer"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ServiceTemplates;

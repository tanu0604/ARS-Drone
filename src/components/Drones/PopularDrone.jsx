import React, { useEffect } from "react";
import img1 from "../../assets/PopularDrones/1.jpg";
import img2 from "../../assets/PopularDrones/2.jpg";
import img3 from "../../assets/PopularDrones/3.jpg";
import img4 from "../../assets/PopularDrones/4.jpg";
import img5 from "../../assets/PopularDrones/5.jpg";
import Cart from "./Cart";
import AOS from "aos";
import "aos/dist/aos.css";

function PopularDrone() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom settings
  }, []);

  const images = [
    { id: 1, image: img1, heading: "DJ1 Air 3S Fly More Combo" },
    { id: 2, image: img2, heading: "DJ1 Neo Fly More Combo Drone" },
    { id: 3, image: img3, heading: "DJ1 Neo Motion Fly More Combo" },
    { id: 4, image: img4, heading: "DJ1 Mini 3 Pro Fly More Combo" },
    { id: 5, image: img5, heading: "DJ1 Mini 3 Pro Camera" },
  ];

  return (
    <section
      className="bg-black text-white items-center p-10 w-full"
      id="popularDrone"
      data-aos="fade-up"
    >
      <h1
        className="text-white flex justify-center items-center py-4 text-3xl lg:text-4xl font-bold"
        data-aos="fade-right" 
      >
        Most Popular Consumer Drones
      </h1>
      <Cart images={images} />
    </section>
  );
}

export default PopularDrone;

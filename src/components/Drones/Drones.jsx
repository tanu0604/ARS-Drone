import React, { useEffect } from "react";
import img1 from "../../assets/Drones/1.png";
import img2 from "../../assets/Drones/2.png";
import img3 from "../../assets/Drones/3.png";
import img4 from "../../assets/Drones/4.png";
import img5 from "../../assets/Drones/5.jpg";
import Carousel from "./Carousel";
import PopularDrone from "./PopularDrone";
import DroneAccessories from "./DroneAccessories";
import AOS from "aos";
import "aos/dist/aos.css";

function Drones() {
  const images = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
  ];

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
      <section className="bg-black text-white items-center p-10 w-screen" id="drone">
        <h1
          className="text-white flex justify-center items-center py-4 text-3xl lg:text-4xl font-bold"
          data-aos="fade-down"
        >
          Our Drones
        </h1>
        <Carousel images={images} />
        <PopularDrone/>
        <DroneAccessories/>
      </section>
    </>
  );
}

export default Drones;

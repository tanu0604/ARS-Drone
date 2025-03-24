import React, { useRef, useEffect } from "react";
import img1 from "../../assets/Accessories/Playloads.png";
import img2 from "../../assets/Accessories/Charging.png";
import img3 from "../../assets/Accessories/Remote.png";
import img4 from "../../assets/Accessories/Guard.png";
import img5 from "../../assets/Accessories/DIY.png";
import img6 from "../../assets/Accessories/Battery.png";
import img7 from "../../assets/Accessories/Propeller.png";
import img8 from "../../assets/Accessories/Combo.png";
import img9 from "../../assets/Accessories/Cases.png";

import './DroneAccessories.css'
const accessories = [
  { id: 1, image: img1, desc: "Payloads" },
  { id: 2, image: img2, desc: "Charging Hubs" },
  { id: 3, image: img3, desc: "Remote Controller" },
  { id: 4, image: img4, desc: "Propeller Guard" },
  { id: 5, image: img5, desc: "DIY Components" },
  { id: 6, image: img6, desc: "Batteries" },
  { id: 7, image: img7, desc: "Propellers" },
  { id: 8, image: img8, desc: "Combo Kits" },
  { id: 9, image: img9, desc: "Cases" },
];

export default function DroneAccessories() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      let start = 0;
      const scrollStep = 1; 
      const scrollInterval = 20;

      const scroll = () => {
        start += scrollStep;
        if (start >= scrollContainer.scrollWidth / 2) {
          start = 0;
        }
        scrollContainer.scrollTo(start, 0);
      };

      const interval = setInterval(scroll, scrollInterval);

      return () => clearInterval(interval); 
    }
  }, []);

  return (
    <section className="w-full h-screen bg-black flex flex-col justify-center items-center overflow-hidden" id="accessories">
      <h1 className="text-white text-3xl lg:text-5xl font-bold mb-12">
        Accessories for you
      </h1>

      <div className="w-full overflow-hidden p-4">
        <div
          ref={scrollRef}
          className="flex space-x-8"
          style={{
            width: `${accessories.length * 300 * 2}px`, 
            display: "flex",
            animation: "scrolling 30s linear infinite", 
          }}
        >
          {accessories.concat(accessories).map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex flex-col items-center flex-shrink-0"
            >
              <div className="w-48 h-48 rounded-full border-4 border-white shadow-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.desc}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white mt-4 text-center text-lg font-semibold">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useEffect } from 'react';
import Cost from "../../assets/Benefits/Cost.jpg";
import Time from "../../assets/Benefits/Time.jpg";
import Access from "../../assets/Benefits/Access.jpg";
import Data from "../../assets/Benefits/Data.jpg";
import Nature from "../../assets/Benefits/Nature.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Benefits() {

  const benefits = [
    {
      id: 1,
      image: Cost,
      title: "Cost-Effective Solutions",
      desc: "Drones reduce operational costs by eliminating the need for expensive equipment and labor-intensive methods. They provide efficient, budget-friendly alternatives for tasks like aerial photography, surveying, and inspections."
    },
    {
      id: 2,
      image: Data,
      title: "High-Quality Data Collection",
      desc: "With advanced cameras and sensors, drones can capture high-resolution images and videos, ensuring precision and accuracy for projects like mapping, agriculture monitoring, and infrastructure inspections."
    },
    {
      id: 3,
      image: Access,
      title: "Hard-to-Reach Access",
      desc: "Drones can easily access hard-to-reach or dangerous areas, minimizing risk for workers and providing data in locations that are difficult or impossible to access using traditional methods."
    },
    {
      id: 4,
      image: Time,
      title: "Time-Saving",
      desc: "Drones significantly reduce the time needed for tasks such as surveying or inspections. What might take hours or days with manual labor can be completed in a fraction of the time."
    },
    {
      id: 5,
      image: Nature,
      title: "Environmental Benefits",
      desc: "Drones are eco-friendly, using less energy and reducing the carbon footprint compared to traditional equipment, making them an ideal choice for sustainable projects."
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animation triggers only once
    });
  }, []);

  return (
    <section className='py-12 bg-black flex justify-center items-center flex-col'>
      <div>
        <h1
          className='text-white text-center md:text-3xl text-xl p-3 font-bold'
          data-aos="fade-up" 
        >
          Elevate Your World with Drone Innovation
        </h1>
      </div>

      <div className='benefits-carousel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 items-center'>
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            className="benefit-card h-[26rem] w-80 p-4 m-4 bg-white text-center rounded-md shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 100} 
          >
            <img
              src={benefit.image}
              alt={benefit.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
            <p className="mt-2 text-gray-600">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;

import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Milestone() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      delay: 200,
    });
  }, []);

  const milestones = [
    { value: 100, suffix: "+", title: "No of Customers served since 2020" },
    { value: 100, suffix: "+", title: "No of Drones Sold" },
    { value: 100, suffix: "+", title: "No of Products Collection" },
  ];

  return (
    <section className="py-16 bg-black text-white w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-bold text-center mb-12 text-white"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          Our Milestones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="text-center border border-gray-700 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay={`${300 + index * 200}`}
            >
              <h3 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                <CountUp end={milestone.value} suffix={milestone.suffix} duration={4} />
              </h3>
              <p className="text-lg text-gray-300">{milestone.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

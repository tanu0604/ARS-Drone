import React, { useEffect } from "react";
import video1 from "../../assets/Videos/Video1.mp4";
import video2 from "../../assets/Videos/Video2.mp4";
import video3 from "../../assets/Videos/Video3.mp4";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure you import the AOS styles

function DroneTemplates() {
  const visuals = [
    {
      id: 1,
      vid: video1,
    },
    {
      id: 2,
      vid: video2,
    },
    {
      id: 3,
      vid: video3,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      easing: "ease-in-out", // Set easing for smooth animation
      once: true, // Only trigger animation once
    });
  }, []);

  return (
    <section className="bg-black w-screen flex flex-col p-4 space-y-8">
      <div
        className="text-white flex justify-center items-center py-4 text-3xl lg:text-4xl font-bold"
        data-aos="fade-down"
      >
        Capture Beautiful Moments with our Drones
      </div>
      <div className="grid gap-5 p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {visuals.map((visual) => (
        <div key={visual.id} className="flex justify-center" data-aos="fade-up">
          <video
            src={visual.vid}
            autoPlay
            loop
            muted
            className="w-96 h-60 rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
      </div>
     
    </section>
  );
}

export default DroneTemplates;

import React, { useEffect } from "react";
import SellImg from "../../assets/Services/Sell.jpg";
import SellForm from "./SellForm";
import AOS from "aos";
import "aos/dist/aos.css";

function Sell() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="bg-black p-4 min-h-screen flex flex-col space-y-5 items-center w-full"
      id="sell"
    >
      <div className="p-3">
        <h1
          className="text-4xl font-bold text-white mt-7 p-4 flex justify-center"
          data-aos="fade-up" // Animation for the header
        >
          Sell your Drone{" "}
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <img
          src={SellImg}
          alt="Sell"
          className="w-full max-w-[1200px] h-auto lg:max-h-[400px] sm:max-h-[200px]"
          data-aos="zoom-in" // Animation for the image
        />
      </div>

      <div
        className="flex flex-col space-y-4 text-white p-6"
        data-aos="fade-up" // Animation for the "Why Buy from Us?" section
      >
        <h2 className="text-xl font-semibold">Why Buy from Us?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>High-Quality Drones:</strong> We offer a wide range of
            professional drones with cutting-edge technology to suit your needs.
          </li>
          <li>
            <strong>Competitive Pricing:</strong> Get the best value for your
            investment with our affordable pricing and exciting offers.
          </li>
          <li>
            <strong>Warranty & Support:</strong> All drones come with a
            comprehensive warranty and dedicated technical support.
          </li>
          <li>
            <strong>Customization Options:</strong> We provide tailored
            solutions to meet your specific requirements.
          </li>
        </ul>
      </div>

      <div
        data-aos="fade-up" // Animation for the "SellForm" section
      >
        <SellForm />
      </div>

      <div
        className="flex flex-col space-y-4 text-white p-6"
        data-aos="fade-up" // Animation for the "Available Models" section
      >
        <h2 className="text-xl font-semibold">Available Models</h2>
        <p>
          Explore our diverse range of drones, from compact models for beginners
          to advanced drones for professional use.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Drone A: Ideal for beginners</li>
          <li>Drone B: Equipped with HD cameras for photography</li>
          <li>Drone C: Professional-grade for industrial applications</li>
        </ul>
      </div>

      <div
        className="flex flex-col items-center p-6 space-y-4"
        data-aos="fade-up" // Animation for the "Contact Us" section
      >
        <h2 className="text-white text-xl font-semibold">Contact Us</h2>
        <p className="text-white text-center">
          Have questions or need guidance? Fill out our contact form or reach
          out to us directly for personalized recommendations.
        </p>
        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded hover:opacity-90">
          Inquire Now
        </button>
      </div>
    </section>
  );
}

export default Sell;

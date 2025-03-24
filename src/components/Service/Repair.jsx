import React, { useEffect } from 'react';
import Form from './Form';
import RepairImg from '../../assets/Services/Repair.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Repair() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black px-4 py-6 min-h-screen flex flex-col space-y-5 w-full" id="repair">
      {/* Header */}
      <div className="mt-4">
        <h1
          className="text-4xl font-bold text-white p-4 text-center"
          data-aos="fade-up"
        >
          Drone Repair Service
        </h1>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center my-4">
        <img
          src={RepairImg}
          alt="Repair"
          className="max-w-full h-auto object-contain lg:max-h-[400px] sm:max-h-[300px]"
          data-aos="zoom-in"
        />
      </div>

      {/* Form Section */}
      <div data-aos="fade-up">
        <h2 className="text-white text-center font-semibold text-xl mb-4">
          Submit Your Repair Request
        </h2>
        <Form />
      </div>

      {/* Terms and Conditions */}
      <div
        className="flex flex-col space-y-4 text-white px-4 py-6 items-center"
        data-aos="fade-up"
      >
        <h2 className="text-xl font-semibold">Repair Terms and Conditions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ensure the drone is properly packaged before sending.</li>
          <li>Repair costs are subject to an initial evaluation.</li>
          <li>We are not liable for any damage during shipping.</li>
        </ul>
      </div>

      {/* Contact Button */}
      <div
        className="flex justify-center mt-4"
        data-aos="fade-up"
      >
        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded hover:opacity-90">
          Contact Us for More Info
        </button>
      </div>
    </section>
  );
}

export default Repair;

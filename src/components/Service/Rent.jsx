import React, { useEffect } from "react";
import Form from "./Form";
import RentImg from "../../assets/Services/Rent.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Rent() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can customize the duration
  }, []);

  return (
    <>
      <section className="bg-black p-4 min-h-screen flex flex-col space-y-5 w-screen" id="rent">
        <div className="p-3">
          <h1
            className="text-4xl font-bold text-white mt-7 p-4 flex justify-center"
            data-aos="fade-up" // AOS animation for the header
          >
            Rent a Drone?
          </h1>
        </div>

        <div className="w-full flex justify-center">
          <img
            src={RentImg}
            alt="Rent"
            className="w-full max-w-[1200px] h-auto lg:max-h-[400px] sm:max-h-[200px]"
            data-aos="zoom-in" 
          />
        </div>

        <div data-aos="fade-up">
          <Form />
        </div>

        <div className="flex flex-col space-y-4 justify-center items-center p-6">
          <h1
            className="text-white font-bold text-3xl"
            data-aos="fade-up" 
          >
            Terms and Conditions
          </h1>
          <ul className="text-white p-5 list-disc space-y-4">
            <li data-aos="fade-up" data-aos-delay="200">
              <strong>Rental Agreement:</strong> The customer must sign a rental agreement before the drone is handed over.
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <strong>Age Requirement:</strong> The customer must be at least 18 years old to rent a drone.
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              <strong>Identification:</strong> A valid government-issued ID (e.g., Aadhar card) must be provided during the rental process.
            </li>
            <li data-aos="fade-up" data-aos-delay="800">
              <strong>Payment:</strong> Full payment, including any security deposit, must be made prior to receiving the drone.
            </li>
            <li data-aos="fade-up" data-aos-delay="1000">
              <strong>Security Deposit:</strong> A refundable security deposit will be held and returned upon safe return of the drone in its original condition.
            </li>
            <li data-aos="fade-up" data-aos-delay="1200">
              <strong>Usage Guidelines:</strong> The drone must be operated in compliance with local laws and regulations. Flying in restricted areas is strictly prohibited.
            </li>
            <li data-aos="fade-up" data-aos-delay="1400">
              <strong>Damage Liability:</strong> The customer is fully responsible for any damage or loss of the drone during the rental period.
            </li>
            <li data-aos="fade-up" data-aos-delay="1600">
              <strong>Inspection:</strong> The drone will be inspected before and after rental. Any damages will be assessed and deducted from the security deposit.
            </li>
            <li data-aos="fade-up" data-aos-delay="1800">
              <strong>Flight Experience:</strong> Customers without prior drone flying experience must undergo a brief training session or demonstrate knowledge of drone operation.
            </li>
            <li data-aos="fade-up" data-aos-delay="2000">
              <strong>Prohibited Activities:</strong> The drone must not be used for illegal activities, spying, or any operations that may endanger people or property.
            </li>
            <li data-aos="fade-up" data-aos-delay="2200">
              <strong>Rental Period:</strong> The rental period must be strictly adhered to. Late returns may incur additional charges.
            </li>
            <li data-aos="fade-up" data-aos-delay="2400">
              <strong>Cancellations:</strong> Cancellation charges may apply if the rental booking is canceled within 24 hours of the scheduled pickup time.
            </li>
            <li data-aos="fade-up" data-aos-delay="2600">
              <strong>Weather Conditions:</strong> The drone must not be flown in adverse weather conditions such as heavy rain, strong winds, or extreme temperatures.
            </li>
            <li data-aos="fade-up" data-aos-delay="2800">
              <strong>Technical Support:</strong> Basic technical support will be provided during the rental period. Any misuse that leads to drone malfunction will be the renter’s responsibility.
            </li>
            <li data-aos="fade-up" data-aos-delay="3000">
              <strong>Refund Policy:</strong> Refunds for early return of the drone will not be provided unless otherwise specified in the rental agreement.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Rent;

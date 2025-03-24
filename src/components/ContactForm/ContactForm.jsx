import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-hot-toast";
import image from '../../assets/Templates/Contact.png'
export default function ContactForm() {
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [droneModel, setDroneModel] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [budget, setBudget] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      delay: 200,
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "32281952-ab79-4f5a-8b4a-40f9227f06e6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        setResult("Form Submitted Successfully");
        event.target.reset();
        setName("");
        setEmail("");
        setMessage("");
        setDroneModel("");
        setInquiryType("");
        setBudget("");
        setContactMethod("");
      } else {
        toast.error(data.message || "Something went wrong!");
        setResult(data.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Failed to submit the form");
      setResult("Failed to submit the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen w-full flex flex-col space-y-5 items-center justify-center p-20 sm:px-6 lg:px-8 bg-black text-white"
      id="contact"
    >

      <div className="p-4">
        <img src={image} alt="Contact" className="w-fit" data-aos="fade-down" />
      </div>
      <div
        className="max-w-lg w-full border border-white p-6 rounded-lg"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2
          className="text-center text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          Contact Us - Drone Queries
        </h2>
        <form className="space-y-4" onSubmit={onSubmit}>
          {/* Name Input */}
          <div data-aos="fade-up" data-aos-delay="700">
            <label htmlFor="name" className="block mb-2">
              Name: <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full p-2 rounded bg-black border border-white text-white"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div data-aos="fade-up" data-aos-delay="900">
            <label htmlFor="email" className="block mb-2">
              Email: <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full p-2 rounded bg-black border border-white text-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Drone Model/Type Input */}
          <div data-aos="fade-up" data-aos-delay="1000">
            <label htmlFor="droneModel" className="block mb-2">
              Drone Model/Type:
            </label>
            <input
              id="droneModel"
              name="droneModel"
              type="text"
              className="w-full p-2 rounded bg-black border border-white text-white"
              placeholder="Enter the drone model/type (if applicable)"
              value={droneModel}
              onChange={(e) => setDroneModel(e.target.value)}
            />
          </div>

          {/* Inquiry Type Dropdown */}
          <div data-aos="fade-up" data-aos-delay="1100">
            <label htmlFor="inquiryType" className="block mb-2">
              Purpose of Inquiry: <span className="text-red-500">*</span>
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              required
              className="w-full p-2 rounded bg-black border border-white text-white"
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="purchase">Purchase</option>
              <option value="repair">Repair</option>
              <option value="technical-support">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Budget Range Input */}
          <div data-aos="fade-up" data-aos-delay="1200">
            <label htmlFor="budget" className="block mb-2">
              Budget Range (Optional):
            </label>
            <input
              id="budget"
              name="budget"
              type="text"
              className="w-full p-2 rounded bg-black border border-white text-white"
              placeholder="Enter your budget range"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>

          {/* Preferred Contact Method */}
          <div data-aos="fade-up" data-aos-delay="1300">
            <label htmlFor="contactMethod" className="block mb-2">
              Preferred Contact Method:
            </label>
            <select
              id="contactMethod"
              name="contactMethod"
              className="w-full p-2 rounded bg-black border border-white text-white"
              value={contactMethod}
              onChange={(e) => setContactMethod(e.target.value)}
            >
              <option value="">Select a method</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>

          {/* Message Input */}
          <div data-aos="fade-up" data-aos-delay="1400">
            <label htmlFor="message" className="block mb-2">
              Message: <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 rounded bg-black border border-white text-white"
              placeholder="Enter your message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div data-aos="fade-up" data-aos-delay="1500">
            <button
              type="submit"
              className={`w-full py-2 rounded font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 ${
                loading ? "opacity-70" : "hover:opacity-90"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        {result && (
          <p className="mt-4 text-center text-sm text-gray-300">{result}</p>
        )}
      </div>
    </section>
  );
}

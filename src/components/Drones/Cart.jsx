import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function Cart({ images }) {
  const [quantities, setQuantities] = useState(() =>
    images.reduce((acc, item) => {
      acc[item.id] = 1; 
      return acc;
    }, {})
  );

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const increment = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const handleAddToCart = (id) => {
    toast.success(`Added ${quantities[id]} of item ID ${id} to cart!`, {
      position: "top-center", // Customize the position of the toast
      autoClose: 3000, // Toast will disappear after 3 seconds
      hideProgressBar: true, // Optionally hide the progress bar
      closeOnClick: true, // Close toast when clicked
    });
  };

  return (
    <div
      className="grid grid-cols-1 content-center md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
      data-aos="fade-up" // AOS animation
    >
      {images.map((img) => (
        <div
          key={img.id}
          className="shadow-lg rounded-lg overflow-hidden p-4 bg-gray-800 text-white hover:scale-105 transition-transform duration-300"
          data-aos="zoom-in" // AOS animation
        >
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center">
              <img
                src={img.image}
                alt={`Drone ${img.id}`}
                className="w-56 h-48 object-cover rounded-lg"
              />
            </div>

            <h3
              className="text-center text-lg font-bold mt-4"
              data-aos="fade-up"
            >
              {img.heading}
            </h3>

            <div className="flex justify-center items-center space-x-4 mt-4">
              <button
                onClick={() => decrement(img.id)}
                className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
              >
                -
              </button>
              <span className="text-xl font-semibold text-white">
                {quantities[img.id]}
              </span>
              <button
                onClick={() => increment(img.id)}
                className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
              >
                +
              </button>
            </div>

            <div className="flex justify-center items-center mt-4">
              <motion.button
                className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-700 text-white text-md font-medium rounded-full hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAddToCart(img.id)}
                data-aos="fade-up"
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </div>
      ))}
      {/* ToastContainer component renders the toast notifications */}
      <ToastContainer />
    </div>
  );
}

export default Cart;

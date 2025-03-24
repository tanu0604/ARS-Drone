import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

function Introduction() {
  return (
    <section className="Drone-introduction bg-black min-h-screen w-full flex items-center p-4 lg:p-6">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-6 lg:items-center">
        {/* 3D Model Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 w-full h-60 lg:h-auto aspect-w-16 aspect-h-9"
        >
          <div className="relative w-full h-64">
            <Spline scene="https://prod.spline.design/UtOrP9Wtpx1v4Nxq/scene.splinecode" />
          </div>
        </motion.div>

        {/* Introduction Section */}
        <div className="flex flex-col space-y-4 lg:w-1/2">
          {/* Heading */}
          <motion.h2
            className="text-white text-center lg:text-left text-3xl lg:text-4xl font-bold"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Sky Solutions
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-white text-justify leading-relaxed text-base lg:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            qui illo possimus accusantium, ipsa placeat dolorem tempora vitae ad
            amet maiores beatae ab iste minima voluptatibus laudantium omnis
            dolore quas? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laboriosam assumenda, ratione eveniet adipisci natus error?
            Saepe vero voluptas quisquam earum amet, alias quo pariatur eveniet,
            voluptatem praesentium eaque. Vitae excepturi optio rerum suscipit
            distinctio nulla saepe, sed voluptatum impedit modi!
          </motion.p>

          {/* Direct Link to DroneServices page */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="/drone-services"
              className="px-6 py-3 mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base font-medium rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;

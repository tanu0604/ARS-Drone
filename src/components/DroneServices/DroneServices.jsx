import { useEffect } from "react";
import Carousel from "./Carousel";
import Working from "./Working";
import Benefits from "./Benefits";
import Introduction from "./Introduction"
import { motion } from "framer-motion";
import Aerial from "../../assets/DroneServicesImgs/Aerial.jpg";
import Agriculture from "../../assets/DroneServicesImgs/Agriculture.jpg";
import Custom from "../../assets/DroneServicesImgs/Custom.jpg";
import Delivery from "../../assets/DroneServicesImgs/Delivery.jpg";
import Ceremony from "../../assets/DroneServicesImgs/Ceremony.jpeg";
import Inspection from "../../assets/DroneServicesImgs/Inspection.jpg";
import Mapping from "../../assets/DroneServicesImgs/Mapping.jpg";
import Search from "../../assets/DroneServicesImgs/Search.jpg";
import Security from "../../assets/DroneServicesImgs/Security.jpg";
import Wildlife from "../../assets/DroneServicesImgs/Wildlife.jpeg";


import AOS from 'aos';
import 'aos/dist/aos.css'; 

// Drone service data
const droneServices = [
  {
    id: 1,
    title: "Aerial Surveillance",
    description: "Capturing high-altitude images for surveillance and monitoring.",
    image: Aerial,
    link: "#",
    tags: ["Drone", "Surveillance"],
  },
  {
    id: 2,
    title: "Agriculture Monitoring",
    description: "Using drones to monitor crop health and optimize farming.",
    image: Agriculture,
    link: "#",
    tags: ["Agriculture", "Technology"],
  },
  {
    id: 3,
    title: "Custom Drone Solutions",
    description: "Tailored drone services for specific customer needs.",
    image: Custom,
    link: "#",
    tags: ["Custom", "Innovation"],
  },
  {
    id: 4,
    title: "Delivery Services",
    description: "Efficient and fast delivery using drones for various industries.",
    image: Delivery,
    link: "#",
    tags: ["Delivery", "Technology"],
  },
  {
    id: 5,
    title: "Event Coverage",
    description: "Drone services for capturing events from unique perspectives.",
    image: Ceremony,
    link: "#",
    tags: ["Events", "Media"],
  },
  {
    id: 6,
    title: "Inspection Services",
    description: "Using drones for industrial and infrastructure inspections.",
    image: Inspection,
    link: "#",
    tags: ["Inspection", "Tech"],
  },
  {
    id: 7,
    title: "Mapping and Surveying",
    description: "High-precision mapping and surveying with drones.",
    image: Mapping,
    link: "#",
    tags: ["Mapping", "Surveying"],
  },
  {
    id: 8,
    title: "Search and Rescue",
    description: "Leveraging drones in search and rescue operations.",
    image: Search,
    link: "#",
    tags: ["Search", "Rescue"],
  },
  {
    id: 9,
    title: "Security Services",
    description: "Using drones for enhanced security surveillance.",
    image: Security,
    link: "#",
    tags: ["Security", "Surveillance"],
  },
  {
    id: 10,
    title: "Wildlife Monitoring",
    description: "Monitoring wildlife with minimal disturbance using drones.",
    image: Wildlife,
    link: "#",
    tags: ["Wildlife", "Environment"],
  },
];

export default function DroneServices() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-black w-full overflow-hidden">
      <div className="container mx-auto px-2 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
          data-aos="fade-up"
        >
          Drone Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-xl mx-auto"
          data-aos="fade-up"
        >
          Explore our wide range of drone-based services tailored for various
          industries.
        </motion.p>
      </div>

      {/* Pass droneServices as props to the Carousel */}
      <Carousel items={droneServices} boxWidth="300px" boxHeight="400px" />
    </section>  );
}

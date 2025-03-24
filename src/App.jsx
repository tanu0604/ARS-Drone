import React, { useEffect } from "react"; // Correct React import
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import Nav from "./components/Navigation/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Drones from "./components/Drones/Drones";
import PopularDrone from "./components/Drones/PopularDrone";
import Rent from "./components/Service/Rent";
import Sell from "./components/Service/Sell";
import Repair from "./components/Service/Repair";
import Footer from "./components/Footer/Footer";
import DroneAccessories from "./components/Drones/DroneAccessories";
import ContactForm from "./components/ContactForm/ContactForm";
import Services from "./components/DroneServices/Services";
import Introduction from "./components/DroneServices/Introduction";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Nav />
      {/* Routes for other components */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/drone" element={<Drones />} />
        <Route path="/popularDrone" element={<PopularDrone />} />
        <Route path="/accessories" element={<DroneAccessories />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/drone-intro" element={<Introduction/>}/>
        <Route path="/drone-services" element={<Services />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

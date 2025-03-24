import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Products", 
    subItems: [
      { name: "Drones", href: "/drone" },
      { name: "Popular Drones", href: "/popularDrone" },
      { name: "Accessories", href: "/accessories" }
    ]
  },
  { 
    name: "Services", 
    subItems: [
      { name: "Drone Services", href: "/drone-services" },
      { name: "Repair your Drone", href: "/repair" },
      { name: "Sell your Drone", href: "/sell" },
      { name: "Rent a Drone", href: "/rent" },
    ]
  },
  { name: "Contact Us", href: "/contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown in mobile view

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${hasScrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <span className="text-white font-bold text-xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                ARS
              </span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-8 ">
            {navItems.map((item) => (
              <motion.div key={item.name} className="relative group hover:underline">
                {item.subItems ? (
                  <>
                    <motion.button
                      className="text-sm font-medium text-gray-300 hover:underline hover:text-white flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.name}
                      <ChevronDown className="ml-2" size={16} />
                    </motion.button>
                    <div className="absolute left-0 mt-2 w-48 hidden group-hover:block bg-black shadow-lg rounded-md">
                      {item.subItems.map((subItem) => (
                        <Link key={subItem.name} to={subItem.href} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={item.href} className="text-sm font-medium text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black/50"
            aria-label="Main menu"
            aria-expanded="false"
          >
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-black/90 backdrop-blur-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <div className="space-y-1">
                      <span
                        className="block px-3 py-2 text-base font-medium text-gray-300 cursor-pointer"
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)} // Toggle dropdown
                      >
                        {item.name}
                        <ChevronDown className="ml-2 inline" size={16} />
                      </span>
                      {openDropdown === item.name && (
                        <div className="space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link key={subItem.name} to={subItem.href} className="block px-3 py-1 text-sm text-gray-300 pl-6 hover:bg-black/50">
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-black/50">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

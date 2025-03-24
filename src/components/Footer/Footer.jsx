import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const footerItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Products", 
    subItems: [
      { name: "Drones", href: "/drone" },
      { name: "Popular Drones", href: "/popularDrone" }
    ]
  },
  { 
    name: "Services", 
    subItems: [
      {name:"Drone Services" , href:"/drone-services"},
      { name: "Repair your Drone", href: "/repair" },
      { name: "Sell your Drone", href: "/sell" },
      { name: "Rent a Drone", href: "/rent" },
    ]
  },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, [location]);

  return (
    <footer className="bg-black py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Main Navigation */}
          <div data-aos="fade-right">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-4">
              {footerItems.map((item) => (
                <li key={item.name}>
                  {item.subItems ? (
                    <div className="space-y-2">
                      <span className="block font-medium text-gray-300 cursor-pointer">{item.name}</span>
                      <ul className="space-y-1 pl-4">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link to={subItem.href} className="text-gray-300 hover:text-pink-500">
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link to={item.href} className="text-gray-300 hover:text-pink-500">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div data-aos="fade-up">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div data-aos="fade-left">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>1234 Street, City, Country</li>
              <li>Email: support@example.com</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
          </div>

          {/* Additional Links */}
          <div data-aos="fade-left">
            <h3 className="text-lg font-semibold mb-4">More Info</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-pink-500">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-pink-500">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} ARS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

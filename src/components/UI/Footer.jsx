import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import {  FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export const Footers = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  const footerIcon = {
    MdPlace: <MdPlace className="text-2xl" />,
    IoCallSharp: <IoCallSharp className="text-2xl" />,
    TbMailPlus: <TbMailPlus className="text-2xl" />,
  };

  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/feed/" },
    { icon: <FaGithub />, url: "https://github.com/" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                WorldAtlas
              </span>
            </h2>
            <p className="text-gray-400 mb-6">
              Discover the world through our comprehensive collection of country data, facts, and insights.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={`Follow us on ${social.icon.type.name.replace('Fa', '')}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-800">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {footerContact.map((curData, index) => {
                const { icon, title, details } = curData;
                return (
                  <div 
                    className="flex flex-col items-center text-center p-5 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-indigo-500" 
                    key={index}
                  >
                    <div className="icon flex-shrink-0 text-indigo-400 mb-3">
                      {footerIcon[icon]}
                    </div>
                    <div className="footer-contact-text">
                      <h3 className="text-lg font-semibold mb-1">{title}</h3>
                      <p className="text-gray-300">{details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-800">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest country facts and travel insights.
            </p>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="copyright-text mb-4 md:mb-0">
              <p className="text-gray-400">
                Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
                <NavLink 
                  to="https://github.com/" 
                  target="_blank"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 ml-1"
                >
                  Zain Murtaza
                </NavLink>
              </p>
            </div>
            <div className="footer-menu">
              <ul className="flex flex-wrap justify-center space-x-6">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/country", label: "Countries" },
                  { path: "/contact", label: "Contact" },
                  
                ].map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-gray-400 hover:text-white transition-colors duration-300 py-1 text-sm"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";

export const Headers = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleButtonToggle = () => {
    setShow(!show);
  };

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
        : "bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink 
              to="/" 
              className={`flex items-center transition-all duration-300 ${
                isScrolled ? "text-indigo-700" : "text-white"
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700"></div>
              </div>
              <span className="text-2xl md:text-3xl font-bold tracking-wide">
                WorldAtlas
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/country", label: "Country" },
                { path: "/contact", label: "Contact" }
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isScrolled ? "text-gray-700 hover:text-indigo-600" : "text-white hover:text-indigo-100"
                      } ${
                        isActive 
                          ? (isScrolled 
                              ? "text-indigo-600 font-semibold" 
                              : "text-white font-semibold")
                          : ""
                      }`
                    }
                  >
                    {item.label}
                    {({ isActive }) => (
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}></span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={handleButtonToggle}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? "text-gray-700 hover:bg-indigo-50" 
                  : "text-white hover:bg-indigo-500/30"
              }`}
              aria-label="Toggle navigation menu"
            >
              {show ? (
                <IoMdClose className="text-2xl" />
              ) : (
                <GiHamburgerMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`${show ? "block" : "hidden"} md:hidden mt-4 pb-4`}>
          <ul className="space-y-2">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/country", label: "Country" },
              { path: "/contact", label: "Contact" }
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setShow(false)}
                  className={({ isActive }) => 
                    `block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isScrolled 
                        ? (isActive 
                            ? "bg-indigo-100 text-indigo-700" 
                            : "text-gray-700 hover:bg-indigo-50")
                        : (isActive 
                            ? "bg-white/20 text-white" 
                            : "text-white hover:bg-white/10")
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
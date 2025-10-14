import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/", type: "route" },
    { name: "About", to: "/about", type: "route" },
    { name: "Skills", to: "/skills", type: "route" },
    { name: "Projects", to: "/projects", type: "route" },
    { name: "Education", to: "/education", type: "route" },
    { name: "Experience", to: "/experience", type: "route" },
    { name: "Contact", to: "/contact", type: "route" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/30"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Portfolio Logo / Name */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        >
          My<span className="text-white">Portfolio</span>
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) =>
            link.type === "scroll" ? (
              <ScrollLink
                key={i}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-300 hover:text-purple-400 font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </ScrollLink>
            ) : (
              <RouterLink
                key={i}
                to={link.to}
                className="text-gray-300 hover:text-purple-400 font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </RouterLink>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gray-900/95 border-t border-gray-700/30"
      >
        <div className="flex flex-col px-6 py-4 space-y-3">
          {navLinks.map((link, i) =>
            link.type === "scroll" ? (
              <ScrollLink
                key={i}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 font-medium hover:text-purple-400 cursor-pointer transition-colors"
              >
                {link.name}
              </ScrollLink>
            ) : (
              <RouterLink
                key={i}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 font-medium hover:text-purple-400 cursor-pointer transition-colors"
              >
                {link.name}
              </RouterLink>
            )
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

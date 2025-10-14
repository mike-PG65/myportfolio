import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/home", type: "route" },
    { name: "About", to: "/about", type: "route" },
    { name: "Skills", to: "skills", type: "scroll" },
    { name: "Projects", to: "/projects", type: "route" },
    { name: "Education", to: "/education", type: "route" },
    { name: "Contact", to: "contact", type: "scroll" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          Jeffika<span className="text-gray-900">Cabs</span>
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
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </ScrollLink>
            ) : (
              <RouterLink
                key={i}
                to={link.to}
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </RouterLink>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/90 backdrop-blur-md border-t border-gray-200"
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
                className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer transition-colors"
              >
                {link.name}
              </ScrollLink>
            ) : (
              <RouterLink
                key={i}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer transition-colors"
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

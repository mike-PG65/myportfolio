import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Michael
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Full-Stack Developer | UI/UX Enthusiast | Innovator
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build modern, scalable, and visually captivating digital experiences using
          technologies like React, Node.js, and MongoDB.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6"
        >
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-70}
            className="cursor-pointer flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            className="cursor-pointer border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Icons / Shapes */}
      <motion.div
        className="absolute bottom-10 left-10 text-blue-500 opacity-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2l4 8h-8l4-8zM4 22l8-4 8 4" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-10 right-10 text-purple-500 opacity-40"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v12m6-6H6" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Home;

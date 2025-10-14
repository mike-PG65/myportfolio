import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // <-- change import here

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
        <motion.h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-6">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Michael
          </span>
        </motion.h1>

        <motion.h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
          MERN Stack Developer
        </motion.h2>

        <motion.p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          I specialize in building modern, scalable, and visually captivating web applications using the MERN stack — MongoDB, Express, React, and Node.js. 
          My passion is turning complex problems into seamless digital experiences.
        </motion.p>

        <motion.div className="flex justify-center gap-6">
          <Link
            to="/projects" // <-- React Router route
            className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <Link
            to="/contact" // <-- React Router route
            className="border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;

import React from "react";
import { motion } from "framer-motion";
import { Code, Rocket, User, Star } from "lucide-react";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    }),
  };

  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: "Full-Stack Developer",
      desc: "Building scalable, modern web apps using React, Node.js, and MongoDB.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-600" />,
      title: "Fast Learner",
      desc: "Constantly exploring new tools, frameworks, and technologies.",
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Creative Thinker",
      desc: "I blend design and logic to craft user experiences that stand out.",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50 py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          About Me
        </h2>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Passionate about crafting seamless user experiences and bringing ideas to life through code.
        </p>
      </motion.div>

      {/* Profile Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
        {/* Left: Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-lg"
        >
          <img
            src="/your-photo.jpg" // Replace with your image
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          viewport={{ once: true }}
          className="max-w-2xl text-center md:text-left"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Hi, I’m <span className="text-blue-600">Michael</span> 👋
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            I’m a full-stack developer with a love for clean, modern design and
            efficient code. My goal is to create digital experiences that are
            both visually stunning and technically sound.  
            <br />
            <br />
            I enjoy solving complex problems, learning new technologies, and
            contributing to open-source projects. When I’m not coding, I’m
            probably exploring design trends, mentoring new developers, or
            improving my skills in UI/UX and cloud systems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              View My Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Highlights Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.5}
        viewport={{ once: true }}
        className="mt-24 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto relative z-10"
      >
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.03 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-4">{item.icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 text-center mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 text-center">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider Glow */}
      <div className="mt-20 flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
      </div>
    </section>
  );
};

export default About;

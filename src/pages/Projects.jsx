import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:4050/api/project/list");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-24 px-4 sm:px-10 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.15),transparent_70%)]"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      {/* Projects Timeline Showcase */}
      <div className="flex flex-col space-y-32 relative z-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project._id || index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } gap-8 md:gap-16`}
          >
            {/* Image Section */}
            <div className="relative w-full md:w-1/2">
              {project.image ? (
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                />
              ) : (
                <div className="w-full h-72 md:h-96 rounded-3xl bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center text-gray-300">
                  No Image
                </div>
              )}

              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 opacity-50 blur-xl"></div>
            </div>

            {/* Text Section */}
            <motion.div
              className="w-full md:w-1/2 space-y-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-300 text-base leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              {project.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Features */}
              {project.features?.length > 0 && (
                <ul className="text-gray-400 list-disc ml-6 mt-3 space-y-1 text-sm">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}

              {/* Links */}
              <div className="flex space-x-6 pt-4">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" /> <span>Code</span>
                  </motion.a>
                )}
                {project.demoLink && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Globe className="w-5 h-5" /> <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Decorative gradient divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="w-56 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-28 rounded-full"
      ></motion.div>
    </section>
  );
};

export default Projects;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, Code } from "lucide-react";

const Experience = () => {
  const [experienceList, setExperienceList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const BASE_URL = "https://curicullum.onrender.com/api";

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/experience/list`);
        setExperienceList(res.data);
      } catch (err) {
        setError("Error fetching experience data.");
      } finally {
        setLoading(false);
      }
    };
    fetchExperience();
  }, []);

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_70%)]"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
      >
        Professional Experience
      </motion.h2>

      {/* Loading */}
      {loading && (
        <div className="flex flex-col justify-center items-center h-60 gap-6">
          <motion.div
            className="w-14 h-14 border-4 border-t-transparent border-blue-500 rounded-full shadow-lg shadow-blue-500/30"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear",
            }}
          />
          <p className="text-gray-400 text-lg font-medium animate-pulse">
            Loading experience...
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-center text-red-400 font-medium">{error}</p>
      )}

      {/* Timeline */}
      {!loading && !error && experienceList.length > 0 && (
        <div className="relative max-w-5xl mx-auto mt-10 before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[2px] before:bg-gradient-to-b from-blue-500/50 to-cyan-500/50">
          {experienceList.map((exp, index) => (
            <motion.div
              key={exp._id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 w-6 h-6 rounded-full border-4 border-gray-950 z-10 shadow-lg shadow-blue-500/40"></div>

              {/* Card */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                } mt-10 md:mt-0`}
              >
                <div className="bg-gray-900/50 border border-blue-400/20 rounded-2xl p-6 backdrop-blur-xl shadow-md hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="text-blue-400 w-6 h-6" />
                    <h3 className="text-2xl font-semibold text-blue-300">
                      {exp.company}
                    </h3>
                  </div>

                  <p className="text-gray-300 font-medium mb-1">
                    {exp.position}
                  </p>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(exp.startDate).toLocaleString("default", {
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      –{" "}
                      {exp.endDate && exp.endDate !== "Present"
                        ? new Date(exp.enddate).toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                          })
                        : "Present"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>

                  {exp.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-400/20 rounded-full text-sm text-gray-200"
                        >
                          <Code className="inline w-3 h-3 mr-1 text-blue-400" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.responsibilities?.length > 0 && (
                    <ul className="list-disc list-inside mt-4 text-gray-400 text-sm space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Empty */}
      {!loading && experienceList.length === 0 && !error && (
        <p className="text-center text-gray-500 mt-10">
          No experience records found.
        </p>
      )}
    </section>
  );
};

export default Experience;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const Education = () => {
  const [educationList, setEducationList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await axios.get("http://localhost:4050/api/education/list");
        setEducationList(res.data);
      } catch (err) {
        setError("Error fetching education details.");
      } finally {
        setLoading(false);
      }
    };
    fetchEducation();
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-24 px-6 overflow-hidden">
      {/* glowing background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_70%)]"></div>

      {/* heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Education Journey
      </motion.h2>

      {/* loading & error */}
      {loading && (
        <p className="text-center text-gray-400 animate-pulse">
          Loading education details...
        </p>
      )}
      {error && (
        <p className="text-center text-red-400 font-medium">{error}</p>
      )}

      {/* timeline */}
      <div className="relative max-w-4xl mx-auto mt-10 before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[2px] before:bg-gradient-to-b from-purple-500/50 to-pink-500/50">
        {educationList.map((edu, index) => (
          <motion.div
            key={edu._id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative mb-16 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full border-4 border-gray-950 z-10 shadow-lg shadow-purple-500/40"></div>

            {/* content */}
            <div
              className={`w-full md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              } mt-10 md:mt-0`}
            >
              <div className="bg-gray-900/50 border border-purple-400/20 rounded-2xl p-6 backdrop-blur-xl shadow-md hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-purple-400 w-6 h-6" />
                  <h3 className="text-2xl font-semibold text-purple-300">
                    {edu.institution}
                  </h3>
                </div>

                <p className="text-gray-300 font-medium">
                  {edu.qualification}
                </p>
                <p className="text-gray-400 italic text-sm mb-3">
                  {edu.fieldOfStudy}
                </p>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(edu.startDate).getFullYear()} –{" "}
                   {edu.endDate && edu.endDate !== "Present"
  ? new Date(edu.endDate).getFullYear()
  : "Present"}
                  </span>
                </div>

                {edu.location && (
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                )}

                {edu.description && (
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!loading && educationList.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No education records found.
        </p>
      )}
    </section>
  );
};

export default Education;

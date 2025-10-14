import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Database, Settings, Palette } from "lucide-react";

const skillsData = [
  {
    title: "Programming",
    icon: <Code className="text-blue-400 w-6 h-6" />,
    skills: ["Python", "JavaScript", "C++", "C"],
    gradient: "from-blue-500/10 to-blue-500/5 border-blue-400/20",
  },
  {
    title: "Web Development",
    icon: <Globe className="text-emerald-400 w-6 h-6" />,
    skills: ["HTML", "CSS", "React", "Node.js", "TailwindCSS"],
    gradient: "from-emerald-500/10 to-emerald-500/5 border-emerald-400/20",
  },
  {
    title: "Databases",
    icon: <Database className="text-purple-400 w-6 h-6" />,
    skills: ["SQL", "MongoDB"],
    gradient: "from-purple-500/10 to-purple-500/5 border-purple-400/20",
  },
  {
    title: "Tools",
    icon: <Settings className="text-orange-400 w-6 h-6" />,
    skills: ["Git", "Linux", "CLI", "Docker"],
    gradient: "from-orange-500/10 to-orange-500/5 border-orange-400/20",
  },
  {
    title: "Design & Creative Tools",
    icon: <Palette className="text-pink-400 w-6 h-6" />,
    skills: ["Canva", "Figma"],
    gradient: "from-pink-500/10 to-pink-500/5 border-pink-400/20",
  },
];

const Skills = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_70%)]"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
      >
        My Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${category.gradient} backdrop-blur-xl border rounded-2xl p-6 shadow-lg hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-2`}
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-200 hover:bg-white/10 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-16 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ✨ Continuously learning and improving every day ✨
      </motion.div>
    </section>
  );
};

export default Skills;

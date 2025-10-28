"use client";
import { motion } from "framer-motion";

const educationList = [
  {
    degree: "Web Development Certification",
    institution: "Programming Hero — Full Stack Web Development Bootcamp",
    year: "2024 - 2025",
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Narsingdi Polytechnic Institute",
    year: "2021 - 2025",
  },
  {
    degree: "HSC (Science)",
    institution: "Hazi Abed Ali College",
    year: "2019 - 2021",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-20 px-6 bg-gradient-to-br from-sky-100 via-white to-sky-200 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 mb-16"
        >
          My Educational Journey
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 rounded-2xl shadow-lg p-8 text-left hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-700 font-medium">{edu.institution}</p>
              <p className="text-gray-500 italic">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

"use client";
import { motion } from "framer-motion";

const experienceList = [
  {
    role: "Frontend Developer (Freelance)",
    company: "Fiverr Client Project",
    period: "Jan 2025 - Present",
    details:
      "Built a fully responsive e-commerce frontend using React, Tailwind CSS, and Redux. Integrated Firebase Auth and dynamic cart system.",
  },
  {
    role: "Intern - Web Developer",
    company: "ABC Software Company",
    period: "Oct 2024 - Dec 2024",
    details:
      "Worked on internal dashboard using Next.js and TypeScript. Implemented authentication, chart visualizations, and API integration.",
  },
];

const Experience = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-sky-100 via-white to-sky-200 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {experienceList.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 rounded-2xl shadow-lg p-8 hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-2xl font-bold text-indigo-800 mb-1">
                {exp.role}
              </h3>
              <p className="text-gray-700 font-medium">{exp.company}</p>
              <p className="text-gray-500 italic mb-2">{exp.period}</p>
              <p className="text-gray-600">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

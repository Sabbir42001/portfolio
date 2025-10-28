"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPrisma,
  SiPostgresql
} from "react-icons/si";
import {
  FaHandsHelping,
  FaUsers,
  FaLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

const level1 = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "React", icon: <SiReact className="text-cyan-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-600" /> },
];

const level2 = [
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-red-500" /> },
  { name: "Prisma", icon: <SiPrisma className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
];

const softSkills = [
  { name: "Communication", icon: <FaHandsHelping className="text-blue-500" /> },
  { name: "Teamwork", icon: <FaUsers className="text-indigo-500" /> },
  {
    name: "Problem Solving",
    icon: <FaLightbulb className="text-yellow-400" />,
  },
  {
    name: "Self Learning",
    icon: <FaGraduationCap className="text-purple-500" />,
  },
];

const renderList = (
  title: string,
  items: { name: string; icon: JSX.Element }[],
  titleColor: string,
  index: number
) => {
  const isSoftSkills = title === "Soft Skills";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      className="bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 rounded-2xl shadow-lg p-8 hover:scale-[1.02] transition-transform"
    >
      <h3 className={`text-2xl font-bold mb-6 ${titleColor}`}>{title}</h3>
      <ul
        className={`grid ${
          isSoftSkills ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"
        } gap-5`}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col items-center justify-center gap-2 bg-white/80 hover:bg-white transition rounded-xl p-4 shadow min-h-[100px]"
          >
            <span className="text-3xl">{item.icon}</span>
            <span className="text-sm font-semibold text-gray-800">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-gradient-to-br from-sky-100 via-white to-sky-200 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto space-y-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600"
        >
          Technical & Soft Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {renderList("Level 1 Skills", level1, "text-indigo-700", 0)}
          {renderList("Level 2 Skills", level2, "text-blue-700", 1)}
          {renderList("Soft Skills", softSkills, "text-purple-700", 2)}
        </div>
      </div>
    </section>
  );
};

export default Skills;

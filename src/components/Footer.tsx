"use client";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 text-gray-800 py-16 mt-24 border-t border-white/30 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-6 text-center"
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
          Md Hafijur Rahman Bhuiyan Sabbir
        </h2>
        <p className="text-sm text-gray-700">
          Diploma in Computer Science | Next Level Web Developer
        </p>
        <p className="text-sm text-gray-600 italic">
          Specializing in React, Next.js, TypeScript Nodejs, Mongoose, Prisma, MongoDB & PostgreSQL
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-4 text-sm text-gray-700">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-red-500" /> moharbhusa@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-green-600" /> 01704464178
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" /> Narsingdi, Dhaka,
            Bangladesh
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-6 text-2xl mt-2"
        >
          <a
            href="https://github.com/Sabbir42001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333] hover:scale-110 transition"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/moharbhusa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100080711256432"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1877F2] hover:scale-110 transition"
          >
            <FaFacebook />
          </a>
        </motion.div>
        <hr className="w-full border-t border-gray-300 opacity-30 my-4" />
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Azhar Mahmud. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;

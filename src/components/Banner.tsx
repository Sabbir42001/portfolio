"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative py-24 px-6 bg-gradient-to-br from-sky-100 via-white to-sky-200 overflow-hidden"
    >
      <div className="absolute top-[-60px] left-[-60px] w-96 h-96 bg-indigo-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-white/60 to-transparent rounded-full -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-4xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-600">
            Hi, I’m Hafijur Rahman Bhuiyan Sabbir
          </h1>

          <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-600">
            moharbhusa@gmail.com
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            MERN Stack Developer
          </h2>

          <p className="mt-2 text-gray-500 font-medium italic">
            Building scalable, high-performance web solutions
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            I specialize in crafting responsive, full-stack web applications
            using modern technologies like{" "}
            <span className="font-semibold text-orange-600">HTML</span>,{" "}
            <span className="font-semibold text-cyan-600">CSS</span>,{" "}
            <span className="font-semibold text-sky-600">Tailwind CSS</span>,{" "}
            <span className="font-semibold text-yellow-600">JavaScript</span>,{" "}
            <span className="font-semibold text-blue-600">TypeScript</span>,{" "}
            <span className="font-semibold text-blue-700">React</span>,{" "}
            <span className="font-semibold text-purple-700">Redux</span>,{" "}
            <span className="font-semibold text-black">Next.js</span>,{" "}
            <span className="font-semibold text-yellow-700">Firebase</span>,{" "}
            <span className="font-semibold text-green-700">Node.js</span>,{" "}
            <span className="font-semibold text-gray-700">Express.js</span>, and{" "}
            <span className="font-semibold text-emerald-700">MongoDB</span>. I’m
            passionate about turning ideas into clean, scalable real-world
            applications.
          </p>

          <div className="mt-6">
            <a
              href="/sabbir-resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Download Resume
              <FaDownload className="text-white text-lg" />
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 p-1 hover:scale-105 transition-transform duration-300 shadow-2xl">
            <div className="w-full h-full rounded-full p-1">
              <Image
                height={400}
                width={400}
                src="https://i.postimg.cc/CLHczPf1/sabbir-1.png"
                alt="Azhar Mahmud"
                className="w-full h-full object-cover rounded-full shadow-inner"
              />
            </div>
          </div>

          {/* Available Badge */}
          <div className="absolute -bottom-3 -right-3 px-3 py-1 text-xs font-semibold rounded-full shadow-md text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 transition-transform duration-300">
            Available for Work
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

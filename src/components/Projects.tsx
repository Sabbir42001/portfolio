"use client";

import { motion } from "framer-motion";
import { projects } from "../../data/projectsData";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-br from-sky-100 via-white to-sky-200 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-center mb-16"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform overflow-hidden"
            >
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={10}
                slidesPerView={1}
                className="w-full h-48"
              >
                {project.image.map((img, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={img}
                      alt={`${project.title}-${i + 1}`}
                      width={500}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="p-5 space-y-3">
                <h3 className="text-2xl font-bold text-indigo-800">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm">{project.shortDesc}</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-full shadow hover:opacity-90 transition"
                  >
                    <FaInfoCircle className="text-white" />
                    Details
                  </Link>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-1.5 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full font-medium hover:opacity-90 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium hover:opacity-90 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

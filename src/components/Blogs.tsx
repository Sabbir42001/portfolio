"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogs } from "../../data/blogsData";
import { FaBookOpen } from "react-icons/fa";

const Blogs = () => {
  return (
    <section id="blogs" className="relative py-20 px-6 bg-gradient-to-br from-sky-100 via-white to-sky-200 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-center mb-16"
        >
          Blog Articles
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 rounded-2xl shadow-lg p-8 hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-2xl font-bold text-indigo-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-700 mb-4">{blog.description.split(" ").slice(0, 100).join(" ")}...</p>

              <Link
                href={`/blogs/${blog.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-full shadow hover:opacity-90 transition"
              >
                <FaBookOpen />
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

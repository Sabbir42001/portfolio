import React from "react";
import Image from "next/image";
import { blogs } from "../../../../data/blogsData";

const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-600 text-xl">
        Blog not found.
      </div>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-sky-100 via-white to-sky-200 py-20 px-4 min-h-screen">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl hover:scale-[1.01] transition-transform">
        <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6">
          {blog.title}
        </h1>
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={800}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <article className="text-gray-800 space-y-5 leading-relaxed text-lg">
          <p>{blog.description}</p>
        </article>
      </div>
    </section>
  );
};

export default BlogDetails;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch {
      setStatus("Error occurred.");
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 bg-gradient-to-br from-sky-100 via-white to-sky-200 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-indigo-800 mb-4">
          Contact
        </h2>
        <p className="text-gray-600 mb-10">
          Let’s talk! Send me a message below.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 p-8 rounded-2xl shadow-lg space-y-6 text-left"
        >
          {["name", "email", "message"].map((field, i) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
              viewport={{ once: true }}
              className="p-[2px] rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600"
            >
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field === "name" ? "Your Name" : "Your Email"}
                  value={form[field as keyof typeof form]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white outline-none text-gray-700"
                />
              ) : (
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white outline-none text-gray-700"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 justify-center w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition font-semibold cursor-pointer"
          >
            <FiSend className="text-lg" />
            Send Message
          </motion.button>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-sm mt-2 ${
                success
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text font-semibold"
                  : "text-red-600"
              }`}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: "1",
    title: "Admin Panel (Laravel)",
    image: "/admin-panel.jpg",
    video: "/admin-demo.mp4",
    tech: ["Laravel", "MySQL", "PHP"],
  },
  {
    id: "2",
    title: "Full-Stack Investment Inventory Dashboard",
    image: "/full stack.jpeg",
    video: "/full stack.mp4",
    tech: ["Vuejs", "Nodejs", "MongoDB"],
  },
  {
    id: "3",
    title: "Carbon Emission Tracking Dashboard – MERN Stack Web App",
    image: "/MERN.png",
    video: "/MERN.mp4",
    tech: ["React js", "Node js", "MongoDB"],
  },
  {
    id: "4",
    title: "Dog Genealogy and Health Management System – Laravel Backend",
    image: "/dog.png",
    video: "/review4.mp4",
    tech: ["Php", "Laravel", "Mysql"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-[#0D1B2A] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">My Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#1B263B] p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-3">
                Tech Stack: {project.tech.join(", ")}
              </p>
              <Link
                to={`/project/${project.id}`}
                className="bg-[#00ADB5] hover:bg-[#008891] text-white px-4 py-2 rounded inline-block transition duration-200"
              >
                View Project
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


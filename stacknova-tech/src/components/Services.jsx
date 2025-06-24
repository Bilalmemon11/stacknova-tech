import React from "react";
import {
  Code,
  Server,
  MonitorSmartphone,
  LayoutGrid,
  Wrench,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code className="w-10 h-10 text-cyan-400" />,
    title: "Web App Development",
    desc: "Build modern, scalable web apps using Laravel, Node.js, React.js, and MongoDB.",
  },
  {
    icon: <MonitorSmartphone className="w-10 h-10 text-cyan-400" />,
    title: "Frontend Development",
    desc: "Pixel-perfect responsive UI using React.js, Tailwind CSS, Bootstrap, and HTML/CSS.",
  },
  {
    icon: <Server className="w-10 h-10 text-cyan-400" />,
    title: "Backend & REST APIs",
    desc: "Powerful and secure REST APIs built with Laravel, Express, MySQL, and MongoDB.",
  },
  {
    icon: <LayoutGrid className="w-10 h-10 text-cyan-400" />,
    title: "Custom Admin Panels",
    desc: "Laravel-powered dashboards with user roles, permissions, and analytics.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-cyan-400" />,
    title: "Full Stack Solutions",
    desc: "Complete web solutions from frontend to backend tailored to your business needs.",
  },
  {
    icon: <Globe className="w-10 h-10 text-cyan-400" />,
    title: "WordPress Development",
    desc: "Custom WordPress themes, plugins, and website setups for business and blogs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-[#1B263B] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#0D1B2A] p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

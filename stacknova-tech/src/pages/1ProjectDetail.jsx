import React from "react";
import { useParams, Link } from "react-router-dom";

const projectData = {
  "1": {
    title: "Admin Panel (Laravel)",
    description: "Full admin panel built using Laravel for equipment management and reports.",
    image: "/admin-panel.jpg",
    video: "/admin-demo.mp4",
    tech: ["Laravel", "PHP", "MySQL"],
    review: {
      image: "/review1.png",
      text: "Bilal is very professional and polite. It was easy to communicate. He understood what I needed quickly and started the job right away. . I would definitely hire her again.",
      name: "Client from United States"
    }
  },
  "2": {
    title: "Full-Stack Investment Inventory Dashboard",
    description: "I Developed both frontend (Vue.js) and backend (Node.js) of the application from scratch.",
    image: "/full stack.jpeg",
    video: "/full stack.mp4",
    tech: ["Vue js", "Node js", "MongoDB"],
    review: {
      image: "/review2.png",
      text: "Thank you for your amazing, I will come back to you in the future.",
      name: "Client from Netherlands"
    }
  },
  "3": {
    title: "Carbon Emission Tracking Dashboard MERN Stack Web App",
    description: "Full Stack developer, MERN Stack, Node JS, React JS & MongoDB Expert.",
    image: "/MERN.png",
    video: "/MERN.mp4",
    tech: ["React js", "Node js", "MongoDB"],
    review: {
      image: "/review3.png",
      text: "Bilal Raza truly SHINES in software development! His code was not only bug-free but also showcased exceptional expertise, exceeding all expectations. Working with him was a breeze, thanks to his politeness, quick responsiveness, and superb level of cooperation. 🙌",
      name: "Client from Netherlands"
    }
  },
    "4": {
    title: "Dog Genealogy and Health Management System – Laravel Backend ",
    description: "I developed a robust Laravel backend for a Dog Genealogy and Health Management System. The system allows kennel owners to manage dog profiles, track health tests with results and certificates, and maintain ancestral lineage records.",
    image: "/dog.png",
    video: "/review4.mp4",
    tech: ["php", " Laravel ", "Mysql"],
    review: {
      image: "/review4.png",
      text: "Bilal Raza was hired to produce a dog pedigree program with Laravel. He went above and beyond and at a great price. He was friendly and very responsive. I am currently working with him once again for some additional functions.",
      name: "Client from United States"
    }
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen text-white bg-[#0D1B2A] flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white p-6">
      <Link
        to="/#portfolio"
        className="inline-block mb-6 bg-[#00ADB5] text-white px-4 py-2 rounded hover:bg-[#008891] transition"
      >
        ← Back to Portfolio
      </Link>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="mb-4">{project.description}</p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded shadow-lg"
        />

        <video controls className="w-full rounded shadow-lg">
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Technologies Used:</h3>
        <ul className="list-disc ml-6 text-gray-300">
          {project.tech.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      {/* Client Reviews Section */}
      {project.review && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Client Review</h3>
          <div className="flex flex-col md:flex-row items-center gap-6 bg-[#1B263B] p-4 rounded-lg shadow-lg border border-gray-700">
            {/* Left: Screenshot */}
            <div className="w-full md:w-1/2">
              <img
                src={project.review.image}
                alt="Fiverr Review"
                className="w-full rounded-lg border border-gray-600"
              />
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 text-left">
              <h4 className="text-xl font-semibold text-white mb-2">⭐ 5 Star Review</h4>
              <p className="text-gray-300">"{project.review.text}"</p>
              <p className="mt-2 text-sm text-gray-400">– {project.review.name}</p>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default ProjectDetail;

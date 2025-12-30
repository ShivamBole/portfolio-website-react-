import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "RESTful API Development",
      "Authentication (JWT, Google OAuth)",
    ],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "SQL (Basic)"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git & GitHub",
      "Firebase",
      "Payment Gateway Integration",
      "Netlify",
      "Vercel",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="h2 text-marsBlue">Skills & Tech Stack.</h2>
          <p className="mt-4 max-w-xl mx-auto">
            Technologies and tools I use to build scalable, high-performance web
            applications.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.04 }}
              className="group relative rounded-xl p-6 
               backdrop-blur-lg 
              border border-white 
              shadow-md transition-all duration-300"
            >
              {/* Glow Layer */}
              <div
                className="pointer-events-none absolute inset-0 rounded-xl 
                bg-gradient-to-br from-pink-500/70 via-transparent to-blue-700/70 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300"
              />

              <h3 className="text-lg font-semibold text-marsBlue mb-5 relative z-10">
                {skill.title}
              </h3>

              <ul className="space-y-3 relative z-10">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-sm flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

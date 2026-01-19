import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Arohi Software",
    location: "Pune, India",
    duration: "Sep 2024 – Feb 2025",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
    points: [
      "Worked on real-world production-level web applications using the MERN stack.",
      "Contributed as Lead Developer to an eCommerce website.",
      "Integrated payment gateways, Google authentication, and third-party APIs.",
      "Collaborated with team members using Git and modular development practices.",
      "Involved in requirement analysis, testing, and deployment.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Arohi Software",
    location: "Pune, India",
    duration: "Apr 2024 – Jul 2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
    points: [
      "Worked on inventory management and business-oriented web applications.",
      "Built two business websites focused on networking and management workflows.",
      "Strengthened backend logic, frontend UI development, and debugging skills.",
    ],
  },
];

/* Stagger container */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

/* Smooth LEFT / RIGHT animation */
const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -160 : 160,
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      mass: 0.9,
      delay: index * 0.05,
    },
  }),
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 id="experience-heading" className="h2 text-marsBlue">
            Professional Experience
          </h2>

          <p className="mt-4 max-w-xl mx-auto">
            Professional experience of <strong>Shivam Bole</strong>, a MERN Stack
            Full Stack Web Developer, building and delivering real-world web
            applications in production environments.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-14"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="group grid lg:grid-cols-3 gap-8 items-center
              border border-white rounded-2xl p-6 shadow-md hover:shadow-xl
              transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={exp.image}
                  alt={`${exp.role} experience at ${exp.company} – Shivam Bole`}
                  className="w-full h-56 object-cover
                  group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-marsBlue">
                  {exp.role} – {exp.company}
                </h3>

                <p className="mt-1 text-sm">
                  {exp.location}
                </p>

                <p className="text-sm mt-1">
                  {exp.duration}
                </p>

                <ul
                  className="mt-5 space-y-3"
                  aria-label={`${exp.role} responsibilities at ${exp.company}`}
                >
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className="w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

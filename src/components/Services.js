import React from "react";
import { motion } from "framer-motion";
import servicesImg from "../assets/final.png";

const services = [
  {
    title: "Full Stack MERN Web Application Development",
    desc: "End-to-end web applications built by a full stack MERN developer using MongoDB, Express.js, React.js, and Node.js with scalable architecture and clean code practices.",
  },
  {
    title: "Frontend Web Development with React.js",
    desc: "Responsive, high-performance frontend interfaces developed by a professional web developer using React.js and Tailwind CSS.",
  },
  {
    title: "Backend Development & REST API Services",
    desc: "Secure and scalable backend APIs built with Node.js and Express.js, including validation, authentication, and database integration.",
  },
  {
    title: "Authentication & Authorization Solutions",
    desc: "JWT-based authentication and Google OAuth integration for secure and reliable user access in web applications.",
  },
  {
    title: "eCommerce Website Development (MERN Stack)",
    desc: "Complete eCommerce web development solutions including product management, cart, checkout, and payment gateway integration.",
  },
  {
    title: "Admin Dashboards & Management Systems",
    desc: "Custom admin dashboards developed by a full stack MERN developer for managing users, products, orders, and analytics.",
  },
  {
    title: "Third-Party API & Service Integration",
    desc: "Integration of external APIs, payment gateways, and third-party services into modern web applications.",
  },
  {
    title: "Website Optimization, Bug Fixing & Deployment",
    desc: "Performance optimization, bug fixing, and deployment on Vercel, Netlify, and cloud platforms by an experienced web developer.",
  },
];

/* Container animation */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* Card animation */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
    },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-20"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="h2 text-marsBlue">
            Web Developer & Full Stack MERN Services
          </h2>

          <p className="mt-4 max-w-xl mx-auto">
            Professional web development services offered by me,
            a full stack MERN developer focused on performance, scalability,
            and real-world business solutions.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* LEFT — SERVICES CARDS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 grid gap-6 sm:grid-cols-2"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 200 },
                }}
                className="border border-white bg-gradient-to-br from-pink-500/70 via-transparent to-blue-700/70 
                rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-1 bg-red-500 mb-4 rounded-full"></div>

                <h3 className="text-lg font-semibold text-marsBlue mb-3">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 18 }}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 hidden lg:flex justify-center"
          >
            <img
              src={servicesImg}
              alt="Web Developer and Full Stack MERN Developer Services by Shivam Bole"
              className="max-w-[480px] w-full object-contain"
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;

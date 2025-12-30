
import React from "react";
import { motion } from "framer-motion";
import servicesImg from "../assets/final.png"; // 👈 use your image

const services = [
  {
    title: "Full-Stack Web Application Development",
    desc: "End-to-end MERN stack applications built with scalable architecture and clean code practices.",
  },
  {
    title: "Responsive Frontend Development (React.js)",
    desc: "Modern, responsive, and user-friendly interfaces using React.js and Tailwind CSS.",
  },
  {
    title: "Backend API Development (Node.js & Express.js)",
    desc: "Secure and efficient RESTful APIs with proper validation, error handling, and scalability.",
  },
  {
    title: "Authentication & Authorization",
    desc: "JWT-based authentication and Google OAuth integration for secure user access.",
  },
  {
    title: "eCommerce Development & Payment Integration",
    desc: "Complete eCommerce solutions including cart, checkout, and payment gateway integration.",
  },
  {
    title: "Admin Dashboards & Management Systems",
    desc: "Role-based dashboards for managing users, products, orders, and analytics.",
  },
  {
    title: "REST API & Third-Party Integrations",
    desc: "Integration of third-party services, APIs, and external tools into applications.",
  },
  {
    title: "Website Optimization, Bug Fixes & Deployment",
    desc: "Performance optimization, bug fixing, and deployment on Netlify, Vercel, or cloud platforms.",
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
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="h2 text-marsBlue">Services & Core Expertise</h2>
          <p className="mt-4 max-w-xl mx-auto ">
            Practical, production-ready solutions focused on performance,
            scalability, and business needs.
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
                className=" border border-white  bg-gradient-to-br from-pink-500/70 via-transparent to-blue-700/70 
                opacity-0 group-hover:opacity-100 
               rounded-2xl p-6 shadow-md
                hover:shadow-xl transition-shadow duration-300"
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
              alt="Services Illustration"
              className="max-w-[480px] w-full object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;

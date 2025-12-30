import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "H.V.P. Mandal's Degree College, Amravati",
      duration: "May 2020 – May 2023",
      icon: "📚",
      color: "from-purple-600 to-blue-600",
      delay: 0.2,
    },
    {
      id: 2,
      degree: "MERN Stack Training",
      institution: "Seven Mentor, Pune",
      duration: "Oct 2023 – Apr 2024",
      icon: "💻",
      color: "from-cyan-600 to-teal-600",
      delay: 0.4,
    },
    {
      id: 3,
      degree: "Master of Computer Applications (MCA)",
      institution: "G H Raisoni College of Engineering & Management, Pune",
      duration: "Aug 2024 – Jul 2026",
      icon: "🎓",
      color: "from-red-600 to-pink-600",
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -90,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        type: "spring",
      },
    },
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="education" className="section min-h-screen my-24 py-5 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center my-24"
        >
          <h2 className="h2 text-marsBlue">EDUCATION</h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden lg:block">
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="w-full bg-gradient-to-b from-red-600 via-purple-600 to-cyan-800 rounded-full"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-12"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`relative flex flex-col-reverse lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Education Card */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  className="w-full lg:w-5/12 group"
                >
                  <div className="relative p-8  border border-white  bg-gradient-to-br from-pink-500/70 via-transparent to-blue-700/70 rounded-2xl overflow-hidden">
                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${
                          edu.color.includes("red")
                            ? "#C81D25"
                            : edu.color.includes("purple")
                            ? "#9333ea"
                            : "#0891b2"
                        }, transparent)`,
                      }}
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Glowing Corner Effect */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-20 blur-3xl rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}
                    />

                    <div className="relative z-10">
                      {/* Degree */}
                      <motion.h3
                        className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${
                            edu.color.includes("red")
                              ? "#FF3B3B, #FF8A8A"
                              : edu.color.includes("purple")
                              ? "#9333ea, #60a5fa"
                              : "#0891b2, #14b8a6"
                          })`,
                        }}
                      >
                        {edu.degree}
                      </motion.h3>

                      {/* Institution */}
                      <motion.p
                        className="text-gray-300 mb-3 font-medium"
                        whileHover={{ x: 5 }}
                      >
                        📍 {edu.institution}
                      </motion.p>

                      {/* Duration */}
                      <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-sm text-gray-400">📅</span>
                        <span className="text-sm text-gray-300 font-medium">
                          {edu.duration}
                        </span>
                      </motion.div>

                      {/* Decorative Line */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: edu.delay }}
                        className={`h-1 bg-gradient-to-r ${edu.color} mt-4 rounded-full`}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Center Icon */}
                <div className="w-2/12 flex justify-center items-center my-4 lg:my-0 z-20">
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center text-4xl shadow-2xl cursor-pointer border-4 border-gray-900`}
                  >
                    <motion.span
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {edu.icon}
                    </motion.span>
                  </motion.div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Education;

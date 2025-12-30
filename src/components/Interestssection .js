import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Certificate from '../assets/certificates.pdf';

const AdditionalDetails = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);

  const interests = [
    {
      id: 1,
      name: "Chess",
      icon: "♟️",
      emoji: "🏆",
      color: "from-slate-600 via-gray-700 to-zinc-800",
      accentColor: "from-slate-400 to-gray-600",
      description: "Strategic thinking and competitive gameplay",
      skills: [
        "Strategic Planning",
        "Problem Solving",
        "Pattern Recognition",
        "Decision Making",
      ],
      hasCertificate: true,
      certificateTitle: "View Certificate",
      achievement: "Champion",
      bgPattern: "chess",
    },
    {
      id: 2,
      name: "Coin Collection",
      icon: "🪙",
      emoji: "💰",
      color: "from-amber-600 via-yellow-600 to-orange-700",
      accentColor: "from-amber-400 to-yellow-600",
      description: "Numismatics and historical artifacts",
      skills: [
        "Historical Knowledge",
        "Attention to Detail",
        "Research Skills",
        "Authentication",
      ],
      hasCertificate: false,
      achievement: "Collector",
      bgPattern: "coins",
    },
  ];

  return (
    <section
      id="interests"
      className="relative py-20 lg:py-32 overflow-hidden "
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96  rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.4, 1],
            x: [0, -100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96  rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="h2 text-marsBlue">INTERESTS & HOBBIES</h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white text-lg max-w-2xl mx-auto"
          >
            Beyond coding, exploring strategic games and collecting historical
            treasures
          </motion.p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.2,
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateZ: hoveredIndex === index ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="relative h-full"
              >
                {/* Main Card */}
                <div className="relative p-10  rounded-3xl border  bg-gradient-to-br from-pink-500/70 via-transparent to-blue-700/70 border-white shadow-2xl overflow-hidden z-10">
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{
                      backgroundPosition:
                        hoveredIndex === index
                          ? ["0% 0%", "100% 100%"]
                          : "0% 0%",
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Corner Glow */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl`}
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                      opacity:
                        hoveredIndex === index ? [0.15, 0.25, 0.15] : 0.15,
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Achievement Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="absolute top-6 right-6 px-4 py-2 rounded-full border border-white"
                  >
                    <span className="text-sm font-semibold text-gray-300">
                      {interest.emoji} {interest.achievement}
                    </span>
                  </motion.div>

                  {/* Large Icon with Ring Animation */}
                  <div className="relative mb-8 inline-block">
                    <motion.div
                      animate={{
                        rotate: hoveredIndex === index ? [0, 15, -15, 0] : 0,
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10 text-8xl"
                    >
                      {interest.icon}
                    </motion.div>

                    {/* Pulsing Ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-full border-4 `}
                      style={{
                        width: "140px",
                        height: "140px",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{
                        scale: hoveredIndex === index ? [1, 1.3, 1] : 1,
                        opacity: hoveredIndex === index ? [0.3, 0, 0.3] : 0,
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="text-4xl font-bold text-white mb-4"
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                  >
                    {interest.name}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-white text-lg mb-6 leading-relaxed"
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ delay: 0.05 }}
                  >
                    {interest.description}
                  </motion.p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3 mb-6 relative z-10">
                    {interest.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className={`px-4 py-2 text-white text-sm font-medium rounded-full shadow-lg`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Certificate Button */}
                  {interest.hasCertificate && (
                    <a
                      href={Certificate}
                      target="_blank"
                      className={`relative z-20 inline-flex items-center gap-3 px-6 py-3  rounded-full text-white font-bold shadow-lg hover:shadow-2xl transition-all group cursor-pointer`}
                    >
                      <span>{interest.certificateTitle}</span>
                        →
                    </a>
                  )}

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    className={`h-1.5 bg-gradient-to-r ${interest.color} mt-8 rounded-full`}
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    className={`absolute inset-0  rounded-3xl pointer-events-none`}
                    animate={{
                      opacity: hoveredIndex === index ? 0.05 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                </div>

                {/* 3D Shadow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-pink-500/70 via-transparent to-blue-700/70 rounded-3xl blur-2xl -z-10`}
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 0.95,
                    opacity: hoveredIndex === index ? 0.4 : 0.2,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AdditionalDetails;
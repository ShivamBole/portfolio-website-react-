import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "MERN Stack Developer",
      issuer: "Seven Mentor",
      icon: "🏆",
      color: "from-amber-500 via-yellow-500 to-orange-500",
      bgGlow: "bg-amber-500/20",
      borderColor: "border-amber-500/30",
      badge: "⭐ Featured",
      description: "Full-stack web development with MongoDB, Express, React, Node.js"
    },
    {
      id: 2,
      title: "Data Structures & Algorithms in JavaScript",
      issuer: "freeCodeCamp",
      icon: "💎",
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGlow: "bg-emerald-500/20",
      borderColor: "border-emerald-500/30",
      badge: "🎯 Core",
      description: "Advanced problem-solving and algorithmic thinking"
    },
    {
      id: 3,
      title: "Web Design using HTML, CSS & JavaScript",
      issuer: "Mind Luster",
      icon: "🎨",
      color: "from-violet-500 via-purple-500 to-fuchsia-500",
      bgGlow: "bg-violet-500/20",
      borderColor: "border-violet-500/30",
      badge: "✨ Design",
      description: "Modern web design principles and responsive layouts"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    
    <section id="certifications" className="section min-h-screen relative overflow-hidden mt-44 py-20">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

     
           <h2 className="h2 text-marsBlue"> CERTIFICATIONS</h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Recognized achievements and professional credentials
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Certificate Card */}
              <motion.div
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  rotateZ: hoveredIndex === index ? 2 : 0
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className={`relative p-8 rounded-2xl border ${cert.borderColor} shadow-2xl overflow-hidden h-full`}
              >
                {/* Animated Corner Glow */}
                <motion.div
                  className={`absolute -top-20 -right-20 w-40 h-40 ${cert.bgGlow} rounded-full blur-3xl`}
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.3, 1] : 1,
                    opacity: hoveredIndex === index ? [0.3, 0.5, 0.3] : 0.3
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="absolute top-4 right-4 px-3 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 text-xs font-semibold text-gray-300"
                >
                  {cert.badge}
                </motion.div>

                {/* Icon with Animated Ring */}
                <div className="relative mb-6 inline-block">
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? 360 : 0,
                      scale: hoveredIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-4xl shadow-lg`}
                  >
                    {cert.icon}
                  </motion.div>

                  {/* Animated Ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 ${cert.borderColor}`}
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.3, 1] : 1,
                      opacity: hoveredIndex === index ? [1, 0, 1] : 0
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>

                {/* Certificate Title */}
                <motion.h3 
                  className="text-2xl font-bold text-white mb-3 leading-tight"
                  animate={{
                    x: hoveredIndex === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {cert.title}
                </motion.h3>

                {/* Issuer */}
                <motion.div 
                  className="flex items-center gap-2 mb-4"
                  animate={{
                    x: hoveredIndex === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cert.color}`} />
                  <p className=" font-medium">{cert.issuer}</p>
                </motion.div>

                {/* Description */}
                <motion.p 
                  className=" text-sm leading-relaxed"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {cert.description}
                </motion.p>

                {/* Decorative Gradient Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className={`h-1 bg-gradient-to-r ${cert.color} mt-6 rounded-full`}
                />

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 rounded-2xl`}
                  animate={{
                    opacity: hoveredIndex === index ? 0.05 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated Border on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${cert.color.includes('amber') ? '#f59e0b' : cert.color.includes('emerald') ? '#10b981' : '#a855f7'}, transparent)`
                  }}
                  animate={{
                    opacity: hoveredIndex === index ? 0.3 : 0,
                    x: hoveredIndex === index ? ['-100%', '100%'] : '-100%'
                  }}
                  transition={{
                    x: { duration: 1.5, repeat: Infinity },
                    opacity: { duration: 0.3 }
                  }}
                />
              </motion.div>

              {/* 3D Shadow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20 rounded-2xl blur-xl -z-10`}
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 0.95,
                  opacity: hoveredIndex === index ? 0.4 : 0.2
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-b from-red-600 via-purple-600 to-cyan-800 rounded-full border border-gray-700/50">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-2xl"
              >
                ⚡
              </motion.span>
              <span className=" font-medium">
                Continuously Learning & Growing
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
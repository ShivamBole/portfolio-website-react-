import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import api from "../utils/api";

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data || []);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    }
  };

  const reactProjects = projects.filter((p) =>
    p.techstack?.toLowerCase().includes("react")
  );

  const fullProjects = projects.filter((p) =>
    p.techstack?.toLowerCase().includes("full")
  );

  return (
    <section
      className="section"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">

          {/* LEFT */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mt-10 mb-10 lg:mb-0"
          >
            <div>
              <h2 id="work-heading" className="h2 leading-tight text-marsBlue">
                Projects by
                <br />
                me
              </h2>

              <p className="max-w-sm mb-16">
                Selected <strong>web development</strong> projects created by me,
                a <strong>MERN Stack Full Stack Web Developer</strong>, using React, Tailwind CSS,
                REST APIs, and modern frontend technologies.
              </p>

              <Link to="/Projects">
                <button className="btn btn-sm">View all projects</button>
              </Link>
            </div>

            {/* FEATURED FULL STACK PROJECT */}
            <div className="group relative overflow-hidden border-2 size border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              <div className="w-[30%] rotate-[-25deg]">
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={fullProjects.length > 0 ? fullProjects[2]?.images[1] : ""}
                  alt={
                    fullProjects.length > 0
                      ? `${fullProjects[2]?.title} full stack project by Shivam Bole`
                      : "Full stack project preview"
                  }
                  loading="lazy"
                />
              </div>

              <div className="w-[70%] rotate-[-25deg]">
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={fullProjects.length > 0 ? fullProjects[2]?.images[0] : ""}
                  alt={
                    fullProjects.length > 0
                      ? `${fullProjects[2]?.title} MERN stack application`
                      : "MERN stack project screenshot"
                  }
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <a
                  href={fullProjects.length > 0 ? fullProjects[2]?.projectUrl : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="md:text-2xl text-lg text-gradient">
                    {fullProjects.length > 0 ? fullProjects[2]?.title : ""}
                  </span>
                </a>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  href={fullProjects.length > 0 ? fullProjects[2]?.projectUrl : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="md:text-3xl text-xl text-white">
                    {fullProjects.length > 0 ? fullProjects[2]?.description : ""}
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 justify-end"
          >
            {/* REACT PROJECT */}
            {[reactProjects[1], reactProjects[3]].map((proj, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden border-2 size border-white/50 rounded-xl flex"
              >
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                <div className="w-[35%] rotate-[-25deg]">
                  <img
                    className="group-hover:scale-125 transition-all duration-500"
                    src={proj?.images?.[1]}
                    alt={
                      proj
                        ? `${proj.title} React project by Shivam Bole`
                        : "React project preview"
                    }
                    loading="lazy"
                  />
                </div>

                <div className="w-[65%] rotate-[-25deg]">
                  <img
                    className="group-hover:scale-125 transition-all duration-500"
                    src={proj?.images?.[0]}
                    alt={
                      proj
                        ? `${proj.title} web application screenshot`
                        : "Web project screenshot"
                    }
                    loading="lazy"
                  />
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <a
                    href={proj?.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="md:text-2xl text-lg text-gradient">
                      {proj?.title}
                    </span>
                  </a>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <a
                    href={proj?.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="md:text-3xl text-xl text-white">
                      {proj?.description}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;

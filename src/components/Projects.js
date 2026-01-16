import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import axios from "axios";
import { BiHomeAlt } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import api from "../utils/api";
function Projects({ themeHandler }) {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  // 🔹 FETCH PROJECTS FROM BACKEND
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

  const javaProjects = projects.filter((p) =>
    p.techstack?.toLowerCase().includes("java")
  );
  const reactProjects = projects.filter((p) =>
    p.techstack?.toLowerCase().includes("react")
  );

  const htmlProjects = projects.filter((p) =>
    p.techstack?.toLowerCase().includes("html")
  );

  const fullProjects = projects.filter((p) =>
    p.techstack?.toLowerCase().includes("full")
  );
  // console.log(projects);

  return (
    <div>
      <section id="work">
        <div className="container mx-auto relative  ">
          <div className="flex flex-row gap-x-10 text-center justify-between text-2xl mt-5">
               <Link
              to="/"
              className="gradient text-2xl my-2 content-center p-5 rounded-full"
            >
              <BiHomeAlt />
            </Link>
            {/* SETTINGS ICON */}
            <div
              className="gradient my-2 p-4 rounded-full cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <IoSettings className="text-3xl text-black animate-spin-slow hover:scale-110 transition-transform" />
            </div>

            {/* DROPDOWN */}
            {open && (
              <div className="absolute top-16 left-0 w-32 bg-black rounded-lg !text-white shadow-lg border z-50">
                <button
                  onClick={() => {
                    themeHandler("site");
                    setOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left rounded hover:bg-red-500"
                >
                  Default
                </button>

                <button
                  onClick={() => {
                    themeHandler("dark");
                    setOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-800"
                >
                  Dark
                </button>

                <button
                  onClick={() => {
                    themeHandler("cosmo");
                    setOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-purple-700"
                >
                  Cosmo
                </button>

                <button
                  onClick={() => {
                    themeHandler("white");
                    setOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-400"
                >
                  White
                </button>
              </div>
            )}
         
          </div>

          <div className="flex flex-col my-10 gap-y-10 text-center">
  <h1>Full Stack MERN Projects</h1>

  {/* GRID CONTAINER */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {fullProjects.map((project) => (
      <motion.div
        key={project._id}
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="group size relative overflow-hidden border-2 border-white/50 rounded-xl flex"
      >
        {/* OVERLAY */}
        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

        {/* IMAGE 1 */}
        <div className="w-[30%] rotate-[-25deg]">
          {project.images?.[1] && (
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={project.images[1]}
              alt={project.title}
            />
          )}
        </div>

        {/* IMAGE 2 */}
        <div className="w-[70%] rotate-[-25deg]">
          {project.images?.[0] && (
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={project.images[0]}
              alt={project.title}
            />
          )}
        </div>

        {/* TITLE */}
        <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <a href={project.projectUrl} target="_blank" rel="noreferrer">
            <span className="text-gradient md:text-2xl text-lg">{project.title}</span>
          </a>
        </div>

        {/* DESCRIPTION */}
        <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <a href={project.projectUrl} target="_blank" rel="noreferrer">
            <span className="md:text-3xl text-xl text-white">
              {project.description}
            </span>
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</div>
    

          <div className="flex flex-col  my-10 lg:flex-col gap-y-10 text-center">
            <h1>React Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {reactProjects.map((project) => (
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 size flex md:flex-row  flex-col gap-x-10 justify-end gap-y-10"
              >
                <div className="group relative h-[100%] overflow-hidden border-2 border-white/50 rounded-xl flex">
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
                  <div className="w-[30%] rotate-[-25deg]">
                    <img
                      className="group-hover:scale-125 transition-all duration-500"
                      src={project.images[1]}
                      alt=""
                    />
                  </div>

                  <div className="w-[70%] rotate-[-25deg]">
                    <img
                      className="group-hover:scale-125 transition-all duration-500"
                      src={project.images[0]}
                      alt=""
                    />
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a href={project.projectUrl} target="_blank">
                      <span className="text-gradient md:text-2xl text-lg">{project.title}</span>
                    </a>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <a href={project.projectUrl} target="_blank">
                      <span className="md:text-3xl text-xl text-white">
                        {project.description}
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

            </div>
          </div>
          <div className="flex flex-col lg:flex-col  my-10 gap-y-10 text-center">
            <h1>JavaScript Projects</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {javaProjects.map((project) => (
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 size flex md:flex-row  flex-col gap-x-10 justify-end gap-y-10"
              >
                <div className="group relative h-[100%] overflow-hidden border-2 border-white/50 rounded-xl flex">
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
                  <div className="w-[30%] rotate-[-25deg]">
                    <img
                      className="group-hover:scale-125 transition-all duration-500"
                      src={project.images[1]}
                      alt=""
                    />
                  </div>

                  <div className="w-[70%] rotate-[-25deg]">
                    <img
                      className="group-hover:scale-125 transition-all duration-500"
                      src={project.images[0]}
                      alt=""
                    />
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a href={project.projectUrl} target="_blank">
                      <span className="text-gradient md:text-2xl text-lg">{project.title}</span>
                    </a>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <a href={project.projectUrl} target="_blank">
                      <span className="md:text-3xl text-xl text-white">
                        {project.description}
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

</div>
          </div>
          <div className="flex flex-col lg:flex-col  my-10 col-6 gap-y-10 text-center">
            <h1>HTML & CSS Projects</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {htmlProjects.map((project) => (
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 size flex md:flex-row  flex-col gap-x-10 justify-end gap-y-10"
              >
                <div className="group relative h-[100%] overflow-hidden border-2 border-white/50 rounded-xl flex">
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
                  <div className="w-[30%] rotate-[-25deg]">
                    <img
                      className="group-hover:scale-125 transition-all duration-500"
                      src={project.images[1]}
                      alt=""
                    />
                  </div>

                  <div className="w-[70%] rotate-[-25deg]">
                    <img
                      className="group-hover:scale-125 transition-all duration-500"
                      src={project.images[0]}
                      alt=""
                    />
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a href={project.projectUrl} target="_blank">
                      <span className="text-gradient md:text-2xl text-lg">{project.title}</span>
                    </a>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <a href={project.projectUrl} target="_blank">
                      <span className="md:text-3xl text-xl text-white">
                        {project.description}
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
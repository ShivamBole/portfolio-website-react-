import React, { useState,useEffect } from "react";
import { BrowserRouter,Link,Routes,Route } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import axios from "axios"
import musera from '../assets/murera2.png'
import musera1 from "../assets/musera img.png"
import textutil1 from "../assets/textutil1.png"
import textutil2 from "../assets/textutil2.png"
import fine1 from "../assets/fiane1.png"
import fine2 from "../assets/feane2.png"

const Work = () => {

   const [open, setOpen] = useState(false);
    const [projects, setProjects] = useState([]);
  
    // 🔹 FETCH PROJECTS FROM BACKEND
    useEffect(() => {
      fetchProjects();
    }, []);
  
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/projects");
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
console.log(fullProjects)
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
           variants={fadeIn("left", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
           className="flex-1 flex flex-col gap-y-12 mt-10 mb-10 lg:mb-0">
            <div>
            <h2 className="h2 leading-tight text-marsBlue">
              My Latest
              <br />
              Work.
            </h2>
            <p className="max-w-sm mb-16">
             These are some website which I had created using the technogies like React , Tailwind CSS, API's etc...
            </p>
          
           <Link to='/Projects'> 
            <button className="btn btn-sm">View all projects</button>
            </Link> 
          
            </div>
         
            <div className="group relative overflow-hidden border-2 size border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
              <div className="w-[30%] rotate-[-25deg]" >
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={fullProjects.length>0?fullProjects[2].images[1]:null}
                alt=""
              />
              </div>
             
              <div className="w-[70%] rotate-[-25deg]">
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={fullProjects.length>0?fullProjects[2].images[0]:null}
                alt=""
              />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a href= {fullProjects.length>0?fullProjects[2].projectUrl:null}target="_blank"><span className="md:text-2xl text-lg text-gradient">{fullProjects.length>0?fullProjects[2].title:null}</span></a>  
              </div>
              <div  className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <a href={fullProjects.length>0?fullProjects[2].projectUrl:null} target="_blank"><span className="md:text-3xl text-xl text-white">{fullProjects.length>0?fullProjects[2].description:null}</span></a> 
              </div>
            </div>
          </motion.div>
         <motion.div 
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
         className="flex-1 flex flex-col gap-y-10 justify-end">
         <div className="group relative overflow-hidden border-2 size border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
              <div className="w-[30%] rotate-[-25deg]" >
              <img
                className="group-hover:scale-125 transition-all duration-500 w-[80%]"
                src={reactProjects.length>0?reactProjects[1].images[1]:null}
                alt=""
                
              />
              </div>
             
              <div className="w-[70%] rotate-[-25deg]">
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={reactProjects.length>0?reactProjects[1].images[0]:null}
                alt=""
              />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a href={reactProjects.length>0?reactProjects[1].projectUrl:null} target="_blank"><span className="md:text-2xl text-lg text-gradient">{reactProjects.length>0?reactProjects[1].title:null} </span></a>  
              </div>
              <div  className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <a href={reactProjects.length>0?reactProjects[1].projectUrl:null} target="_blank"><span className="md:text-3xl text-xl text-white">{reactProjects.length>0?reactProjects[1].description:null} </span></a> 
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 size border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
              <div className="w-[39%] rotate-[-25deg]" >
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={reactProjects.length>0?reactProjects[3].images[1]:null} 
                alt=""
              />
              </div>
             
              <div className="w-[61%] rotate-[-25deg]">
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={reactProjects.length>0?reactProjects[3].images[0]:null} 
                alt=""
              />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a href={reactProjects.length>0?reactProjects[3].projectUrl:null} target="_blank"><span className="text-gradient md:text-2xl text-lg">{reactProjects.length>0?reactProjects[3].title:null} </span></a>  
              </div>
              <div  className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <a href={reactProjects.length>0?reactProjects[3].projectUrl:null} target="_blank"><span className="md:text-3xl text-xl text-white">{reactProjects.length>0?reactProjects[3].description:null} </span></a> 
              </div>
            </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;

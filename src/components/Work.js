import React from "react";
import { BrowserRouter,Link,Routes,Route } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import musera from '../assets/murera2.png'
import musera1 from "../assets/musera img.png"
import textutil1 from "../assets/textutil1.png"
import textutil2 from "../assets/textutil2.png"
import fine1 from "../assets/fiane1.png"
import fine2 from "../assets/feane2.png"

const Work = () => {
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
         
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
              <div className="w-[30%] rotate-[-25deg]" >
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={musera}
                alt=""
              />
              </div>
             
              <div className="w-[70%] rotate-[-25deg]">
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={musera1}
                alt=""
              />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a href='https://musiera.netlify.app/' target="_blank"><span className="text-gradient">FRONT END</span></a>  
              </div>
              <div  className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <a href='https://musiera.netlify.app/' target="_blank"><span className="text-3xl text-white">MUSIERA (E-commerce Website )</span></a> 
              </div>
            </div>
          </motion.div>



         <motion.div 
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
         className="flex-1 flex flex-col gap-y-10 justify-end">
         <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
              <div className="w-[30%] rotate-[-25deg]" >
              <img
                className="group-hover:scale-125 transition-all duration-500 w-[80%]"
                src={textutil1}
                alt=""
                
              />
              </div>
             
              <div className="w-[70%] rotate-[-25deg]">
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={textutil2}
                alt=""
              />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a href='https://github.com/ShivamBole/TextUtil.git' target="_blank"><span className="text-gradient">TEXT EDITOR WEBSITE</span></a>  
              </div>
              <div  className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <a href='https://github.com/ShivamBole/TextUtil.git' target="_blank"><span className="text-3xl text-white">TEXTUTIL</span></a> 
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
              <div className="w-[39%] rotate-[-25deg]" >
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={fine1}
                alt=""
              />
              </div>
             
              <div className="w-[61%] rotate-[-25deg]">
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={fine2}
                alt=""
              />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a href='https://github.com/ShivamBole/Pizzahat.git' target="_blank"><span className="text-gradient">FRONT END</span></a>  
              </div>
              <div  className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <a href='https://github.com/ShivamBole/Pizzahat.git' target="_blank"><span className="text-3xl text-white">PIZZAHAT (E-commerce Website )</span></a> 
              </div>
            </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;

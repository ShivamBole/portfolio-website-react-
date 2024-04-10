import React from "react";
import { BrowserRouter,Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/jokes2.png";
import Img2 from "../assets/calculator1.png";
import ImgCal from "../assets/cal.png";
import Img3 from "../assets/jokes1.png";
import game1 from "../assets/game1.png";
import game2 from "../assets/game2.png"
import musera from '../assets/murera2.png'
import musera1 from "../assets/musera img.png"
import ldpage2 from "../assets/landing2.png"
import ldpage1 from "../assets/ldpage1.png"
import portfolio from '../assets/portfolio1.png'
import textutil1 from "../assets/textutil1.png"
import textutil2 from "../assets/textutil2.png"
import fine1 from "../assets/fiane1.png"
import fine2 from "../assets/feane2.png"

import{ BiHomeAlt} from 'react-icons/bi';
function Projects() {
  return (
    <div>
        
        <section id="work">
      <div className="container mx-auto">
        <Link to="/" smooth={true} spy={true} offset={-200} className='position- my-2 active text-xl cursor-pointer w-[60px] h-[60px] flex items-center text-center justify-center'>
        <BiHomeAlt/>
        </Link>
        <div className="flex flex-col lg:flex-col gap-y-10 text-center">
        <h1>JavaScript Projects</h1>
          <motion.div 
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex md:flex-row  flex-col gap-x-10 justify-end gap-y-10" >
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
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
              
              <div className="w-[30%] rotate-[-25deg]" >
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              </div>
             
              <div className="w-[70%] rotate-[-25deg]">
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={ImgCal}
                alt=""
              />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a href='https://github.com/ShivamBole/calculator-codsoft' target="_blank"><span className="text-gradient">CALCULATOR</span></a>  
              </div>
              <div  className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <a href='https://github.com/ShivamBole/calculator-codsoft' target="_blank"><span className="text-3xl text-white">CALCULATOR</span></a> 
              </div>
            </div>
          </motion.div>
      
          <motion.div 
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex md:flex-row  flex-col gap-x-10 justify-end gap-y-10" >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
              <div className="w-[30%] rotate-[-25deg]" >
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              </div>
             
              <div className="w-[70%] rotate-[-25deg]">
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a href='https://github.com/ShivamBole/jokes-website.git' target="_blank"><span className="text-gradient">WEBSITE</span></a>  
              </div>
              <div  className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <a href='https://github.com/ShivamBole/jokes-website.git' target="_blank"><span className="text-3xl text-white">JOKES WEBSITE</span></a> 
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
              <div className="w-[50%] rotate-[-25deg]" >
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={game1}
                alt=""
              />
              </div>
             
              <div className="w-[70%] rotate-[-25deg]">
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={game2}
                alt=""
              />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a href='https://github.com/ShivamBole/rock-paper-scissor-game.git' target="_blank"><span className="text-gradient">GAME</span></a>  
              </div>
              <div  className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <a href='https://github.com/ShivamBole/rock-paper-scissor-game.git' target="_blank"><span className="text-3xl text-white">STONE PAPER SCISSOR</span></a> 
              </div>
            </div>
          </motion.div>
          </div>
          <div className="flex flex-col lg:flex-col gap-y-10 text-center mt-5">
          <h1 className="mt-5">React Projects</h1>
          
          <motion.div 
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex md:flex-row  flex-col gap-x-10 justify-end gap-y-10" >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
              <div className="w-[30%] rotate-[-25deg]" >
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={fine1}
                alt=""
              />
              </div>
             
              <div className="w-[70%] rotate-[-25deg]">
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
          </motion.div>
        </div>
          <div className="flex flex-col lg:flex-col gap-y-10 text-center mt-5 mb-5">
          <h1 className="mt-5">HTML & CSS Projects</h1>
          <motion.div 
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex md:flex-row  flex-col gap-x-10 justify-end gap-y-10" >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
              <div className="w-[30%] rotate-[-25deg]" >
              <img
                className="group-hover:scale-125 transition-all duration-500 w-[65%]"
                src={ldpage1}
                alt=""
              />
              </div>
             
              <div className="w-[70%] rotate-[-25deg]">
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={ldpage2}
                alt=""
              />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a href='https://musiera.netlify.app/' target="_blank"><span className="text-gradient">UI & UX Design</span></a>  
              </div>
              <div  className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <a href='https://musiera.netlify.app/' target="_blank"><span className="text-3xl text-white">MICROSOFT LANDING PAGE</span></a> 
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 justify-beetween"></div>
              <div className="w-[90%] m-5" >
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={portfolio}
                alt=""
              />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a href='https://musiera.netlify.app/' target="_blank"><span className="text-gradient">PORTFOLIO</span></a>  
              </div>
              <div  className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <a href='https://musiera.netlify.app/' target="_blank"><span className="text-3xl text-white">PORTFOLIO Website (HTML&CSS) </span></a> 
              </div>
            </div>
          </motion.div>
          </div>

      </div>
    </section>
        
    </div>
  );
}

export default Projects;

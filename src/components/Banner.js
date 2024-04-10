import React from "react";
import Image from "../assets/me.jpg";
import { FaGithub, FaDribbble, FaLinkedin, FaFacebook,FaInstagram} from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import resume from "../assets/Shivam Bole Resume new.pdf"
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex-item-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:item-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              SHIVAM <span>BOLE</span>
            </motion.h1>
            <motion.div  
            variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div >
            <motion.p 
             variants={fadeIn("up", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
             className="mb-8 max-w-lg mx-auto lg:mx-0">
             My passion lies in Front-end development, I have honed my skills in HTML, CSS, Bootstrap, Tailwind, JavaScript, Responsive Design,React,Jquary,PHP,SQL and version control using Git & GitHub. 
            </motion.p>
            <motion.div
             variants={fadeIn("up", 0.6)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0
              "
            >
          <Link to="contact" activeClass='active' smooth={true} spy={true}>
                    <button className="btn btn-lg">Contact Me</button>
          </Link>  
              <a href={resume} className="text-grsdient btn-link">
                My Resume
              </a>
            </motion.div>
            <motion.div
             variants={fadeIn("up", 0.7)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
             className="flex test-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://github.com/ShivamBole">
                <FaGithub />
              </a>
              <a href="#">
              <FaInstagram />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/shivam-bole-900984241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app#">
                <FaLinkedin />
              </a>
              <a href="#">
             < BiLogoNetlify/>
              </a>
            </motion.div>
          </div>
          <motion.div 
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="hidden p-10 border-r-20 lg:flex flex-1 max-w-[320px] lg:max-w-[320px] ">
            <img style={{transform: 'matrix3d(1.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
    borderRadius: '7% 50%',
    borderWidth: '5px',
    filter: 'saturate(0.7)',
    borderColor:' #ec4899',
    boxShadow: '-10px 3px 1px 1px purple'}} src={Image} alt=" "></img> 
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

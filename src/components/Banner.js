import React from "react";
import Image from "../assets/me.png";
import { FaGithub, FaDribbble, FaLinkedin, FaFacebook,FaInstagram} from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import resume from "../assets/Resume.pdf";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex-item-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-y-8 lg:flex-row md:item-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
                  <h1 className={" bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 text-transparent bg-clip-text inline-block"}>SHIVAM<span> BOLE</span></h1>
            </motion.h1>
            <motion.div  
            variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span id="me" className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
                speed={50}
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 text-transparent bg-clip-text"
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
           I build fast, scalable, and user-focused web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
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
              <a href={resume} className="text-gradient btn-link text-md font-bold" target="blank">
                My Resume
              </a>
            </motion.div>
            <motion.div
             variants={fadeIn("up", 0.7)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
             id="social"
             className="flex test-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://github.com/ShivamBole" target="blank">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/digitalshopbysb/" target="blank">
              <FaInstagram />
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
              className=" mt-[-70px] mx-3 border-r-20 lg:flex flex-1 justify-items-center lg:max-w-[390px] min-w-[264px] ">
            <img src={Image} alt="profile photo" className="lg:w-[100%] w-[60%]" ></img> 
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

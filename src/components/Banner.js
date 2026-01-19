import React from "react";
import Image from "../assets/me.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import resume from "../assets/ShivamBole.pdf";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex-item-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-y-8 lg:flex-row md:item-center lg:gap-x-12">
          
          {/* 🔥 TEXT CONTENT */}
          <div className="flex-1 text-center font-secondary lg:text-left">

            {/* ✅ ONE CLEAN H1 (NO NESTING) */}
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-[40px] lg:text-[72px] font-bold leading-tight
                bg-gradient-to-r from-blue-400 via-purple-400 to-red-400
                text-transparent bg-clip-text inline-block"
            >
              Shivam Bole
            </motion.h1>

            {/* ✅ ROLE (H2 FOR SEO STRUCTURE) */}
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[28px] lg:text-[44px] font-semibold uppercase"
            >
              <span id="me" className="mr-3">I am a</span>
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer", 2000,
                  "React Developer", 2000,
                  "Full Stack Web Developer", 2000
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 text-transparent bg-clip-text"
              />
            </motion.h2>

            {/* ✅ SEO-RICH PARAGRAPH */}
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Shivam Bole is a MERN Stack Full Stack Web Developer specializing in
              React.js, Node.js, MongoDB, and Express.js. I build fast, scalable,
              and user-focused web applications.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <ScrollLink to="contact" smooth spy>
                <button className="btn btn-lg">Contact Me</button>
              </ScrollLink>

              <a
                href={resume}
                className="text-gradient btn-link text-md font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/ShivamBole" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/digitalshopbysb/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/shivam-bole-900984241" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <Link to="/admin">
                <BiLogoNetlify />
              </Link>
            </motion.div>
          </div>

          {/* IMAGE */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mt-[-70px] mx-3 lg:flex flex-1 justify-items-center lg:max-w-[390px]"
          >
            <img
              src={Image}
              alt="Shivam Bole – MERN Stack Full Stack Web Developer"
              className="lg:w-full w-[60%]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

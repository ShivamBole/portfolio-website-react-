import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs' 
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import services from "../assets/final.png";
import resume from "../assets/Shivam Bole Resume new.pdf"
const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>


          <motion.div 
           variants={fadeIn("right", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
          className='flex-1 mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm Front-end Developer...
            </h3>
            <div className='h-[356px] mb-[38px]'>
            <p className='mb-[38px]'>
              <li>Develop highly interactive Front end / User Interfaces for your website</li>
              <li>I have good skills of resposive web development</li>
              <li>I have Ability to follow and learn trending standerds of the industry</li>
              <li>I Always eager to know more about new technologies and to learn it</li>
              <li>I also know the back end technologies like PHP and SQL</li>
              <li>I had Completed many self Projects Like E-commerce websites,joke website, Text-Editor website etc... </li>
            </p>
            <button className='btn btn-sm'>  <a href={resume} download={resume}>
           Download Resume
           </a></button>
         
          </div>
           
          </motion.div>
          <motion.div 
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={services} alt="img" />
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section justify-center md:pt-28" id="about" ref={ref}>
      <div className="container mb-20 pt-5 align-content-center">
        <div className="flex flex-col gap-y-0 mt-5 lg:flex-row lg:gap-x-20 lg:gap-y-0 h-[145vh] md:h-screen">
          
          {/* IMAGE / VISUAL BLOCK */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 bg-services bg-no-repeat lg:max-w-[390px] min-w-[264px] bg-contain bg-center lg:bg-top"
          />

          {/* TEXT CONTENT */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1"
          >
            {/* ✅ H2 — SEO descriptive */}
            <h2 className="h2 text-marsBlue">
              About Shivam Bole
            </h2>

            {/* ✅ H3 — cleaned wording */}
            <h3 className="h3 mb-4">
              MERN Stack Full Stack Web Developer | MCA Student
            </h3>

            {/* ✅ SEO-rich paragraph (NO visual change) */}
            <p className="mb-6">
              Shivam Bole is a Full Stack MERN Developer with hands-on experience
              building responsive and scalable web applications. Skilled in
              developing eCommerce platforms, admin dashboards, and appointment
              management systems using MongoDB, Express.js, React.js, and Node.js.
              Strong understanding of REST APIs, authentication, third-party
              integrations, and modern frontend UI/UX practices. Passionate about
              solving real-world problems through clean, efficient, and
              maintainable code.
            </p>

            {/* STATS */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div
                  className="text-[40px] font-tertiary text-gradient mb-2"
                  aria-label="Years of experience"
                >
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>

              <div>
                <div
                  className="text-[40px] font-tertiary text-gradient mb-2"
                  aria-label="Projects completed"
                >
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>

              <div>
                <div
                  className="text-[40px] font-tertiary text-gradient mb-2"
                  aria-label="Satisfied clients"
                >
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-x-8 items-center">
              <Link to="contact" smooth spy>
                <button className="btn btn-lg">Contact Me</button>
              </Link>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

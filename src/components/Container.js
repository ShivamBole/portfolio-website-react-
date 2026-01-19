import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Services from "./Services";
import Work from "./Work";
import Contact from "./Contact";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./certifications";
import AdditionalDetails from "./Interestssection ";

function Container({ themeHandler }) {
  return (
    <>
      {/* 🔝 Site Navigation */}
      <header>
        <Nav />
        <Header themeHandler={themeHandler} />
      </header>

      {/* 🔥 MAIN CONTENT (VERY IMPORTANT FOR GOOGLE) */}
      <main>
        {/* ✅ HERO / BANNER — MUST CONTAIN H1 */}
        <section id="home">
          <Banner />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Work />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="interests">
          <AdditionalDetails />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default Container;

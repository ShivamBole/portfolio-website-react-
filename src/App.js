import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Projects from "./components/Projects";
import Container from "./components/Container";

// 🔵 USER CHAT
import Chat from "./Admin/component/Chat";

// 🔴 ADMIN
import AdminGate from "./Admin/component/AdminGate";
import Banner from "./Admin/pages/Banner";
import About from "./Admin/pages/About";
import AddProject from "./Admin/pages/AddProject";
import Experience from "./Admin/pages/Experience";
import Skill from "./Admin/pages/Skill";
import Dashboard from "./Admin/component/Dashboard";
import AdminInbox from "./Admin/pages/AdminInbox";

import { trackVisitor } from "./utils/trackVisitor";

const App = () => {
  const [theme, setTheme] = useState("site");
  const [chatOpen, setChatOpen] = useState(false);

  const themeHandler = (selectedTheme) => {
    if (selectedTheme === "dark") setTheme("dark");
    else if (selectedTheme === "white") setTheme("white");
    else if (selectedTheme === "cosmo") setTheme("cosmo");
    else setTheme("site");
  };

  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <div
      className={`
        min-h-screen
        overflow-hidden
        bg-no-repeat
        bg-cover
        ${theme === "site" ? "bg-site" : ""}
        ${theme === "dark" ? "bg-black text-white" : ""}
        ${
          theme === "white"
            ? "bg-white text-black [&_h3]:!text-black [&_input::placeholder]:!text-black [&_textarea::placeholder]:!text-black [&_#me]:!text-black"
            : ""
        }
        ${
          theme === "cosmo"
            ? "bg-cosmo cosmo-theme text-white [&a]:text-white [&a]:cosmo-theme-gradient"
            : ""
        }
      `}
    >
      {/* 🔥 GLOBAL SEO (applies to all public pages) */}
      <Helmet>
        <title>Shivam Bole | MERN Stack Full Stack Web Developer</title>
        <meta
          name="description"
          content="Shivam Bole is a MERN Stack Full Stack Web Developer specializing in React, Node.js, MongoDB, and modern web applications."
        />
        <meta name="author" content="Shivam Bole" />
        <link rel="canonical" href="https://shivam-bole.vercel.app/" />
      </Helmet>

      <BrowserRouter>
        <Routes>
          {/* ✅ PUBLIC ROUTES (INDEXABLE) */}
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Shivam Bole | MERN Stack Full Stack Web Developer</title>
                </Helmet>
                <Container themeHandler={themeHandler} />
              </>
            }
          />

          <Route
            path="/projects"
            element={
              <>
                <Helmet>
                  <title>Projects | Shivam Bole – MERN Stack Developer</title>
                  <meta
                    name="description"
                    content="Explore MERN stack projects by Shivam Bole, built using React, Node.js, MongoDB, and Express."
                  />
                  <link
                    rel="canonical"
                    href="https://shivam-bole.vercel.app/projects"
                  />
                </Helmet>
                <Projects themeHandler={themeHandler} />
              </>
            }
          />

          {/* 🚫 ADMIN ROUTES (NOT INDEXED) */}
          <Route path="/admin" element={<AdminGate />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="banner" element={<Banner />} />
            <Route path="about" element={<About />} />
            <Route path="skill" element={<Skill />} />
            <Route path="add-project" element={<AddProject />} />
            <Route path="experience" element={<Experience />} />
            <Route path="inbox" element={<AdminInbox />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* 🔵 USER CHAT (PUBLIC ONLY) */}
      {!window.location.pathname.startsWith("/admin") && (
        <>
          <button className="chat-float" onClick={() => setChatOpen(!chatOpen)}>
            💬
          </button>
          {chatOpen && <Chat />}
        </>
      )}
    </div>
  );
};

export default App;

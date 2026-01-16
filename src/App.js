import React, { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
  const [chatOpen, setChatOpen] = useState(false); // ✅ USER CHAT STATE

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
      <BrowserRouter>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Container themeHandler={themeHandler} />} />
          <Route
            path="/projects"
            element={<Projects themeHandler={themeHandler} />}
          />

          {/* ADMIN ROUTES */}
          <Route path="/admin" element={<AdminGate />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="banner" element={<Banner />} />
            <Route path="about" element={<About />} />
            <Route path="skill" element={<Skill />} />
            <Route path="add-project" element={<AddProject />} />
            <Route path="experience" element={<Experience />} />
            <Route path="inbox" element={<AdminInbox />} /> {/* ✅ FIXED */}
          </Route>
        </Routes>
      </BrowserRouter>

      {/* 🔵 USER FLOATING CHAT (NOT ON ADMIN PAGES) */}
      {!window.location.pathname.startsWith("/admin") && (
        <>
          <button
            className="chat-float"
            onClick={() => setChatOpen(!chatOpen)}
          >
            💬
          </button>

          {chatOpen && <Chat />}
        </>
      )}
    </div>
  );
};

export default App;

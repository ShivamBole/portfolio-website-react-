

import React, { useState } from "react";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";

const App = () => {
  const [theme, setTheme] = useState("site"); // site | dark | white

  const themeHandler = (selectedTheme) => {
    if (selectedTheme === "dark") {
      setTheme("dark");
    } else if (selectedTheme === "white") {
      setTheme("white");
    }  else if (selectedTheme === "cosmo") {
      setTheme("cosmo");
    }else {
      setTheme("site");
    }
  };

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
     ? "bg-white text-black [&_h3]:!text-black [&_input::placeholder]:!text-black [&_textarea::placeholder]:!text-black [&_#me]:!text-black "
     : ""
 }
 ${theme === "cosmo" ? "bg-cosmo cosmo-theme text-white [&a]:text-white [&a]:cosmo-theme-gradient " : ""}

      `}
    >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container themeHandler={themeHandler} />} />
          <Route
            path="/Projects"
            element={<Projects themeHandler={themeHandler} />}
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;

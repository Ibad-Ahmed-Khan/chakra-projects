import React from "react";
import "./App.css";
import "./styles/hero.css";
import "./styles/skills.css";
import "./styles/projects.css";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="app-parent">
      <div id="home"></div>
      <Hero />
      <div id="skills"></div>
      <Skills />
      <div id="projects"></div>
      <Projects />
    </div>
  );
}

export default App;

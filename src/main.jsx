import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import Skills from "./Components/Skills.jsx";
import Hero from "./Components/Hero.jsx";
import Projetos from './Components/Projetos.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Skills/>
    <Projetos/>
  </StrictMode>
);

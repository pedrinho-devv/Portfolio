import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import Skills from "./Components/Skills.jsx";
import Hero from "./Components/Hero.jsx";
import Projetos from './Components/Projetos.jsx'
import Sobre from "./Components/Sobre.jsx"
import Contato from "./Components/contato.jsx";
import Footer from "./Components/Footer.jsx";
import ShinyEffect from "./Components/ShinyEffect.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <ShinyEffect/>
    <Skills/>
    <Projetos/>
    <Sobre/>
    <Contato/>
    <Footer/>
  </StrictMode>
);

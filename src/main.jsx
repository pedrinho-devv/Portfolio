import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ShinyEffect from "./Components/ShinyEffect.jsx";
import Navbar from "./Components/Navbar.jsx";

import Hero from "./Components/Hero.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <ShinyEffect/>
    <Hero />
  </StrictMode>
);

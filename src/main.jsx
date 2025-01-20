import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import ShinyEffect from './Components/ShinyEffect.jsx'
import Hero from './Components/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <ShinyEffect/>
    <Hero/>
  </StrictMode>,
)

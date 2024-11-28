import { useState } from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import {TabsDemo} from "./sections/Education.jsx";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        {/*<Clients />*/}
        <TabsDemo />
        <Experience />
        <Contact />
        <Footer />
    </main>
  )
}

export default App

import Hero from "./sections/Hero"
import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import { useState } from "react";
import About from "./sections/About";
import Offer from "./sections/Offer";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-x-hidden w-[100%]">
      <Navbar setIsOpen={setIsOpen} />
      <MobileNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
    <Hero/>
    <About/>
    <Offer/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App

import Hero from "./sections/Hero"
import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import { useState } from "react";
import About from "./sections/About";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-x-hidden w-[100%]">
      <Navbar setIsOpen={setIsOpen} />
      <MobileNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
    <Hero/>
    <About/>
    </div>
  )
}

export default App

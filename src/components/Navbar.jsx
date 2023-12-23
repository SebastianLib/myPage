import React, { useEffect, useState } from "react";
import {BiMenu} from 'react-icons/bi'
import whiteLogo from '../assets/whiteLogo.png'

const Navbar = ({setIsOpen}) => {

  const [background, setBackground] = useState(false);

  const onScroll = () => {
    if(window.scrollY > 50){
      setBackground(true)
    }else{
      setBackground(false)
    }
  }

useEffect(()=>{
  window.addEventListener("scroll", onScroll)

  return () => window.removeEventListener('scroll', onScroll);
})

  return (
    <nav className={`fixed transition-all duration-300 top-0 w-full z-30 ${background? "bg-black/80" : "bg-transparent"} `}>
      <div className="flex items-center justify-between relative z-20 py-4 text-white mx-2 sm:mx-4 md:mx-8 lg:mx-20">
      {/* <h1 className="text-4xl md:text-5xl font-bold">Seli<span className="text-red-600">Code</span></h1> */}
      <img src={whiteLogo} alt="" className="w-16 lg:w-24"/>

      <ul className="hidden md:flex gap-2 lg:gap-8 cursor-pointer">
        <li className="navLi">Strona główna</li>
        <li className="navLi">O mnie</li>
        <li className="navLi">Oferta</li>
        <li className="navLi">Kontakt</li>
      </ul>

      <BiMenu onClick={()=>setIsOpen(true)} className="flex md:hidden text-3xl hover:text-red-600 transition-colors duration-300"/>
      </div>
    </nav>
  );
};

export default Navbar;

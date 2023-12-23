import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import MobileNavbar from "../components/MobileNavbar";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="h-screen relative bg-[url('assets/xdd.PNG')] bg-cover flex justify-center items-center">
      {/* <Navbar setIsOpen={setIsOpen} />
      <MobileNavbar setIsOpen={setIsOpen} isOpen={isOpen} /> */}

      <div className="z-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">Tworzę Strony</h1>
        <div className="flex items-center justify-center">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Które Wyróżnią Twój Biznes!",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "Które Zwiększą Twoją Sprzedaż!",
                3000,
              ]}
              wrapper="span"
              speed={150}
              className="text-2xl md:text-3xl lg:text-5xl mt-4 text-red-500 font-semibold"
              style={{display: "flex" }}
              repeat={Infinity}
            />
          </div>
        {/* 
      <button className='px-8 py-4 bg-white text-black mt-8'>Zobacz więcej</button> */}
        <a
          href="#_"
          className="relative mt-8 inline-flex items-center px-10 py-3 md:px-14 md:py-5 overflow-hidden text-lg font-bold text-black border-2 border-black rounded-full bg-white hover:text-white group hover:bg-gray-50"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-red-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-y-[-105%] group-hover:translate-y-0 ease">
            <svg
              className="w-5 h-5 ml-1 rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">Zobacz Więcej</span>
        </a>
      </div>

      <div className="absolute inset-0 bg-black/80"></div>
    </div>
  );
};

export default Hero;

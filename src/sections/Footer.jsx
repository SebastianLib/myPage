import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="bg-white shadow-xl rounded-lg dark:bg-gray-900">
   <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-20" alt="Flowbite Logo" />
            </a>
            <ul className="hidden md:flex gap-2 lg:gap-8 cursor-pointer">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li className="navLi">Strona główna</li>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li className="navLi">O mnie</li>
          </Link>
          <Link
            to="offer"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li className="navLi">Oferta</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li href="hero" className="navLi">Kontakt</li>
          </Link>
        </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">SeliCode™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer
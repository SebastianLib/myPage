import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-white shadow-xl rounded-lg dark:bg-gray-900">
   <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-20" alt="Flowbite Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Strona główna</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">O mnie</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Oferta</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Kontakt</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">SeliCode™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-scroll';

const MobileNavbar = ({ isOpen, setIsOpen }) => {

  // const links = [
  //   {
  //     label: "strona główna",
  //     href: "#hero"
  //   },
  //   {
  //     label: "O mnie",
  //     href: "#about"
  //   },
  //   {
  //     label: "Oferta",
  //     href: "#offer"
  //   },
  //   {
  //     label: "Kontakt",
  //     href: "#contact"
  //   },
  // ]

  return (
    <div
      className={`fixed z-30 flex items-center justify-center top-0 right-0 bottom-0 transition-all duration-500 bg-white ${
        isOpen ? "left-0 " : "left-[100%] right-[-100%]"
      }`}
    >
      <ul className="text-center flex flex-col gap-6 w-full">
        <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li onClick={() => setIsOpen(false)}  className="navLi text-xl">Strona główna</li>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li onClick={() => setIsOpen(false)}  className="navLi text-xl">O mnie</li>
          </Link>
          <Link
            to="offer"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li onClick={() => setIsOpen(false)}  className="navLi text-xl">Oferta</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li onClick={() => setIsOpen(false)} className="navLi text-xl">Kontakt</li>
          </Link>
      </ul>
      <AiOutlineClose onClick={() => setIsOpen(false)} className='absolute top-8 right-4 text-3xl cursor-pointer'/>
    </div>
  );
};

export default MobileNavbar;

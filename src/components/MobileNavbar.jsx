import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const MobileNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed z-30 flex items-center justify-center top-0 right-0 bottom-0 transition-all duration-500 bg-white ${
        isOpen ? "left-0 " : "left-[100%] right-[-100%]"
      }`}
    >
      <ul className="text-center flex flex-col gap-6 w-full">
        <Link to="hero" spy={true} smooth={true} offset={-50} duration={500}>
          <li onClick={() => setIsOpen(false)} className="navLi text-xl">
            <a href="#hero">Strona główna</a>
          </li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
          <li onClick={() => setIsOpen(false)} className="navLi text-xl">
            {" "}
            <a href="#about">O mnie</a>
          </li>
        </Link>
        <Link to="offer" spy={true} smooth={true} offset={-50} duration={500}>
          <li onClick={() => setIsOpen(false)} className="navLi text-xl">
            <a href="#offer">Oferta</a>
          </li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
          <li onClick={() => setIsOpen(false)} className="navLi text-xl">
          <a href="#contact">Kontakt</a>
          </li>
        </Link>
      </ul>
      <AiOutlineClose
        onClick={() => setIsOpen(false)}
        className="absolute top-8 right-4 text-3xl cursor-pointer"
      />
    </div>
  );
};

export default MobileNavbar;

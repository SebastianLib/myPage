import {AiOutlineClose} from 'react-icons/ai'

const MobileNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed z-30 flex items-center justify-center top-0 right-0 bottom-0 transition-all duration-500 bg-white ${
        isOpen ? "left-0 " : "left-[100%] right-[-100%]"
      }`}
    >
      <ul className="text-center flex flex-col gap-6 w-full">
        <li onClick={() => setIsOpen(false)} className="text-xl font-semibold cursor-pointer">
          Strona główna
        </li>
        <li onClick={() => setIsOpen(false)} className="text-xl font-semibold cursor-pointer">
          O mnie
        </li>
        <li onClick={() => setIsOpen(false)} className="text-xl font-semibold cursor-pointer">
          Oferta
        </li>
        <li onClick={() => setIsOpen(false)} className="text-xl font-semibold cursor-pointer">
          Kontakt
        </li>
      </ul>
      <AiOutlineClose onClick={() => setIsOpen(false)} className='absolute top-8 right-4 text-3xl cursor-pointer'/>
    </div>
  );
};

export default MobileNavbar;

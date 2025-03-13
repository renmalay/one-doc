import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-6 border-b-2 relative" data-aos="fade-down" data-aos-duration="2000" data-aos-mirror="false">
      <h1 className="text-xl font-bold">LOGO</h1>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden block text-gray-800 focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation */}
      <nav 
      className={`absolute left-0 w-full shadow-md transition-all duration-300 ease-in-out 
      ${isOpen ? "top-full opacity-100 visible backdrop-blur-sm" : "top-full opacity-0 invisible"}
      md:relative md:top-0 md:opacity-100 md:visible md:bg-transparent md:shadow-none md:w-auto ml-auto`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-10 font-bold text-center md:text-right md:text-sm tracking-widest">
          <li><a href="#" className="hover:underline block py-3 md:py-0">HOME</a></li>
          <li><a href="#" className="hover:underline block py-3 md:py-0">ABOUT US</a></li>
          <li><a href="#" className="hover:underline block py-3 md:py-0">SERVICES</a></li>
          <li><a href="#" className="hover:underline block py-3 md:py-0">PROJECTS</a></li>
          <li><a href="#" className="hover:underline block py-3 md:py-0">TEAM</a></li>
          <li><a href="#" className="hover:underline block py-3 md:py-0">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
}

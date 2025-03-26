"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["HOME", "ABOUT US", "SERVICES", "PROJECTS", "TEAM", "CONTACT US"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(navItems[0]);


  // Close the mobile menu when resizing to a large screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ease-in-out ${
        isScrolled ? "shadow-2xl bg-black/40 backdrop-blur-sm h-[10%]" : "h-[15%]"}
      `}
    >
      <div className={`h-full mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-25 flex justify-between items-center ${
          isScrolled ? "" : "border-b-2" }  
        `}
      >

        <h1 className="text-xl font-bold">LOGO</h1>

        <button 
          className="md:hidden block text-gray-800 focus:outline-none" 
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} color="#ffffff9f" absoluteStrokeWidth={true} />
        </button>

        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-lg z-[99]" 
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        <nav 
          className={`fixed top-0 right-0 h-screen w-64 shadow-md transition-transform duration-300 ease-in-out z-[100] 
          ${isOpen ? "translate-x-0 bg-black/60 backdrop-blur-lg" : "translate-x-full"} 
          md:relative md:top-0 md:right-auto md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:shadow-none`}
        >
          {isOpen && (
            <button 
              className="absolute top-4 right-4 text-white focus:outline-none md:hidden" 
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>
          )}

        <ul className="flex flex-col md:flex-row md:space-x-10 font-semibold text-center md:text-right text-md tracking-widest mt-15 md:mt-0">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
              href={`#${item.toLocaleLowerCase().replace(" ", "-")}`}
              onClick={() =>  setActive(item)}
              className={`relative block py-3 md:py-0 transition-colors duration-300 
                ${active === item ? "text-white font-bold" : "text-gray-400 hover:text-gray-200"}
              `}
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300
                ${active === item ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </a>
            </li>
          ))}
        </ul>

        </nav>
      </div>
      
    </header>
  );
}

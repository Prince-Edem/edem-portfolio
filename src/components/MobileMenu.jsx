import { useEffect } from "react"
import { X } from "lucide-react";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {

  return (
    <div 
      className={`fixed top-0 left-0 w-full bg-surface/98 
                  z-40 flex flex-col items-center justify-start pt-28 transition-all 
                  duration-300 ease-in-out 
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button onClick={() => setMenuOpen(false)} 
              className="absolute top-5 right-5 text-ink text-3xl focus:outline-none cursor-pointer"
              aria-label="Close Menu"
      >
        <X />
      </button>

      <a 
        href="#home" className={`text-2xl font-semibold text-ink my-4 transform transition-transform duration-300
                                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        onClick={() => setMenuOpen(false)}
      >
        home
      </a>
      <a 
        href="#about" className={`text-2xl font-semibold text-ink my-4 transform transition-transform duration-300
                                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        onClick={() => setMenuOpen(false)}
      >
        about
      </a>
      <a 
        href="#projects" className={`text-2xl font-semibold text-ink my-4 transform transition-transform duration-300
                                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        onClick={() => setMenuOpen(false)}
      >
        projects
      </a>
      <a 
        href="#contact" className={`text-2xl font-semibold text-ink my-4 transform transition-transform duration-300
                                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        onClick={() => setMenuOpen(false)}
      >
        contact
      </a>
    </div>
  );
};
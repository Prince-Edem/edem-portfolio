import { useEffect } from "react"
import { ThemeToggle } from "./sections/ThemeToggle"

export const Navbar = ({menuOpen, setMenuOpen}) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    document.documentElement.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

  return (
    <nav 
      className="fixed top-0 w-full z-40 bg-surface/80 backdrop-blur-lg border-b border-ink/10 shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl text-ink">
            pek<span className="text-accent">k<span className="text-accent-orange text-2xl">.</span></span>
          </a>

          {/* Right-side group: desktop links, theme toggle (always visible), mobile hamburger */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-ink-muted hover:text-ink transition-colors">
                home
              </a>
              <a href="#about" className="text-ink-muted hover:text-ink transition-colors">
                about
              </a>
              <a href="#projects" className="text-ink-muted hover:text-ink transition-colors">
                projects
              </a>
              <a href="#contact" className="text-ink-muted hover:text-ink transition-colors">
                contact
              </a>
            </div>

            <ThemeToggle />

            <div 
              className={`w-7 h-5 relative cursor-pointer x-40 md:hidden transition-opacity ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`} 
              onClick={() => setMenuOpen((prev => !prev))}
            >
              &#9776;
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
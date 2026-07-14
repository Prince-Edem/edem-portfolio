import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsDarkMode(false);
    }
    else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }, [])
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }

  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-[rgb(234,88,12)]"/>
      ) : (
      <Moon className="h-6 w-6 text-blue-500" />
      )}
    </button>
  )
}
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(
        () => localStorage.getItem("theme") !== "light"
    )

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode)
        localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev)
    }

    return <button onClick={toggleTheme} aria-label="Toggle theme" className={cn(
        "fixed bottom-5 left-5 z-50 p-2 rounded-full transition-colors duration-300",
        "sm:bottom-auto sm:left-auto sm:top-5 sm:right-5",
        "focus:outline-hidden"
    )}>
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
            <Moon className="h-6 w-6 text-blue-900" />
        )}
    </button>

}

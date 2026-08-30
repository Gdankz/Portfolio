import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "../lib/utils"


interface RevealProps {
    children: ReactNode
    className?: string
    delay?: number
}


export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return <div
        ref={ref}
        style={{ transitionDelay: `${delay}ms` }}
        className={cn("reveal", isVisible && "reveal-visible", className)}
    >
        {children}
    </div>
}

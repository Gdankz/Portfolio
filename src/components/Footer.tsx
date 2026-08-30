import { ArrowUp } from "lucide-react"


export const Footer = () => {
    const year = new Date().getFullYear()

    return <footer className="py-8 px-4 relative border-t border-border">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
                © {year} Gabriel Bayu. All rights reserved.
            </p>

            <p className="text-sm text-muted-foreground">
                Built with <span className="text-primary">React</span> &{" "}
                <span className="text-primary">Tailwind CSS</span>
            </p>

            <a href="#hero"
                aria-label="Back to top"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
            >
                <ArrowUp className="h-5 w-5" />
            </a>
        </div>
    </footer>
}

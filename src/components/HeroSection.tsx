import { ArrowDown } from "lucide-react"
import hero from "../assets/hero.png"


export const HeroSection = () => {
    return <section id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <div className="mb-2 opacity-0 animate-fade-in-delay-2">
                    <img
                        src={hero}
                        alt="Gabriel Bayu"
                        className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-primary/30 shadow-[0_0_30px_#8b5cf640] animate-float"
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Gabriel </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1"> Bayu </span>
                </h1>
                <p className="text-xl md:text-3xl font-semibold tracking-wide opacity-0 animate-fade-in-delay-2">
                    <span className="text-primary">IoT Developer</span>
                    <span className="text-muted-foreground">, Fullstack/Backend Developer</span>
                </p>
                <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>

        </div>
    </section>
}
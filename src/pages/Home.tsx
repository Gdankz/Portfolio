import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { AuroraBackground } from "../components/AuroraBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutMe } from "../components/AboutMe"
import { Skills } from "../components/Skills"
import { Projects } from "../components/Projects"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { Reveal } from "../components/Reveal"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme Toggle */}
            <ThemeToggle />


            {/* Background Effects*/}
            <StarBackground />
            <AuroraBackground />


            {/* Navbar */}
            <Navbar />


            {/* Main Content */}
            <main>
                <HeroSection />
                <Reveal>
                    <AboutMe />
                </Reveal>
                <Reveal>
                    <Skills />
                </Reveal>
                <Reveal>
                    <Projects />
                </Reveal>
                <Reveal>
                    <Contact />
                </Reveal>
            </main>

            {/* Footer */}
            <Reveal>
                <Footer />
            </Reveal>


        </div>
    )
}

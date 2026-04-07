import { Briefcase, Code, User } from "lucide-react"


export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate IoT and Arduino
                    </h3>

                    <p className="text-muted-foreground">
                        A tech enthusiast passionate about the synergy between hardware and intelligence.
                        I have a solid foundation in Machine Learning and Raspberry Pi,
                        complemented by intermediate experience in IoT and Arduino prototyping.
                        To complete my technical stack.</p>

                    <p className="text-muted-foreground">
                        I am currently expanding my expertise into Backend Development,
                        driven by the goal of building robust, end-to-end intelligent systems.
                    </p>

                    <div className="flex felx-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Iot Developer</h4>
                                <p className="text-muted-foreground">
                                    Developing embedded systems with Raspberry Pi and Arduino
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Backend Developer</h4>
                                <p className="text-muted-foreground">
                                    Currently specialising in backend development with Go Language
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
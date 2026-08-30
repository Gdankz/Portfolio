import { Folder, FolderGit2 } from "lucide-react"


const projects = [
    {
        title: "Motorcycle Counter",
        description: "Vehicle counting system using dual ultrasonic sensors (HC-SR04) with Arduino. Tracks passing motorcycles and signals capacity status through three indicator LEDs for parking monitoring.",
        techStack: ["Arduino", "C++", "HC-SR04", "Embedded Systems"],
        githubLink: "https://github.com/Gdankz/Motorcycle-Counter",
    },
    {
        title: "Automatic Hand Sanitizer",
        description: "Touchless hand sanitizer dispenser built with an IR obstacle sensor and servo motor. Automatically dispenses soap when hands are detected, promoting hygienic contactless use.",
        techStack: ["Arduino", "C++", "Servo Motor", "IR Sensor"],
        githubLink: "https://github.com/Gdankz/AutomaticHandSanitizer",
    },
    {
        title: "Australian Weather ANN",
        description: "Deep learning model predicting next-day rainfall using an Artificial Neural Network. Covers the full workflow: EDA, data cleaning, feature engineering, and evaluation — achieving 85% test accuracy.",
        techStack: ["Python", "Keras", "TensorFlow", "Scikit-learn"],
        githubLink: "https://github.com/Gdankz/Australian-Weather-ANN",
    },
    {
        title: "Branch and Bound Maze",
        description: "Maze shortest-path solver implementing the Branch and Bound algorithm with a priority queue (best-first search), exploring a 10x10 grid from start to exit with step-by-step node traversal.",
        techStack: ["Java", "PriorityQueue", "Algorithms"],
        githubLink: "https://github.com/Gdankz/BranchAndBound-Maze",
    },
]


export const Projects = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, key) => (
                    <article key={key}
                        className="gradient-border p-6 card-hover flex flex-col"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Folder className="h-6 w-6 text-primary" />
                            </div>
                            <a href={project.githubLink}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${project.title} source code`}
                                className="text-foreground/70 hover:text-primary transition-colors duration-300"
                            >
                                <FolderGit2 className="h-5 w-5" />
                            </a>
                        </div>

                        <h3 className="text-xl font-semibold mb-2 text-left">
                            {project.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 text-left flex-1">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techKey) => (
                                <span key={techKey}
                                    className="text-xs px-3 py-1 rounded-full bg-secondary/70 text-foreground/80"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/Gdankz"
                    target="_blank"
                    rel="noreferrer"
                    className="cosmic-button"
                >
                    View More on GitHub
                </a>
            </div>
        </div>
    </section>
}

import { Briefcase, FolderGit2, Mail, Send } from "lucide-react"
import type { FormEvent } from "react"


const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "gabrielbayu03@gmail.com",
        href: "mailto:gabrielbayu03@gmail.com",
    },
    {
        icon: Briefcase,
        label: "LinkedIn",
        value: "Gabriel Bayu",
        href: "https://www.linkedin.com/in/gabriel-bayu/",
    },
    {
        icon: FolderGit2,
        label: "GitHub",
        value: "Gdankz",
        href: "https://github.com/Gdankz",
    },
    {
        icon: Send,
        label: "Location",
        value: "Indonesia",
        href: "#contact",
    },
]


export const Contact = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const name = String(formData.get("name") ?? "")
        const email = String(formData.get("email") ?? "")
        const message = String(formData.get("message") ?? "")

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)

        window.location.href = `mailto:gabrielbayu03@gmail.com?subject=${subject}&body=${body}`
    }

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Get In <span className="text-primary"> Touch </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
                I'm currently open to new opportunities and collaborations.
                Whether you have a question or just want to say hi,
                my inbox is always open — I'll do my best to get back to you!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((item, key) => (
                    <a key={key}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="gradient-border p-6 card-hover flex flex-col items-center gap-3 text-center"
                    >
                        <div className="p-3 rounded-full bg-primary/10">
                            <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">{item.label}</h3>
                        <p className="text-muted-foreground text-sm break-all">
                            {item.value}
                        </p>
                    </a>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="gradient-border p-6 sm:p-8 mt-12 text-left space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        name="name"
                        type="text"
                        required
                        placeholder="Your Name"
                        aria-label="Your Name"
                        className="w-full rounded-md bg-secondary/50 border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-primary transition-colors duration-300"
                    />
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className="w-full rounded-md bg-secondary/50 border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-primary transition-colors duration-300"
                    />
                </div>
                <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Your Message"
                    aria-label="Your Message"
                    className="w-full rounded-md bg-secondary/50 border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-primary transition-colors duration-300 resize-y"
                />
                <button type="submit" className="cosmic-button w-full sm:w-auto inline-flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                </button>
            </form>

            <div className="text-center mt-12">
                <a href="mailto:gabrielbayu03@gmail.com" className="cosmic-button inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Say Hello
                </a>
            </div>
        </div>
    </section>
}

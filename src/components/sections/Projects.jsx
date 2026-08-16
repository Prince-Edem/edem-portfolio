import { RevealOnScroll } from "../RevealOnScroll";

const baseUrl = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;

const projects = [
  {
    title: "Recap - AI notetaker",
    description: "A modern landing page for a made-up application",
    image: `${baseUrl}/projects/recap-landing-page.png`,
    tech: ["React", "JavaScript", "TailwindCSS"],
    link: "https://recap-webapp-sage.vercel.app",
    github: "https://github.com/Prince-Edem/recap-landing-page",
  },
  {
    title: "Agora - Event management",
    description: "A minimal event planner built to showcase clean full-stack fundamentals: create an event, share it via a unique link, and track RSVPs. No task boards, no budgeting, no pricing tiers",
    image: `${baseUrl}/projects/agora-event-mgt.png`,
    tech: ["Next.js", "TypeScript", "TailwindCSS", "PostgresSQL", "ShadCN"],
    link: "https://agora-event-app.vercel.app",
    github: "https://github.com/Prince-Edem/agora-event-app",
  },
  // {
  //   title: "e-commerce platform",
  //   description: "full-stack e-commerce with morder ui, secure payment integration and customizable product inventory.",
  //   image: `${import.meta.env.BASE_URL}/projects/project3.png`,
  //   tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   title: "real-time chat app",
  //   description: "scalable chat platform supporting real-time messaging, presence and group chat features.",
  //   image: `${import.meta.env.BASE_URL}/projects/project4.png`,
  //   tech: ["Socket io", "Express", "React", "Redis"],
  //   link: "#",
  //   github: "#",
  // },
]

export const Projects = () => {

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-accent text-center"
          >
            Projects
          </h2>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, key) => (
              <div 
                key={key}
                className= "rounded-xl border border-ink/10 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_2px_8px_var(--shadow-accent-20)] transition bg-track"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-110" 
                  />
                </div>
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-accent-orange">{project.title}</h3>
                    <p className="text-ink-subtle ,b-2">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techKey) => (
                      <span
                      key={techKey}
                      className="bg-accent/10 text-accent py-1 px-3 rounded-full text-sm hover:bg-accent/20 hover:shadow-[0_2px_8px_var(--shadow-accent-20)] transition-all"
                    >
                      {tech}
                    </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a href={project.link} className="text-accent hover:text-accent-light transition-colors my-4"
                    >
                      view project → 
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
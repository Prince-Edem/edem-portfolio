import { RevealOnScroll } from "../RevealOnScroll";

const baseUrl = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M12 2C6.477 2 2 6.523 2 12.001c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.699-2.782.605-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.911.833.091-.647.349-1.088.634-1.338-2.221-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.986 1.029-2.682-.103-.253-.446-1.275.098-2.657 0 0 .84-.269 2.75 1.026A9.543 9.543 0 0 1 12 6.844a9.54 9.54 0 0 1 2.503.338c1.909-1.295 2.748-1.026 2.748-1.026.546 1.382.202 2.404.1 2.657.64.696 1.028 1.59 1.028 2.682 0 3.84-2.337 4.688-4.565 4.937.359.309.678.918.678 1.849 0 1.334-.012 2.41-.012 2.738 0 .268.18.577.688.48A10.01 10.01 0 0 0 22 12.001C22 6.523 17.523 2 12 2Z" />
  </svg>
);

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
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold mb-2 text-accent-orange">{project.title}</h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View GitHub repo for ${project.title}`}
                        className="inline-flex items-center justify-center rounded-full bg-accent/5 p-2 text-accent transition hover:-translate-y-0.5 hover:bg-accent/10 hover:shadow-[0_2px_8px_var(--shadow-accent-20)]"
                      >
                        <GitHubIcon className="w-3 h-3" />
                      </a>
                    </div>
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
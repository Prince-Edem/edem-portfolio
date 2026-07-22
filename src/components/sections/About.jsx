import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "TailwindCSS"
  ]

  const backendSkills = [
    "Node.js",
    "Python",
    "AWS",
    "MongoDB",
    "GrapQL"
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-accent to-accent-cyan bg-clip-text text-transparent text-center">
            about me
          </h2>

          <div className="rounded-xl p-8 border border-ink/10 hover:-translate-y-1 transition-all bg-track">
            <p className="text-ink-muted mb-6">
              passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-accent-orange">frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span 
                      key={key}
                      className="bg-accent/10 py-1 px-3 rounded-full text-sm hover:bg-accent/20 hover:shadow-[0_2px_8px_var(--shadow-accent-20)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
                
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-accent-orange">backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span 
                      key={key}
                      className="bg-accent/10 py-1 px-3 rounded-full text-sm hover:bg-accent/20 hover:shadow-[0_2px_8px_var(--shadow-accent-20)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-8">
            <div className="p-6 rounded-xl border border-ink/10 hover:-translate-y-1 transition-all bg-track">
              <h3 className="text-xl font-bold mb-4 text-accent-orange">
                work experience
              </h3>
              <div className="space-y-4 text-ink-muted">
                <div>
                  <h4 className="font-semibold text-accent-cyan">
                    intern at cure technologies (2025)
                  </h4>
                  <p>
                    responsible for designing user-friendly, engaging, and 
                    accessible interfaces for AgriFAAS Connect and NOVAC
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-cyan">
                    intern at alphirix limited (2026)
                  </h4>
                  <p>
                    assisted in building frontend components and aligning the design 
                    to the client's vision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
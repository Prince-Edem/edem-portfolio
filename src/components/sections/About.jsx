import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  const skillsCategories = [
    {
      name: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "TailwindCSS"
      ]
    },
    {
      name: "Backend",
      skills: [
        "Node.js",
        "Python",
        "AWS",
        "MongoDB",
        "GrapQL"
      ]
    },
    {
      name: "Data Science",
      skills: [
        "Python",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Scikit-learn",
        "Statsmodel",
        "TensorFlow",
      ]
    },
    {
      name: "Data Analytics",
      skills: [
        "Excel",
        "SQL",
        "PowerBI",
        "Python",
        "Pandas",
        "Numpy",
        "Matplotlib",
      ]
    },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-accent text-center">
            About me
          </h2>

          <div className="rounded-xl p-8 border border-ink/10 hover:-translate-y-1 transition-all bg-track">
            <p className="text-ink-muted mb-6">
              I'm a full-stack engineer, data scientist, and data analyst passionate about building scalable web 
              applications and transforming data into actionable insights. I enjoy creating efficient, user-focused 
              solutions that combine modern software development with data-driven decision-making.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {skillsCategories.map((category) => (
                <div key={category.name} className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4 text-accent-orange">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((tech, key) => (
                      <span 
                        key={key}
                        className="bg-accent/10 py-1 px-3 rounded-full text-sm hover:bg-accent/20 hover:shadow-[0_2px_8px_var(--shadow-accent-20)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 mt-8">
            <div className="p-6 rounded-xl border border-ink/10 hover:-translate-y-1 transition-all bg-track">
              <h3 className="text-xl font-bold mb-4 text-accent-orange">
                Work experience
              </h3>
              <div className="space-y-4 text-ink-muted">
                <div>
                  <h4 className="font-semibold text-accent">
                    Intern at cure technologies (2025)
                  </h4>
                  <p>
                    Responsible for designing user-friendly, engaging, and 
                    accessible interfaces for AgriFAAS Connect and NOVAC
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent">
                    Intern at alphirix limited (2026)
                  </h4>
                  <p>
                    Assisted in building frontend components and aligning the design 
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
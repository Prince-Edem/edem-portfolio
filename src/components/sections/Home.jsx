import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold  mb-6 bg-linear-to-r from-accent to-accent-cyan bg-clip-text text-transparent leading-right">
            hi, i'm Prince Edem Kobla Kutortse 
          </h1>

          <p className="text-ink-subtle text-lg mb-8 max-w-lg mx-auto">
            i'm a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both exceptional
            performance and a delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#projects"
              className="bg-accent text-on-accent py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_var(--shadow-accent-40)]"
            >
              view projects
            </a>

            <a 
              href="#contact"
              className="border border-accent/50 text-accent py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_var(--shadow-accent-20)] hover:bg-accent/10"
            >
              contact me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
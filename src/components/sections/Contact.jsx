import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'
import { useState } from "react";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })



  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
        setFormData({name: "", email: "", message: ""})
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."))
  }

  return (
    <section  id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl mx-auto">
          
          <h2 className="text-3xl font-bold mb-8 text-accent text-center">
            get in touch
          </h2>
          <form className="space-y-6 border border-ink/10 p-8 rounded-3xl" onSubmit={handleSubmit}>
            <div className="relative">
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                className="w-full bg-ink/5 rounded py-3 px-4 text-ink transition focus:outline-none focus:border-accent focus:bg-accent/5" 
                placeholder="name..."
                onChange={((e) => setFormData({...formData, name: e.target.value}))}
              />
            </div>
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                className="w-full bg-ink/5 rounded py-3 px-4 text-ink transition focus:outline-none focus:border-accent focus:bg-accent/5" 
                placeholder="example@gmail.com"
                onChange={((e) => setFormData({...formData, email: e.target.value}))}                
              />
            </div>
            <div className="relative">
              <textarea
                id="message" 
                name="message" 
                rows={5}
                required 
                value={formData.message}
                className="w-full bg-ink/5 rounded py-3 px-4 text-ink transition focus:outline-none focus:border-accent focus:bg-accent/5" 
                placeholder="your message..."
                onChange={((e) => setFormData({...formData, message: e.target.value}))}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-on-accent py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_var(--shadow-accent-40)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
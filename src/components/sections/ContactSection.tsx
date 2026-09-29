import { Mail, BriefcaseBusiness, Code2, Terminal } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 font-mono text-center md:text-left">
          <span className="text-primary mr-2">/</span>contact
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Let us build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">reliable infrastructure.</span>
            </h3>
            <p className="text-text-muted mb-8 text-lg">
              I am currently available for full-time roles in DevOps, Cloud, and Platform Engineering. Whether you have a question or just want to say hi, I will try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@your-domain.com" className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-mono mb-1 text-text-main">Email</div>
                  <div className="text-lg">hello@your-domain.com</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <BriefcaseBusiness className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-mono mb-1 text-text-main">LinkedIn</div>
                  <div className="text-lg">Connect professionally</div>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-mono mb-1 text-text-main">GitHub</div>
                  <div className="text-lg">Explore my code</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-xl relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Terminal className="w-24 h-24" />
            </div>
            
            <form className="relative z-10 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-mono text-text-main">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-background border border-border rounded px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-mono text-text-main">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-background border border-border rounded px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-sm font-mono text-text-main">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="bg-background border border-border rounded px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-mono text-text-main">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="bg-background border border-border rounded px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Hello Jakir, I would like to discuss..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="bg-primary hover:bg-primary-dark text-background font-bold py-3 px-6 rounded transition-colors mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

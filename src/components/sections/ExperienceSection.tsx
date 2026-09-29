import { Calendar, MapPin, Building2 } from 'lucide-react'
import type { Experience } from '@/types/portfolio'

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="py-24 relative border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 font-mono">
          <span className="text-primary mr-2">/</span>experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                {/* Timeline dot & line (mobile) */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-border md:hidden"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary md:hidden"></div>
                
                <div className="mb-4 md:mb-0 md:col-span-1 pt-1">
                  <div className="flex items-center gap-2 text-sm text-text-muted font-mono mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted font-mono mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <div className="md:col-span-3 glass-panel p-6 md:p-8 rounded-lg relative">
                  {/* Timeline dot & line (desktop) */}
                  <div className="hidden md:block absolute -left-12 top-8 bottom-[-4rem] w-px bg-border"></div>
                  <div className="hidden md:block absolute -left-[53px] top-8 w-3 h-3 rounded-full bg-surface border-2 border-primary z-10"></div>
                  
                  <h3 className="text-xl font-bold text-text-main mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary font-mono text-sm mb-4">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </div>
                  
                  <p className="text-text-muted mb-6">{exp.description}</p>
                  
                  <ul className="space-y-2 mb-6 text-sm text-text-muted">
                    {exp.responsibilities.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tcIdx) => (
                      <span key={tcIdx} className="text-xs font-medium bg-surface border border-border px-2 py-1 rounded text-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

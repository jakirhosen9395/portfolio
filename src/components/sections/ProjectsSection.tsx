import Link from 'next/link'
import { Terminal, Cloud, ArrowRight } from 'lucide-react'
import type { Project } from '@/types/portfolio'

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-24 relative border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary mr-2">/</span>featured_projects
          </h2>
          <Link href="/projects" className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-mono text-sm">
            View All Architecture <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project, idx) => (
            <div key={idx} className="glass-panel p-1 rounded-lg group">
              <div className="p-8 h-full bg-background rounded-md flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-text-muted">
                    <Cloud className="w-4 h-4 text-primary" />
                    <span>{project.category}</span>
                  </div>
                  <span className="px-2 py-1 text-[10px] font-mono border border-success/30 text-success rounded-sm bg-success/5">
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-mono group-hover:text-primary transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                
                  <p className="text-text-muted mb-8 flex-1">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((t, i) => (
                    <span key={i} className="text-xs font-mono bg-surface border border-border px-2 py-1 rounded text-text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-text-main hover:text-primary transition-colors border-t border-border pt-4 w-full"
                >
                  <Terminal className="w-4 h-4" /> View Architecture & Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-mono text-sm">
            View All Architecture <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

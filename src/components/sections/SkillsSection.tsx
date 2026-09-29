import { Terminal } from 'lucide-react'
import type { SkillCategory } from '@/types/portfolio'

export default function SkillsSection({ skillCategories }: { skillCategories: SkillCategory[] }) {
  return (
    <section id="skills" className="py-24 relative border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 font-mono">
          <span className="text-primary mr-2">/</span>skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-lg group hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-text-main font-mono text-sm uppercase tracking-wider">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-xs font-medium bg-background border border-border px-2 py-1 rounded text-text-muted group-hover:text-text-main transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

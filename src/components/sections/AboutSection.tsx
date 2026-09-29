import { Server, Activity, Shield, Terminal } from 'lucide-react'
import type { SiteSettings } from '@/types/portfolio'

export default function AboutSection({ settings }: { settings: SiteSettings }) {
  return (
    <section id="about" className="py-24 relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-mono">
              <span className="text-primary mr-2">/</span>about
            </h2>
            <div className="space-y-6 text-text-muted">
              <p>
                {settings.longIntroduction}
              </p>
              <p>
                As a DevOps engineer, my goal is to bridge the gap between development and operations. I believe in removing repetitive manual operations, building resilient architectures, and providing deep observability into production environments.
              </p>
              <p>
                Whether it is orchestrating containers in Kubernetes, provisioning AWS infrastructure with Terraform, or designing secure CI/CD pipelines, I prioritize performance, security, and developer experience.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-6 rounded-lg">
              <Server className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-text-main mb-2 font-mono">Infrastructure</h3>
              <p className="text-sm text-text-muted">Designing and maintaining scalable cloud environments and physical servers.</p>
            </div>
            <div className="glass-panel p-6 rounded-lg translate-y-8">
              <Activity className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="font-bold text-text-main mb-2 font-mono">Observability</h3>
              <p className="text-sm text-text-muted">Implementing comprehensive monitoring, logging, and tracing solutions.</p>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <Shield className="w-8 h-8 text-success mb-4" />
              <h3 className="font-bold text-text-main mb-2 font-mono">Security</h3>
              <p className="text-sm text-text-muted">Enforcing least privilege and continuous security monitoring.</p>
            </div>
            <div className="glass-panel p-6 rounded-lg translate-y-8">
              <Terminal className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-bold text-text-main mb-2 font-mono">Automation</h3>
              <p className="text-sm text-text-muted">Removing manual toil through Infrastructure as Code and robust CI/CD.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

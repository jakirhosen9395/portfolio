import { Code, Cloud, Server, Database, Shield, Monitor, Layers, Network, Terminal } from 'lucide-react'

const skillCategories = [
  {
    name: 'Cloud',
    icon: <Cloud className="w-5 h-5 text-primary" />,
    skills: ['AWS', 'EC2', 'VPC', 'ALB', 'RDS', 'S3', 'Auto Scaling', 'EKS']
  },
  {
    name: 'Containers & Orchestration',
    icon: <Layers className="w-5 h-5 text-blue-400" />,
    skills: ['Docker', 'Docker Compose', 'Kubernetes', 'EKS']
  },
  {
    name: 'CI/CD',
    icon: <Code className="w-5 h-5 text-success" />,
    skills: ['GitLab CI/CD', 'Jenkins', 'GitHub Actions', 'ArgoCD']
  },
  {
    name: 'Infrastructure as Code',
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    skills: ['Terraform', 'Ansible']
  },
  {
    name: 'Observability',
    icon: <Monitor className="w-5 h-5 text-purple-400" />,
    skills: ['Prometheus', 'Grafana', 'Elasticsearch', 'Kibana', 'Elastic APM']
  },
  {
    name: 'Security',
    icon: <Shield className="w-5 h-5 text-red-400" />,
    skills: ['Wazuh', 'Trivy', 'SonarQube', 'Endpoint Security', 'Infrastructure Security']
  },
  {
    name: 'Operating Systems',
    icon: <Server className="w-5 h-5 text-gray-400" />,
    skills: ['Linux', 'Ubuntu', 'RHEL']
  },
  {
    name: 'Virtualization',
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ['VMware ESXi', 'Proxmox']
  },
  {
    name: 'Networking',
    icon: <Network className="w-5 h-5 text-cyan-400" />,
    skills: ['VPC', 'VLAN', 'Routing', 'Firewalling', 'WireGuard', 'MikroTik']
  }
]

export default function SkillsSection() {
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
                {category.icon}
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

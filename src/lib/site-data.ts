import type { Article, Experience, ProcessStage, Project, SkillCategory, SocialLink, SiteSettings } from '@/types/portfolio'

export const siteSettings: SiteSettings = {
  name: 'Md. Jakir Hosen',
  professionalTitle: 'DevOps Engineer',
  shortTagline: 'Cloud Infrastructure • Kubernetes • Docker • CI/CD • Security • Monitoring',
  longIntroduction:
    'I work at the intersection of application delivery and infrastructure, focusing on reliable deployments, automation, observability, cloud infrastructure, and secure systems. I design resilient platform workflows and operational guardrails that help teams ship with more confidence.',
  email: '',
  location: 'Bangladesh',
  availabilityStatus: 'Open to opportunities',
  github: '',
  gitlab: '',
  linkedin: '',
  resumeUrl: '/resume.pdf',
  seoTitle: 'Md. Jakir Hosen | DevOps Engineer',
  seoDescription:
    'DevOps Engineer focused on cloud infrastructure, Kubernetes, CI/CD, automation, security, and observability.',
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: siteSettings.github, type: 'github' },
  { label: 'GitLab', href: siteSettings.gitlab, type: 'gitlab' },
  { label: 'LinkedIn', href: siteSettings.linkedin, type: 'linkedin' },
  { label: 'Email', href: `mailto:${siteSettings.email}`, type: 'email' },
  { label: 'Resume', href: siteSettings.resumeUrl, type: 'resume' },
]

export const skillCategories: SkillCategory[] = [
  { name: 'Cloud', icon: 'Cloud', skills: ['AWS', 'EC2', 'VPC', 'ALB', 'RDS', 'S3', 'Auto Scaling', 'EKS'] },
  { name: 'Containers & Orchestration', icon: 'Layers3', skills: ['Docker', 'Docker Compose', 'Kubernetes', 'EKS'] },
  { name: 'CI/CD', icon: 'GitBranch', skills: ['GitLab CI/CD', 'Jenkins', 'GitHub Actions', 'ArgoCD'] },
  { name: 'Infrastructure as Code', icon: 'TerminalSquare', skills: ['Terraform', 'Ansible'] },
  { name: 'Observability', icon: 'Monitor', skills: ['Prometheus', 'Grafana', 'Elasticsearch', 'Kibana', 'Elastic APM'] },
  { name: 'Security', icon: 'Shield', skills: ['Wazuh', 'Trivy', 'SonarQube', 'Endpoint Security', 'Infrastructure Security'] },
  { name: 'Operating Systems', icon: 'ServerCog', skills: ['Linux', 'Ubuntu', 'RHEL'] },
  { name: 'Virtualization', icon: 'DatabaseZap', skills: ['VMware ESXi', 'Proxmox'] },
  { name: 'Networking', icon: 'Network', skills: ['VPC', 'VLAN', 'Routing', 'Firewalling', 'WireGuard', 'MikroTik'] },
]

export const experiences: Experience[] = [
  {
    company: 'Firsttrip Ltd. / US-Bangla Group',
    role: 'DevOps Engineer',
    period: 'April 2026 – August 2026',
    location: 'Production operations',
    description:
      'Managed production infrastructure with a focus on application releases, reliability, monitoring, and incident handling across AWS workloads and Kubernetes-based services.',
    responsibilities: [
      'Managed production infrastructure and coordinated release activities across application and platform teams.',
      'Maintained AWS networking, load balancing, autoscaling, and database services supporting production workloads.',
      'Configured monitoring, alerting, and log analysis using Elastic APM, Kibana, and Discord-based operational notifications.',
      'Troubleshot production incidents, supported faster recovery, and improved system visibility across services.',
    ],
    technologies: ['AWS', 'EC2', 'VPC', 'ALB', 'RDS', 'Auto Scaling', 'Docker', 'Kubernetes', 'Trivy', 'SonarQube', 'Elastic APM', 'Kibana', 'Discord'],
  },
  {
    company: 'TechnoNext Software Ltd. / US-Bangla Group',
    role: 'Junior DevOps Engineer',
    period: 'October 2025 – April 2026',
    location: 'Development and staging support',
    description:
      'Supported development and staging environments while maintaining CI/CD workflows, automation, and cloud infrastructure for internal delivery pipelines.',
    responsibilities: [
      'Provided support for development and staging environments with a focus on stability and delivery speed.',
      'Maintained GitLab CI/CD pipelines and automated deployment pathways for application teams.',
      'Managed AWS resources including EC2, S3, RDS, and VPC services.',
      'Used Ansible and Terraform to automate infrastructure changes and improve repeatability.',
      'Worked across Docker Compose, Kubernetes, and monitoring workflows to support troubleshooting and alert response.',
    ],
    technologies: ['GitLab CI/CD', 'AWS', 'EC2', 'S3', 'RDS', 'VPC', 'Ansible', 'Terraform', 'Docker Compose', 'Kubernetes', 'Monitoring', 'Alerts'],
  },
  {
    company: 'TechnoNext Software Ltd. / US-Bangla Group',
    role: 'DevOps Intern',
    period: 'July 2025 – October 2025',
    location: 'Infrastructure support',
    description:
      'Built a foundation in Linux administration, Git workflows, container basics, and CI/CD concepts while supporting core infrastructure operations.',
    responsibilities: [
      'Performed Linux administration and supported shell-based automation tasks.',
      'Worked with Docker Compose, Git, and GitLab CI/CD to support development workflows.',
      'Assisted with AWS fundamentals, including EC2 and S3 resources.',
      'Contributed to infrastructure support and operational troubleshooting activities for shared environments.',
    ],
    technologies: ['Linux', 'Shell Scripting', 'Docker Compose', 'Git', 'GitLab CI/CD', 'AWS', 'EC2', 'S3'],
  },
]

export const processStages: ProcessStage[] = [
  { title: 'Discover', description: 'Understand requirements, constraints, and operational realities before building.' },
  { title: 'Design', description: 'Design resilient infrastructure, deployment flows, and security boundaries.' },
  { title: 'Implement', description: 'Build infrastructure and delivery workflows with repeatable automation.' },
  { title: 'Automate', description: 'Reduce manual toil and improve release consistency across environments.' },
  { title: 'Observe', description: 'Instrument metrics, logs, traces, and alerts to support visibility and reliability.' },
  { title: 'Secure', description: 'Apply least privilege, policy checks, and security monitoring at every layer.' },
  { title: 'Improve', description: 'Troubleshoot, measure, harden, and continuously improve the platform.' },
]

export const projects: Project[] = []

export const articles: Article[] = []

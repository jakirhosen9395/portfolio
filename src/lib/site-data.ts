import type { Article, Experience, ProcessStage, Project, SkillCategory, SocialLink, SiteSettings } from '@/types/portfolio'

export const siteSettings: SiteSettings = {
  name: 'Md. Jakir Hosen',
  professionalTitle: 'DevOps Engineer',
  shortTagline: 'Cloud Infrastructure • Kubernetes • Docker • CI/CD • Security • Monitoring',
  longIntroduction:
    'I work at the intersection of application delivery and infrastructure, focusing on reliable deployments, automation, observability, cloud infrastructure, and secure systems. I design resilient platform workflows and operational guardrails that help teams ship with more confidence.',
  email: 'hello@your-domain.com',
  location: 'Bangladesh',
  availabilityStatus: 'Open to opportunities',
  github: 'https://github.com/your-username',
  gitlab: 'https://gitlab.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',
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

export const projects: Project[] = [
  {
    title: 'Platform Infrastructure Case Study',
    slug: 'platform-infrastructure-case-study',
    category: 'Cloud Infrastructure',
    status: 'Draft placeholder',
    shortDescription:
      'A placeholder case study demonstrating the structure used for a production platform engineering portfolio entry.',
    description:
      'This project entry is intentionally left as a placeholder until the actual project details are confirmed and added to the CMS.',
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Prometheus', 'Grafana'],
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558494949cc5f7d1c1f0f2fe2d0afcc7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    ],
    githubUrl: 'https://github.com/your-username',
    liveUrl: 'https://your-domain.com',
    documentationUrl: 'https://your-domain.com/docs',
    problem: [
      'A cloud-native application needed a repeatable foundation for deployment, autoscaling, and operational observability.',
      'The goal was to reduce deployment risk while keeping the platform aligned with security and infrastructure standards.',
    ],
    objectives: [
      'Provision cloud infrastructure consistently with Infrastructure as Code.',
      'Standardize deployment workflows for containerized services.',
      'Add monitoring, logging, and alerting that support production readiness.',
    ],
    architecture: [
      'The platform separates application services from shared platform concerns such as networking, identity boundaries, and observability.',
      'Terraform defines the AWS foundation and shared security configuration, while Kubernetes provides the runtime abstraction for workloads.',
      'GitHub Actions and ArgoCD support continuous delivery, ensuring infrastructure and application changes follow a controlled path.',
    ],
    infrastructure: [
      'AWS VPC design, EC2 and EKS workload placement, ALB routing, and RDS-backed PostgreSQL storage are defined as public-facing platform services.',
      'Infrastructure is described through version-controlled IaC so changes are auditable and repeatable.',
    ],
    deployment: [
      'Container builds are created through CI workflows and pushed into a managed registry before deployment.',
      'Applications are deployed through GitOps-driven updates to the Kubernetes cluster, keeping operator actions predictable.',
    ],
    cicd: [
      'GitHub Actions automates validation, build, and artifact handling.',
      'ArgoCD applies declarative application updates so runtime changes match source-controlled configuration.',
    ],
    security: [
      'Security controls include least-privilege access, image scanning, and configuration review prior to deployment.',
      'This is a platform-oriented example that demonstrates how operational and security guardrails can be built into the delivery path.',
    ],
    observability: [
      'Prometheus and Grafana provide metric visibility, while Loki supports log aggregation.',
      'The architecture is designed for actionable monitoring and service health review rather than only dashboard decoration.',
    ],
    troubleshooting: [
      'Operational issues are investigated using structured health checks, service logs, and traffic patterns before changes are made.',
      'Root cause analysis focuses on configuration drift, dependency issues, and service behavior under load.',
    ],
    lessonsLearned: [
      'Platform work benefits from clear boundaries and consistent automation between code, infrastructure, and deployment.',
      'Monitoring and alerts become more useful when they are tied to service ownership and operational expectations.',
    ],
  },
  {
    title: 'Security Monitoring Case Study',
    slug: 'security-monitoring-case-study',
    category: 'Security Engineering',
    status: 'Draft placeholder',
    shortDescription:
      'A placeholder security engineering case study showing the structure for monitoring and incident-response work.',
    description:
      'This security project entry is intentionally left as a placeholder until the actual project details are confirmed and added to the CMS.',
    technologies: ['Wazuh', 'Elasticsearch', 'Kibana', 'AWS', 'Linux', 'Security', 'Monitoring'],
    coverImage: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    ],
    githubUrl: 'https://github.com/your-username',
    problem: [
      'Multiple workloads and endpoints needed a single visibility layer for security events, alerting, and operational review.',
      'The design needed to support a practical monitoring workflow without creating unnecessary complexity for the environment.',
    ],
    objectives: [
      'Centralize security telemetry and event analysis.',
      'Provide visibility into platform activity and endpoint health.',
      'Support incident response through actionable alerts and timeline review.',
    ],
    architecture: [
      'Wazuh agents collect agent-level detection events and send them to a central log and alerting stack.',
      'Elasticsearch and Kibana allow event correlation, review, and dashboard creation.',
    ],
    infrastructure: [
      'The environment uses AWS networking and private communication paths to keep monitoring data transport controlled and predictable.',
      'WireGuard is considered where secure agent-to-central communication is needed in segmented topologies.',
    ],
    deployment: [
      'The stack is deployed in a deliberately simple structure designed for maintainability and operational clarity.',
    ],
    cicd: ['Security tooling is integrated into operational workflows to reduce blind spots and support faster review cycles.'],
    security: [
      'The project emphasizes endpoint visibility, log integrity, and support for security response actions.',
      'Alerting is designed to identify suspicious patterns and help prioritize follow-up work.',
    ],
    observability: [
      'Elastic dashboards surface operational trends and security events across collected endpoints.',
      'This creates a structured foundation for investigation and evidence-based response.',
    ],
    troubleshooting: [
      'Investigations focus on missing telemetry, false positives, and alert tuning to keep the monitoring flow healthy.',
    ],
    lessonsLearned: [
      'Operational security depends on data quality and useful alert context, not just agent deployment.',
      'Good monitoring is an engineering habit: it requires tuning, ownership, and practical review loops.',
    ],
  },
  {
    title: 'Kubernetes Delivery Placeholder',
    slug: 'kubernetes-delivery-placeholder',
    category: 'Platform Automation',
    status: 'Lab environment',
    shortDescription:
      'A Kubernetes-focused lab for testing deployment pipelines, cluster configuration, and workload reliability patterns.',
    description:
      'This project focuses on the platform engineering work behind container orchestration: deployment consistency, automation, and operational feedback loops.',
    technologies: ['Kubernetes', 'Docker', 'Helm', 'Terraform', 'Linux', 'GitLab CI/CD', 'Prometheus', 'Grafana'],
    coverImage: 'https://images.unsplash.com/photo-1558494949cc5f7d1c1f0f2fe2d0afcc7?auto=format&fit=crop&w=1400&q=80',
    gallery: ['https://images.unsplash.com/photo-1558494949cc5f7d1c1f0f2fe2d0afcc7?auto=format&fit=crop&w=1200&q=80'],
    problem: ['Container workloads needed a repeatable deployment pattern that could be reasoned about and recovered quickly.'],
    objectives: ['Build a simple yet realistic Kubernetes delivery environment.'],
    architecture: ['Workloads are deployed using declarative configuration and versioned application manifests.'],
    infrastructure: ['The lab uses Linux-based hosts and containerized workloads for controlled environment testing.'],
    deployment: ['Configuration changes are reviewed and applied in a predictable, incremental way.'],
    cicd: ['CI/CD is used to automate image creation and deployment validation.'],
    security: ['Baseline security and access boundaries remain part of the delivery workflow.'],
    observability: ['Metrics and logs provide deployment status and runtime behavior visibility.'],
    troubleshooting: ['Operational issues are investigated using workload health and resource review.'],
    lessonsLearned: ['Operational clarity matters as much as deployment automation.'],
  },
]

export const articles: Article[] = [
  {
    title: 'Infrastructure Setup Draft',
    slug: 'infrastructure-setup-draft',
    excerpt: 'A practical guide to designing a clean AWS foundation with secure networking, regional structure, and manageable operational boundaries.',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    author: siteSettings.name,
    publishedDate: '2026-09-15',
    readingTime: 7,
    tags: ['AWS', 'Networking', 'Cloud'],
    content: [
      'When building a cloud foundation for a small engineering team, the priority is to keep the environment understandable and safe without creating unnecessary complexity.',
      'A thoughtful VPC layout, clearly separated networking, and secure default access controls can make a platform easier to operate long term.',
      'This article focuses on design choices that support a balanced operational model: enough structure to scale, but not so much ceremony that teams lose velocity.',
    ],
  },
  {
    title: 'Kubernetes Troubleshooting Draft',
    slug: 'kubernetes-troubleshooting-draft',
    excerpt: 'A structured operating model for diagnosing pod issues, node health, and service reliability in Kubernetes clusters.',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    author: siteSettings.name,
    publishedDate: '2026-08-24',
    readingTime: 6,
    tags: ['Kubernetes', 'Troubleshooting', 'Observability'],
    content: [
      'Kubernetes troubleshooting becomes much easier when the workflow is anchored in a clear order of operations.',
      'Start with the workload state, then examine pod health, service routing, resource constraints, and recent configuration changes.',
      'This approach helps separate symptoms from upstream causes and keeps incident response moving in a disciplined way.',
    ],
  },
  {
    title: 'Linux Hardening Draft',
    slug: 'linux-hardening-draft',
    excerpt: 'A concise approach to reducing attack surface, limiting unnecessary exposure, and designing cleaner Linux security expectations.',
    coverImage: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80',
    author: siteSettings.name,
    publishedDate: '2026-07-11',
    readingTime: 5,
    tags: ['Linux', 'Security', 'Networking'],
    content: [
      'Security hardening is most effective when it is tied to what the system actually does.',
      'A practical firewall policy should allow required traffic, reduce unnecessary exposure, and make future audits easier.',
      'The goal is not to add complexity for its own sake, but to provide a system boundary that supports trust and accountability.',
    ],
  },
]

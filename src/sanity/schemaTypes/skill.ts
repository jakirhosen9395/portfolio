import { defineType, defineField } from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'icon', title: 'Icon (Lucide Icon Name)', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: {
      list: [
        'Cloud', 'Containers & Orchestration', 'CI/CD', 'Infrastructure as Code',
        'Observability', 'Security', 'Operating Systems', 'Virtualization', 'Networking'
      ]
    }}),
    defineField({ name: 'proficiency', title: 'Proficiency / Context Description', type: 'text' }),
    defineField({ name: 'relatedProjects', title: 'Related Projects', type: 'array', of: [{ type: 'reference', to: [{ type: 'project' }] }] }),
  ]
})

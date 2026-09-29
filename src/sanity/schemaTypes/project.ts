import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'status', title: 'Status', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'datetime' }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'technologies', title: 'Technologies', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'githubUrl', title: 'GitHub URL', type: 'url' }),
    defineField({ name: 'gitlabUrl', title: 'GitLab URL', type: 'url' }),
    defineField({ name: 'liveUrl', title: 'Live URL', type: 'url' }),
    defineField({ name: 'documentationUrl', title: 'Documentation URL', type: 'url' }),
    defineField({ name: 'problem', title: 'Problem', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'objectives', title: 'Objectives', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'architecture', title: 'Architecture', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'architectureDiagram', title: 'Architecture Diagram', type: 'image' }),
    defineField({ name: 'infrastructure', title: 'Infrastructure', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'deployment', title: 'Deployment', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'cicd', title: 'CI/CD', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'security', title: 'Security', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'observability', title: 'Observability', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'troubleshooting', title: 'Troubleshooting', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'lessonsLearned', title: 'Lessons Learned', type: 'array', of: [{ type: 'block' }] }),
  ]
})

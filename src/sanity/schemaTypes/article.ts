import { defineType, defineField } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({ name: 'publishedDate', title: 'Published Date', type: 'datetime' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'readingTime', title: 'Reading Time (minutes)', type: 'number' }),
    defineField({ name: 'content', title: 'Content', type: 'array', of: [
      { type: 'block' },
      { type: 'image', options: { hotspot: true } }
    ] }),
    defineField({ name: 'relatedProjects', title: 'Related Projects', type: 'array', of: [{ type: 'reference', to: [{ type: 'project' }] }] }),
  ]
})

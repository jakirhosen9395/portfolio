import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'professionalTitle', title: 'Professional Title', type: 'string' }),
    defineField({ name: 'shortTagline', title: 'Short Tagline', type: 'string' }),
    defineField({ name: 'longIntroduction', title: 'Long Introduction', type: 'text' }),
    defineField({ name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'profileImages', title: 'Profile Image Carousel', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'resumeUrl', title: 'Resume PDF', type: 'file', options: { accept: '.pdf' } }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'availabilityStatus', title: 'Availability Status', type: 'string' }),
    defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
    defineField({ name: 'gitlab', title: 'GitLab URL', type: 'url' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text' }),
    defineField({ name: 'ogImage', title: 'OG Image', type: 'image' }),
  ]
})

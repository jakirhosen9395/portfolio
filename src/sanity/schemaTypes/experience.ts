import { defineType, defineField } from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'position', title: 'Position', type: 'string' }),
    defineField({ name: 'employmentType', title: 'Employment Type', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'startDate', title: 'Start Date', type: 'date' }),
    defineField({ name: 'endDate', title: 'End Date', type: 'date' }),
    defineField({ name: 'currentlyWorking', title: 'Currently Working', type: 'boolean', initialValue: false }),
    defineField({ name: 'companyUrl', title: 'Company URL', type: 'url' }),
    defineField({ name: 'companyLogo', title: 'Company Logo', type: 'image' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text' }),
    defineField({ name: 'responsibilities', title: 'Responsibilities', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'technologies', title: 'Technologies', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'achievements', title: 'Achievements', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'environment', title: 'Environment', type: 'string' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [
    {
      title: 'Start Date, New',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }]
    }
  ]
})

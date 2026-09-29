import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { project } from './project'
import { experience } from './experience'
import { skill } from './skill'
import { article } from './article'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, project, experience, skill, article],
}

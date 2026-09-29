'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { dataset, isSanityConfigured, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default isSanityConfigured
  ? defineConfig({
      basePath: '/studio',
      projectId,
      dataset,
      schema,
      plugins: [
        structureTool({ structure }),
      ],
    })
  : null

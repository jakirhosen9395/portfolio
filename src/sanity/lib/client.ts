import { createClient } from 'next-sanity'

import { apiVersion, dataset, isSanityConfigured, projectId, useCdn } from '../env'

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: process.env.SANITY_API_READ_TOKEN,
      perspective: 'published',
    })
  : null

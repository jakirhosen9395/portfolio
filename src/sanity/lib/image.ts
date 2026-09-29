import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

type SanityImageSource = {
  _type?: string
  asset?: {
    _ref?: string
    _type?: 'reference'
  }
  [key: string]: unknown
}

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'csxo7tuk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

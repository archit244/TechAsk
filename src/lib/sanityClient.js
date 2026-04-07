import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Safely handle missing env vars to prevent crash
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'missing'
const dataset   = import.meta.env.VITE_SANITY_DATASET   || 'production'

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

import { useState, useEffect } from 'react'
import { client } from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
export function urlFor(source) {
  return builder.image(source)
}

export function useSanity(query, params = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    client.fetch(query, params)
      .then((result) => { if (!cancelled) { setData(result); setLoading(false) } })
      .catch((err) => { if (!cancelled) { setError(err); setLoading(false) } })
    return () => { cancelled = true }
  }, [query])

  return { data, loading, error }
}

import { createContext, useContext } from 'react'

export const SanityDataContext = createContext(null)

export function useSanityData() {
  const context = useContext(SanityDataContext)
  if (!context) {
    throw new Error('useSanityData must be used within a SanityDataProvider')
  }
  return context
}

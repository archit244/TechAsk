import { useEffect, useRef, useState } from 'react'

/**
 * Observes a target element and returns true when it is NO LONGER
 * intersecting the viewport (i.e. user has scrolled past it).
 *
 * @param {React.RefObject} ref  - ref attached to the element to observe
 * @param {number} threshold     - 0–1, fraction of element still visible that triggers hiding
 * @returns {boolean}            - true = element is out of view (button should show)
 */
export function useScrolledPast(ref, threshold = 0.3) {
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // scrolledPast = hero is NOT intersecting at the threshold level
        setScrolledPast(!entry.isIntersecting)
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold])

  return scrolledPast
}

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/* Reusable scroll-triggered fade-up wrapper */
export function FadeUp({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

/* Staggered children container */
export function StaggerGrid({ children, className = '', style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  )
}

/* Individual stagger child */
export function StaggerItem({ children, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden:  { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
    >
      {children}
    </motion.div>
  )
}

/* Hover-lift card wrapper */
export function HoverCard({ children, className = '', style = {}, onClick }) {
  return (
    <motion.div
      className={className}
      style={style}
      onClick={onClick}
      whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(14,165,233,0.18)' }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

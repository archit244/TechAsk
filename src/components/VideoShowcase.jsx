import { useEffect, useRef, useState } from 'react'

export default function VideoShowcase() {
  const pillRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  // Use the same breakpoint as other sections
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return // Disable scroll animation on mobile
    
    const pill = pillRef.current
    if (!pill) return

    const onScroll = () => {
      const vh = window.innerHeight
      const vw = window.innerWidth
      const progress = Math.max(0, Math.min(1, window.scrollY / (vh * 0.3)))
      pill.style.width = `${1300 + (vw - 1300) * progress}px`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile])

  if (isMobile) {
    return (
      <section 
        className="section-videos-mobile" 
        style={{ 
          height: 'auto', 
          padding: '20px 5% 40px', 
          background: '#fff',
          position: 'relative',
          display: 'block'
        }}
      >
        <div style={{
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          background: '#ffd6e0', // Pink placeholder as requested
          aspectRatio: '16/9',
          boxShadow: '0 12px 48px rgba(0,0,0,0.08)'
        }}>
          {/* Static pink placeholder as requested for mobile */}
        </div>
      </section>
    )
  }

  return (
    <section className="section-videos" style={{ position: 'relative', height: '120vh', width: '100%' }}>
      <div
        ref={pillRef}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1300px',
          borderRadius: 0,
          overflow: 'hidden',
          background: '#ffd6e0',
          zIndex: 1
        }}
      />
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion'

/*
 * Logo — identical markup to Navbar so the "landing" is seamless.
 * scaleFactor: how many times larger the intro logo is vs navbar logo.
 */
const SCALE = 2   // intro logo is 2× navbar size

function LogoMark() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <span style={{
        fontFamily: "'Sora', sans-serif", fontWeight: 800,
        fontSize: 22, color: '#000', letterSpacing: '-0.5px',
      }}>tech</span>
      <span style={{
        background: '#000', color: '#fff', borderRadius: '50%',
        fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 13,
        width: 28, height: 28,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      }}>Ask</span>
    </div>
  )
}

/*
 * ANIMATION TIMELINE
 *  0 ms       overlay appears (white, logo centred, blurred + scaled up)
 *  0→700 ms   logo sharpens + scales from SCALE → 1
 *  700→1200ms logo translates from centre to exact navbar position
 *  1000→1700ms white overlay fades out; page fades in beneath
 *  1700ms     overlay unmounted
 *
 * Plays on EVERY page load (no sessionStorage gate).
 */
export default function IntroAnimation({ children }) {
  const logoRef  = useRef(null)     // ref for the overlay logo element
  const [target, setTarget]   = useState(null)     // {x, y} final position
  const [phase,  setPhase]    = useState('focus')  // focus → land → reveal → done

  /* ── Step 1: Measure navbar logo position after first paint ── */
  useEffect(() => {
    const measure = () => {
      const navEl = document.getElementById('nav-logo')
      const introEl = logoRef.current
      if (!navEl || !introEl) return

      const nav    = navEl.getBoundingClientRect()
      const intro  = introEl.getBoundingClientRect()

      // Centre of the navbar logo
      const navCX = nav.left + nav.width  / 2
      const navCY = nav.top  + nav.height / 2

      // Centre of the (scaled-up) intro logo
      const introCX = intro.left + intro.width  / 2
      const introCY = intro.top  + intro.height / 2

      setTarget({ x: navCX - introCX, y: navCY - introCY })
    }

    // Wait one frame to ensure layout is painted
    const raf = requestAnimationFrame(measure)
    return () => cancelAnimationFrame(raf)
  }, [])

  /* ── Step 2: Drive phase transitions ── */
  useEffect(() => {
    if (!target) return             // wait until we have the target position

    // After logo focuses → move to navbar
    const t1 = setTimeout(() => setPhase('land'),   1400)

    // Start fading the overlay while logo is in transit
    const t2 = setTimeout(() => setPhase('reveal'), 1800)

    // Unmount overlay completely
    const t3 = setTimeout(() => setPhase('done'),   2500)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [target])

  return (
    <>
      {/* ── Page content (fades in as overlay fades out) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'done' ? 1 : phase === 'reveal' ? 1 : 0 }}
        transition={{ duration: 0.6, delay: phase === 'done' ? 0 : 0 }}
      >
        {children}
      </motion.div>

      {/* ── Intro overlay ── */}
      <AnimatePresence>
        {phase !== 'done' && (
          <motion.div
            key="overlay"
            style={{
              position: 'fixed', inset: 0, zIndex: 10000,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              pointerEvents: phase === 'reveal' ? 'none' : 'all',
            }}
            animate={{ backgroundColor: phase === 'reveal' ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)' }}
            transition={{ duration: 0.65, ease: 'easeInOut' }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          >
            {/* ── The animated logo ── */}
            <motion.div
              ref={logoRef}
              style={{ transformOrigin: 'center center' }}
              animate={
                phase === 'focus'
                  ? {
                      scale: SCALE,
                      filter: 'blur(0px)',
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: {
                        opacity: { duration: 0.5, ease: 'easeOut' },
                      },
                    }
                  : phase === 'land' || phase === 'reveal'
                  ? {
                      scale: 1,
                      filter: 'blur(0px)',
                      opacity: 1,
                      x: target?.x ?? 0,
                      y: target?.y ?? 0,
                      transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
                    }
                  : {}
              }
              initial={{
                scale: SCALE,
                filter: 'blur(0px)',
                opacity: 0,
                x: 0,
                y: 0,
              }}
            >
              <LogoMark />
            </motion.div>

            {/* Tagline (fades in after logo sharpens, fades before overlay exits) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={
                phase === 'focus'
                  ? { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.45 } }
                  : { opacity: 0, transition: { duration: 0.25 } }
              }
              style={{
                position: 'absolute',
                top: '50%',
                marginTop: 64,
                fontFamily: "'Sora', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.32)',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Performance · Growth · Scale
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

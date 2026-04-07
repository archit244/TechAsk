import { useState, useEffect, useRef } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'
import TiltedCard from './TiltedCard'
import { useSanity } from '../lib/useSanity'

const PROBLEM_QUERY = `*[_type == "problem" && _id == "problem"][0]{ heading, cards }`

const FALLBACK_CARDS = [
  { title: "You're Spending Without Scalable Systems",      num: '01' },
  { title: "Your Brand Isn't Converting at Full Potential", num: '02' },
  { title: 'You Lack the Data to Make Confident Decisions', num: '03' },
]

// MeshGradient colour palettes per card index (darker neutrals to suit white bg)
const MESH_PALETTES = [
  { color1: '#0b1929', color2: '#0b3b6e', color3: '#0ea5e9', color4: '#38bdf8' },
  { color1: '#111827', color2: '#1e3a5f', color3: '#2563eb', color4: '#60a5fa' },
  { color1: '#0a0f1e', color2: '#0c2340', color3: '#0284c7', color4: '#38bdf8' },
]

// Flat gradient fallback (for inactive side cards — no WebGL overhead)
const FLAT_GRADIENTS = [
  'linear-gradient(135deg, #0b1929 0%, #0b3b6e 50%, #0ea5e9 100%)',
  'linear-gradient(135deg, #111827 0%, #1e3a5f 50%, #2563eb 100%)',
  'linear-gradient(135deg, #0a0f1e 0%, #0c2340 50%, #0284c7 100%)',
]

// Card dimensions — must be explicit px so WebGL canvas and % sizing work
// Card dimensions
// Card dimensions
const CARD_W_PX  = 440
const CARD_H_PX  = 480
const MOB_W      = 320
const MOB_H      = 360

export default function Problem() {
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const timerRef = useRef(null)
  // const { data: problem } = useSanity(PROBLEM_QUERY)
  const problem = null

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const curW = isMobile ? MOB_W : CARD_W_PX
  const curH = isMobile ? MOB_H : CARD_H_PX

  const heading = problem?.heading || 'Most Brands Plateau Because of These 3 Growth Killers'
  const cards   = FALLBACK_CARDS // (problem?.cards && problem.cards.length > 0) ? problem.cards.map((c, i) => ({ ...c, num: String(i + 1).padStart(2, '0') })) : FALLBACK_CARDS

  const advance = (dir = 1) => {
    setActive(a => (a + dir + cards.length) % cards.length)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setActive(a => (a + 1) % cards.length), 4000)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => setActive(a => (a + 1) % cards.length), 4000)
    return () => clearInterval(timerRef.current)
  }, [cards.length])

  const leftIdx  = (active - 1 + cards.length) % cards.length
  const rightIdx = (active + 1) % cards.length

  // On mobile, we only show the active card
  const visibleCards = isMobile ? [active] : [leftIdx, active, rightIdx]

  return (
    <section 
      id="problem" 
      className="text-center overflow-hidden px-4 py-20" 
      style={{ 
        background: '#fff', 
        minHeight: '100vh', 
        height: 'auto',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        padding: isMobile ? '20px 5% 80px' : '80px 5%'
      }}
    >
      <div className="w-full max-w-[1160px] mx-auto">
        <h2 className="text-clamp-prob font-semibold leading-tight mb-14 tracking-[-0.02em]"
            style={{ color: '#000', fontFamily: "'Sora', sans-serif" }}>
          {heading}
        </h2>
      </div>

      <div className="relative w-full prob-container">
        {/* ── Active Card & Arrows Container ── */}
        <div className="relative" style={{ height: curH }}>
          {/* Card row */}
          <div
            className="flex items-stretch h-full gap-5 prob-track"
            style={{ 
              transform: isMobile ? 'none' : 'translateX(-280px)', 
              height: curH,
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}
          >
            {visibleCards.map((idx, pos) => {
              const card     = cards[idx]
              const isActive = isMobile || pos === 1
              const palette  = MESH_PALETTES[idx % MESH_PALETTES.length]

              const overlayContent = (
                <div className="relative w-full h-full flex flex-col p-8 box-border">
                  {/* Number: Top-right */}
                  <div className="absolute top-8 right-8 text-white/50 font-bold leading-none tracking-tight"
                       style={{ fontSize: isMobile ? 48 : 64, fontFamily: "'Sora', sans-serif" }}>
                     {card.num}
                  </div>
                  
                  {/* Title: Bottom-left */}
                  <div className="mt-auto relative z-10">
                     <div className="absolute -inset-x-8 -bottom-8 h-2/3 pointer-events-none opacity-60"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }} />
                    <div className="text-white font-bold leading-[1.2] relative z-20"
                         style={{ 
                           fontSize: isMobile ? '1.25rem' : '1.6rem', 
                           maxWidth: '90%', 
                           fontFamily: "'Sora', sans-serif" 
                         }}>
                      {card.title}
                    </div>
                  </div>
                </div>
              )

              return (
                <div
                  key={`${idx}-${pos}`}
                  className={`flex-shrink-0 transition-all duration-400 ${
                    isActive
                      ? 'z-10 opacity-100'
                      : pos === 0
                        ? 'opacity-20 scale-[0.8] origin-right'
                        : 'opacity-20 scale-[0.8] origin-left'
                  }`}
                  style={{ width: curW, height: curH }}
                >
                  {isActive ? (
                    <TiltedCard
                      containerWidth={`${curW}px`}
                      containerHeight={`${curH}px`}
                      rotateAmplitude={10}
                      scaleOnHover={1.04}
                      borderRadius="20px"
                      displayOverlayContent
                      overlayContent={overlayContent}
                    >
                      <MeshGradient
                        color1={palette.color1}
                        color2={palette.color2}
                        color3={palette.color3}
                        color4={palette.color4}
                        speed={0.6}
                        style={{ width: '100%', height: '100%', display: 'block' }}
                      />
                    </TiltedCard>
                  ) : (
                    <div
                      className="relative w-full h-full rounded-[20px] flex flex-col p-8 overflow-hidden"
                      style={{ background: FLAT_GRADIENTS[idx % FLAT_GRADIENTS.length] }}
                    >
                      <div className="absolute top-8 right-8 text-white/20 font-bold leading-none tracking-tight"
                           style={{ fontSize: 64, fontFamily: "'Sora', sans-serif" }}>
                        {card.num}
                      </div>

                      <div className="mt-auto relative z-10">
                        <div className="absolute -inset-x-8 -bottom-8 h-2/3 pointer-events-none opacity-40"
                             style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }} />
                        <div className="text-white font-bold leading-[1.2] relative z-20"
                             style={{ fontSize: '1.6rem', maxWidth: '90%', fontFamily: "'Sora', sans-serif" }}>
                          {card.title}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Arrow buttons: now aligned to the card vertically */}
          <div className="prob-arrows">
            {[-1, 1].map((dir, i) => {
              const GAP     = 20
              const ARROW   = 44
              const PADDING = isMobile ? -20 : 16 // Negative padding on mobile pulls them on top of card edges
              
              const activeLeft  = CARD_W_PX + GAP - 280
              const activeRight = activeLeft + CARD_W_PX
              
              const mobileLeft  = `calc(50% - ${curW/2}px - ${PADDING}px - ${ARROW}px)`
              const mobileRight = `calc(50% + ${curW/2}px + ${PADDING}px)`

              const desktopLeft = i === 0 ? activeLeft - PADDING - ARROW : activeRight + PADDING
              const left = isMobile ? (i === 0 ? mobileLeft : mobileRight) : desktopLeft

              return (
                <button
                  key={dir}
                  onClick={() => advance(dir)}
                  className={`absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                             flex items-center justify-center text-2xl z-40
                             border-none cursor-pointer transition-all duration-200
                             shadow-[0_4px_16px_rgba(0,0,0,0.3)]
                             hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] arrow-${dir}`}
                  style={{ background: '#000', color: '#fff', left, display: 'flex' }}
                  aria-label={dir === -1 ? 'Previous' : 'Next'}
                >
                  {dir === -1 ? '‹' : '›'}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Info cards: Stays below card on mobile ── */}
        <div className="prob-info-wrapper">
          {[
            { label: 'IMPACT',       text: "Brands that fix these gaps grow 3–10× faster than those that don't." },
            { label: 'OUR SOLUTION', text: 'We build the systems, data, and creative that turn these gaps into your unfair advantage.' },
          ].map(({ label, text }) => (
            <div key={label}
                 className="rounded-[2.5rem] px-11 py-10 text-left prob-info-card"
                 style={{
                   background: '#f8fafc',
                   border: '2px solid #e2e8f0',
                   boxShadow: '0 8px 32px rgba(11,59,110,0.08)',
                 }}>
              <span className="block text-sm font-bold tracking-[0.08em] uppercase mb-4"
                    style={{ color: '#000', fontFamily: "'Sora', sans-serif" }}>
                {label}
              </span>
              <p className="text-[1.25rem] leading-snug font-semibold"
                 style={{ color: '#1e293b', fontFamily: "'Sora', sans-serif" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Desktop Default */
        .prob-info-wrapper {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 28px;
          z-index: 10;
          left: calc(3% + ${CARD_W_PX * 1.5}px - 20px);
          width: min(32vw, 480px);
        }

        /* Mobile Adjustments */
        @media (max-width: 1024px) {
          #problem {
            padding-top: 20px !important;
          }
          .prob-arrows {
             display: block !important;
          }
          .prob-info-wrapper {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            transform: none !important;
            width: 100% !important;
            margin-top: 50px;
            gap: 16px;
          }
          .prob-info-card {
            padding: 32px !important;
            border-radius: 2rem !important;
          }
          .prob-arrows button {
            width: 44px !important;
            height: 44px !important;
          }
        }
      `}</style>
    </section>
  )
}

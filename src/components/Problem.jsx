import { useState, useEffect, useRef } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'
import TiltedCard from './TiltedCard'
import { useSanity } from '../lib/useSanity'
import GradientText from './GradientText'
import { renderFormattedText } from '../lib/renderFormattedText'

const PROBLEM_QUERY = `*[_type == "problem" && _id == "problem"][0]`

const FALLBACK_CARDS = [
  { title: "You're Spending Without Scalable Systems",      num: '01' },
  { title: "Your Brand Isn't Converting at Full Potential", num: '02' },
  { title: 'You Lack the Data to Make Confident Decisions', num: '03' },
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
  const { data: problem, loading } = useSanity(PROBLEM_QUERY)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (loading) {
    return <section style={{ minHeight: '100vh', background: '#fff' }} />;
  }

  const curW = isMobile ? MOB_W : CARD_W_PX
  const curH = isMobile ? MOB_H : CARD_H_PX

  const heading = problem?.heading || 'Most Brands [Plateau] Because of These 3 [Growth Killers]'
  const cards   = (problem?.cards && problem.cards.length > 0) ? problem.cards.map((c, i) => ({ ...c, num: c.num || String(i + 1).padStart(2, '0') })) : FALLBACK_CARDS

  const advance = (dir = 1) => {
    setActive(a => (a + dir + cards.length) % cards.length)
  }



  const gap = 20
  const baseIndent = isMobile ? `calc(50vw - ${curW / 2}px)` : 'calc(12vw - 110px)'
  const trackOffset = `calc(${baseIndent} - ${active * (curW + gap)}px)`

  const meshColors = [
    ['#2563EB', '#7C3AED', '#2563EB', '#2563EB'], // Card 1
    ['#7C3AED', '#FF3D8B', '#7C3AED', '#2563EB'], // Card 2
    ['#2563EB', '#4F46E5', '#7C3AED', '#2563EB'], // Card 3
  ]

  return (
    <section 
      id="problem" 
      className="text-center overflow-hidden" 
      style={{ 
        background: '#fff', 
        minHeight: '100vh', 
        height: 'auto',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        padding: isMobile ? '60px 0 80px' : '80px 5%',
        position: 'relative'
      }}
    >
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <h2 className="text-clamp-prob font-semibold leading-tight mb-14 tracking-[-0.02em]"
            style={{ color: '#000', fontFamily: "'Sora', sans-serif", whiteSpace: 'pre-line' }}>
          {renderFormattedText(heading)}
        </h2>
      </div>

      <div className="relative w-full prob-container">
        {/* ── Active Card & Arrows Container ── */}
        <div className="relative" style={{ height: curH }}>
          {/* Card row / Ribbon Track */}
          <div
            className="flex items-stretch h-full gap-5 prob-track transition-all"
            style={{ 
              height: curH,
              transform: `translateX(${trackOffset})`,
              transitionDuration: '700ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              width: 'max-content',
              position: 'relative'
            }}
          >
            {cards.map((card, idx) => {
              const isActive = idx === active

              const overlayContent = (
                <div className="relative w-full h-full flex flex-col p-8 box-border">
                  <div className="absolute top-8 right-8 text-white/40 font-bold leading-none tracking-tight text-right"
                       style={{ fontSize: isMobile ? 64 : 100, fontFamily: "'Sora', sans-serif", textAlign: 'right' }}>
                     {card.num}
                  </div>
                  <div className="mt-auto relative z-10">
                     <div className="absolute -inset-x-8 -bottom-8 h-2/3 pointer-events-none opacity-60"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }} />
                    <div className="text-white font-bold leading-[1.1] relative z-20 text-left"
                         style={{ 
                           fontSize: isMobile ? '1.6rem' : '2.2rem', 
                           maxWidth: '100%', 
                           fontFamily: "'Sora', sans-serif",
                           textAlign: 'left'
                         }}>
                      {card.title}
                    </div>
                  </div>
                </div>
              )

              return (
                <div
                  key={idx}
                  className={`flex-shrink-0 transition-all duration-700 ${
                    isActive
                      ? 'z-10 opacity-100 scale-100'
                      : 'opacity-20 scale-[0.85]'
                  }`}
                  style={{ 
                    width: curW, 
                    height: curH,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <TiltedCard
                    containerWidth={`${curW}px`}
                    containerHeight={`${curH}px`}
                    rotateAmplitude={isActive ? 10 : 0}
                    scaleOnHover={isActive ? 1.04 : 1}
                    borderRadius="28px"
                    displayOverlayContent
                    overlayContent={overlayContent}
                  >
                    <div style={{ 
                      width: '100%', 
                      height: '100%', 
                      background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 50%, #1e3a8a 100%)' 
                    }} />
                  </TiltedCard>
                </div>
              );
            })}
          </div>

          {/* Arrow buttons */}
          <div className="prob-arrows">
            {[-1, 1].map((dir) => {
              const isPrev = dir === -1
              return (
                <button
                  key={dir}
                  onClick={() => advance(dir)}
                  className="absolute top-1/2 -translate-y-1/2 w-14 h-14 
                             flex items-center justify-center z-50
                             border-none cursor-pointer transition-all duration-300
                             bg-transparent text-[#2563EB]"
                  style={{ 
                    opacity: 0.6,
                    left: isMobile 
                      ? (isPrev ? `calc(50vw - ${curW/2}px - 52px)` : `calc(50vw + ${curW/2}px - 4px)`)
                      : (isPrev ? `calc(${baseIndent} - 66px)` : `calc(${baseIndent} + ${curW + 10}px)`),
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
                >
                  <span style={{ fontSize: '48px', fontWeight: 200, transform: isPrev ? 'translateX(-2px)' : 'translateX(2px)' }}>
                    {isPrev ? '‹' : '›'}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Info cards ── */}
        <div className="prob-info-wrapper px-6">
          {[
            { label: problem?.globalImpactLabel || 'IMPACT',       text: problem?.globalImpactText || "Brands that fix these gaps grow 3–10× faster than those that don't." },
            { label: problem?.globalSolutionLabel || 'OUR SOLUTION', text: problem?.globalSolutionText || 'We build the systems, data, and creative that turn these gaps into your unfair advantage.' },
          ].map(({ label, text }) => (
            <div key={label}
                 className="rounded-[2rem] px-8 py-8 md:px-11 md:py-10 text-left prob-info-card"
                 style={{
                   background: '#ffffff',
                   border: '1px solid #e2e8f0',
                   boxShadow: '0 8px 32px rgba(11,59,110,0.08)',
                 }}>
              <span className="block text-sm font-bold tracking-[0.08em] uppercase mb-4"
                    style={{ color: '#000', fontFamily: "'Sora', sans-serif" }}>
                <GradientText colors={["#2563EB", "#7C3AED", "#2563EB"]} showAnimation={false}>
                  {label}
                </GradientText>
              </span>
              <p className="text-[1.1rem] md:text-[1.25rem] leading-snug font-semibold"
                 style={{ color: '#1e293b', fontFamily: "'Sora', sans-serif" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .prob-info-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 50px;
          width: 100%;
          max-width: 1160px;
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
        }

        @media (min-width: 1024px) {
          .prob-info-wrapper {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            margin-top: 0;
            left: calc(${baseIndent} + ${CARD_W_PX + 80}px);
            width: min(30vw, 480px);
            pointer-events: none;
            padding: 0;
          }
          .prob-info-card {
            pointer-events: auto;
          }
        }
      `}</style>
    </section>
  )
}

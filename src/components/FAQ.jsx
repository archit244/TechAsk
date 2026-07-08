import { useState, useEffect } from 'react'
import { useSanityData } from '../lib/sanityContext'
import { renderFormattedText } from '../lib/renderFormattedText'

const FALLBACK_FAQS = [
  { question: 'What type of Digital Marketing Services does Techask offer?',              answer: 'We offer a full suite of digital marketing services including Performance Marketing (Google, Meta, LinkedIn Ads), SEO & Local SEO, Social Media Marketing, Web & Landing Page Development, Analytics & Automation, and Influencer & ORM management.' },
  { question: 'How do I know if Techask is the right agency for me?',                     answer: "We work with growth-stage startups, funded companies, SMBs, and enterprises. If you have a $5k+/month marketing budget and a scalable offer, we can build a growth engine for you. Book a free 30-min strategy call to see if we're a fit." },
  { question: 'What industries does Techask specialise in?',                              answer: "We've scaled brands across e-commerce, SaaS, healthcare, real estate, hospitality, entertainment, and more. Our frameworks are industry-agnostic but our execution is hyper-specialised to your vertical." },
  { question: 'How quickly will I see results from your services?',                       answer: 'Paid media results typically show within 2-4 weeks. SEO takes 3-6 months for significant organic gains. Most clients see meaningful ROI within the first 90 days — often within Month 1 for performance campaigns.' },
  { question: 'Do you offer custom marketing strategies?',                                answer: "Absolutely. Every client gets a custom growth roadmap based on their specific goals, budget, industry, and competitive landscape. We don't believe in cookie-cutter approaches." },
  { question: 'What is the pricing structure for your services?',                         answer: 'We offer flexible engagement models — monthly retainers, project-based pricing, and performance-based options. Pricing depends on scope and channels. Book a free consultation to get a custom quote.' },
]

/* ── Arrow from Problem section ── */
function DownArrow({ color = 'currentColor', isOpen = false }) {
  return (
    <span style={{ 
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: 24, 
      lineHeight: 1,
      color: color,
      paddingBottom: 2 /* slight baseline adjustment */
    }}>
      ›
    </span>
  )
}

const ROW_H = 100


export default function FAQ() {
  const [open, setOpen]       = useState(null)
  const [hovered, setHovered] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const { faqs } = useSanityData()

  /* Responsive check */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const items = (faqs && faqs.length > 0) ? faqs : FALLBACK_FAQS
  const headingText = (faqs && faqs.length > 0) ? faqs[0].sectionHeading : 'Frequently Asked Questions.'
  const subheadingText = (faqs && faqs.length > 0) ? faqs[0].sectionSubheading : 'Everything you need to know about working with Techask.'

  return (
    <>
      <section
        id="faq"
        style={{
          background: '#fff',
          padding: '96px 0 112px',
          fontFamily: "'Sora', sans-serif",
        }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 5%' }}>

          {/* ── Heading ── */}
          <div style={{ marginBottom: 56 }}>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              color: '#000',
              letterSpacing: '-0.02em',
              margin: '0 0 4px',
              fontFamily: "'Sora', sans-serif",
            }}>
              {renderFormattedText(headingText)}
            </h2>
            <p style={{
              fontSize: 'clamp(0.85rem, 1.2vw, 0.98rem)',
              color: '#555',
              marginTop: 14,
              fontWeight: 400,
              fontFamily: "'Sora', sans-serif",
              lineHeight: 1.7,
            }}>
              {subheadingText}
            </p>
          </div>

          {/* ── Row list ── */}
          <div>
            {items.map((f, i) => {
              const isOpen   = open === i
              const isHover  = !isMobile && hovered === i
              const question = f.question || f.q
              const answer   = f.answer   || f.a

              return (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    borderBottom: 'none',
                  }}
                  onMouseEnter={() => !isMobile && setHovered(i)}
                  onMouseLeave={() => !isMobile && setHovered(null)}
                >
                  {/*
                   * ── ANIMATION 1: Left-to-right black bottom-line sweep ──
                   * A thin 1.5px bar pinned to the bottom of the row sweeps
                   * from scaleX(0) → scaleX(1) on hover. A static light line
                   * is always visible underneath as the base separator.
                   */}
                  {/* Static light separator (always visible) */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      height: '1px',
                      background: 'rgba(0,0,0,0.06)',
                      zIndex: 0,
                      pointerEvents: 'none',
                    }}
                  />
                  {/* Animated blue sweep line */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      height: '1.5px',
                      background: '#2563EB',
                      transformOrigin: 'left center',
                      transform: isHover && !isOpen ? 'scaleX(1)' : 'scaleX(0)',
                      transition: isHover && !isOpen
                        ? 'transform 0.48s cubic-bezier(0.76,0,0.24,1)'
                        : 'transform 0.38s cubic-bezier(0.76,0,0.24,1)',
                      zIndex: 1,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* ── Trigger row — fixed height ── */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      height: ROW_H,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 20,
                      padding: '0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    {/*
                     * ── ANIMATION 2: Question shifts right on hover ──
                     * translateX nudges the text rightward. Text colour stays dark.
                     */}
                    <span style={{
                      fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)',
                      fontWeight: 500,
                      color: '#111',
                      fontFamily: "'Sora', sans-serif",
                      lineHeight: 1.35,
                      flex: 'none',
                      maxWidth: '55%',    /* hard cap — matches motion textEnd */
                      letterSpacing: '-0.02em',
                      transform: isHover && !isOpen ? 'translateX(18px)' : 'translateX(0)',
                      transition: 'transform 0.42s cubic-bezier(0.76,0,0.24,1)',
                      willChange: 'transform',
                    }}>
                      {question}
                    </span>

                    <span style={{
                      flexShrink: 0,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: `1px solid ${isOpen ? '#2563EB' : isHover ? '#2563EB' : 'rgba(0,0,0,0.22)'}`,
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'border-color 0.28s ease',
                    }}>
                      {/* Layer 1 — default arrow, always visible */}
                      <span style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                      }}>
                        <DownArrow color={isOpen ? "#2563EB" : "#333"} isOpen={isOpen} />
                      </span>

                      {/* Layer 2 — hover blue circle, slides in from bottom-left ONLY when closed */}
                      <span style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#2563EB',
                        transform: isHover && !isOpen
                          ? 'translate(0%, 0%)'
                          : 'translate(-110%, 110%)',
                        transition: 'transform 0.42s cubic-bezier(0.76,0,0.24,1)',
                        willChange: 'transform',
                      }}>
                        <DownArrow color="#fff" isOpen={isOpen} />
                      </span>
                    </span>
                  </button>



                  {/* ── Expandable answer ── */}
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    overflow: 'hidden',
                    maxHeight: isOpen ? 360 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.42s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
                  }}>
                    <p style={{
                      fontSize: 'clamp(0.83rem, 1.1vw, 0.93rem)',
                      lineHeight: 1.8,
                      color: '#555',
                      fontFamily: "'Sora', sans-serif",
                      padding: '0 0 24px',
                      maxWidth: 720,
                      margin: 0,
                      fontWeight: 400,
                    }}>
                      {answer}
                    </p>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>
    </>
  )
}

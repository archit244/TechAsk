import { useState, useEffect } from 'react'

/* ─────────────────────────────────────────────────────────────
   MARQUEE
───────────────────────────────────────────────────────────────*/
function StarSVG() {
  return <span className="star-icon-spin" aria-hidden="true">✦</span>
}

const UPPER = "CREATE. SCALE. DOMINATE."
const LOWER = "CREATE. SCALE. DOMINATE."

function MarqueeInner() {
  const items = []
  for (let i = 0; i < 10; i++) {
    items.push(
      <span key={`u${i}`} className="marquee-text-2">{UPPER}</span>,
      <StarSVG key={`s1${i}`} />,
      <span key={`l${i}`} className="marquee-text-2">{LOWER}</span>,
      <StarSVG key={`s2${i}`} />,
    )
  }
  return <>{items}</>
}

/* ─────────────────────────────────────────────────────────────
   FORM — Editorial, Schbang-style
   No card, no box, no shadows. Bottom-border only inputs.
   Typography-driven, airy, and fully integrated into the hero.
───────────────────────────────────────────────────────────────*/
const F = "'Sora', sans-serif"

function Field({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{
        fontFamily: F,
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.72)',
      }}>
        {label}
      </label>
      {children}
    </div>
  )
}

const baseInput = {
  fontFamily: F,
  fontSize: '0.92rem',
  fontWeight: 400,
  color: '#0a0a0a',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(0,0,0,0.15)',
  borderRadius: 0,
  outline: 'none',
  padding: '6px 0',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 0.25s ease',
}

function TInput({ type = 'text', name, value, onChange, placeholder, id }) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      id={id}
      type={type} name={name} value={value} onChange={onChange}
      placeholder={placeholder}
      style={{ ...baseInput, borderBottomColor: focused ? '#0a0a0a' : 'rgba(0,0,0,0.15)' }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

function TSelect({ name, value, onChange }) {
  const [focused, setFocused] = useState(false)
  return (
    <select
      name={name} value={value} onChange={onChange}
      style={{
        ...baseInput,
        appearance: 'none',
        WebkitAppearance: 'none',
        cursor: 'pointer',
        borderBottomColor: focused ? '#0a0a0a' : 'rgba(0,0,0,0.15)',
        color: value ? '#0a0a0a' : 'rgba(0,0,0,0.38)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M1.5 3.5l3.5 3.5 3.5-3.5' stroke='%23000' stroke-width='1.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 2px center',
        paddingRight: 20,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <option value="" disabled hidden>Select Budget</option>
      <option value="10k-25k">₹10k – ₹25k</option>
      <option value="25k-50k">₹25k – ₹50k</option>
      <option value="50k+">₹50k+</option>
      <option value="not-sure">Not sure yet</option>
    </select>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', budget: '' })
  const [hovered, setHovered] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  return (
    <div style={{
      width: '100%',
      maxWidth: 380,
      background: '#ffffff',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: 28,
      padding: '20px 22px',
      boxSizing: 'border-box',
    }}>

      {/* Title */}
      <h3 style={{
        fontFamily: F, fontSize: '1rem', fontWeight: 700,
        letterSpacing: '-0.02em', color: '#0a0a0a',
        margin: '0 0 22px', lineHeight: 1.3,
      }}>
        Let's Grow Your Business
      </h3>

      {submitted ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%', background: '#000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
              <path d="M4 11l5 5 9-9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p style={{ fontFamily: F, fontWeight: 700, fontSize: '0.88rem', color: '#0a0a0a', margin: 0 }}>
            We'll reach out within 24 hours.
          </p>
        </div>
      ) : (
        <form
          onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
          style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          <Field label="Name">
            <TInput id="contact-name" name="name" value={form.name} onChange={set('name')} placeholder="Rahul Sharma" />
          </Field>

          <Field label="Email">
            <TInput type="email" name="email" value={form.email} onChange={set('email')} placeholder="rahul@company.com" />
          </Field>

          <Field label="Phone Number">
            <TInput type="tel" name="phone" value={form.phone} onChange={set('phone')} placeholder="+91 98765 43210" />
          </Field>

          <Field label="Company Name">
            <TInput name="company" value={form.company} onChange={set('company')} placeholder="Your Company Pvt. Ltd." />
          </Field>

          <Field label="Budget">
            <TSelect name="budget" value={form.budget} onChange={set('budget')} />
          </Field>

          {/* CTA — black pill, matches navbar */}
          <button
            type="submit"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              marginTop: 8,
              alignSelf: 'flex-start',
              fontFamily: F, fontSize: '0.84rem', fontWeight: 700,
              color: '#fff', background: '#000',
              border: 'none', borderRadius: 999,
              padding: '12px 30px',
              cursor: 'pointer',
              letterSpacing: '0.01em',
              transform: hovered ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              opacity: hovered ? 0.88 : 1,
            }}
          >
            Get a Free Consultation →
          </button>
        </form>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────*/
export default function HeroOld() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (isMobile) {
    return (
      <div
        className="section-hero_main"
        style={{
          height: 'auto',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          background: '#fff',
        }}
      >
        <div
          className="hero-inner"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Fixed left alignment
            justifyContent: 'flex-start',
            gap: '30px',
            padding: '40px 5% 40px', // Matches Navbar logo padding exactly
            boxSizing: 'border-box',
            width: '100%',
            margin: '0',
          }}
        >
          {/* TEXT CONTENT */}
          <div className="hero-text-col" style={{ width: '100%', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h1
              className="hero-heading"
              style={{ 
                fontSize: 'clamp(2rem, 8vw, 2.3rem)', // Slightly smaller for better proportion
                marginBottom: 20,
                marginTop: 40,
                lineHeight: 1.05,
                fontWeight: 700,
                color: '#000',
                textAlign: 'left',
                fontFamily: "'Sora', sans-serif"
              }}
            >
              Your Creative,<br />
              Media &<br />
              Technology<br />
              Transformation<br />
              Partner
            </h1>
            <div
              className="hero-subheadingm"
              style={{ 
                width: '100%',
                maxWidth: '100%', // Removed 90% to avoid possible shift
                textAlign: 'left',
                fontSize: '1.05rem', 
                color: '#1a1a1a',
                lineHeight: 1.5,
                fontWeight: 500,
                margin: '0',
                fontFamily: "'Sora', sans-serif"
              }}
            >
              We're a team of 1200+ Specialists delivering award-winning work for 350+ brands worldwide, 11 years and counting!
            </div>
          </div>
          <div className="hero-form-col" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <ContactForm />
          </div>
        </div>

        <div style={{
          flexShrink: 0,
          width: '100%',
          height: 'clamp(40px, 6vw, 60px)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          margin: '20px 0',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            whiteSpace: 'nowrap',
            willChange: 'transform',
            animation: 'marquee-horizontal-alt 80s linear infinite',
          }}>
            <MarqueeInner /><MarqueeInner />
          </div>
        </div>
      </div>
    )
  }

  // Original Desktop Layout
  return (
    <div
      className="section-hero_main"
      style={{
        height: 'calc(100vh - 74px - 100px)',
        minHeight: 380,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        marginBottom: 10,
      }}
    >
      <div
        className="hero-inner"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'clamp(20px, 3.5vw, 56px)',
          padding: '0 5% 40px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ flex: '0 0 58%', minWidth: 0 }}>
          <h1
            className="hero-heading"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 48px)', marginBottom: 14 }}
          >
            <strong>Your Creative, Media &amp; Technology Transformation Partner</strong>
          </h1>
          <div
            className="hero-subheadingm"
            style={{ maxWidth: '100%', fontSize: 'clamp(0.88rem, 1.3vw, 18px)', marginTop: 0 }}
          >
            We're a team of 1200+ Specialists delivering award-winning work
            for 350+ brands worldwide, 11 years and counting!
          </div>
        </div>

        <div style={{
          flex: '0 0 auto',
          width: 'clamp(320px, 38%, 420px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginRight: 30,
        }}>
          <ContactForm />
        </div>
      </div>

      <div style={{
        flexShrink: 0,
        width: '100%',
        height: 40,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          whiteSpace: 'nowrap',
          willChange: 'transform',
          animation: 'marquee-horizontal-alt 80s linear infinite',
        }}>
          <MarqueeInner /><MarqueeInner />
        </div>
      </div>
    </div>
  )
}

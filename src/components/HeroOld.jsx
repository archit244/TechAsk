import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GradientText from './GradientText'
import { useSanityData } from '../lib/sanityContext'
import { renderFormattedText } from '../lib/renderFormattedText'
import { insertLead } from '../services/leadService'

/* ─────────────────────────────────────────────────────────────
   MARQUEE
───────────────────────────────────────────────────────────────*/
function StarSVG() {
  return <span className="star-icon-spin" style={{ color: '#FFFFFF' }} aria-hidden="true">✦</span>
}

const UPPER = "CREATE. SCALE. DOMINATE."
const LOWER = "CREATE. SCALE. DOMINATE."

function MarqueeInner({ text }) {
  const items = []
  const displayText = text || UPPER
  for (let i = 0; i < 10; i++) {
    items.push(
      <span key={`u${i}`} className="marquee-text-2">{displayText}</span>,
      <StarSVG key={`s1${i}`} />,
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

function Field({ label, htmlFor, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label 
        htmlFor={htmlFor}
        style={{
          fontFamily: F,
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.72)',
          cursor: 'pointer'
        }}
      >
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

function TInput({ type = 'text', name, value, onChange, placeholder, id, autoComplete }) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      id={id}
      type={type} 
      name={name} 
      value={value} 
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      style={{ ...baseInput, borderBottomColor: focused ? '#0a0a0a' : 'rgba(0,0,0,0.15)' }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

function TSelect({ name, value, onChange, id, autoComplete }) {
  const [focused, setFocused] = useState(false)
  return (
    <select
      id={id}
      name={name} value={value} onChange={onChange}
      autoComplete={autoComplete}
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

function ContactForm({ formHeading, ctaText, successTitle, successBody }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', budget: '' })
  const [hovered, setHovered] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isPhoneFocused, setIsPhoneFocused] = useState(false)

  const isValid = form.name.trim() !== '' && form.email.includes('@') && form.phone.length === 10 && form.company.trim() !== '' && form.budget !== '';

  const set = k => e => {
    let val = e.target.value;
    // Phone logic: only numbers, max 10
    if (k === 'phone') {
      val = val.replace(/\D/g, '').slice(0, 10);
    }
    setForm(f => ({ ...f, [k]: val }));
    setError('');
    setSuccess('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validate required fields
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.company.trim() || !form.budget) {
      setError('All fields are required');
      return;
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setError('Please enter a valid email address');
      return;
    }

    // 3. Validate phone length
    if (form.phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    // 4. Insert lead to Supabase
    const { data, error: insertError } = await insertLead({
      full_name: form.name.trim(),
      email: form.email.trim(),
      phone_number: form.phone.trim(),
      company_name: form.company.trim(),
      budget: form.budget
    });

    if (insertError) {
      setIsSubmitting(false);
      if (import.meta.env.DEV) {
        setError(`Failed to save lead: ${insertError.message || insertError}`);
      } else {
        setError('Failed to submit form. Please check your connection and try again.');
      }
      return;
    }

    // 5. Success
    setSuccess('Strategy call booked successfully!');
    setForm({ name: '', email: '', phone: '', company: '', budget: '' });
    setIsSubmitting(false);

    // Redirect after a short delay
    setTimeout(() => {
      navigate('/thank-you');
    }, 1500);
  }

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
        {formHeading || "Let's Grow Your Business"}
      </h3>


      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
      >
          <Field label="FULL NAME" htmlFor="contact-name">
            <TInput id="contact-name" name="name" value={form.name} onChange={set('name')} placeholder="Your full name" autoComplete="name" />
          </Field>

          <Field label="EMAIL" htmlFor="contact-email">
            <TInput id="contact-email" type="email" name="email" value={form.email} onChange={set('email')} placeholder="you@company.com" autoComplete="email" />
          </Field>

          <Field label="PHONE NUMBER" htmlFor="contact-phone">
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <span style={{ 
                position: 'absolute', 
                left: 0, 
                bottom: '7px', 
                fontFamily: F, 
                fontSize: '0.92rem', 
                color: isPhoneFocused || form.phone ? '#0a0a0a' : 'rgba(10,10,10,0.4)', 
                fontWeight: 500,
                pointerEvents: 'none',
                transition: 'color 0.2s ease'
              }}>
                +91 
              </span>
              <input 
                id="contact-phone"
                type="tel" 
                name="phone" 
                value={form.phone} 
                onChange={set('phone')} 
                onFocus={() => setIsPhoneFocused(true)}
                onBlur={() => setIsPhoneFocused(false)}
                placeholder="98XXXXXX"
                style={{ ...baseInput, paddingLeft: '32px' }}
                autoComplete="tel"
              />
            </div>
            {error && error.toLowerCase().includes('phone') && (
              <span style={{ color: '#ef4444', fontSize: '0.7rem', fontWeight: 600, marginTop: 4 }}>{error}</span>
            )}
          </Field>

          <Field label="COMPANY NAME" htmlFor="contact-company">
            <TInput id="contact-company" name="company" value={form.company} onChange={set('company')} placeholder="Your company name" autoComplete="organization" />
          </Field>

          <Field label="BUDGET" htmlFor="contact-budget">
            <TSelect id="contact-budget" name="budget" value={form.budget} onChange={set('budget')} autoComplete="off" />
          </Field>

          {/* CTA — blue pill */}
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="btn-gradient-hover"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              marginTop: 8,
              alignSelf: 'flex-start',
              fontFamily: F, fontSize: '0.84rem', fontWeight: 700,
              color: '#fff', background: '#2563EB',
              border: 'none', borderRadius: 999,
              padding: '12px 30px',
              width: '100%',
              cursor: isValid && !isSubmitting ? 'pointer' : 'not-allowed',
              letterSpacing: '0.01em',
              transform: isValid && !isSubmitting && hovered ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 0.2s ease, background 0.3s ease, opacity 0.2s ease',
              opacity: !isValid || isSubmitting ? 0.4 : (hovered ? 0.95 : 1),
            }}
          >
            {isSubmitting ? "Submitting..." : (ctaText || "Book My Strategy Call")}
          </button>

          {error && !error.toLowerCase().includes('phone') && (
            <div style={{ fontFamily: F, fontSize: '0.75rem', fontWeight: 600, color: '#ef4444', textAlign: 'center', marginTop: 4 }}>
              {error}
            </div>
          )}

          {success && (
            <div style={{ fontFamily: F, fontSize: '0.78rem', fontWeight: 600, color: '#16a34a', textAlign: 'center', marginTop: 4 }}>
              {success}
            </div>
          )}
        </form>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────*/
export default function HeroOld() {
  const [isMobile, setIsMobile] = useState(false)
  const { hero } = useSanityData()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const badgeText = hero?.badgeText || "Trusted By [100+] Founders"
  const titleText = hero?.title || "Your Creative, Media & Technology {Transformation} Partner"
  
  const subtitle = hero?.subtitle || "We help growth-focused businesses connect strategy, campaigns, creative, and digital execution so every marketing move leads to clearer business results."
  const formProps = {
    formHeading: hero?.formHeading,
    ctaText: hero?.ctaText,
    successTitle: hero?.successTitle,
    successBody: hero?.successBody
  }
  const marqueeText = hero?.marqueeText || UPPER

  if (isMobile) {
    return (
      <div
        id="hero-section"
        className="section-hero_main"
        style={{
          height: 'auto',
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          background: '#2563EB',
        }}
      >
        <div
          className="hero-inner"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center aligned for mobile
            justifyContent: 'flex-start',
            gap: '30px',
            padding: '40px 5% 40px', // Matches Navbar logo padding exactly
            boxSizing: 'border-box',
            width: '100%',
            margin: '0',
          }}
        >
          {/* TEXT CONTENT */}
          <div className="hero-text-col" style={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Trusted Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              padding: '4px 10px 4px 6px',
              borderRadius: '6px',
              marginTop: '32px',
              marginBottom: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', marginRight: '8px' }}>
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                ].map((src, i) => (
                  <img 
                    key={i}
                    src={src} 
                    alt="Founder" 
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: '2px solid #FFFFFF',
                      marginLeft: i === 0 ? 0 : '-8px',
                      objectFit: 'cover'
                    }}
                  />
                ))}
              </div>
              <GradientText 
                colors={["#2563EB", "#7C3AED", "#2563EB"]} 
                showAnimation={true}
                className="font-bold text-[0.8rem] tracking-tight"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {renderFormattedText(badgeText)}
              </GradientText>
            </div>
            <h1
              className="hero-heading"
              style={{ 
                fontSize: 'clamp(2rem, 8vw, 2.3rem)',
                marginBottom: 20,
                marginTop: 0,
                lineHeight: 1.05,
                fontWeight: 700,
                color: '#FFFFFF',
                textAlign: 'center',
                fontFamily: "'Sora', sans-serif"
              }}
            >
              {renderFormattedText(titleText)}
            </h1>
            <div
              className="hero-subheadingm"
              style={{ 
                width: '100%',
                maxWidth: '100%',
                textAlign: 'center',
                fontSize: '1.05rem', 
                color: '#FFFFFF',
                lineHeight: 1.5,
                fontWeight: 500,
                margin: '0',
                fontFamily: "'Sora', sans-serif"
              }}
            >
              {subtitle}
            </div>
          </div>
          <div className="hero-form-col" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <ContactForm {...formProps} />
          </div>
        </div>

        <div style={{
          flexShrink: 0,
          width: '100%',
          height: 'clamp(40px, 6vw, 60px)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          background: '#2563EB',
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
            <MarqueeInner text={marqueeText} /><MarqueeInner text={marqueeText} />
          </div>
        </div>
      </div>
    )
  }

  // Original Desktop Layout
  return (
    <div
      id="hero-section"
      className="section-hero_main"
      style={{
        height: 'calc(100vh - 64px)',
        minHeight: 380,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#2563EB',
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
          {/* Trusted Badge Desktop */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: '5px 12px 5px 6px',
            borderRadius: '6px',
            marginBottom: '28px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', marginRight: '10px' }}>
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
              ].map((src, i) => (
                <img 
                  key={i}
                  src={src} 
                  alt="Founder" 
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '2px solid #FFFFFF',
                    marginLeft: i === 0 ? 0 : '-10px',
                    objectFit: 'cover'
                  }}
                />
              ))}
            </div>
            <span style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#2563EB',
              letterSpacing: '-0.01em'
            }}>
              {renderFormattedText(badgeText)}
            </span>
          </div>
          <h1
            className="hero-heading"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 48px)', marginBottom: 14, color: '#FFFFFF' }}
          >
            <strong>{renderFormattedText(titleText)}</strong>
          </h1>
          <div
            className="hero-subheadingm"
            style={{ maxWidth: '100%', fontSize: 'clamp(0.88rem, 1.3vw, 18px)', marginTop: 0, color: '#FFFFFF' }}
          >
            {subtitle}
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
          <ContactForm {...formProps} />
        </div>
      </div>

      <div style={{
        flexShrink: 0,
        width: '100%',
        height: 40,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: '#2563EB',
        transform: 'translateY(-50px)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          whiteSpace: 'nowrap',
          willChange: 'transform',
          animation: 'marquee-horizontal-alt 80s linear infinite',
        }}>
          <MarqueeInner text={marqueeText} /><MarqueeInner text={marqueeText} />
        </div>
      </div>
    </div>
  )
}

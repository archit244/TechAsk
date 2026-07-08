import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import GradientText from '../components/GradientText'
import { useSanity } from '../lib/useSanity'
import { renderFormattedText } from '../lib/renderFormattedText'
import { urlFor } from '../lib/sanityClient'

const THANKYOU_QUERY = `*[_type == "thankyou" && _id == "thankyou"][0]`

const F = "'Sora', sans-serif"

export default function ThankYou() {
  const navigate = useNavigate()
  const { data: ty } = useSanity(THANKYOU_QUERY)

  const headline     = ty?.headline     || 'Thank You.'
  const subheading   = ty?.subheading   || 'What Happens Next?'
  const steps        = ty?.steps        || [
    'Our team is reviewing your request.',
    "You'll receive a confirmation and we'll reach out within 24 hours.",
    'Our growth strategist will align on your goals, budget, and timelines.',
  ]
  const buttonText   = ty?.buttonText   || 'Back to Home Page'
  const socialHeading = ty?.socialHeading || "Don't forget to join us on social media for all the latest news, updates and great content!"
  const linkedinUrl  = ty?.linkedinUrl  || 'https://linkedin.com/company/techask'
  const instagramUrl = ty?.instagramUrl || 'https://instagram.com/techask'
  const youtubeUrl   = ty?.youtubeUrl   || 'https://youtube.com/@techask'
  const facebookUrl  = ty?.facebookUrl  || 'https://facebook.com/techask'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#fff', fontFamily: F }}>

      {/* ── White Navbar ── */}
      <nav style={{
        width: '100%',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%',
        background: '#ffffff',
        boxSizing: 'border-box',
        borderBottom: '1px solid #f0f0f0',
      }}>
        <a id="nav-logo" href="/" style={{ 
          textDecoration: 'none', 
          display: 'flex', 
          alignItems: 'center',
          position: 'relative',
          width: '180px', 
          height: '64px',
          zIndex: 1001
        }}>
          {ty?.logo ? (
            <img 
              src={urlFor(ty.logo).url()}
              alt="TechAsk Logo" 
              style={{ 
                height: '110px', 
                width: 'auto',
                display: 'block',
                position: 'absolute',
                top: '-15px', 
                left: 0,
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))'
              }} 
            />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontFamily: F, fontSize: '1.1rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.02em' }}>tech</span>
              <span style={{
                fontFamily: F, fontSize: '0.75rem', fontWeight: 700,
                background: '#2563EB', color: '#fff',
                borderRadius: '50%', width: 28, height: 28,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                letterSpacing: '-0.03em', flexShrink: 0
              }}>A&k</span>
            </div>
          )}
        </a>
      </nav>

      {/* ── Hero block — exactly 100vh minus navbar ── */}
      <div style={{
        flex: '0 0 auto',
        height: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 5%',
        boxSizing: 'border-box',
      }}>
        {/* Giant gradient headline */}
        <h1 style={{ margin: '0 0 56px', lineHeight: 1 }}>
          <span style={{
            fontFamily: F,
            fontSize: 'clamp(4.5rem, 9vw, 8rem)',
            fontWeight: 800,
            letterSpacing: '-0.01em',
            lineHeight: 1,
            display: 'block',
          }}>
            <GradientText colors={['#2563EB', '#7C3AED', '#2563EB']} animationSpeed={6}>
              {renderFormattedText(headline)}
            </GradientText>
          </span>
        </h1>

        {/* What Happens Next */}
        <h2 style={{ margin: '0 0 20px' }}>
          <span style={{
            fontFamily: F,
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700,
            letterSpacing: '0.01em',
            display: 'block',
          }}>
            <GradientText colors={['#2563EB', '#7C3AED', '#2563EB']} animationSpeed={8}>
              {subheading}
            </GradientText>
          </span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 40 }}>
          {steps.map((line, i) => (
            <p key={i} style={{
              fontFamily: F,
              fontSize: 'clamp(0.82rem, 1.2vw, 0.96rem)',
              color: '#4b5563',
              margin: 0,
              fontWeight: 500,
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Yellow CTA */}
        {/* Blue CTA */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          width: '100%',
          margin: '0 auto',
        }}>
          {/* Blue CTA */}
          <button
            onClick={() => navigate('/')}
            style={{
              fontFamily: F,
              fontSize: '1rem',
              fontWeight: 700,
              color: '#fff',
              background: '#2563EB',
              border: 'none',
              borderRadius: 999,
              padding: '16px 40px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              letterSpacing: '0.01em',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {buttonText} <span>›</span>
          </button>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '919999999999'}?text=${encodeURIComponent("Hi Techask! I just submitted the strategy form on your website and had a few questions.")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: F,
              fontSize: '1rem',
              fontWeight: 700,
              color: '#fff',
              background: '#25D366',
              border: 'none',
              borderRadius: 999,
              padding: '16px 40px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              letterSpacing: '0.01em',
              transition: 'transform 0.2s ease, background-color 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.04)'
              e.currentTarget.style.background = '#20ba5a'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.background = '#25D366'
            }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.458h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
            Need Immediate Assistance? Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* ── Social strip ── */}
      <div style={{
        width: '100%',
        padding: '40px 8%',
        borderTop: '1px solid #f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 24,
        boxSizing: 'border-box',
      }}>
        <p style={{
          fontFamily: F,
          fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
          fontWeight: 700,
          color: '#0a0a0a',
          margin: 0,
          maxWidth: 420,
          lineHeight: 1.25,
        }}>
          {socialHeading}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
          <span style={{ fontFamily: F, fontSize: '0.8rem', fontWeight: 600, color: '#0a0a0a', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Follow Us On
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { Icon: FaLinkedinIn, href: linkedinUrl },
              { Icon: FaInstagram,  href: instagramUrl },
              { Icon: FaYoutube,    href: youtubeUrl },
              { Icon: FaFacebookF,  href: facebookUrl },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0a0a0a', transition: 'opacity 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

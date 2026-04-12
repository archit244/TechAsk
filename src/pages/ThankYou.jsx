import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import GradientText from '../components/GradientText'
import { useSanity } from '../lib/useSanity'
import { renderFormattedText } from '../lib/renderFormattedText'
import { urlFor } from '../lib/useSanity'

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
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
          {ty?.logo
            ? <img src={urlFor(ty.logo).height(40).url()} alt="TechAsk Logo" style={{ height: 40, width: 'auto' }} />
            : (
              <>
                <span style={{ fontFamily: F, fontSize: '1.1rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.02em' }}>tech</span>
                <span style={{
                  fontFamily: F, fontSize: '0.75rem', fontWeight: 700,
                  background: '#2563EB', color: '#fff',
                  borderRadius: '50%', width: 28, height: 28,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  letterSpacing: '-0.03em', flexShrink: 0
                }}>A&k</span>
              </>
            )
          }
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

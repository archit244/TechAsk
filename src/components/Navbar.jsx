import { useState, useEffect } from 'react'
import { useSanityData } from '../lib/sanityContext'
import { urlFor } from '../lib/sanityClient'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ theme = 'blue' }) {
  const { navbar: navData, thankyou: tyData } = useSanityData()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const isMobile = windowWidth < 768
  const isWhiteTheme = theme === 'white'

  const logoSrc = isWhiteTheme
    ? (tyData?.logo ? urlFor(tyData.logo).url() : '/logo-dark-removebg-preview.png')
    : (navData?.logo ? urlFor(navData.logo).url() : '/Gemini_Generated_Image_k3eigvk3eigvk3ei-removebg-preview.png')

  const navBg   = isWhiteTheme ? '#FFFFFF' : '#2563EB'
  const linkClr = isWhiteTheme ? '#0F172A' : '#FFFFFF'
  const F       = "'Sora', sans-serif"

  const navLinks = [
    { label: 'Services',   to: '/#services',  isHash: true },
    { label: 'Courses',    to: '/courses',     isHash: false },
    { label: 'About Us',   to: '/about',       isHash: false },
    { label: 'Contact Us', to: '/contact-us',  isHash: false },
  ]

  const handleHashClick = (e, to) => {
    if (to.startsWith('/#') && window.location.pathname === '/') {
      e.preventDefault()
      const id = to.replace('/#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const renderLogo = () => {
    if (logoSrc) {
      return (
        <img
          src={logoSrc}
          alt="TechAsk Logo"
          style={{
            height: isMobile ? '96px' : '110px',
            width: 'auto',
            display: 'block',
            position: 'absolute',
            top: isMobile ? '-14px' : '-15px',
            left: 0,
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.06))'
          }}
        />
      )
    }
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontFamily: F, fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', letterSpacing: '-0.02em' }}>tech</span>
        <span style={{ fontFamily: F, fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', background: '#2563EB', padding: '2px 8px', borderRadius: 6 }}>Ask</span>
      </div>
    )
  }

  // Hamburger icon (3 bars → X)
  const HamburgerIcon = () => (
    <button
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen(o => !o)}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        padding: '10px', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', gap: '6px',
        zIndex: 1100
      }}
    >
      {[0, 1, 2].map(i => (
        <span key={i} style={{
          display: 'block',
          width: 28,
          height: 3,
          borderRadius: 3,
          background: linkClr,
          transition: 'transform 0.25s ease, opacity 0.25s ease',
          transformOrigin: 'center',
          transform:
            menuOpen
              ? i === 0 ? 'translateY(9px) rotate(45deg)'
              : i === 1 ? 'opacity(0) scale(0)'
              : 'translateY(-9px) rotate(-45deg)'
              : 'none',
          opacity: menuOpen && i === 1 ? 0 : 1,
        }} />
      ))}
    </button>
  )

  return (
    <>
      <nav style={{
        position: 'relative',
        top: 0,
        zIndex: 1000,
        width: '100%',
        background: navBg,
        borderBottom: isWhiteTheme ? '1px solid #E2E8F0' : 'none',
        height: isMobile ? 72 : 72,
        padding: isMobile ? '0 5%' : '14px 5% 0',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}>
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxSizing: 'border-box'
        }}>
          {/* Logo */}
          <Link
            id="nav-logo"
            to="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              width: isMobile ? '160px' : '180px',
              height: isMobile ? '68px' : '64px',
              zIndex: 1001,
              flexShrink: 0,
            }}
          >
            {renderLogo()}
          </Link>

          {/* Desktop nav links */}
          {!isMobile && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
              fontFamily: F,
              fontSize: '0.95rem',
              fontWeight: 600,
            }}>
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={link.isHash ? (e) => handleHashClick(e, link.to) : undefined}
                  style={{ color: linkClr, textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0.9'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Desktop spacer */}
          {!isMobile && <div style={{ width: '180px' }} />}

          {/* Mobile hamburger */}
          {isMobile && <HamburgerIcon />}
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMobile && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.45)',
              zIndex: 1099,
              opacity: menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? 'auto' : 'none',
              transition: 'opacity 0.25s ease',
            }}
          />

          {/* Slide-in panel */}
          <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '75vw',
            maxWidth: 300,
            height: '100vh',
            background: isWhiteTheme ? '#fff' : '#1d4ed8',
            zIndex: 1100,
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '-8px 0 40px rgba(0,0,0,0.25)',
            display: 'flex',
            flexDirection: 'column',
            padding: '80px 32px 40px',
            boxSizing: 'border-box',
          }}>
            {/* Brand mark inside drawer */}
            <div style={{
              position: 'absolute',
              top: 20,
              left: 24,
              fontFamily: F,
              fontSize: '1.1rem',
              fontWeight: 700,
              color: linkClr,
              opacity: 0.7,
            }}>
              techAsk
            </div>

            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute', top: 18, right: 20,
                background: 'none', border: 'none', cursor: 'pointer',
                color: linkClr, fontSize: '1.6rem', lineHeight: 1,
                padding: 4,
              }}
            >
              ✕
            </button>

            {/* Nav links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={link.isHash ? (e) => handleHashClick(e, link.to) : () => setMenuOpen(false)}
                  style={{
                    color: linkClr,
                    textDecoration: 'none',
                    fontFamily: F,
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    padding: '14px 0',
                    borderBottom: `1px solid ${isWhiteTheme ? '#f1f5f9' : 'rgba(255,255,255,0.12)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    opacity: 0.92,
                  }}
                >
                  {link.label}
                  <span style={{ fontSize: '0.9rem', opacity: 0.5 }}>›</span>
                </Link>
              ))}
            </nav>

            {/* CTA at bottom */}
            <div style={{ marginTop: 'auto' }}>
              <Link
                to="/contact-us"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: isWhiteTheme ? '#2563EB' : '#fff',
                  color: isWhiteTheme ? '#fff' : '#2563EB',
                  fontFamily: F,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '14px 24px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                }}
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}

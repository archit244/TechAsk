import { useState, useEffect } from 'react'
import { useSanityData } from '../lib/sanityContext'
import { urlFor } from '../lib/sanityClient'
import { Link } from 'react-router-dom'

export default function Navbar({ theme = 'blue' }) {
  const { navbar: navData, thankyou: tyData } = useSanityData()
  const isMobile = useState(false)[0]
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const mobileCheck = windowWidth < 1024;
  const isWhiteTheme = theme === 'white';

  const logoSrc = isWhiteTheme
    ? (tyData?.logo ? urlFor(tyData.logo).url() : "/logo-dark-removebg-preview.png")
    : (navData?.logo ? urlFor(navData.logo).url() : "/Gemini_Generated_Image_k3eigvk3eigvk3ei-removebg-preview.png");

  const renderLogo = () => {
    if (logoSrc) {
      return (
        <img 
          src={logoSrc}
          alt="TechAsk Logo" 
          style={{ 
            height: '110px', 
            width: 'auto',
            display: 'block',
            position: 'absolute',
            top: '-15px', 
            left: 0,
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.06))'
          }} 
        />
      );
    }
    
    // Falling back to the styled text logo used in the thank-you page
    const F_FONT = "'Sora', sans-serif";
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontFamily: F_FONT, fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', letterSpacing: '-0.02em' }}>tech</span>
        <span style={{
          fontFamily: F_FONT, fontSize: '1.25rem', fontWeight: 700,
          color: '#ffffff', background: '#2563EB',
          padding: '2px 8px', borderRadius: 6,
          letterSpacing: '-0.02em'
        }}>Ask</span>
      </div>
    );
  };

  return (
    <nav style={{
      position: 'relative', top: 0, zIndex: 1000, width: '100%',
      background: isWhiteTheme ? '#FFFFFF' : '#2563EB',
      borderBottom: isWhiteTheme ? '1px solid #E2E8F0' : 'none',
      height: 72,
      padding: mobileCheck ? '14px 6% 0' : '14px 5% 0',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box'
    }}>
      {/* No maxWidth inner wrapper — padding alone controls left alignment to match hero text */}
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
      }}>
        {/* Logo — left edge sits at 5% from viewport, same as .hero-heading_wapper padding-left */}
        <Link id="nav-logo" to="/" style={{ 
          textDecoration: 'none', 
          display: 'flex', 
          alignItems: 'center',
          position: 'relative',
          width: '180px', 
          height: '64px',
          zIndex: 1001
        }}>
          {renderLogo()}
        </Link>

        {/* Navigation Links */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: mobileCheck ? '16px' : '32px',
          fontFamily: "'Sora', sans-serif",
          fontSize: mobileCheck ? '0.85rem' : '0.95rem',
          fontWeight: 600
        }}>
          <Link 
            to="/#services" 
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{ color: isWhiteTheme ? '#0F172A' : '#FFFFFF', textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.9'}
          >
            Services
          </Link>
          <Link 
            to="/courses"
            style={{ color: isWhiteTheme ? '#0F172A' : '#FFFFFF', textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.9'}
          >
            Courses
          </Link>
          <Link 
            to="/about"
            style={{ color: isWhiteTheme ? '#0F172A' : '#FFFFFF', textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.9'}
          >
            About Us
          </Link>
          <Link 
            to="/contact-us"
            style={{ color: isWhiteTheme ? '#0F172A' : '#FFFFFF', textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.9'}
          >
            Contact Us
          </Link>
        </div>

        {/* Spacer keeps nav links centered by balancing logo width */}
        {!mobileCheck && <div style={{ width: '180px' }} />}
      </div>
    </nav>
  )
}

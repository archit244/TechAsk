import { useState, useEffect } from 'react'
import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import GradientText from './GradientText'
import { useSanityData } from '../lib/sanityContext'

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const { footer: footerData } = useSanityData();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const brandingLine1 = footerData?.brandingLine1 || 'Techask';
  const subText = footerData?.subText || 'Proudly created in India.';
  const copyrightText = footerData?.copyrightText || 'All Right Reserved, All Wrong Reversed.';
  const linkedinUrl  = footerData?.linkedinUrl  || '#';
  const instagramUrl = footerData?.instagramUrl || '#';
  const youtubeUrl   = footerData?.youtubeUrl   || '#';
  const facebookUrl  = footerData?.facebookUrl  || '#';

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setTimeout(() => {
        if (id === 'contact') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          const el = document.getElementById('contact-name');
          if (el) el.focus();
        } else {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      if (id === 'contact') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          const el = document.getElementById('contact-name');
          if (el) el.focus();
        }, 1000);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer style={{ 
      width: '100%', 
      backgroundColor: '#2563EB',
      padding: isMobile ? '50px 6% 30px' : '60px 5% 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: "'Sora', sans-serif",
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>

      {/* ── TYPOGRAPHY SECTION ── */}
      <div style={{ 
        width: '100%', 
        borderBottom: '1px solid rgba(255,255,255,0.15)',
        paddingBottom: isMobile ? '25px' : '60px',
        marginBottom: isMobile ? '20px' : '40px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-end', 
          width: 'fit-content',
          margin: isMobile ? '0 0 20px 0' : '0 0 40px 0'
        }}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 900,
            fontSize: isMobile ? 'clamp(50px, 15vw, 90px)' : 'clamp(40px, 10vw, 180px)',
            lineHeight: 0.85,
            letterSpacing: '-0.05em',
            margin: 0,
            textAlign: 'right',
            color: '#FFFFFF'
          }}>
            {brandingLine1}
          </h2>
        </div>

        {/* CTA Button below text */}
        <button 
           onClick={(e) => handleLinkClick(e, 'contact')}
           style={{
             color: '#000',
             backgroundColor: '#fff',
             fontFamily: "'Sora', sans-serif",
             fontSize: isMobile ? 14 : 15,
             fontWeight: 700,
             padding: isMobile ? '10px 30px' : '14px 40px',
             borderRadius: '999px',
             cursor: 'pointer',
             border: 'none',
             transition: 'transform 0.2s ease',
             boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
           }}
           onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
           onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
           Talk to our Expert
        </button>
      </div>

      {/* ── BOTTOM BAR: SOCIALS - NAV - COPYRIGHT ── */}
      <div style={{ 
        width: '100%', 
        maxWidth: '1300px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: isMobile ? '30px' : '30px'
      }}>
        
        {/* Social Icons */}
        <div style={{ display: 'flex', gap: 24 }}>
          {[
            { Icon: FaLinkedinIn, href: linkedinUrl },
            { Icon: FaInstagram,  href: instagramUrl },
            { Icon: FaYoutube,    href: youtubeUrl },
            { Icon: FaFacebookF,  href: facebookUrl },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} style={{ color: '#fff', transition: 'opacity 0.2s ease' }}
               onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
               onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              <Icon size={isMobile ? 24 : 20} />
            </a>
          ))}
        </div>

        {/* Nav Links — main + legal stacked */}
        <nav style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px'
        }}>
          {/* Primary links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '20px' : '32px', justifyContent: 'center' }}>
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Contact', id: 'contact' },
              { label: 'Services', id: 'services' },
              { label: 'Framework', id: 'process' },
              { label: 'FAQ', id: 'faq' }
            ].map(item => (
              <a 
                key={item.label} 
                href={item.href || `#${item.id}`}
                onClick={(e) => {
                  if (item.href) {
                    e.preventDefault();
                    navigate(item.href);
                  } else {
                    handleLinkClick(e, item.id);
                  }
                }}
                style={{ 
                  color: '#fff', 
                  fontSize: 14, 
                  fontWeight: 500, 
                  textDecoration: 'none', 
                  opacity: 0.9,
                  cursor: 'pointer'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.9'}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '16px' : '24px', justifyContent: 'center' }}>
            {[
              { label: 'Privacy Policy',     href: '/privacy-policy' },
              { label: 'Cookie Policy',      href: '/cookie-policy' },
              { label: 'Terms & Conditions', href: '/terms-and-conditions' }
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); navigate(item.href); }}
                style={{
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: "'Sora', sans-serif",
                  textDecoration: 'none',
                  opacity: 0.9,
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.9'}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Copyright */}
        <div>
          <p style={{ 
            color: '#fff', 
            opacity: 0.8, 
            fontSize: 12, 
            textAlign: isMobile ? 'center' : 'right',
            lineHeight: 1.6, 
            margin: 0,
            fontFamily: "'Sora', sans-serif"
          }}>
            {subText}<br />
            {copyrightText}
          </p>
        </div>

      </div>

    </footer>
  )
}

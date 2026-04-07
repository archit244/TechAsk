import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer style={{ 
      position: 'sticky', 
      bottom: 0, 
      zIndex: 0, 
      width: '100%', 
      backgroundColor: '#000',
      padding: '80px 5% 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: "'Sora', sans-serif",
      boxSizing: 'border-box'
    }}>

      {/* ── BLACK FOOTER CORE ── */}
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        
        {/* Brand Name */}
        <div style={{ marginBottom: 40, width: '100%' }}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(64px, 15vw, 180px)',
            color: '#fff',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            margin: 0,
            textTransform: 'none',
          }}>
            Techask
          </h2>

          <button 
             onClick={() => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
               setTimeout(() => {
                 const el = document.getElementById('contact-name');
                 if (el) el.focus();
               }, 1000);
             }}
             style={{
               color: '#000',
               backgroundColor: '#fff',
               fontFamily: "'Sora', sans-serif",
               fontSize: 14,
               fontWeight: 700,
               padding: '12px 32px',
               borderRadius: '999px',
               cursor: 'pointer',
               border: 'none',
               marginTop: 24,
               transition: 'transform 0.2s ease',
             }}
             onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
             onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
             Start a Conversation
          </button>
        </div>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: 24, marginBottom: 40, justifyContent: 'center' }}>
          {[
            { Icon: FaLinkedinIn, href: '#' },
            { Icon: FaInstagram, href: '#' },
            { Icon: FaYoutube, href: '#' },
            { Icon: FaFacebookF, href: '#' },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} style={{ color: '#fff', transition: 'opacity 0.2s ease' }}
               onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
               onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              <Icon size={22} />
            </a>
          ))}
        </div>

        {/* Nav Links */}
        <nav style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '12px 24px', 
          justifyContent: 'center', 
          marginBottom: 48,
        }}>
          {['About', 'Contact', 'Case Studies', 'Blog', 'Privacy'].map(label => (
            <a key={label} href={`/${label.toLowerCase().replace(' ', '')}`}
               style={{ color: '#fff', fontSize: 13, fontWeight: 500, textDecoration: 'none', opacity: 0.75 }}>
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div style={{ paddingTop: 32, borderTop: '0.5px solid rgba(255,255,255,0.1)', width: '100%' }}>
          <p style={{ color: '#fff', opacity: 0.5, fontSize: 12, lineHeight: 1.8, margin: 0 }}>
            Proudly created in India.<br />
            All Right Reserved, All Wrong Reversed.
          </p>
        </div>

      </div>
    </footer>
  )
}

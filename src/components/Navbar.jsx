import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#process',  label: 'Process' },
    { href: '#results',  label: 'Results' },
    { href: '#faq',      label: 'FAQ' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <img src="/6.png" alt="Techask" style={{ height: '100px', objectFit: 'contain' }} />
          </a>
          <ul className="nav-links">
            {links.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
          </ul>
          <a href="#hero-form" className="btn btn-primary btn-sm nav-cta">Get Free Consultation</a>
          <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <span style={{ transform: open ? 'rotate(45deg) translate(5px,5px)' : '' }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#hero-form" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>Get Free Consultation</a>
        </div>
      )}
    </>
  )
}

import { useState } from 'react'

function DropItem({ label }) {
  return (
    <a href="#" style={{
      display: 'block', padding: '10px 0',
      fontFamily: 'Sora, sans-serif', fontSize: 14, fontWeight: 500,
      color: '#000', textDecoration: 'none', borderBottom: '1px solid #f0f0f0',
      transition: 'color 0.2s',
    }}
      onMouseEnter={e => (e.currentTarget.style.color = '#ef5a37')}
      onMouseLeave={e => (e.currentTarget.style.color = '#000')}
    >{label}</a>
  )
}

function NavLink({ label, items }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button style={{
        background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 4,
        padding: ' 20px', height: '100%',
        fontFamily: 'Sora, sans-serif', fontSize: 14, fontWeight: 500, color: '#000',
      }}>
        {label}
        {items && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      {items && open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, minWidth: 200,
          background: '#fff', borderBottom: '1px solid #000',
          padding: '16px 20px', zIndex: 9999, boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        }}>
          {items.map(item => <DropItem key={item} label={item} />)}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  return (
    <nav style={{
      position: 'relative', top: 0, zIndex: 1000, width: '100%',
      background: '#2563EB',
      /* no border-bottom: seamless with hero */
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 5%', height: 64,
    }}>
      {/* Logo */}
      <a id="nav-logo" href="#" style={{ 
        textDecoration: 'none', 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        width: '180px', 
        height: '64px',
        zIndex: 1001
      }}>
        <img 
          src="/Gemini_Generated_Image_k3eigvk3eigvk3ei-removebg-preview.png" 
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
      </a>


    </nav>
  )
}

const F = "'Sora', sans-serif"

/**
 * Floating "Talk To Our Expert" CTA button.
 *
 * Props:
 *  visible {boolean} - controls whether the button is shown
 */
export default function FloatingCTA({ visible }) {
  function handleClick() {
    const hero = document.getElementById('hero-section')
    const input = document.getElementById('contact-name')

    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    // Focus the first form field after scroll completes
    setTimeout(() => {
      if (input) input.focus()
    }, 700)
  }

  return (
    <div
      role="complementary"
      aria-label="Talk to our expert"
      style={{
        position: 'fixed',
        bottom: 32,
        right: 24,
        zIndex: 9999,
        // Fade + slide transition
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <button
        onClick={handleClick}
        aria-label="Talk to our expert — scroll to lead form"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: '#2563EB',
          color: '#fff',
          fontFamily: F,
          fontSize: '0.9rem',
          fontWeight: 700,
          letterSpacing: '0.01em',
          border: 'none',
          borderRadius: 999,
          padding: '14px 22px',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(37, 99, 235, 0.35), 0 2px 8px rgba(0,0,0,0.12)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)'
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(37, 99, 235, 0.45), 0 4px 12px rgba(0,0,0,0.15)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(37, 99, 235, 0.35), 0 2px 8px rgba(0,0,0,0.12)'
        }}
      >
        {/* Chat icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Talk To Our Expert
      </button>
    </div>
  )
}

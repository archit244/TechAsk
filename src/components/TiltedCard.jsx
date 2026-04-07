/**
 * TiltedCard — 3D mouse-tracking tilt card.
 *
 * Visual content can be EITHER:
 *   - `children`  →  any JSX rendered inside the card (e.g. MeshGradient)
 *   - `imageSrc`  →  a plain <img> (legacy / react-bits compat)
 *
 * All other props are identical to the react-bits API.
 */
import { useRef, useState } from 'react'

export default function TiltedCard({
  // Visual content — prefer children over imageSrc
  children,
  imageSrc,
  altText               = '',
  captionText           = '',
  containerHeight       = '300px',
  containerWidth        = '300px',
  imageHeight           = '300px',
  imageWidth            = '300px',
  rotateAmplitude       = 12,
  scaleOnHover          = 1.05,
  showMobileWarning     = false,
  showTooltip           = false,
  displayOverlayContent = false,
  overlayContent        = null,
  borderRadius          = '16px',
  className             = '',
}) {
  const cardRef = useRef(null)
  const [rotate,    setRotate]  = useState({ x: 0, y: 0 })
  const [isHovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const rx   = (((e.clientY - rect.top)  / rect.height) - 0.5) * -2 * rotateAmplitude
    const ry   = (((e.clientX - rect.left) / rect.width)  - 0.5) *  2 * rotateAmplitude
    setRotate({ x: rx, y: ry })
  }

  const handleMouseLeave = () => { setHovered(false); setRotate({ x: 0, y: 0 }) }

  return (
    <div style={{ width: containerWidth, height: containerHeight, display: 'flex', flexDirection: 'column' }}>
      {showMobileWarning && (
        <p style={{ fontSize: '0.72rem', color: '#94a3b8', textAlign: 'center', margin: 0, flexShrink: 0 }}>
          Best experienced on desktop.
        </p>
      )}

      {/* Perspective wrapper — fills remaining height */}
      <div
        ref={cardRef}
        className={className}
        style={{ flex: 1, perspective: '900px', cursor: 'pointer', userSelect: 'none' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* 3D tilting surface */}
        <div
          style={{
            width:        '100%',
            height:       '100%',
            position:     'relative',
            borderRadius,
            overflow:     'hidden',
            transform:    `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? scaleOnHover : 1})`,
            transition:   isHovered
              ? 'transform 0.08s linear, box-shadow 0.25s ease'
              : 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.35s ease',
            boxShadow: isHovered
              ? '0 40px 80px rgba(0,0,0,0.28), 0 12px 24px rgba(0,0,0,0.18)'
              : '0 8px 32px rgba(0,0,0,0.14)',
            willChange: 'transform',
          }}
        >
          {/* Card visual — children OR img */}
          {children ? (
            <div style={{ width: '100%', height: '100%' }}>{children}</div>
          ) : (
            <img
              src={imageSrc} alt={altText} draggable={false}
              style={{ width: imageWidth, height: imageHeight, objectFit: 'cover', display: 'block', pointerEvents: 'none' }}
            />
          )}

          {/* Specular glare that follows the tilt */}
          {isHovered && (
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: `radial-gradient(circle at ${50 + rotate.y * 2}% ${50 - rotate.x * 2}%, rgba(255,255,255,0.20) 0%, transparent 65%)`,
              transition: 'background 0.06s linear',
            }} />
          )}

          {/* Custom overlay content — now full-card for total positioning control */}
          {displayOverlayContent && overlayContent && (
            <div style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 10
            }}>
              {overlayContent}
            </div>
          )}
        </div>
      </div>

      {showTooltip && captionText && (
        <p style={{ margin: 0, fontSize: '0.78rem', color: '#64748b', textAlign: 'center', maxWidth: containerWidth }}>
          {captionText}
        </p>
      )}
    </div>
  )
}

import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { coursesData } from '../data/coursesData'

const F = "'Sora', sans-serif"
const BLUE = '#2563EB'
const NAVY = '#0b3b6e'
const GRAD = 'linear-gradient(90deg, #2563EB, #7C3AED)'

const courseImages = {
  'digital-marketing':          '/image1.png',
  'full-stack-web-development': '/image2.png',
  'app-development':            '/image3.png',
  'content-creation':           '/image4.png',
  'graphic-design':             '/image5.png',
}

// Emojis mapping for highlights/key features
const highlightEmojis = {
  'digital-marketing': ['🔍', '🎯', '📅', '📊', '📋', '👤', '💼'],
  'full-stack-web-development': ['💻', '⚛️', '⚙️', '🗄️', '🔒', '🐙', '☁️'],
  'app-development': ['📱', '📐', '🔌', '🔥', '⚡', '🚀', '📤'],
  'content-creation': ['✍️', '🎬', '🎨', '🛠️', '📅', '💼', '🤝'],
  'graphic-design': ['📐', '🎨', '📢', '🏷️', '✒️', '💼', '📦'],
}

function renderHighlightIcon(emoji) {
  const strokeColor = "#2563EB"
  switch (emoji) {
    case '🔍':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    case '🎯':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    case '📅':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    case '📊':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    case '📋':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      )
    case '👤':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    case '💼':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    case '💻':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    case '⚛️':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(30 12 12)"></ellipse>
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(90 12 12)"></ellipse>
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(150 12 12)"></ellipse>
          <circle cx="12" cy="12" r="1"></circle>
        </svg>
      )
    case '⚙️':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    case '🗄️':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      )
    case '🔒':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    case '🐙':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M18 15V9a4 4 0 0 0-4-4H9"></path>
          <line x1="6" y1="9" x2="6" y2="15"></line>
        </svg>
      )
    case '☁️':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      )
    case '📱':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    case '📐':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          <path d="M2 10h20"></path>
        </svg>
      )
    case '🔌':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
          <line x1="12" y1="2" x2="12" y2="12"></line>
        </svg>
      )
    case '🔥':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
        </svg>
      )
    case '⚡':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    case '🚀':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        </svg>
      )
    case '📤':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
      )
    case '✍️':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      )
    case '🎬':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
          <line x1="7" y1="2" x2="7" y2="22"></line>
          <line x1="17" y1="2" x2="17" y2="22"></line>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="2" y1="7" x2="7" y2="7"></line>
          <line x1="2" y1="17" x2="7" y2="17"></line>
          <line x1="17" y1="17" x2="22" y2="17"></line>
          <line x1="17" y1="7" x2="22" y2="7"></line>
        </svg>
      )
    case '🎨':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.35857 19.5 5.5 20 5.5 20.5C5.5 21.3284 6.17157 22 7 22H12Z"></path>
          <circle cx="7.5" cy="10.5" r="1.5"></circle>
          <circle cx="11.5" cy="7.5" r="1.5"></circle>
          <circle cx="16.5" cy="9.5" r="1.5"></circle>
        </svg>
      )
    case '🛠️':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"></path>
        </svg>
      )
    case '🤝':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <polyline points="17 11 19 13 23 9"></polyline>
        </svg>
      )
    case '📢':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    case '🏷️':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          <line x1="7" y1="7" x2="7.01" y2="7"></line>
        </svg>
      )
    case '✒️':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="M12 8v8"></path>
          <path d="M8 12h8"></path>
        </svg>
      )
    case '📦':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="21 8 21 21 3 21 3 8"></polyline>
          <rect x="1" y="3" width="22" height="5"></rect>
          <line x1="10" y1="12" x2="14" y2="12"></line>
        </svg>
      )
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      )
  }
}

export default function CourseDetail() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const course = coursesData[courseId]
  const heroImg = courseImages[courseId] || courseImages['digital-marketing']

  useEffect(() => { if (!course) navigate('/courses') }, [course, navigate])

  const [openModule, setOpenModule] = useState(0)
  const [dotCoords, setDotCoords]   = useState([])
  const [isMobile, setIsMobile]     = useState(false)
  const dotRefs = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    const updateCoords = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)

      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const coords = dotRefs.current.map(el => {
          if (!el) return null
          const rect = el.getBoundingClientRect()
          return {
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2
          }
        }).filter(Boolean)
        setDotCoords(coords)
      }
    }

    // Measure immediately and on observer triggers
    updateCoords()
    
    let observer
    if (containerRef.current && typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        updateCoords()
      })
      observer.observe(containerRef.current)
    }

    const timer = setTimeout(updateCoords, 200)
    window.addEventListener('resize', updateCoords)

    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
      window.removeEventListener('resize', updateCoords)
    }
  }, [courseId])

  if (!course) return null

  /* ─────── shared styles ─────── */
  const sectionTitle = (black, colored) => (
    <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', fontWeight: 700, color: '#111', margin: '0 0 40px', lineHeight: 1.25 }}>
      {black} <span style={{ color: BLUE }}>{colored}</span>
    </h2>
  )

  const emojis = highlightEmojis[courseId] || ['🚀', '🎯', '📈', '💻', '📱', '🎨', '🎬']

  // SVG path — smooth continuous reverse-S shape (UpGrad style)
  let pathD = ''
  if (dotCoords.length > 1) {
    pathD = `M ${dotCoords[0].x} ${dotCoords[0].y}`
    for (let i = 0; i < dotCoords.length - 1; i++) {
      const p1 = dotCoords[i]
      const p2 = dotCoords[i + 1]
      const dy = p2.y - p1.y
      // Keep control point X values identical to their respective dots to enforce vertical tangents at the joints.
      // This completely removes sharp corners, turning the segments into a single flowing vertical reverse-S wave.
      const cp1x = p1.x
      const cp1y = p1.y + dy * 0.5
      const cp2x = p2.x
      const cp2y = p2.y - dy * 0.5
      pathD += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p2.x} ${p2.y}`
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: F, backgroundColor: '#fff' }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          HERO — dark background, title left, info card right
          ══════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: '#2563EB',
        padding: '40px 5% 30px', color: '#fff', minHeight: 300
      }}>
        <div style={{ maxWidth: 1250, display: 'grid', gridTemplateColumns: '1fr 320px', gap: 48, alignItems: 'center' }}>

          {/* LEFT */}
          <div>
            {/* Breadcrumb */}
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', marginBottom: 20, display: 'flex', gap: 6 }}>
              <Link to="/courses" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Courses</Link>
              <span>›</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>{course.title}</span>
            </div>

            {/* upGrad Accreditation badges */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 22, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                padding: '6px 14px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <span style={{
                  fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4,
                  color: '#2563EB'
                }}>
                  🏆 <span style={{
                    background: 'linear-gradient(90deg, #2563EB, #7C3AED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Top 100 (Ranchi Tech Hub)</span>
                </span>
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                padding: '6px 14px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <span style={{
                  fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4,
                  color: '#2563EB'
                }}>
                  ⭐ <span style={{
                    background: 'linear-gradient(90deg, #2563EB, #7C3AED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Assured Internship</span>
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700,
              color: '#ffffff', lineHeight: 1.2, margin: '0 0 20px', letterSpacing: '-0.01em'
            }}>
              {course.headline}
            </h1>

            {/* Description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 28 }}>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>{course.subheadline}</p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>{course.heroHighlight}</p>
            </div>

            {/* Alumni row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex' }}>
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                ].map((src, i) => (
                  <img 
                    key={i}
                    src={src} 
                    alt="Alumni" 
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '2px solid #FFFFFF',
                      marginLeft: i === 0 ? 0 : '-10px',
                      objectFit: 'cover'
                    }}
                  />
                ))}
              </div>
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem' }}>
                Join <strong style={{ color: '#fff' }}>850+ alumni</strong>
              </span>
              <span style={{ color: '#fbbf24', fontSize: '0.9rem', letterSpacing: 1 }}>★★★★★</span>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem' }}>4.9/5 (980+ ratings)</span>
            </div>
          </div>

          {/* RIGHT — Info card compact (upGrad style) */}
          <div style={{
            background: '#fff', borderRadius: 14, padding: '24px 22px',
            boxShadow: '0 16px 48px rgba(0,0,0,0.28)', color: NAVY,
            width: 340, flexShrink: 0, alignSelf: 'center'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 20 }}>
              {[
                { icon: '⏱️', label: 'Duration', value: course.duration },
                { icon: '💰', label: 'Course Fee', value: course.price },
                { icon: '🏷️', label: 'Original Price', value: <span style={{ textDecoration: 'line-through', color: '#94a3b8' }}>{course.originalPrice}</span> },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{
                    width: 30, height: 30, borderRadius: '50%',
                    background: `${BLUE}12`, display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0
                  }}>{row.icon}</span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.62rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{row.label}</span>
                    <span style={{ fontSize: '0.92rem', fontWeight: 700, color: NAVY }}>{row.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => navigate(`/apply?course=${encodeURIComponent(course.title)}`)}
                style={{
                  flex: 1, fontFamily: F, fontSize: '0.8rem', fontWeight: 700,
                  color: '#fff', background: BLUE, border: 'none',
                  borderRadius: 8, padding: '8px 10px', cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: `0 4px 14px ${BLUE}30`,
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 20px ${BLUE}50` }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 14px ${BLUE}30` }}
              >
                Apply Now
              </button>
              <button
                style={{
                  flex: 1, fontFamily: F, fontSize: '0.8rem', fontWeight: 700,
                  color: BLUE, background: 'transparent',
                  border: `1.5px solid ${BLUE}`, borderRadius: 8,
                  padding: '8px 10px', cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#eff6ff'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          KEY HIGHLIGHTS
          ══════════════════════════════════════════════════════ */}
      <section id="sec-highlights" style={{ padding: '64px 5%', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: 1250 }}>
          {sectionTitle(`Key Highlights: ${course.title}`, '')}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {course.whatYouLearn.map((item, idx) => (
              <div key={idx} style={{
                border: '1.5px solid #e2e8f0', borderRadius: 14,
                padding: '28px 20px', textAlign: 'center', background: '#fff',
                transition: 'box-shadow 0.2s, border-color 0.2s, transform 0.2s'
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 28px ${BLUE}18`; e.currentTarget.style.borderColor = `${BLUE}50`; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{
                  width: 54, height: 54, borderRadius: '50%',
                  background: '#eff6ff',
                  border: '1.5px solid #bfdbfe',
                  margin: '0 auto 18px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 10px rgba(37, 99, 235, 0.05)'
                }}>
                  {renderHighlightIcon(emojis[idx % emojis.length])}
                </div>
                <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LEARNING PATH — Upgrad style curved path roadmap
          ══════════════════════════════════════════════════════ */}
      <section id="sec-learning" style={{ padding: '64px 5%', backgroundColor: '#f8fafc', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1250 }}>
          {sectionTitle('Your Learning Path with', 'TechAsk')}

          <div ref={containerRef} style={{ position: 'relative', maxWidth: 860, margin: '0 auto', padding: '10px 0' }}>
            
            {/* Curved dashed line background connecting center dots */}
            {dotCoords.length > 1 && (
              <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
                <path d={pathD} fill="none" stroke={BLUE} strokeWidth="3" strokeDasharray="6,6" opacity="0.6" />
              </svg>
            )}

            {course.syllabus.slice(0, 4).map((item, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div key={idx} style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 260px 1fr',
                  alignItems: 'center',
                  marginBottom: isMobile ? '12px' : '0px',
                  marginTop: !isMobile && idx > 0 ? '-48px' : '0px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {/* Column 1: Left Card */}
                  {!isMobile && isLeft ? (
                    <div style={{
                      background: '#fff', border: `1.5px solid ${BLUE}`,
                      borderRadius: 14, padding: '16px 20px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                      transition: 'box-shadow 0.2s, transform 0.2s',
                      textAlign: 'right'
                    }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 35px ${BLUE}18`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; e.currentTarget.style.transform = 'translateY(0)' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, justifyContent: 'flex-end' }}>
                        <strong style={{ color: NAVY, fontSize: '0.95rem', fontWeight: 700 }}>
                          {item.title}
                        </strong>
                        <span style={{ fontSize: '1.15rem', fontWeight: 800, color: BLUE, lineHeight: 1 }}>
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.84rem', lineHeight: 1.5, margin: 0 }}>
                        {item.topics}
                      </p>
                    </div>
                  ) : <div />}

                  {/* Column 2: Center Dot (Aligned left/right to touch the cards) */}
                  <div style={{ display: 'flex', justifyContent: isLeft ? 'flex-start' : 'flex-end', alignItems: 'center', height: '100%', padding: '0 10px', width: '100%' }}>
                    <div
                      ref={el => dotRefs.current[idx] = el}
                      style={{
                        width: 20, height: 20, borderRadius: '50%',
                        background: '#fff',
                        border: `3px solid ${BLUE}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 2,
                        boxShadow: `0 0 0 4px ${BLUE}15`
                      }}
                    >
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: BLUE }} />
                    </div>
                  </div>

                  {/* Column 3: Right Card (or full width on mobile) */}
                  {isMobile || !isLeft ? (
                    <div style={{
                      background: '#fff', border: `1.5px solid ${BLUE}`,
                      borderRadius: 14, padding: '16px 20px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                      transition: 'box-shadow 0.2s, transform 0.2s',
                      marginTop: isMobile ? 12 : 0
                    }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 35px ${BLUE}18`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; e.currentTarget.style.transform = 'translateY(0)' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <span style={{ fontSize: '1.15rem', fontWeight: 800, color: BLUE, lineHeight: 1 }}>
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <strong style={{ color: NAVY, fontSize: '0.95rem', fontWeight: 700 }}>
                          {item.title}
                        </strong>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.84rem', lineHeight: 1.5, margin: 0 }}>
                        {item.topics}
                      </p>
                    </div>
                  ) : <div />}
                </div>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <button
              style={{
                fontFamily: F, fontSize: '0.9rem', fontWeight: 700,
                color: '#fff', background: BLUE, border: 'none',
                borderRadius: 10, padding: '14px 32px', cursor: 'pointer',
                boxShadow: `0 6px 18px ${BLUE}30`,
                transition: 'transform 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CURRICULUM — upGrad accordion style
          ══════════════════════════════════════════════════════ */}
      <section id="sec-curriculum" style={{ padding: '64px 5%', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: 1250 }}>
          {sectionTitle(`${course.title}`, 'Curriculum')}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {course.syllabus.map((item, idx) => {
              const isOpen = openModule === idx
              return (
                <div key={idx} style={{
                  border: '1.5px solid #e2e8f0', borderRadius: 14,
                  overflow: 'hidden', background: '#fff',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  ...(isOpen ? { borderColor: `${BLUE}60`, boxShadow: `0 4px 20px ${BLUE}12` } : {})
                }}>
                  <button
                    onClick={() => setOpenModule(isOpen ? null : idx)}
                    style={{
                      width: '100%', padding: '22px 24px', fontFamily: F,
                      display: 'flex', alignItems: 'center', gap: 20,
                      backgroundColor: 'transparent', border: 'none',
                      cursor: 'pointer', textAlign: 'left'
                    }}
                  >
                    {/* Left dot */}
                    <div style={{
                      width: 12, height: 12, borderRadius: '50%',
                      background: isOpen ? BLUE : '#cbd5e1',
                      flexShrink: 0, transition: 'background 0.2s'
                    }} />

                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.02rem', fontWeight: 700, color: NAVY, marginBottom: 4 }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 500 }}>
                        {item.module}
                      </div>
                    </div>

                    <span style={{
                      width: 30, height: 30, borderRadius: '50%',
                      border: `1.5px solid ${isOpen ? BLUE : '#e2e8f0'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isOpen ? BLUE : '#94a3b8', fontSize: '1.1rem',
                      flexShrink: 0, transition: 'all 0.2s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
                    }}>
                      ›
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{
                      borderTop: '1.5px solid #f1f5f9',
                      padding: '24px 24px 24px 56px'
                    }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                        <div>
                          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: NAVY, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Key Topics</h4>
                          <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
                            {item.topics.split(',').map((topic, ti) => (
                              <li key={ti} style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                <span style={{ color: BLUE, fontWeight: 'bold' }}>✓</span>
                                <span>{topic.trim()}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: NAVY, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Industry Relevance</h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {item.topics.split(',').slice(0, 3).map((tag, ti) => (
                              <span key={ti} style={{
                                padding: '6px 12px', borderRadius: 20, fontSize: '0.78rem',
                                fontWeight: 600, background: '#f8fafc', color: BLUE,
                                border: '1.5px solid #e2e8f0'
                              }}>
                                {tag.trim().split(' ').slice(0, 3).join(' ')}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

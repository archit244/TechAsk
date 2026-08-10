import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { coursesData } from '../data/coursesData'

export default function Courses() {
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const courseList = Object.values(coursesData)

  // Map courses to the same images used in services
  const images = ['/image1.png', '/image2.png', '/image3.png', '/image4.png', '/image5.png']

  return (
    <div className="reveal-wrapper">
      <main className="main-content">
        <Navbar theme="white" />

        <section style={{ fontFamily: "'Sora', sans-serif" }}>

          {/* ── Section Header — identical to Services heading block ── */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: isMobile ? '80px 6% 30px' : '130px 5% 60px',
            textAlign: 'center'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h1 style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 600,
                lineHeight: 1.2,
                margin: 0,
                letterSpacing: '-0.03em',
                color: '#000000',
              }}>
                Everything You Need to<br />
                <span style={{
                  background: 'linear-gradient(90deg, #2563EB, #7C3AED, #2563EB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Launch Your Career
                </span>
              </h1>
            </div>
          </div>

          {/* ── Course rows — identical layout to Services rows ── */}
          {courseList.map((course, idx) => {
            const isEven = idx % 2 === 0
            const imgOrder = isEven ? 0 : 1
            const textOrder = isEven ? 1 : 0

            return (
              <div
                key={course.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: isMobile ? '40px 6%' : '80px 8%',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <div style={{
                  maxWidth: '1050px',
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: isMobile ? '30px' : '80px',
                  alignItems: 'center'
                }}>

                  {/* Image Side */}
                  <div style={{
                    order: isMobile ? 0 : imgOrder,
                    width: '100%',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                  }}>
                    <img
                      src={images[idx % images.length]}
                      alt={course.title}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>

                  {/* Text Side */}
                  <div style={{
                    order: isMobile ? 1 : textOrder,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}>
                    <h3
                      className="text-[1.8rem] md:text-[2rem] font-bold tracking-tight mb-0"
                      style={{ color: '#000000', lineHeight: 1.1 }}
                    >
                      {course.title}
                    </h3>

                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                      color: '#444444',
                      margin: 0,
                      maxWidth: '480px',
                      fontWeight: 400
                    }}>
                      {course.subheadline}
                    </p>

                    {/* Stats row */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '16px 32px',
                      fontSize: '0.85rem',
                      color: '#666666',
                      fontWeight: 500
                    }}>
                      <span>⏱ {course.duration}</span>
                      <span>📚 {course.lectures}</span>
                      <span>👥 {course.studentsCount} Students</span>
                      <span style={{ color: '#2563EB', fontWeight: 700 }}>{course.price}</span>
                    </div>

                    <button
                      onClick={() => navigate(`/courses/${course.id}`)}
                      className="btn-gradient-hover"
                      style={{
                        alignSelf: 'flex-start',
                        backgroundColor: '#2563EB',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '10px 22px',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '10px',
                        transition: 'transform 0.2s ease, background-color 0.2s ease'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                    >
                      View Course Details →
                    </button>
                  </div>

                </div>
              </div>
            )
          })}

        </section>
      </main>

      <div className="sticky-footer">
        <Footer />
      </div>
    </div>
  )
}

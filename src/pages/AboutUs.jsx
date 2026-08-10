import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiTrendingUp, FiTarget, FiShield, FiCheckCircle } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CaseStudies from '../components/CaseStudies'

const F = "'Sora', sans-serif"
const BLUE = '#2563EB'
const NAVY = '#0b3b6e'

export default function AboutUs() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    window.scrollTo(0, 0)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div className="reveal-wrapper" style={{ fontFamily: F, backgroundColor: '#FFFFFF', color: '#1E293B' }}>
      <main className="main-content">
        <Navbar theme="white" />

        {/* ── HERO SECTION ── */}
        <section style={{
          backgroundColor: '#FFFFFF',
          padding: isMobile ? '80px 6% 40px' : '130px 5% 80px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              margin: '0 0 20px 0',
              letterSpacing: '-0.03em',
              color: '#0F172A',
            }}>
              We Are TechAsk.<br />
              <span style={{
                background: 'linear-gradient(90deg, #2563EB, #7C3AED, #2563EB)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                We Engineer Digital Growth.
              </span>
            </h1>
            <p style={{
              fontSize: isMobile ? '1.1rem' : '1.25rem',
              lineHeight: 1.6,
              color: '#475569',
              maxWidth: '700px',
              margin: '0 auto',
              fontWeight: 400
            }}>
              A performance marketing and modern engineering collective building high-ROI growth loops for regional and international brands.
            </p>
          </div>
        </section>

        {/* ── OUR MISSION & STATS ── */}
        <section style={{
          backgroundColor: '#FFFFFF',
          padding: isMobile ? '40px 6%' : '80px 5%',
          borderTop: '1px solid #F1F5F9'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
            gap: isMobile ? '40px' : '80px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: '#EFF6FF',
                color: BLUE,
                padding: '6px 14px',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: 16
              }}>
                <FiTarget size={14} /> Our Core Mission
              </div>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 700,
                color: '#0F172A',
                lineHeight: 1.2,
                margin: '0 0 20px 0',
                letterSpacing: '-0.02em'
              }}>
                Transforming Ambition into Attributable Revenue
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#475569', margin: '0 0 20px 0' }}>
                TechAsk was founded to bridge the critical gap between design aesthetics and performance engineering. We believe marketing shouldn't reside in a silo separate from technical logic, clean routes, and direct client CRM integrations.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                Whether launching high-ROI lead generation funnels, designing interactive full-stack modules, or mentoring Ranchi’s next-generation digital executives, we run our systems transparently on real metrics that drive bottom-line enterprise value.
              </p>
            </div>

            {/* Stats Block */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              {[
                { number: '1000+', label: 'Students Trained' },
                { number: '2.5x', label: 'Average Pipeline ROI' },
                { number: '60+', label: 'Leads per Campaign' },
                { number: '100%', label: 'Extreme Transparency' }
              ].map((stat, i) => (
                <div key={i} style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '20px',
                  padding: '24px',
                  textAlign: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
                }}>
                  <div style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
                    fontWeight: 800,
                    color: BLUE,
                    marginBottom: 8,
                    fontFamily: F
                  }}>{stat.number}</div>
                  <div style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#64748B',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase'
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE PILLARS / VALUES ── */}
        <section style={{
          backgroundColor: '#F8FAFC',
          padding: isMobile ? '60px 6%' : '100px 5%',
          borderTop: '1px solid #F1F5F9',
          borderBottom: '1px solid #F1F5F9'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: '#F0FDF4',
                color: '#16A34A',
                padding: '6px 14px',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: 16
              }}>
                <FiShield size={14} /> Core Philosophy
              </div>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 700,
                color: '#0F172A',
                margin: 0,
                letterSpacing: '-0.02em'
              }}>
                How We Stand Apart
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: '30px'
            }}>
              {[
                {
                  icon: <FiTrendingUp size={24} color={BLUE} />,
                  title: 'Zero Vanity Metrics',
                  desc: 'We optimize for your actual pipeline velocity and closed won deals. No screenshots of irrelevant clicks or impression spikes.'
                },
                {
                  icon: <FiTarget size={24} color={BLUE} />,
                  title: 'Extreme Technical Execution',
                  desc: 'Clean codebases, search-engine indexable components, fast loading assets, and secure backend schema endpoints power our UI loops.'
                },
                {
                  icon: <FiCheckCircle size={24} color={BLUE} />,
                  title: 'Absolute Transparency',
                  desc: 'All conversion nodes are tracked directly into client databases. No third-party reporting delays or manual spreadsheet modifications.'
                }
              ].map((value, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '24px',
                    padding: '32px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)'
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.08)'
                    e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.3)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'
                    e.currentTarget.style.borderColor = '#E2E8F0'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#EFF6FF',
                    borderRadius: '16px',
                    marginBottom: 24
                  }}>
                    {value.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: 12,
                    lineHeight: 1.3
                  }}>{value.title}</h3>
                  <p style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    color: '#64748B',
                    margin: 0
                  }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <CaseStudies />

        {/* ── OUR STORY / TIMELINE ── */}
        <section style={{
          backgroundColor: '#FFFFFF',
          padding: isMobile ? '60px 6%' : '100px 5%'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              color: '#0F172A',
              textAlign: 'center',
              marginBottom: 48,
              letterSpacing: '-0.02em'
            }}>
              Our Milestones
            </h2>

            <div style={{
              position: 'relative',
              paddingLeft: '32px',
              borderLeft: `2.5px dotted ${BLUE}`
            }}>
              {[
                {
                  year: '2024',
                  title: 'Founded as a Performance Catalyst',
                  desc: 'TechAsk was established as a high-velocity growth agency in Ranchi to scale regional and domestic startups through pure data-driven systems.'
                },
                {
                  year: '2025',
                  title: 'Training & Dual Internship Launch',
                  desc: 'Expanded our operations to provide elite digital marketing courses in Ranchi, assuring Dual Certification and local agency internships for our graduates.'
                },
                {
                  year: '2026',
                  title: 'Technology Integration Focus',
                  desc: 'Completed full migration to headless CMS platforms, interactive React SPAs, and serverless Supabase architectures to guarantee high conversion speeds.'
                }
              ].map((milestone, idx) => (
                <div key={idx} style={{
                  position: 'relative',
                  marginBottom: idx === 2 ? 0 : '40px'
                }}>
                  {/* Dotted indicator dot */}
                  <div style={{
                    position: 'absolute',
                    left: '-42px',
                    top: '4px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: `3px solid ${BLUE}`,
                    boxShadow: '0 0 0 4px rgba(37,99,235,0.15)'
                  }} />

                  <span style={{
                    fontFamily: F,
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: BLUE,
                    backgroundColor: '#EFF6FF',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    display: 'inline-block',
                    marginBottom: 10
                  }}>{milestone.year}</span>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    margin: '0 0 8px 0',
                    lineHeight: 1.3
                  }}>{milestone.title}</h3>
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#64748B',
                    margin: 0
                  }}>{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

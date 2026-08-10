import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowRight, FiPlus, FiMinus, FiChevronRight } from 'react-icons/fi';
import Navbar from './Navbar';
import Footer from './Footer';
import { renderFormattedText } from '../lib/renderFormattedText';

/* ── Arrow from FAQ section ── */
function DownArrow({ color = 'currentColor', isOpen = false }) {
  return (
    <span style={{ 
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: 24, 
      lineHeight: 1,
      color: color,
      paddingBottom: 2
    }}>
      ›
    </span>
  );
}

const ROW_H = 100;

export default function ServicePageLayout({
  title,
  heroSubtitle,
  heroVisual,
  shiftHeading,
  shiftTabs,
  philosophyText,
  whatIsHeading,
  whatIsDescription,
  whatIsBenefits,
  methodologyHeading,
  methodologySubtext,
  methodologyPillars,
  frameworkHeading,
  frameworkSubtext,
  frameworkSteps,
  outcomesHeading,
  outcomes,
  faqs
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [activeShiftTab, setActiveShiftTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [hoveredFaq, setHoveredFaq] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleCTA = () => {
    navigate('/#contact');
    setTimeout(() => {
      const el = document.getElementById('contact-name');
      if (el) el.focus();
    }, 500);
  };

  return (
    <div style={{ fontFamily: "'Sora', sans-serif", backgroundColor: '#FFFFFF', color: '#1E293B' }}>
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section style={{ 
        background: 'linear-gradient(180deg, #2563EB 0%, #1D4ED8 100%)', 
        padding: isMobile ? '40px 6% 80px' : '60px 5% 100px',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Grid Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            fontSize: '0.875rem', 
            opacity: 0.8,
            marginBottom: '32px',
            fontFamily: "'Inter', sans-serif"
          }}>
            <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home</Link>
            <FiChevronRight size={14} />
            <span style={{ fontWeight: 500 }}>{title}</span>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', 
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Hero Text */}
            <div>
              <h1 style={{ 
                fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', 
                fontWeight: 800, 
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
                color: '#FFFFFF'
              }}>
                {title}
              </h1>
              <p style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', 
                lineHeight: 1.6, 
                color: '#FFFFFF',
                opacity: 0.9,
                marginBottom: '40px',
                fontFamily: "'Inter', sans-serif",
                maxWidth: '640px',
                fontWeight: 300
              }}>
                {heroSubtitle}
              </p>
              <button 
                onClick={handleCTA}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#2563EB',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '16px 36px',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                }}
              >
                Talk to our Expert <FiArrowRight />
              </button>
            </div>

            {/* Hero Visual Mockup */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              {heroVisual}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE SHIFT SECTION (Comparison tabs) ── */}
      <section style={{ padding: '100px 6%', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ 
              fontSize: '0.875rem', 
              fontWeight: 700, 
              color: '#2563EB', 
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              The Paradigm Shift
            </span>
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', 
              fontWeight: 700, 
              color: '#0F172A',
              marginTop: '12px',
              letterSpacing: '-0.02em'
            }}>
              {renderFormattedText(shiftHeading)}
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '0.8fr 1.2fr', 
            gap: '50px',
            alignItems: 'start'
          }}>
            {/* Tabs List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {shiftTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveShiftTab(idx)}
                  style={{
                    textAlign: 'left',
                    padding: '24px',
                    borderRadius: '16px',
                    border: '1px solid',
                    borderColor: activeShiftTab === idx ? '#2563EB' : '#E2E8F0',
                    backgroundColor: activeShiftTab === idx ? '#FFFFFF' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: activeShiftTab === idx ? '0 10px 25px rgba(37,99,235,0.06)' : 'none'
                  }}
                >
                  <h3 style={{ 
                    fontSize: '1.15rem', 
                    fontWeight: 600, 
                    color: activeShiftTab === idx ? '#2563EB' : '#475569',
                    margin: 0,
                    lineHeight: 1.3
                  }}>
                    {tab.label}
                  </h3>
                </button>
              ))}
            </div>

            {/* Active Tab Panel */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              padding: isMobile ? '32px 24px' : '48px', 
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
                {/* The Old Way */}
                <div style={{ 
                  borderRight: isMobile ? 'none' : '1px solid #F1F5F9',
                  paddingRight: isMobile ? 0 : '32px',
                  borderBottom: isMobile ? '1px solid #F1F5F9' : 'none',
                  paddingBottom: isMobile ? '32px' : 0
                }}>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 800, 
                    color: '#94A3B8', 
                    letterSpacing: '0.05em', 
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                  }}>
                    Traditional Way
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#475569', marginBottom: '12px' }}>
                    {shiftTabs[activeShiftTab].oldTitle}
                  </h4>
                  <p style={{ fontSize: '0.975rem', lineHeight: 1.6, color: '#64748B', fontFamily: "'Inter', sans-serif", margin: 0 }}>
                    {shiftTabs[activeShiftTab].oldDesc}
                  </p>
                </div>

                {/* The TechAsk Way */}
                <div>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 800, 
                    color: '#2563EB', 
                    letterSpacing: '0.05em', 
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                  }}>
                    The TechAsk Way
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2563EB', marginBottom: '12px' }}>
                    {shiftTabs[activeShiftTab].newTitle}
                  </h4>
                  <p style={{ fontSize: '0.975rem', lineHeight: 1.6, color: '#334155', fontFamily: "'Inter', sans-serif", margin: 0 }}>
                    {shiftTabs[activeShiftTab].newDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT BANNER ── */}
      <section style={{ 
        backgroundColor: '#2563EB', 
        padding: '80px 6%', 
        color: '#FFFFFF', 
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', 
            fontWeight: 500, 
            lineHeight: 1.45, 
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '-0.01em'
          }}>
            "{philosophyText}"
          </h2>
        </div>
      </section>

      {/* ── WHAT IS IT SECTION ── */}
      <section style={{ padding: '100px 6%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', 
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Left Content */}
            <div>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', 
                fontWeight: 700, 
                color: '#0F172A',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
                lineHeight: 1.15
              }}>
                {renderFormattedText(whatIsHeading)}
              </h2>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.7, 
                color: '#475569', 
                fontFamily: "'Inter', sans-serif",
                marginBottom: '40px',
                fontWeight: 400
              }}>
                {whatIsDescription}
              </p>

              {/* Benefits list */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                {whatIsBenefits.map((benefit, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ 
                      backgroundColor: '#EFF6FF', 
                      color: '#2563EB', 
                      borderRadius: '50%', 
                      width: '32px', 
                      height: '32px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontWeight: 'bold',
                      fontSize: '0.875rem'
                    }}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px', marginTop: '4px' }}>
                        {benefit.title}
                      </h4>
                      <p style={{ fontSize: '0.925rem', lineHeight: 1.5, color: '#64748B', fontFamily: "'Inter', sans-serif", margin: 0 }}>
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Stats/Outcomes panel */}
            <div style={{ 
              backgroundColor: '#0F172A', 
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: isMobile ? '40px 32px' : '60px 48px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
              position: 'relative',
              overflow: 'hidden',
              width: '100%'
            }}>
              {/* Subtle mesh background */}
              <div style={{
                position: 'absolute',
                top: 0, right: 0, width: '200px', height: '200px',
                background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />

              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '40px', color: '#FFFFFF' }}>
                Expected Outcomes
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                {outcomes.map((item, idx) => (
                  <div key={idx}>
                    <div style={{ 
                      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                      fontWeight: 800, 
                      color: '#2563EB',
                      lineHeight: 1
                    }}>
                      {item.value}
                    </div>
                    <div style={{ 
                      fontSize: '1rem', 
                      fontWeight: 600, 
                      color: '#F8FAFC',
                      marginTop: '8px',
                      marginBottom: '4px'
                    }}>
                      {item.title}
                    </div>
                    <div style={{ 
                      fontSize: '0.875rem', 
                      color: '#94A3B8',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY / PILLARS ── */}
      <section style={{ padding: '100px 6%', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ 
              fontSize: '0.875rem', 
              fontWeight: 700, 
              color: '#2563EB', 
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Our Blueprint
            </span>
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', 
              fontWeight: 700, 
              color: '#0F172A',
              marginTop: '12px',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              {renderFormattedText(methodologyHeading)}
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#64748B', 
              fontFamily: "'Inter', sans-serif",
              maxWidth: '640px',
              margin: '0 auto'
            }}>
              {methodologySubtext}
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '24px' 
          }}>
            {methodologyPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '36px 30px',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#2563EB';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(37,99,235,0.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.02)';
                }}
              >
                <div style={{ 
                  color: '#2563EB', 
                  fontSize: '2rem', 
                  marginBottom: '20px',
                  display: 'flex'
                }}>
                  {pillar.icon}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                  {pillar.title}
                </h4>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569', fontFamily: "'Inter', sans-serif", margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK TIMELINE ── */}
      <section style={{ padding: '100px 6%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ 
              fontSize: '0.875rem', 
              fontWeight: 700, 
              color: '#2563EB', 
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Operational Loop
            </span>
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', 
              fontWeight: 700, 
              color: '#0F172A',
              marginTop: '12px',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              {renderFormattedText(frameworkHeading)}
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#64748B', 
              fontFamily: "'Inter', sans-serif",
              maxWidth: '640px',
              margin: '0 auto'
            }}>
              {frameworkSubtext}
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)', 
            gap: isMobile ? '40px' : '20px',
            position: 'relative'
          }}>
            {/* Horizontal Line on Desktop */}
            {!isMobile && (
              <div style={{
                position: 'absolute',
                top: '28px',
                left: '10%',
                right: '10%',
                height: '2px',
                backgroundColor: '#E2E8F0',
                zIndex: 1
              }} />
            )}

            {frameworkSteps.map((step, idx) => (
              <div key={idx} style={{ 
                textAlign: isMobile ? 'left' : 'center', 
                position: 'relative', 
                zIndex: 2,
                display: isMobile ? 'flex' : 'block',
                gap: isMobile ? '20px' : '0'
              }}>
                {/* Dot */}
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  backgroundColor: '#FFFFFF', 
                  border: '3px solid #2563EB', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: isMobile ? '0' : '0 auto 24px',
                  fontWeight: 700,
                  color: '#2563EB',
                  boxShadow: '0 5px 15px rgba(37,99,235,0.1)',
                  flexShrink: 0
                }}>
                  {idx + 1}
                </div>

                <div>
                  <h4 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 700, 
                    color: '#0F172A', 
                    marginBottom: '8px', 
                    marginTop: isMobile ? '4px' : '0' 
                  }}>
                    {step.title}
                  </h4>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    lineHeight: 1.5, 
                    color: '#64748B', 
                    fontFamily: "'Inter', sans-serif", 
                    maxWidth: isMobile ? '100%' : '180px',
                    margin: isMobile ? '0' : '0 auto'
                  }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section
        id="faq"
        style={{
          background: '#fff',
          padding: '96px 0 112px',
          fontFamily: "'Sora', sans-serif",
        }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 5%' }}>

          {/* ── Heading ── */}
          <div style={{ marginBottom: 56 }}>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              color: '#000',
              letterSpacing: '-0.02em',
              margin: '0 0 4px',
              fontFamily: "'Sora', sans-serif",
            }}>
              {renderFormattedText("Frequently Asked [Questions].")}
            </h2>
            <p style={{
              fontSize: 'clamp(0.85rem, 1.2vw, 0.98rem)',
              color: '#555',
              marginTop: 14,
              fontWeight: 400,
              fontFamily: "'Sora', sans-serif",
              lineHeight: 1.7,
            }}>
              Everything you need to know about working with Techask.
            </p>
          </div>

          {/* ── Row list ── */}
          <div>
            {faqs.map((f, i) => {
              const isOpen   = openFaq === i
              const isHover  = !isMobile && hoveredFaq === i
              const question = f.question
              const answer   = f.answer

              return (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    borderBottom: 'none',
                  }}
                  onMouseEnter={() => !isMobile && setHoveredFaq(i)}
                  onMouseLeave={() => !isMobile && setHoveredFaq(null)}
                >
                  {/* Static light separator (always visible) */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      height: '1px',
                      background: 'rgba(0,0,0,0.06)',
                      zIndex: 0,
                      pointerEvents: 'none',
                    }}
                  />
                  {/* Animated blue sweep line */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      height: '1.5px',
                      background: '#2563EB',
                      transformOrigin: 'left center',
                      transform: isHover && !isOpen ? 'scaleX(1)' : 'scaleX(0)',
                      transition: isHover && !isOpen
                        ? 'transform 0.48s cubic-bezier(0.76,0,0.24,1)'
                        : 'transform 0.38s cubic-bezier(0.76,0,0.24,1)',
                      zIndex: 1,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* ── Trigger row — fixed height ── */}
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      height: ROW_H,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 20,
                      padding: '0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{
                      fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)',
                      fontWeight: 500,
                      color: '#111',
                      fontFamily: "'Sora', sans-serif",
                      lineHeight: 1.35,
                      flex: 'none',
                      maxWidth: '85%',
                      letterSpacing: '-0.02em',
                      transform: isHover && !isOpen ? 'translateX(18px)' : 'translateX(0)',
                      transition: 'transform 0.42s cubic-bezier(0.76,0,0.24,1)',
                      willChange: 'transform',
                    }}>
                      {question}
                    </span>

                    <span style={{
                      flexShrink: 0,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: `1px solid ${isOpen ? '#2563EB' : isHover ? '#2563EB' : 'rgba(0,0,0,0.22)'}`,
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'border-color 0.28s ease',
                    }}>
                      {/* Layer 1 — default arrow, always visible */}
                      <span style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                      }}>
                        <DownArrow color={isOpen ? "#2563EB" : "#333"} isOpen={isOpen} />
                      </span>

                      {/* Layer 2 — hover blue circle, slides in from bottom-left ONLY when closed */}
                      <span style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#2563EB',
                        transform: isHover && !isOpen
                          ? 'translate(0%, 0%)'
                          : 'translate(-110%, 110%)',
                        transition: 'transform 0.42s cubic-bezier(0.76,0,0.24,1)',
                        willChange: 'transform',
                      }}>
                        <DownArrow color="#fff" isOpen={isOpen} />
                      </span>
                    </span>
                  </button>

                  {/* ── Expandable answer ── */}
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    overflow: 'hidden',
                    maxHeight: isOpen ? 360 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.42s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
                  }}>
                    <p style={{
                      fontSize: 'clamp(0.83rem, 1.1vw, 0.93rem)',
                      lineHeight: 1.8,
                      color: '#555',
                      fontFamily: "'Sora', sans-serif",
                      padding: '0 0 24px',
                      maxWidth: 720,
                      margin: 0,
                      fontWeight: 400,
                    }}>
                      {answer}
                    </p>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

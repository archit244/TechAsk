import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GradientText from './GradientText';
import { useScrollReveal } from '../hooks/useScrollReveal';

const F_SORA = "'Sora', sans-serif";
const F_INTER = "'Inter', sans-serif";

const CASE_STUDIES = [
  {
    brand: "Essa x TechAsk",
    description: "ESSA is a leading Indian apparel brand specializing in clothing for men, women, boys, and girls, with a focus on comfortable and high-quality innerwear and outerwear collections for all ages.",
    tag: "Paid Media",
    impactTitle: "Paid Media That Drive Category-Led Growth",
    metrics: [
      { value: "117%", label: "Revenue growth from July to August 2025" },
      { value: "4.49x", label: "Overall ROAS across Google and Meta campaigns" }
    ],
    highlight: "Achieved sustainable sales growth and category dominance, supported by a scalable blueprint for future expansion and profitability.",
    mockupBg: "linear-gradient(135deg, #1e1b4b 0%, #311042 100%)",
    mockupLogo: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '0.15em', color: '#FFFFFF', fontFamily: F_SORA }}>ESSA</span>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: '#cbd5e1', marginTop: 4 }}>GARMENTS</span>
      </div>
    ),
    mockupTag: "APPAREL BRAND",
    mockupAccent: "#38bdf8",
    mockupGraphic: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '12px' }}>
        <div style={{ height: '70px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}></div>
        <div style={{ height: '70px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}></div>
        <div style={{ height: '70px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}></div>
        <div style={{ height: '70px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}></div>
      </div>
    )
  },
  {
    brand: "Zenith x TechAsk",
    description: "Zenith is a premium global direct-to-consumer e-commerce brand offering high-performance accessories, outdoor gear, and apparel to outdoor enthusiasts worldwide.",
    tag: "SEO Optimization",
    impactTitle: "SEO Blueprint That Scale Organic Conversions",
    metrics: [
      { value: "340%", label: "Increase in organic search impressions" },
      { value: "3.2x", label: "Growth in non-brand organic search revenue" }
    ],
    highlight: "Dominated high-intent search terms through a secure, fast-loading headless Shopify build and structured search intent mapping.",
    mockupBg: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
    mockupLogo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: '1.8rem', fontWeight: 900, color: '#38bdf8', fontFamily: F_SORA }}>Z</span>
        <span style={{ fontSize: '1.4rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.05em' }}>ZENITH</span>
      </div>
    ),
    mockupTag: "E-COMMERCE",
    mockupAccent: "#38bdf8",
    mockupGraphic: (
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ height: '12px', width: '60%', background: 'rgba(255,255,255,0.15)', borderRadius: '6px' }} />
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '80px', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ height: '30%', width: '16px', background: '#38bdf8', borderRadius: '4px 4px 0 0' }}></div>
          <div style={{ height: '50%', width: '16px', background: '#38bdf8', borderRadius: '4px 4px 0 0' }}></div>
          <div style={{ height: '40%', width: '16px', background: '#38bdf8', borderRadius: '4px 4px 0 0' }}></div>
          <div style={{ height: '75%', width: '16px', background: '#38bdf8', borderRadius: '4px 4px 0 0' }}></div>
          <div style={{ height: '95%', width: '16px', background: 'linear-gradient(180deg, #2563EB, #0ea5e9)', borderRadius: '4px 4px 0 0' }}></div>
        </div>
      </div>
    )
  },
  {
    brand: "Apex Academy x TechAsk",
    description: "Apex Academy is an online training portal empowering students and professionals in emerging technological markets with industry-recognized technical skills.",
    tag: "Lead Funnel & CRM",
    impactTitle: "Lead Gen Funnel & Automated CRM Workflows",
    metrics: [
      { value: "65%", label: "Reduction in acquisition cost-per-lead (CPL)" },
      { value: "12k+", label: "Qualified leads generated and synced in 90 days" }
    ],
    highlight: "Optimized direct response campaigns integrated directly with automatic HubSpot CRM sync to track pipeline velocity in real-time.",
    mockupBg: "linear-gradient(135deg, #111827 0%, #1e1b4b 100%)",
    mockupLogo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ width: '20px', height: '20px', background: '#7C3AED', transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '8px', height: '8px', background: '#FFFFFF' }} />
        </div>
        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.05em' }}>APEX</span>
      </div>
    ),
    mockupTag: "ONLINE ACADEMY",
    mockupAccent: "#7C3AED",
    mockupGraphic: (
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.06)', padding: '8px 12px', borderRadius: '12px' }}>
          <span style={{ fontSize: '0.65rem', color: '#cbd5e1' }}>Leads Today</span>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#7C3AED' }}>+142</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.06)', padding: '8px 12px', borderRadius: '12px' }}>
          <span style={{ fontSize: '0.65rem', color: '#cbd5e1' }}>Conversion</span>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#10B981' }}>8.4%</span>
        </div>
      </div>
    )
  }
];

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);
  const autoplayRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay Setup
  useEffect(() => {
    if (hovered) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    } else {
      autoplayRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % CASE_STUDIES.length);
      }, 6000);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [hovered]);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  const handleCTA = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        const el = document.getElementById('contact-name');
        if (el) el.focus();
      }, 1000);
    } else {
      navigate('/contact-us');
    }
  };

  const active = CASE_STUDIES[current];
  const [titleRef, titleVisible] = useScrollReveal(0.2);

  return (
    <section 
      style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #2563EB 50%, #1d4ed8 100%)',
        padding: isMobile ? '60px 6%' : '80px 5%',
        color: '#FFFFFF',
        fontFamily: F_INTER,
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Subtle Elements */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Title */}
        <h2
          ref={titleRef}
          className={`reveal${titleVisible ? ' visible' : ''}`}
          style={{
            fontFamily: F_SORA,
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700,
            textAlign: 'center',
            color: '#FFFFFF',
            margin: '0 0 64px 0',
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}
        >
          Brands That Grew with TechAsk
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '0.8fr 1.2fr',
          gap: isMobile ? '30px' : '60px',
          alignItems: isMobile ? 'center' : 'start'
        }}>
          
          {/* Left Column: Mockup */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Phone Shadow Effect */}
            <div style={{
              position: 'absolute',
              width: '200px',
              height: '380px',
              borderRadius: '40px',
              background: 'rgba(255,255,255,0.1)',
              filter: 'blur(25px)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />
            
            {/* Phone Container */}
            <div style={{ zIndex: 1, animation: 'float 4s ease-in-out infinite' }}>
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-6px); }
                }
                @keyframes slideInUp {
                  from { opacity: 0; transform: translateY(15px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `}</style>
              <div style={{
                position: 'relative',
                width: '230px',
                height: '410px',
                background: '#090d16',
                borderRadius: '32px',
                border: '8px solid #1E293B',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.4)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Speaker Notch */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '90px',
                  height: '14px',
                  background: '#1E293B',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                  zIndex: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <div style={{ width: '30px', height: '2px', background: '#0f172a', borderRadius: '1px' }} />
                </div>

                {/* Inner Screen */}
                <div key={current} className="cs-slide-in" style={{
                  flex: 1,
                  background: active.mockupBg,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '30px 14px 14px',
                  position: 'relative',
                  transition: 'background 0.5s ease'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)',
                    backgroundSize: '16px 16px',
                    opacity: 0.8,
                    pointerEvents: 'none'
                  }} />

                  <div style={{
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: active.mockupAccent,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '3px 8px',
                    borderRadius: '99px',
                    zIndex: 2
                  }}>
                    {active.mockupTag}
                  </div>

                  <div style={{ zIndex: 2, margin: '10px 0', key: current }} className="animate-fade">
                    <div style={{ transform: 'scale(0.85)', transformOrigin: 'center' }}>
                      {active.mockupLogo}
                    </div>
                  </div>

                  <div style={{ 
                    width: '100%', 
                    background: 'rgba(255,255,255,0.03)', 
                    borderRadius: '16px', 
                    border: '1px solid rgba(255,255,255,0.05)', 
                    flex: 1, 
                    overflow: 'hidden', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    zIndex: 2,
                    transform: 'scale(0.9)',
                    transformOrigin: 'center'
                  }}>
                    {active.mockupGraphic}
                  </div>

                  <div style={{ width: '60px', height: '3px', background: 'rgba(255,255,255,0.3)', borderRadius: '1.5px', marginTop: '10px', zIndex: 2 }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Case Study Details */}
          <div key={current} className="cs-slide-in" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            {/* Title / Name */}
            <div>
              <h3 style={{
                fontFamily: F_SORA,
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 600,
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.2
              }}>
                {active.brand}
              </h3>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.5,
              color: '#cbd5e1',
              margin: 0,
              fontWeight: 400
            }}>
              {active.description}
            </p>

             {/* Business Impact Card */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: isMobile ? '16px' : '20px 24px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr auto 1.1fr auto 1.1fr',
                gap: isMobile ? '16px' : '20px',
                alignItems: 'center'
              }}>
                {/* Heading statement */}
                <h4 style={{
                  fontFamily: F_SORA,
                  fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
                  fontWeight: 600,
                  color: '#0b3b6e',
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  {active.impactTitle}
                </h4>

                {/* Divider 1 */}
                {!isMobile && (
                  <div style={{ width: '1px', height: '40px', background: 'rgba(15, 23, 42, 0.15)' }} />
                )}

                {/* Metric 1 */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    fontFamily: F_SORA,
                    fontSize: '2.1rem',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    marginBottom: '2px',
                    display: 'inline-block'
                  }}>
                    <GradientText>{active.metrics[0].value}</GradientText>
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#475569',
                    lineHeight: 1.2
                  }}>
                    {active.metrics[0].label}
                  </span>
                </div>

                {/* Divider 2 */}
                {!isMobile && (
                  <div style={{ width: '1px', height: '40px', background: 'rgba(15, 23, 42, 0.15)' }} />
                )}

                {/* Metric 2 */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    fontFamily: F_SORA,
                    fontSize: '2.1rem',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    marginBottom: '2px',
                    display: 'inline-block'
                  }}>
                    <GradientText>{active.metrics[1].value}</GradientText>
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#475569',
                    lineHeight: 1.2
                  }}>
                    {active.metrics[1].label}
                  </span>
                </div>
              </div>
            </div>

            {/* Achievement Highlight */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              padding: '12px 16px',
              fontSize: '0.88rem',
              lineHeight: 1.4,
              color: '#475569',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
            }}>
              <span>{active.highlight}</span>
            </div>

            {/* Slider Dots & CTA Button Row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '20px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <button
                onClick={handleCTA}
                style={{
                  fontFamily: F_SORA,
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  background: '#FFFFFF',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 30px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <GradientText>Talk to our expert</GradientText>
              </button>

              {/* Slider Dots */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                {CASE_STUDIES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    style={{
                      border: 'none',
                      padding: 0,
                      height: '8px',
                      width: current === idx ? '24px' : '8px',
                      borderRadius: '999px',
                      background: current === idx ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

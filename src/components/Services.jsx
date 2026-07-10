import { useState, useEffect } from 'react';
import { useSanityData } from '../lib/sanityContext';
import { urlFor } from '../lib/sanityClient';
import { renderFormattedText } from '../lib/renderFormattedText';

const SERVICES_DATA = [
  {
    title: "Performance Marketing",
    description: "From ads to automation, we build systems that attract, convert, and retain customers. From ads to automation, we build systems that attract, convert, and retain customers.",
    image: "/image1.png"
  },
  {
    title: "SEO & Local SEO",
    description: "We help your business get discovered exactly when your audience is searching. Our approach combines technical SEO, content strategy, and search intent mapping.",
    image: "/image2.png"
  },
  {
    title: "Social Media & Creative",
    description: "We create content that captures attention and builds long-term brand recall. Our work blends strategy, storytelling, and platform-specific execution.",
    image: "/image3.png"
  },
  {
    title: "Web & Landing Pages",
    description: "We design fast, intuitive digital experiences built for performance. Every page is structured to guide users clearly toward action.",
    image: "/image4.png"
  },
  {
    title: "Analytics & Automation",
    description: "We turn data into systems that power smarter decisions and faster execution. We set up accurate tracking, dashboards, and performance insights.",
    image: "/image5.png"
  }
];

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const { services } = useSanityData();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const servicesList = (services && services.length > 0) ? services : SERVICES_DATA;
  const headingText = (services && services.length > 0 ? services[0].sectionHeading : null) || 'Everything You Need Under One Roof:\n[Strategy], [Execution] & [Scale]';

  const handleCTA = (e) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const el = document.getElementById('contact-name');
      if (el) el.focus();
    }, 1000);
  };

  return (
    <section id="services" style={{ fontFamily: "'Sora', sans-serif" }}>
      
      {/* Top Main Header */}
      <div style={{ 
        backgroundColor: '#FFFFFF', 
        padding: isMobile ? '60px 6% 30px' : '100px 5% 60px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', 
            fontWeight: 600, 
            lineHeight: 1.15,
            margin: 0,
            letterSpacing: '-0.03em',
            color: '#000000',
            whiteSpace: 'pre-line'
          }}>
            {renderFormattedText(headingText)}
          </h2>
        </div>
      </div>

      {servicesList.map((service, idx) => {
        const isEven = idx % 2 === 0;
        const imgOrder = isEven ? 0 : 1;
        const textOrder = isEven ? 1 : 0;

        return (
          <div 
            key={idx}
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
                  src={(service.image && typeof urlFor === 'function' && service.image.asset) ? urlFor(service.image).url() : service.image || `/image${idx + 1}.png`} 
                  alt={service.title} 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>

              {/* Text Content Side */}
              <div style={{ 
                order: isMobile ? 1 : textOrder,
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px' 
              }}>
                <h3 className="text-[1.8rem] md:text-[2rem] font-bold tracking-tight mb-0" style={{ color: '#000000', lineHeight: 1.1 }}>
                  {service.title}
                </h3>
                
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.6, 
                  color: '#444444', 
                  margin: 0,
                  maxWidth: '480px',
                  fontWeight: 400
                }}>
                  {service.description}
                </p>

                <button 
                  onClick={handleCTA}
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Talk to our Expert →
                </button>
              </div>

            </div>
          </div>
        );
      })}

    </section>
  );
}

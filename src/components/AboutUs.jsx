import React, { useRef, useState, useEffect, useCallback } from 'react';

// Added specific vibrant colors matching the Schbang aesthetic. 
// Alternating between strong brights and deep solids for premium contrast.
const SLIDES = [
  {
    image: "/performance_marketing.png",
    title: "Performance Marketing",
    body: "We build acquisition systems designed to scale, not just campaigns that spend. Every strategy starts with understanding your funnel, audience, and growth goals. From media buying and creative testing to conversion tracking and optimization, we continuously refine performance using real data. The result is consistent, measurable growth that compounds over time.",
    btn: "Talk to our expert",
    bgColor: "#FFDE00", // The specific Schbang yellow
    textColor: "#000000",
    bodyColor: "#333333"
  },
  {
    image: "/service-seo.png",
    title: "SEO & Local SEO",
    body: "We help your business get discovered exactly when your audience is searching. Our approach combines technical SEO, content strategy, and search intent mapping. We optimize both global visibility and local presence across key platforms. From rankings to clicks to conversions, every metric is aligned with growth. Over time, we build a strong and sustainable organic traffic engine.",
    btn: "Talk to our expert",
    bgColor: "#FF431A", // Vibrant Orange
    textColor: "#FFFFFF",
    bodyColor: "#EEEEEE"
  },
  {
    image: "/service-social.png",
    title: "Social Media & Creative",
    body: "We create content that captures attention and builds long-term brand recall. Our work blends strategy, storytelling, and platform-specific execution. From ideation and design to content production and distribution, we focus on creating assets that people actually engage with. The goal is not just visibility, but meaningful connection and action.",
    btn: "Talk to our expert",
    bgColor: "#F4F4F4", // Clean light grey
    textColor: "#000000",
    bodyColor: "#555555"
  },
  {
    image: "/service-web.png",
    title: "Web & Landing Pages",
    body: "We design fast, intuitive digital experiences built for performance. Every page is structured to guide users clearly toward action. From UX and UI design to development and optimization, we reduce friction and improve conversion at every step. The end result is a website that not only looks good, but performs.",
    btn: "Talk to our expert",
    bgColor: "#111111", // Deep dark
    textColor: "#FFFFFF",
    bodyColor: "#AAAAAA"
  },
  {
    image: "/performance_marketing.png",
    title: "Analytics & Automation",
    body: "We turn data into systems that power smarter decisions and faster execution. We set up accurate tracking, dashboards, and performance insights. From customer journeys to internal workflows, we automate repetitive processes to improve efficiency. This allows your team to focus on growth while systems handle the rest.",
    btn: "Talk to our expert",
    bgColor: "#0078D4", // Sharp Blue
    textColor: "#FFFFFF",
    bodyColor: "#F0F0F0"
  },
  {
    image: "/service-social.png",
    title: "Influencer & ORM",
    body: "We help shape how your brand is seen, trusted, and talked about. Our approach combines influencer collaborations with reputation management. We identify the right voices and platforms to amplify your presence. At the same time, we monitor and manage brand perception across channels. The result is stronger credibility, trust, and long-term brand equity.",
    btn: "Talk to our expert",
    bgColor: "#E2F0D9", // Mint green
    textColor: "#000000",
    bodyColor: "#444444"
  }
];

const TOTAL = SLIDES.length;
const SLIDE_MS = 800; 
const MIN_DELTA = 15;

export default function AboutUs() {
  const sectionRef = useRef(null);
  const activeRef = useRef(0);
  const busyRef = useRef(false);
  const lockedRef = useRef(false);
  const stateRef = useRef('UNLOCKED_ABOVE');

  const [isMobile, setIsMobile] = useState(false);
  const [, rerender] = useState(0);

  // Responsive check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return; // No scroll locking on mobile
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [isMobile]);

  const lock = useCallback(() => {
    if (lockedRef.current || isMobile) return;
    const sb = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = sb > 0 ? `${sb}px` : '';
    document.body.style.overflow = 'hidden';
    
    const s = sectionRef.current;
    if (s) {
      const target = s.getBoundingClientRect().top + window.scrollY;
      let attempts = 5;
      const snap = () => {
        if (Math.abs(window.scrollY - target) > 0) window.scrollTo({ top: target, behavior: 'instant' });
        if (attempts-- > 0) requestAnimationFrame(snap);
      };
      snap();
    }
    lockedRef.current = true;
  }, [isMobile]);

  const unlock = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    lockedRef.current = false;
  }, []);

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= TOTAL) return;
    const prev = activeRef.current;
    if (idx === prev) return;

    activeRef.current = idx;
    rerender(n => n + 1);

    busyRef.current = true;
    setTimeout(() => {
      busyRef.current = false;
    }, SLIDE_MS + 60);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const onScroll = () => {
      const s = sectionRef.current; 
      if (!s) return;
      const rect = s.getBoundingClientRect();
      if (stateRef.current === 'LOCKED') return;

      if (rect.top > window.innerHeight) stateRef.current = 'UNLOCKED_ABOVE';
      else if (rect.bottom < 0) stateRef.current = 'UNLOCKED_BELOW';

      if (stateRef.current === 'UNLOCKED_ABOVE' && rect.top <= 10 && rect.top > -150) {
        stateRef.current = 'LOCKED';
        activeRef.current = 0;
        rerender(n => n + 1);
        lock();
      } else if (stateRef.current === 'UNLOCKED_BELOW' && rect.bottom >= window.innerHeight - 10 && rect.bottom < window.innerHeight + 150) {
        stateRef.current = 'LOCKED';
        activeRef.current = TOTAL - 1;
        rerender(n => n + 1);
        lock();
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [lock, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current; if (!section) return;
    const onWheel = (e) => {
      if (!lockedRef.current || stateRef.current !== 'LOCKED') return;

      e.preventDefault();
      if (Math.abs(e.deltaY) < MIN_DELTA) return;
      if (busyRef.current) return;

      const dir = e.deltaY > 0 ? 1 : -1;
      const next = activeRef.current + dir;

      if (next < 0) { 
        stateRef.current = 'UNLOCKED_ABOVE'; unlock(); 
      } else if (next >= TOTAL) { 
        stateRef.current = 'UNLOCKED_BELOW'; unlock(); 
      } else { 
        goTo(next); 
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [goTo, lock, unlock, isMobile]);

  const handleCTA = (e) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const el = document.getElementById('contact-name');
      if (el) el.focus();
    }, 1000);
  };

  if (isMobile) {
    return (
      <section id="about-us" className="bg-white py-12 px-6 flex flex-col gap-10">
        <h2 className="text-[clamp(1.8rem,8vw,2.4rem)] font-bold tracking-tight text-black text-center mb-4" 
            style={{ fontFamily: "'Sora', sans-serif" }}>
          Our Services
        </h2>
        {SLIDES.map((slide, i) => (
          <div key={i} className="flex flex-col gap-6">
            <div className="w-full aspect-square rounded-3xl overflow-hidden bg-slate-50 flex items-center justify-center">
              <img src={slide.image} alt={slide.title} className="w-[85%] h-[85%] object-contain" />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-black" style={{ fontFamily: "'Sora', sans-serif" }}>
                {slide.title}
              </h2>
              <p className="text-[1.05rem] leading-relaxed text-slate-600 font-medium" style={{ fontFamily: "'Sora', sans-serif" }}>
                {slide.body}
              </p>
              <button 
                onClick={handleCTA}
                className="inline-flex items-center justify-center bg-black text-white rounded-full py-4 px-8 font-semibold w-full mt-2 border-none cursor-pointer"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {slide.btn} <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        ))}
      </section>
    );
  }

  const currentIdx = activeRef.current;

  return (
    <section 
      id="about-us"
      ref={sectionRef}
      className="w-full relative flex flex-col md:flex-row h-[100vh] min-h-[100vh] max-h-[100vh] overflow-hidden bg-white px-0 md:px-[3%] lg:px-[4%]"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >

      {/* 
         LEFT COLUMN SLIDER MAP (REVERSE DIRECTION)
      */}
      <div className="w-full md:w-[40%] h-full relative overflow-hidden z-10">
        
        {SLIDES.map((slide, i) => (
          <div 
            key={`left-${i}`}
            // Keeps absolute tracking layer transparent and boundless
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center"
            style={{
              transition: `transform ${SLIDE_MS}ms cubic-bezier(0.77,0,0.18,1)`,
              transform: currentIdx === i ? 'translateY(0)' : (currentIdx > i ? 'translateY(100%)' : 'translateY(-100%)'),
              pointerEvents: currentIdx === i ? 'auto' : 'none',
              zIndex: currentIdx === i ? 20 : 10,
              willChange: 'transform'
            }}
          >
            {/* The Floating Colored Card specific to Left content */}
            <div 
              className="w-full py-[8vh] md:py-[14vh] pl-[10%] md:pl-[10%] md:pr-[10%] border-r-[4px] md:border-r-[8px] border-white flex flex-col items-center md:items-start"
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className="flex flex-col items-start w-full max-w-[400px]">
                
                <div className="h-[80px] md:h-[100px] w-full shrink-0">
                  <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold m-0 p-0 tracking-tight" style={{ fontFamily: "'Sora', sans-serif", color: slide.textColor }}>
                    Our services
                  </h2>
                </div>
                
                <div className="w-full h-[280px] md:h-[340px] shrink-0 relative flex flex-col justify-start">
                  <img 
                    src={slide.image} 
                    alt="Service visual" 
                    className="w-full h-full object-contain object-left-top drop-shadow-sm" 
                  />
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>

      {/* 
         RIGHT COLUMN SLIDER MAP (STANDARD DIRECTION)
      */}
      <div className="w-full md:w-[60%] h-full relative overflow-hidden z-20">
        
        {SLIDES.map((slide, i) => (
          <div 
            key={`right-${i}`}
            // Keeps absolute tracking layer transparent and boundless
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center"
            style={{
              transition: `transform ${SLIDE_MS}ms cubic-bezier(0.77,0,0.18,1)`,
              transform: currentIdx === i ? 'translateY(0)' : (currentIdx > i ? 'translateY(-100%)' : 'translateY(100%)'),
              pointerEvents: currentIdx === i ? 'auto' : 'none',
              zIndex: currentIdx === i ? 20 : 10,
              willChange: 'transform'
            }}
          >
            {/* The exactly matched Floating Colored Card specific to Right content */}
            <div 
              className="w-full py-[8vh] md:py-[14vh] pl-[5%] md:pl-[6%] pr-[5%] flex flex-col items-start"
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className="h-[80px] md:h-[100px] w-full shrink-0">
                <h1 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold m-0 p-0 tracking-tight leading-[1.2]" style={{ fontFamily: "'Sora', sans-serif", color: slide.textColor }}>
                   {slide.title}
                </h1>
              </div>
              
              <div className="w-full h-[280px] md:h-[340px] shrink-0 flex flex-col justify-between items-start gap-4 overflow-visible relative">
                 
                 <p className="text-[clamp(1.1rem,1.3vw,1.35rem)] font-medium leading-[1.8] m-0 p-0 whitespace-pre-line w-full max-w-[95%]" style={{ fontFamily: "'Sora', sans-serif", color: slide.bodyColor }}>
                   {slide.body}
                 </p>

                 <div className="w-full flex justify-start mt-auto">
                   <button 
                     onClick={handleCTA}
                     className="inline-flex items-center justify-center font-[500] transition-transform duration-300 w-full sm:w-auto hover:bg-opacity-80 hover:scale-[1.02] border-none cursor-pointer"
                     style={{ 
                       borderRadius: '8rem', 
                       padding: '14px 40px',
                       fontFamily: "'Sora', inherit",
                       backgroundColor: slide.textColor === '#FFFFFF' ? '#FFFFFF' : '#000000',
                       color: slide.textColor === '#FFFFFF' ? '#000000' : '#FFFFFF'
                     }}
                   >
                     {slide.btn} <span className="ml-[12px] text-[18px] leading-none">→</span>
                   </button>
                 </div>
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

import React from 'react';
import GradientText from './GradientText';
import { useSanity } from '../lib/useSanity';
import { renderFormattedText } from '../lib/renderFormattedText';

const PROCESS_QUERY = `*[_type == "process" && _id == "process"][0]`

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Discover",
    desc: "Deep-dive into brand, audience, competitors & market gaps",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    )
  },
  {
    id: 2,
    title: "Strategize",
    desc: "Define positioning, content pillars & channel mix",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"></path>
        <path d="M14 10a1 1 0 0 1 1.4 1.4"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: "Deploy",
    desc: "Set up ad accounts, tracking, analytics, automations & CRM",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      </svg>
    )
  },
  {
    id: 4,
    title: "Scale",
    desc: "CRO improvements based on user behaviour & analytics",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"></path>
        <path d="m19 9-5 5-4-4-3 3"></path>
      </svg>
    )
  }
];

export default function Process() {
  const { data: processData, loading } = useSanity(PROCESS_QUERY);

  if (loading) {
    return <section style={{ minHeight: '500px', background: '#fff' }} />;
  }
  
  const headingText = processData?.heading || "Our Proven [4-Step Growth] Framework";

  const stepsList = (processData?.steps && processData.steps.length > 0) 
    ? processData.steps.map((s, i) => ({ 
        id: s._key || i, 
        title: s.title, 
        desc: s.desc, 
        icon: PROCESS_STEPS[i]?.icon || PROCESS_STEPS[0].icon 
      })) 
    : PROCESS_STEPS;

  return (
    <section id="process" className="py-24 bg-white relative w-full overflow-hidden font-sans">
      <div className="w-full px-6 md:px-12 mb-16 md:mb-20 flex justify-center text-center">
        <h2 className="text-clamp-h2 text-black m-0 leading-tight" style={{ fontFamily: "'Sora', sans-serif", whiteSpace: 'pre-line' }}>
          {renderFormattedText(headingText)}
        </h2>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 items-start">
        {stepsList.map((item, index) => (
          <div 
            key={item.id}
            className="group relative w-full h-full flex flex-col"
          >
            {/* Massive Backdrop Number with Gradient */}
            <div 
              style={{
                position: 'absolute',
                top: '-40px',
                left: '-20px',
                fontSize: 'clamp(120px, 15vw, 200px)',
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                background: 'linear-gradient(90deg, #2563EB, #7C3AED, #2563EB)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                opacity: 0.12,
                zIndex: 0,
                pointerEvents: 'none',
                lineHeight: 1
              }}
            >
              {index + 1}
            </div>

            {/* Content Card (Equal Height) */}
            <div className="relative z-10 flex flex-col items-start text-left bg-white p-8 rounded-[24px] border border-blue-600/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex-1">
              <div className="h-12 flex items-center mb-6 text-blue-600">
                {item.icon}
              </div>
              
              <h3 className="mb-4">
                <GradientText 
                  className="font-bold text-[1.5rem] tracking-tight"
                  colors={["#2563EB", "#7C3AED", "#2563EB"]}
                  showAnimation={false}
                >
                  {item.title}
                </GradientText>
              </h3>
              
              <p className="text-[#333333] text-[0.95rem] leading-[1.6] font-medium m-0" style={{ fontFamily: "'Sora', sans-serif" }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

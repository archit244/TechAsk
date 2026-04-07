import React from 'react';

const PROCESS_STEPS = [
  {
    id: 1,
    logo: "01", 
    title: "Discover",
    desc: "Deep-dive into brand, audience, competitors & market gaps."
  },
  {
    id: 2,
    logo: "02",
    title: "Strategize",
    desc: "Define positioning, content pillars & channel mix."
  },
  {
    id: 3,
    logo: "03",
    title: "Deploy",
    desc: "Set up ad accounts, tracking, analytics, automations & CRM."
  },
  {
    id: 4,
    logo: "04",
    title: "Scale",
    desc: "CRO improvements based on user behaviour & analytics."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative w-full overflow-hidden font-sans">
      <div className="w-full px-6 md:px-12 mb-16 md:mb-20 flex justify-center text-center">
        <h2 className="text-[clamp(1.6rem,2.8vw,2.5rem)] font-medium tracking-tight text-black m-0 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
          Our Proven 4-Step Growth Framework
        </h2>
      </div>
      
      <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 items-start">
        {PROCESS_STEPS.map((item) => (
          <div 
            key={item.id}
            className="w-full flex flex-col items-center text-center"
          >
            <div className="h-16 flex items-end justify-center mb-6">
              <h4 className="font-extrabold text-[1.3rem] tracking-tighter" style={{ fontFamily: "inherit" }}>
                 {item.logo}
              </h4>
            </div>
            
            <h3 className="font-bold text-[1.4rem] text-black mb-4 tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              {item.title}
            </h3>
            
            <p className="text-[#333333] text-[0.95rem] leading-[1.6] max-w-[280px] mx-auto font-medium" style={{ fontFamily: "'Sora', sans-serif" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

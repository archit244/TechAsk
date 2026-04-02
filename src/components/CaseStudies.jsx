import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from './Motion'

const cases = [
  {
    brand: 'Essa x Techask',
    desc: 'ESSA is an Indian apparel brand specializing in clothing for men, women, boys, and girls, with a focus on comfortable and high-quality innerwear and outerwear collections for all ages',
    bullets: [
      'Scaled Meta & Google Ads with 4.49× blended ROAS across campaigns.',
      'Built full-funnel attribution connecting every touchpoint to revenue.',
      'Achieved sustainable sales growth and category dominance, supported by a scalable blueprint for future expansion and profitability.',
    ],
  },
  {
    brand: 'HealthStartup x Techask',
    desc: 'A fast-growing healthcare platform that needed to scale patient acquisition across multiple cities while maintaining cost-efficient unit economics.',
    bullets: [
      'Grew organic traffic 200% in 4 months through technical SEO overhaul.',
      'Reduced cost-per-lead by 62% across Google Ads campaigns.',
      'Built automated nurture sequences converting 3.8× more leads to patients.',
    ],
  },
  {
    brand: 'E-Commerce Co. x Techask',
    desc: 'A premium D2C brand struggling with inconsistent ROAS and no clear attribution model across their marketing channels.',
    bullets: [
      'Rebuilt entire paid strategy with new creative frameworks.',
      'Implemented audience segmentation driving 117% revenue growth.',
      'Achieved profitability within 3 months of engagement.',
    ],
  },
]

export default function CaseStudies() {
  const [current, setCurrent] = useState(0)
  const c = cases[current]

  return (
    <section className="cases-section" id="results">
      <div className="container">
        <FadeUp><h2 className="cases-heading">Brands That Grew with Techask</h2></FadeUp>

        <FadeUp delay={0.1}>
          <div className="case-showcase">
            <div className="case-left">
              <div className="case-phone-mock">
                <div className="case-phone-screen">
                  <div className="case-brand-display">
                    <span className="case-brand-name">{c.brand.split(' x ')[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-right">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="case-brand-title">{c.brand}</h3>
                  <p className="case-brand-desc">{c.desc}</p>
                  <ul className="case-bullets">
                    {c.bullets.map((b, i) => (
                      <li key={i}>
                        <span className="bullet-icon">✨</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="case-dots">
                {cases.map((_, i) => (
                  <button
                    key={i}
                    className={`case-dot ${i === current ? 'active' : ''}`}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>

              <a href="#hero-form" className="case-cta-btn">Talk to our expert</a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { FadeUp } from './Motion'

const faqs = [
  { q: 'What type of Digital Marketing Services does Techask offer?', a: 'We offer a full suite of digital marketing services including Performance Marketing (Google, Meta, LinkedIn Ads), SEO & Local SEO, Social Media Marketing, Web & Landing Page Development, Analytics & Automation, and Influencer & ORM management.' },
  { q: 'How do I know if Techask is the right Digital Marketing Agency Near Me?', a: 'We work with growth-stage startups, funded companies, SMBs, and enterprises. If you have a $5k+/month marketing budget and a scalable offer, we can build a growth engine for you. Book a free 30-min strategy call to see if we\'re a fit.' },
  { q: 'What industries does Techask specialize in?', a: 'We\'ve scaled brands across e-commerce, SaaS, healthcare, real estate, hospitality, entertainment, and more. Our frameworks are industry-agnostic but our execution is hyper-specialized to your vertical.' },
  { q: 'How quickly will I see results from your services?', a: 'Paid media results typically show within 2-4 weeks. SEO takes 3-6 months for significant organic gains. Most clients see meaningful ROI within the first 90 days — often within Month 1 for performance campaigns.' },
  { q: 'Do you offer custom marketing strategies?', a: 'Absolutely. Every client gets a custom growth roadmap based on their specific goals, budget, industry, and competitive landscape. We don\'t believe in cookie-cutter approaches.' },
  { q: 'What is the pricing structure for your services?', a: 'We offer flexible engagement models — monthly retainers, project-based pricing, and performance-based options. Pricing depends on scope and channels. Book a free consultation to get a custom quote.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <FadeUp><h2 className="faq-heading">Frequently Asked Questions</h2></FadeUp>
        <FadeUp delay={0.1}>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => toggle(i)}>
                  <span>{f.q}</span>
                  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className={`faq-a ${open === i ? 'open' : ''}`}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

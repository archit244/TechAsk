import { FadeUp, StaggerGrid, StaggerItem, HoverCard } from './Motion'

const testimonials = [
  { stars: '★★★★★', initials: 'RK', quote: 'Techask transformed our paid media. Within 60 days we went from a 1.2× ROAS to over 4×. They build systems, not just ads.', name: 'Rajesh Kumar', role: 'CEO, Essa Brand' },
  { stars: '★★★★★', initials: 'PV', quote: 'Our organic traffic doubled in 4 months. The SEO team understands both technical depth and content strategy. Remarkable results.', name: 'Priya Verma', role: 'Marketing Head, HealthStartup' },
  { stars: '★★★★★', initials: 'AM', quote: 'We\'ve worked with 3 agencies before. Techask is the first that showed up with a real strategy. The attribution clarity alone is worth it.', name: 'Ankit Mehta', role: 'Founder, E-Commerce Co.' },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <FadeUp><span className="section-eyebrow">Client Stories</span></FadeUp>
        <FadeUp delay={0.1}><h2 className="section-title">What Our <span className="grad-text">Clients Say</span></h2></FadeUp>
        <FadeUp delay={0.2}><p className="section-sub">Don't take our word for it — here's what growth looks like in practice.</p></FadeUp>
        <StaggerGrid className="testi-grid">
          {testimonials.map(t => (
            <StaggerItem key={t.name}>
              <HoverCard className="testi-card">
                <div className="testi-stars">{t.stars}</div>
                <p className="testi-quote">"{t.quote}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <p className="testi-name">{t.name}</p>
                    <p className="testi-role">{t.role}</p>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}

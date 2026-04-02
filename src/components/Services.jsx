import { FadeUp } from './Motion'

const services = [
  {
    title: 'Performance Marketing',
    desc: 'From ads to automation, we build systems that attract, convert, and retain customers. From ads to automation, we build systems that attract, convert, and retain customers.',
    image: '/image1.png',
    rev: false,
  },
  {
    title: 'SEO & Local SEO',
    desc: 'From ads to automation, we build systems that attract, convert, and retain customers. From ads to automation, we build systems that attract, convert, and retain customers.',
    image: '/image4.png',
    rev: true,
  },
  {
    title: 'Social Media & Creative',
    desc: 'From ads to automation, we build systems that attract, convert, and retain customers. From ads to automation, we build systems that attract, convert, and retain customers.',
    image: '/image2.png',
    rev: false,
  },
  {
    title: 'Web & Tech Solutions',
    desc: 'From ads to automation, we build systems that attract, convert, and retain customers. From ads to automation, we build systems that attract, convert, and retain customers.',
    image: '/image5.png',
    rev: true,
  },
  {
    title: 'Analytics & Automation',
    desc: 'From ads to automation, we build systems that attract, convert, and retain customers. From ads to automation, we build systems that attract, convert, and retain customers.',
    image: '/image3.png',
    rev: false,
  },
  {
    title: 'Influencer & ORM',
    desc: 'From ads to automation, we build systems that attract, convert, and retain customers. From ads to automation, we build systems that attract, convert, and retain customers.',
    image: '/image1.png',
    rev: true,
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <FadeUp>
          <h2 className="services-main-heading">
            Everything You Need Under One Roof<br />
            Strategy, Execution & Scale
          </h2>
        </FadeUp>
      </div>

      <div className="services-stack">
        {services.map((s, i) => (
          <FadeUp key={s.title} delay={0.05}>
            <div className={`svc-row ${s.rev ? 'rev' : ''}`}>
              <div className="svc-image-col">
                <img src={s.image} alt={s.title} className="svc-img" loading="lazy" />
              </div>
              <div className="svc-text-col">
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
                <a href="#hero-form" className="svc-cta-btn">
                  Talk to our Expert <span>→</span>
                </a>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

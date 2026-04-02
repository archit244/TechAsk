import { FadeUp, StaggerGrid, StaggerItem, HoverCard } from './Motion'

const steps = [
  { num: '1', title: 'Discover', desc: 'Deep dive into brand, audience, competitors & market gaps' },
  { num: '2', title: 'Strategize', desc: 'Define positioning, content pillars & channel mix' },
  { num: '3', title: 'Deploy', desc: 'Set up accounts, tracking, analytics, automations & CRM' },
  { num: '4', title: 'Scale', desc: 'Drive improvements based on user behaviour & analytics' },
]

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="container">
        <FadeUp><h2 className="process-heading">Our Proven 4-Step Growth Framework</h2></FadeUp>
        <StaggerGrid className="process-grid">
          {steps.map(s => (
            <StaggerItem key={s.title}>
              <HoverCard className="proc-card">
                <div className="proc-num-circle">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}

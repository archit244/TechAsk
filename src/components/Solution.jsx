import { FadeUp } from './Motion'

export default function Solution() {
  return (
    <section className="solution-section">
      <div className="container">
        <FadeUp><span className="section-eyebrow">Our Answer</span></FadeUp>
        <FadeUp delay={0.15}>
          <div className="solution-card">
            <span className="solution-tag">✨ THE GROWTHLAB SOLUTION</span>
            <h2>
              A Unified Growth System Connecting Performance,{' '}
              <span className="grad-text">Creative & Analytics</span>
            </h2>
            <p>
              We don't run isolated campaigns. We build performance ecosystems — where every channel feeds
              the next, creating compounding growth with complete ROI transparency.
              One team, one strategy, measurable results.
            </p>
            <a href="#hero-form" className="btn btn-primary">See How It Works →</a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

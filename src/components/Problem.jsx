/**
 * Problem.jsx
 * Infinite auto-rotating carousel showing 4 common marketing problems.
 * Layout: 3 cards visible (left ghost → active → right ghost).
 * IMPACT & OUR SOLUTION overlay cards sit to the right of the active card.
 */
import { useState, useEffect, useCallback } from 'react'
import { FadeUp } from './Motion'

// ── Data ───────────────────────────────────────────────────────────────────
const problems = [
  {
    num: '01',
    title: 'Scattered campaigns across agencies',
    impact: 'Wasted spend & no single ROI visibility',
    solution: 'Unified growth system connecting performance, creative & analytics',
  },
  {
    num: '02',
    title: 'Low-quality leads or poor conversion rate',
    impact: 'Revenue leaks at every funnel stage',
    solution: 'End-to-end conversion optimization from click to close',
  },
  {
    num: '03',
    title: 'No in-house digital marketing expertise',
    impact: 'Decisions based on guesswork, not insights',
    solution: 'Single dashboard with real-time analytics across all channels',
  },
  {
    num: '04',
    title: 'Inconsistent content or brand messaging',
    impact: 'Confused audience & diluted brand trust',
    solution: 'Cohesive creative strategy aligned with business objectives',
  },
]

// Always-positive modulo (avoids negative index on prev wrap-around)
const mod = (n, m) => ((n % m) + m) % m

// ── Component ──────────────────────────────────────────────────────────────
export default function Problem() {
  const [current, setCurrent] = useState(0)

  // Stable nav handlers to avoid re-creating the auto-play interval
  const goNext = useCallback(() => setCurrent(c => mod(c + 1, problems.length)), [])
  const goPrev = useCallback(() => setCurrent(c => mod(c - 1, problems.length)), [])

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(goNext, 4000)
    return () => clearInterval(timer)
  }, [goNext])

  // Derived indices for adjacent cards
  const leftIdx  = mod(current - 1, problems.length)
  const rightIdx = mod(current + 1, problems.length)
  const p = problems[current]

  return (
    <section className="problem-section">
      <FadeUp>
        <h2 className="problem-heading">
          Why Businesses Struggle to See ROI<br />from Digital Marketing
        </h2>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="problem-stage">

          {/* ── Navigation arrows ── */}
          <button className="prob-arrow prob-arrow-left" onClick={goPrev} aria-label="Previous">‹</button>
          <button className="prob-arrow prob-arrow-right" onClick={goNext} aria-label="Next">›</button>

          {/* ── 3-card row ── */}
          <div className="problem-cards">
            {/* Left ghost card */}
            <div className="problem-card card-left">
              <span className="problem-card-num">{problems[leftIdx].num}</span>
              <p className="problem-card-text">{problems[leftIdx].title}</p>
            </div>

            {/* Active (center) card */}
            <div className="problem-card card-active">
              <span className="problem-card-num">{p.num}</span>
              <p className="problem-card-text">{p.title}</p>
            </div>

            {/* Right ghost card */}
            <div className="problem-card card-right">
              <span className="problem-card-num">{problems[rightIdx].num}</span>
              <p className="problem-card-text">{problems[rightIdx].title}</p>
            </div>
          </div>

          {/* ── IMPACT & OUR SOLUTION overlay ── */}
          {/* key forces re-render on slide change so text updates instantly */}
          <div className="problem-overlay-cards">
            <div className="impact-card" key={`imp-${current}`}>
              <span className="impact-label">IMPACT</span>
              <p>{p.impact}</p>
            </div>
            <div className="solution-card-inline" key={`sol-${current}`}>
              <span className="solution-label">OUR SOLUTION</span>
              <p>{p.solution}</p>
            </div>
          </div>

        </div>
      </FadeUp>
    </section>
  )
}

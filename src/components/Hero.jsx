import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeUp } from './Motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1400)
  }

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">

        {/* ── Left copy ── */}
        <div className="hero-left-col">
          <motion.div className="hero-badge" {...fadeUp(0.1)}>
            <div className="badge-avatars">
              <img src="https://i.pravatar.cc/100?img=11" alt="avatar" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=12" alt="avatar" className="avatar" style={{marginLeft: '-8px'}} />
              <img src="https://i.pravatar.cc/100?img=13" alt="avatar" className="avatar" style={{marginLeft: '-8px'}} />
            </div>
            Trusted By 100+ Founders
          </motion.div>
          
          <motion.h1 className="hero-headline" {...fadeUp(0.2)}>
            Your Competitors Are Scaling<br />
            while You're Still Experimenting.<br />
            Build Predictable <span className="grad-text">Growth</span> Before<br />
            Another Quarter Slips Away.
          </motion.h1>
          
          <motion.p className="hero-sub" {...fadeUp(0.3)}>
            We partner with businesses to create performance-first digital<br />
            ecosystems — from SEO and ads to creative, data, and tech
          </motion.p>
        </div>

        {/* ── Right form ── */}
        <motion.div
          className="hero-form-card"
          id="hero-form"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="form-header-left">
            <h2>Let's Grow Your Business Together</h2>
          </div>

          {submitted ? (
            <div className="form-success-box">
              <div className="success-emoji">🎉</div>
              <h3>Request Received!</h3>
              <p>Our growth strategist will reach out within 24 hours.</p>
            </div>
          ) : (
             <form onSubmit={handleSubmit} className="line-form">
              <input type="text" placeholder="Enter Your Name" className="fg-line-input" required />
              <input type="email" placeholder="Enter Your Work Email" className="fg-line-input" required />
              <input type="tel" placeholder="Enter Your Phone Number" className="fg-line-input" required />
              <input type="text" placeholder="Enter Your Company Name" className="fg-line-input" required />
              <input type="url" placeholder="Enter Your Website URL" className="fg-line-input" />
              <input type="text" placeholder="Enter Your Job Title" className="fg-line-input" />
              <div className="select-wrap-line">
                <select required defaultValue="" className="fg-line-input" style={{color: 'var(--gray-400)'}} onChange={(e) => e.target.style.color = 'var(--gray-800)'}>
                  <option value="" disabled>Choose Your Budget</option>
                  <option>Under $5,000/month</option>
                  <option>$5,000 – $15,000/month</option>
                  <option>$15,000 – $50,000/month</option>
                  <option>$50,000+/month</option>
                </select>
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary btn-full hero-submit-btn"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'Sending…' : 'Get a Free Growth Consultation'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

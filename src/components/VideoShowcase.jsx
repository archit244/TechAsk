import { FadeUp } from './Motion'

export default function VideoShowcase() {
  return (
    <section className="video-section">
      <div className="container">
        <FadeUp>
          <p className="video-tagline">
            No spam. 30-min strategy call with<br />our growth lead.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="video-player-wrap">
            <div className="video-placeholder">
              <div className="video-play-btn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="video-overlay-text">
                <img src="/6.png" alt="Techask" style={{ height: '100px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

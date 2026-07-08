import React from 'react'
import { useSanityData } from '../lib/sanityContext'
import { renderFormattedText } from '../lib/renderFormattedText'

export default function StrategyVideo() {
  const { video: videoData } = useSanityData()
  const heading = videoData?.heading || "No spam. 30-min [strategy call] with our growth lead."

  return (
    <section 
      id="strategy-video"
      style={{
        height: 'auto',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 5%',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      <h2 style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: 'clamp(1.84rem, 3.68vw, 2.76rem)',
        fontWeight: 600,
        color: '#000000',
        marginBottom: '40px',
        maxWidth: '1200px',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        whiteSpace: 'pre-line'
      }}>
        {renderFormattedText(heading)}
      </h2>
      
      <div style={{
        width: '100%',
        maxWidth: '920px', // 800 * 1.15
        aspectRatio: '16/9',
        background: '#2563EB',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(37, 99, 235, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {videoData?.iframeLink ? (
          <iframe 
            src={videoData.iframeLink} 
            title="Video Strategy Call" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={{ width: '100%', height: '100%', borderRadius: '24px' }}
          ></iframe>
        ) : (
          <div style={{
            width: '80px',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
    </section>
  )
}

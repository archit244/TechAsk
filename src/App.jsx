import { useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroOld from './components/HeroOld'
import Logos from './components/Logos'
import Problem from './components/Problem'
import Services from './components/Services'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import StrategyVideo from './components/StrategyVideo'
import ThankYou from './pages/ThankYou'
import FloatingCTA from './components/FloatingCTA'
import { useScrolledPast } from './hooks/useScrolledPast'
import { useSanity } from './lib/useSanity'
import { SanityDataContext } from './lib/sanityContext'

const LANDING_PAGE_QUERY = `{
  "navbar": *[_type == "navbar" && _id == "navbar"][0],
  "hero": *[_type == "hero" && _id == "hero"][0],
  "video": *[_type == "video" && _id == "video"][0],
  "logos": *[_type == "logos" && _id == "logos"][0]{ heading, brands },
  "problem": *[_type == "problem" && _id == "problem"][0],
  "services": *[_type == "service"] | order(order asc),
  "process": *[_type == "process" && _id == "process"][0],
  "faqs": *[_type == "faq"] | order(order asc){ question, answer, order, sectionHeading, sectionSubheading },
  "footer": *[_type == "footer" && _id == "footer"][0]
}`

function Home() {
  const heroRef = useRef(null)
  const { data: sanityData, loading, error } = useSanity(LANDING_PAGE_QUERY)
  const showCTA = useScrolledPast(heroRef, 0.3)

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        background: '#2563EB',
        color: '#fff',
        fontFamily: "'Sora', sans-serif",
        fontSize: '1.2rem',
        fontWeight: 600
      }}>
        Loading...
      </div>
    )
  }

  if (error) {
    console.error('Failed to load Sanity CMS data:', error)
  }

  return (
    <SanityDataContext.Provider value={sanityData || {}}>
      <div className="reveal-wrapper">
        {/* Attach ref to a sentinel div at the top of hero */}
        <div ref={heroRef} id="hero-sentinel" style={{ position: 'absolute', top: 0, width: '100%', height: '100vh', pointerEvents: 'none' }} aria-hidden="true" />
        <main className="main-content">
          <Navbar />
          <HeroOld />
          <StrategyVideo />
          <Logos />
          <Problem />
          <Services />
          <Process />
          <FAQ />
        </main>
        <div className="sticky-footer">
          <Footer />
        </div>
        <FloatingCTA visible={showCTA} />
      </div>
    </SanityDataContext.Provider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}


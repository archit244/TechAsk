import { useRef, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroOld from './components/HeroOld'
import Logos from './components/Logos'
import Problem from './components/Problem'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import StrategyVideo from './components/StrategyVideo'
import ThankYou from './pages/ThankYou'
import FloatingCTA from './components/FloatingCTA'
import { useScrolledPast } from './hooks/useScrolledPast'
import { useSanity } from './lib/useSanity'
import { SanityDataContext } from './lib/sanityContext'

// Import Service subpages
import PerformanceMarketing from './pages/PerformanceMarketing'
import SeoLocalSeo from './pages/SeoLocalSeo'
import SocialMediaCreative from './pages/SocialMediaCreative'
import WebLandingPages from './pages/WebLandingPages'
import AnalyticsAutomation from './pages/AnalyticsAutomation'
import ContactUs from './pages/ContactUs'

// Import Course pages
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import CourseApply from './pages/CourseApply'
import AboutUs from './pages/AboutUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import TermsAndConditions from './pages/TermsAndConditions'

const LANDING_PAGE_QUERY = `{
  "navbar": *[_type == "navbar" && _id == "navbar"][0],
  "hero": *[_type == "hero" && _id == "hero"][0],
  "video": *[_type == "video" && _id == "video"][0],
  "logos": *[_type == "logos" && _id == "logos"][0]{ heading, brands },
  "problem": *[_type == "problem" && _id == "problem"][0],
  "services": *[_type == "service"] | order(order asc),
  "caseStudies": *[_type == "caseStudy"] | order(order asc),
  "process": *[_type == "process" && _id == "process"][0],
  "faqs": *[_type == "faq"] | order(order asc){ question, answer, order, sectionHeading, sectionSubheading },
  "footer": *[_type == "footer" && _id == "footer"][0],
  "thankyou": *[_type == "thankyou" && _id == "thankyou"][0]
}`

function Home() {
  const heroRef = useRef(null)
  const location = useLocation()
  const showCTA = useScrolledPast(heroRef, 0.3)

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        if (id === 'contact') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          const el = document.getElementById('contact-name');
          if (el) el.focus();
        } else {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location]);

  return (
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
        <CaseStudies />
        <Process />
        <FAQ />
      </main>
      <div className="sticky-footer">
        <Footer />
      </div>
      <FloatingCTA visible={showCTA} />
    </div>
  )
}

export default function App() {
  const { data: sanityData, loading, error } = useSanity(LANDING_PAGE_QUERY)

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/seo-local-seo" element={<SeoLocalSeo />} />
          <Route path="/services/social-media-creative" element={<SocialMediaCreative />} />
          <Route path="/services/web-landing-pages" element={<WebLandingPages />} />
          <Route path="/services/analytics-automation" element={<AnalyticsAutomation />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/apply" element={<CourseApply />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </BrowserRouter>
    </SanityDataContext.Provider>
  )
}

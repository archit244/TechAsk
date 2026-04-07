import Navbar from './components/Navbar'
import HeroOld from './components/HeroOld'
import VideoShowcase from './components/VideoShowcase'
import Logos from './components/Logos'
import Problem from './components/Problem'
import AboutUs from './components/AboutUs'

import Process from './components/Process'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import IntroAnimation from './components/IntroAnimation'

export default function App() {
  return (
    <IntroAnimation>
      <Navbar />

      {/* All content above the footer sits in a z-index:2 container
          so the sticky footer "reveals" from behind as you scroll */}
      <div style={{ position: 'relative', zIndex: 2, backgroundColor: '#fff' }}>
        <HeroOld />
        <VideoShowcase />
        <Logos />
        <Problem />
        <AboutUs />
        <Process />
        <FAQ />
      </div>

      <Footer />
    </IntroAnimation>
  )
}


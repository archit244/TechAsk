import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoShowcase from './components/VideoShowcase'
import Logos from './components/Logos'
import Problem from './components/Problem'
import Services from './components/Services'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'
import Leadership from './components/Leadership'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoShowcase />
      <Logos />
      <Problem />
      <Services />
      <Process />
      {/* <CaseStudies /> */}
      {/* <Leadership /> */}
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}

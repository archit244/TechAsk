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

function Home() {
  return (
    <div className="reveal-wrapper">
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
    </div>
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


import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Navbar        from './components/Navbar'
import Ticker        from './components/Ticker'
import FloatingEqs   from './components/FloatingEqs'
import Hero          from './components/Hero'
import About         from './components/About'
import Publications  from './components/Publications'
import Teaching      from './components/Teaching'
import StudentEnquiry from './components/StudentEnquiry'
import LatexShowcase from './components/LatexShowcase'
import Timeline      from './components/Timeline'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {

  // ── Lenis smooth scroll + GSAP integration ──────────────
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    gsap.ticker.lagSmoothing(0)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      {/* Fixed background layers */}
      <FloatingEqs />

      {/* Fixed top chrome */}
      <Ticker />
      <Navbar />

      {/* Page content */}
      <main>
        <Hero />
        <About />
        <Publications />
        <Teaching />
        <StudentEnquiry />
        <LatexShowcase />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

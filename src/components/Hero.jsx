// import { useEffect, useRef, useState } from 'react'
// import gsap from 'gsap'
// import { professor } from '../data/professor'

// import professorImage from '../assets/professor.jpg'

// // Euclidean construction SVG — animated with GSAP
// <div className="hero-svg-wrap"><img
//   src={professorImage}
//   alt="Professor"
//   style={{
//     width: '220px',
//     height: '220px',
//     objectFit: 'cover',
//     borderRadius: '50%',
//     border: '3px solid rgba(200,169,110,0.5)',
//     marginBottom: '30px',
//     boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
//     zIndex: 5,
//     position: 'relative'
//   }}
// /></div>
// function GeometricConstruction() {
//   const svgRef = useRef(null)

//   useEffect(() => {
//     const svg = svgRef.current
//     if (!svg) return

//     const lines  = svg.querySelectorAll('.construct-line')
//     const arcs   = svg.querySelectorAll('.construct-arc')
//     const labels = svg.querySelectorAll('.construct-label')
//     const dots   = svg.querySelectorAll('.construct-dot')

//     const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })

//     // set initial state
//     gsap.set(lines,  { strokeDashoffset: (i, el) => el.getTotalLength?.() ?? 200, opacity: 0 })
//     gsap.set(arcs,   { strokeDashoffset: (i, el) => el.getTotalLength?.() ?? 300, opacity: 0 })
//     gsap.set(labels, { opacity: 0, y: 8 })
//     gsap.set(dots,   { scale: 0, transformOrigin: 'center' })

//     // Draw base line
//     tl.to(lines[0], { strokeDashoffset: 0, opacity: 1, duration: 1, ease: 'power2.inOut' })
//     // Points A, B
//     tl.to([dots[0], dots[1]], { scale: 1, opacity: 1, duration: 0.3, stagger: 0.2, ease: 'back.out' }, '-=0.2')
//     tl.to([labels[0], labels[1]], { opacity: 1, y: 0, duration: 0.3, stagger: 0.15 }, '-=0.2')
//     // Arc from A
//     tl.to(arcs[0], { strokeDashoffset: 0, opacity: 1, duration: 1.2, ease: 'power1.inOut' }, '+=0.2')
//     // Arc from B
//     tl.to(arcs[1], { strokeDashoffset: 0, opacity: 1, duration: 1.2, ease: 'power1.inOut' }, '-=0.8')
//     // Point C appears
//     tl.to(dots[2], { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' })
//     tl.to(labels[2], { opacity: 1, y: 0, duration: 0.3 }, '-=0.2')
//     // Draw AC
//     tl.to(lines[1], { strokeDashoffset: 0, opacity: 1, duration: 0.9, ease: 'power2.inOut' })
//     // Draw BC
//     tl.to(lines[2], { strokeDashoffset: 0, opacity: 1, duration: 0.9, ease: 'power2.inOut' }, '-=0.6')
//     // Gold fill triangle
//     tl.to(svg.querySelector('.tri-fill'), { opacity: 0.06, duration: 0.6, ease: 'power1.inOut' })
//     // QED symbol
//     tl.to(svg.querySelector('.qed'), { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out' }, '+=0.3')

//     // Fade out after displaying
//     tl.to(svg, { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, '+=2.5')
//     tl.to(svg, { opacity: 1, duration: 0.1 })
//     tl.call(() => {
//       gsap.set(lines,  { strokeDashoffset: (i, el) => el.getTotalLength?.() ?? 200, opacity: 0 })
//       gsap.set(arcs,   { strokeDashoffset: (i, el) => el.getTotalLength?.() ?? 300, opacity: 0 })
//       gsap.set(labels, { opacity: 0, y: 8 })
//       gsap.set(dots,   { scale: 0 })
//       gsap.set(svg.querySelector('.tri-fill'), { opacity: 0 })
//       gsap.set(svg.querySelector('.qed'), { opacity: 0, scale: 0.7 })
//     })

//     return () => tl.kill()
//   }, [])

//   const stroke = { stroke: '#C8A96E', fill: 'none', strokeWidth: 1.5 }
//   const strokeFaint = { ...stroke, opacity: 0.35 }

//   return (
//     <svg ref={svgRef} viewBox="0 0 340 300" style={{
//       width: '100%', maxWidth: '400px',
//       opacity: 1,
//     }}>
//       {/* Triangle fill */}
//       <polygon className="tri-fill" points="170,30 50,250 290,250"
//         fill="#C8A96E" opacity="0" />

//       {/* Arc from A (50,250), radius ~140 */}
//       <path className="construct-arc"
//         d="M 50,110 A 140 140 0 0 1 190,250"
//         {...strokeFaint}
//         strokeDasharray="300" strokeDashoffset="300" />

//       {/* Arc from B (290,250), radius ~140 */}
//       <path className="construct-arc"
//         d="M 150,110 A 140 140 0 0 0 290,250"
//         {...strokeFaint}
//         strokeDasharray="300" strokeDashoffset="300" />

//       {/* Base line A→B */}
//       <line className="construct-line" x1="50" y1="250" x2="290" y2="250"
//         {...stroke} strokeDasharray="240" strokeDashoffset="240" />

//       {/* Line A→C */}
//       <line className="construct-line" x1="50" y1="250" x2="170" y2="30"
//         {...stroke} strokeDasharray="260" strokeDashoffset="260" />

//       {/* Line B→C */}
//       <line className="construct-line" x1="290" y1="250" x2="170" y2="30"
//         {...stroke} strokeDasharray="260" strokeDashoffset="260" />

//       {/* Points */}
//       <circle className="construct-dot" cx="50"  cy="250" r="4" fill="#C8A96E" opacity="0" />
//       <circle className="construct-dot" cx="290" cy="250" r="4" fill="#C8A96E" opacity="0" />
//       <circle className="construct-dot" cx="170" cy="30"  r="4" fill="#4FC3F7" opacity="0" />

//       {/* Labels */}
//       <text className="construct-label" x="36" y="272"
//         fill="#C8A96E" fontSize="14" fontFamily="EB Garamond, serif" fontStyle="italic" opacity="0">A</text>
//       <text className="construct-label" x="295" y="272"
//         fill="#C8A96E" fontSize="14" fontFamily="EB Garamond, serif" fontStyle="italic" opacity="0">B</text>
//       <text className="construct-label" x="162" y="20"
//         fill="#4FC3F7" fontSize="14" fontFamily="EB Garamond, serif" fontStyle="italic" opacity="0">C</text>

//       {/* Angle arc at A */}
//       <path d="M 75,250 A 25 25 0 0 1 62,232"
//         stroke="#4FC3F7" fill="none" strokeWidth="1" opacity="0.3" />

//       {/* QED box */}
//       <rect className="qed" x="300" y="255" width="14" height="14"
//         stroke="#C8A96E" fill="none" strokeWidth="1.5" opacity="0" />
//     </svg>
//   )
// }

// // Typewriter cycling through taglines
// function Typewriter({ items }) {
//   const [index, setIndex] = useState(0)
//   const [displayed, setDisplayed] = useState('')
//   const [phase, setPhase] = useState('typing') // 'typing' | 'waiting' | 'deleting'

//   useEffect(() => {
//     const text = items[index]
//     let timer

//     if (phase === 'typing') {
//       if (displayed.length < text.length) {
//         timer = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 60)
//       } else {
//         timer = setTimeout(() => setPhase('waiting'), 1800)
//       }
//     } else if (phase === 'waiting') {
//       timer = setTimeout(() => setPhase('deleting'), 600)
//     } else if (phase === 'deleting') {
//       if (displayed.length > 0) {
//         timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
//       } else {
//         setIndex((index + 1) % items.length)
//         setPhase('typing')
//       }
//     }
//     return () => clearTimeout(timer)
//   }, [displayed, phase, index, items])

//   return (
//     <span>
//       <span style={{ color: 'var(--accent-cyan)' }}>{displayed}</span>
//       <span style={{ animation: 'cursor-blink 1s infinite', color: 'var(--accent-gold)' }}>|</span>
//     </span>
//   )
// }

// export default function Hero() {
//   const heroRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ delay: 0.3 })

//       tl.from('.hero-label',   { y: 30, opacity: 0, duration: 0.7, ease: 'expo.out' })
//         .from('.hero-name',    { y: 60, opacity: 0, duration: 1,   ease: 'expo.out' }, '-=0.3')
//         .from('.hero-role',    { y: 30, opacity: 0, duration: 0.7, ease: 'expo.out' }, '-=0.5')
//         .from('.hero-typewr',  { y: 20, opacity: 0, duration: 0.6, ease: 'expo.out' }, '-=0.3')
//         .from('.hero-cta',     { y: 20, opacity: 0, duration: 0.6, ease: 'expo.out' }, '-=0.3')
//         .from('.hero-svg-wrap',{ opacity: 0, x: 40, duration: 1.2, ease: 'expo.out' }, '-=1.2')
//     }, heroRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section id="hero" ref={heroRef} style={{
//       minHeight: '100vh',
//       display: 'flex', alignItems: 'center',
//       paddingTop: '120px', paddingBottom: '80px',
//       position: 'relative', zIndex: 1,
//     }}>
//       <div className="container" style={{
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         gap: 'clamp(40px, 6vw, 80px)',
//         alignItems: 'center',
//       }}>
//         {/* LEFT — Text */}
//         <div>
//           <div className="section-label hero-label" style={{ marginBottom: '28px' }}>
//             PhD · Mathematics
//           </div>

//           <h1 className="hero-name" style={{
//             fontFamily: 'var(--font-display)',
//             fontSize: 'clamp(48px, 7vw, 96px)',
//             fontWeight: 500,
//             lineHeight: 1.05,
//             marginBottom: '20px',
//             fontStyle: 'italic',
//           }}>
//             {professor.name}
//           </h1>

//           <p className="hero-role" style={{
//             fontFamily: 'var(--font-mono)',
//             fontSize: 'clamp(12px, 1.5vw, 14px)',
//             letterSpacing: '0.15em',
//             textTransform: 'uppercase',
//             color: 'var(--text-muted)',
//             marginBottom: '28px',
//           }}>
//             {professor.institution}
//           </p>

//           <div className="hero-typewr" style={{
//             fontFamily: 'var(--font-display)',
//             fontSize: 'clamp(20px, 2.5vw, 28px)',
//             fontStyle: 'italic',
//             minHeight: '40px',
//             marginBottom: '48px',
//           }}>
//             <Typewriter items={professor.taglines} />
//           </div>

//           <div className="hero-cta" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
//             <a href="#publications" style={{
//               display: 'inline-flex', alignItems: 'center', gap: '8px',
//               background: 'var(--accent-gold)',
//               color: '#0A0A0F',
//               fontFamily: 'var(--font-mono)',
//               fontSize: '13px',
//               letterSpacing: '0.08em',
//               padding: '14px 28px',
//               borderRadius: '8px',
//               fontWeight: 500,
//               transition: 'all var(--transition-fast)',
//             }}
//             onMouseEnter={e => { e.currentTarget.style.background = '#D9BC7E'; e.currentTarget.style.transform = 'translateY(-2px)' }}
//             onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent-gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
//             >
//               View Research ↗
//             </a>
//             <a href="#contact" style={{
//               display: 'inline-flex', alignItems: 'center', gap: '8px',
//               background: 'transparent',
//               color: 'var(--text-primary)',
//               fontFamily: 'var(--font-mono)',
//               fontSize: '13px',
//               letterSpacing: '0.08em',
//               padding: '14px 28px',
//               borderRadius: '8px',
//               border: '1px solid var(--border-glass)',
//               transition: 'all var(--transition-fast)',
//             }}
//             onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-gold)'; e.currentTarget.style.color = 'var(--accent-gold)' }}
//             onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.color = 'var(--text-primary)' }}
//             >
//               ∴ Get in Touch
//             </a>
//           </div>
//         </div>

//         {/* RIGHT — Geometric SVG */}
//         <div className="hero-svg-wrap" style={{
//           display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
//           position: 'relative',
//         }}>
//           {/* Ambient glow */}
//           <div style={{
//             position: 'absolute',
//             width: '300px', height: '300px',
//             background: 'radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)',
//             borderRadius: '50%',
//             filter: 'blur(40px)',
//           }} />
//           <GeometricConstruction />
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div style={{
//         position: 'absolute', bottom: '40px', left: '50%',
//         transform: 'translateX(-50%)',
//         display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
//       }}>
//         <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
//           ∴ scroll
//         </span>
//         <div style={{
//           width: '1px', height: '40px',
//           background: 'linear-gradient(to bottom, var(--accent-gold), transparent)',
//           animation: 'float-up 2s ease-in-out infinite',
//         }} />
//       </div>

//       {/* Responsive */}
//       <style>{`
//         @media (max-width: 768px) {
//           #hero .container {
//             grid-template-columns: 1fr !important;
//           }
//           .hero-svg-wrap { display: none !important; }
//         }
//       `}</style>
//     </section>
//   )
// }

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { professor } from '../data/professor'


// Geometric Construction SVG Component
function GeometricConstruction() {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const lines = svg.querySelectorAll('.construct-line')
    const arcs = svg.querySelectorAll('.construct-arc')
    const labels = svg.querySelectorAll('.construct-label')
    const dots = svg.querySelectorAll('.construct-dot')

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })

    // Set initial state
    gsap.set(lines, { strokeDashoffset: (i, el) => el.getTotalLength?.() ?? 200, opacity: 0 })
    gsap.set(arcs, { strokeDashoffset: (i, el) => el.getTotalLength?.() ?? 300, opacity: 0 })
    gsap.set(labels, { opacity: 0, y: 8 })
    gsap.set(dots, { scale: 0, transformOrigin: 'center' })

    // Animation sequence
    tl.to(lines[0], { strokeDashoffset: 0, opacity: 1, duration: 1, ease: 'power2.inOut' })
      .to([dots[0], dots[1]], { scale: 1, opacity: 1, duration: 0.3, stagger: 0.2, ease: 'back.out' }, '-=0.2')
      .to([labels[0], labels[1]], { opacity: 1, y: 0, duration: 0.3, stagger: 0.15 }, '-=0.2')
      .to(arcs[0], { strokeDashoffset: 0, opacity: 1, duration: 1.2, ease: 'power1.inOut' }, '+=0.2')
      .to(arcs[1], { strokeDashoffset: 0, opacity: 1, duration: 1.2, ease: 'power1.inOut' }, '-=0.8')
      .to(dots[2], { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' })
      .to(labels[2], { opacity: 1, y: 0, duration: 0.3 }, '-=0.2')
      .to(lines[1], { strokeDashoffset: 0, opacity: 1, duration: 0.9, ease: 'power2.inOut' })
      .to(lines[2], { strokeDashoffset: 0, opacity: 1, duration: 0.9, ease: 'power2.inOut' }, '-=0.6')
      .to(svg.querySelector('.tri-fill'), { opacity: 0.06, duration: 0.6, ease: 'power1.inOut' })
      .to(svg.querySelector('.qed'), { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out' }, '+=0.3')
      .to(svg, { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, '+=2.5')
      .to(svg, { opacity: 1, duration: 0.1 })
      .call(() => {
        gsap.set(lines, { strokeDashoffset: (i, el) => el.getTotalLength?.() ?? 200, opacity: 0 })
        gsap.set(arcs, { strokeDashoffset: (i, el) => el.getTotalLength?.() ?? 300, opacity: 0 })
        gsap.set(labels, { opacity: 0, y: 8 })
        gsap.set(dots, { scale: 0 })
        gsap.set(svg.querySelector('.tri-fill'), { opacity: 0 })
        gsap.set(svg.querySelector('.qed'), { opacity: 0, scale: 0.7 })
      })

    return () => tl.kill()
  }, [])

  const stroke = { stroke: '#C8A96E', fill: 'none', strokeWidth: 1.5 }
  const strokeFaint = { ...stroke, opacity: 0.35 }

  return (
    <svg ref={svgRef} viewBox="0 0 340 300" style={{ width: '100%', maxWidth: '400px', opacity: 1 }}>
      <polygon className="tri-fill" points="170,30 50,250 290,250" fill="#C8A96E" opacity="0" />
      
      <path className="construct-arc"
        d="M 50,110 A 140 140 0 0 1 190,250"
        {...strokeFaint}
        strokeDasharray="300" strokeDashoffset="300" />
      
      <path className="construct-arc"
        d="M 150,110 A 140 140 0 0 0 290,250"
        {...strokeFaint}
        strokeDasharray="300" strokeDashoffset="300" />
      
      <line className="construct-line" x1="50" y1="250" x2="290" y2="250"
        {...stroke} strokeDasharray="240" strokeDashoffset="240" />
      
      <line className="construct-line" x1="50" y1="250" x2="170" y2="30"
        {...stroke} strokeDasharray="260" strokeDashoffset="260" />
      
      <line className="construct-line" x1="290" y1="250" x2="170" y2="30"
        {...stroke} strokeDasharray="260" strokeDashoffset="260" />
      
      <circle className="construct-dot" cx="50" cy="250" r="4" fill="#C8A96E" opacity="0" />
      <circle className="construct-dot" cx="290" cy="250" r="4" fill="#C8A96E" opacity="0" />
      <circle className="construct-dot" cx="170" cy="30" r="4" fill="#4FC3F7" opacity="0" />
      
      <text className="construct-label" x="36" y="272"
        fill="#C8A96E" fontSize="14" fontFamily="EB Garamond, serif" fontStyle="italic" opacity="0">A</text>
      <text className="construct-label" x="295" y="272"
        fill="#C8A96E" fontSize="14" fontFamily="EB Garamond, serif" fontStyle="italic" opacity="0">B</text>
      <text className="construct-label" x="162" y="20"
        fill="#4FC3F7" fontSize="14" fontFamily="EB Garamond, serif" fontStyle="italic" opacity="0">C</text>
      
      <path d="M 75,250 A 25 25 0 0 1 62,232"
        stroke="#4FC3F7" fill="none" strokeWidth="1" opacity="0.3" />
      
      <rect className="qed" x="300" y="255" width="14" height="14"
        stroke="#C8A96E" fill="none" strokeWidth="1.5" opacity="0" />
    </svg>
  )
}

// Typewriter Component
function Typewriter({ items }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const text = items[index]
    let timer

    if (phase === 'typing') {
      if (displayed.length < text.length) {
        timer = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 60)
      } else {
        timer = setTimeout(() => setPhase('waiting'), 1800)
      }
    } else if (phase === 'waiting') {
      timer = setTimeout(() => setPhase('deleting'), 600)
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setIndex((index + 1) % items.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(timer)
  }, [displayed, phase, index, items])

  return (
    <span>
      <span style={{ color: 'var(--accent-cyan)' }}>{displayed}</span>
      <span style={{ animation: 'cursor-blink 1s infinite', color: 'var(--accent-gold)' }}>|</span>
    </span>
  )
}

// Hero Component
export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.hero-label', { y: 30, opacity: 0, duration: 0.7, ease: 'expo.out' })
        .from('.hero-name', { y: 60, opacity: 0, duration: 1, ease: 'expo.out' }, '-=0.3')
        .from('.hero-role', { y: 30, opacity: 0, duration: 0.7, ease: 'expo.out' }, '-=0.5')
        .from('.hero-typewr', { y: 20, opacity: 0, duration: 0.6, ease: 'expo.out' }, '-=0.3')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6, ease: 'expo.out' }, '-=0.3')
        .from('.hero-svg-wrap', { opacity: 0, x: 40, duration: 1.2, ease: 'expo.out' }, '-=1.2')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={heroRef} style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '120px',
      paddingBottom: '80px',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'center'
      }}>
        {/* Left Column - Text Content */}
        <div>
          <div className="section-label hero-label" style={{ marginBottom: '28px' }}>
            PhD · Mathematics
          </div>

          <h1 className="hero-name" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 500,
            lineHeight: 1.05,
            marginBottom: '20px',
            fontStyle: 'italic'
          }}>
            {professor.name}
          </h1>

          <p className="hero-role" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(12px, 1.5vw, 14px)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '28px'
          }}>
            {professor.institution}
          </p>

          <div className="hero-typewr" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontStyle: 'italic',
            minHeight: '40px',
            marginBottom: '48px'
          }}>
            <Typewriter items={professor.taglines} />
          </div>

          <div className="hero-cta" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#publications" className="btn-primary" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--accent-gold)',
              color: '#0A0A0F',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              letterSpacing: '0.08em',
              padding: '14px 28px',
              borderRadius: '8px',
              fontWeight: 500,
              transition: 'all var(--transition-fast)',
              textDecoration: 'none'
            }}>
              View Research ↗
            </a>
            
            <a href="#contact" className="btn-secondary" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              letterSpacing: '0.08em',
              padding: '14px 28px',
              borderRadius: '8px',
              border: '1px solid var(--border-glass)',
              transition: 'all var(--transition-fast)',
              textDecoration: 'none'
            }}>
              ∴ Get in Touch
            </a>
          </div>
        </div>

        {/* Right Column - Profile Image & Geometric SVG */}
        <div className="hero-svg-wrap" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Ambient Glow */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)'
          }} />
          
          {/* Profile Image
          <img
            src={professorImage}
            alt="Professor Vishnu"
            style={{
              width: '220px',
              height: '220px',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '3px solid rgba(200,169,110,0.5)',
              marginBottom: '30px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
              zIndex: 5,
              position: 'relative'
            }}
          /> */}
          
          <GeometricConstruction />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em'
        }}>
          ∴ scroll
        </span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--accent-gold), transparent)',
          animation: 'float-up 2s ease-in-out infinite'
        }} />
      </div>

      {/* Global Styles - Fixed syntax */}
      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes float-up {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-10px); opacity: 1; }
        }
        
        .btn-primary:hover {
          background: #D9BC7E;
          transform: translateY(-2px);
        }
        
        .btn-secondary:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
        }
        
        @media (max-width: 768px) {
          #hero .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          
          .hero-svg-wrap {
            display: flex !important;
            margin-top: 40px;
          }
          
          .hero-cta {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
import { useEffect, useRef, useState } from 'react'
import katex from 'katex'
import { equations } from '../data/professor'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function RenderedEquation({ latex, visible }) {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      try {
        katex.render(latex, ref.current, {
          throwOnError: false,
          displayMode: true,
          output: 'html',
        })
      } catch (e) {
        if (ref.current) ref.current.textContent = latex
      }
    }
  }, [latex])

  return (
    <div ref={ref} style={{
      fontSize: 'clamp(20px, 4vw, 36px)',
      color: 'var(--text-primary)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
      transition: 'opacity 0.7s ease, transform 0.7s ease',
      textAlign: 'center',
    }} />
  )
}

export default function LatexShowcase() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const ref = useRef(null)

  // Cycle equations
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % equations.length)
        setVisible(true)
      }, 700)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.latex-section-inner', {
        y: 50, opacity: 0, duration: 1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.latex-section-inner', start: 'top 80%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const eq = equations[current]

  return (
    <section id="latex" ref={ref} style={{
      padding: 'var(--section-pad) 0',
      position: 'relative', zIndex: 1,
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>§ LaTeX</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontStyle: 'italic',
            marginTop: '16px',
          }}>
            {'{ LaTeX Mastery }'}
          </h2>
          <p style={{ marginTop: '16px', color: 'var(--text-muted)', maxWidth: '500px', margin: '16px auto 0' }}>
            Typesetting mathematics that communicates with precision.
          </p>
        </div>

        <div className="latex-section-inner" style={{
          maxWidth: '780px', margin: '0 auto',
        }}>
          {/* Big equation display */}
          <div className="glass" style={{
            padding: 'clamp(40px, 6vw, 80px) clamp(24px, 4vw, 60px)',
            textAlign: 'center',
            background: 'rgba(255,255,255,0.03)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Ambient glow behind equation */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(79,195,247,0.04) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <RenderedEquation latex={eq.latex} visible={visible} />

            {/* Equation name */}
            <div style={{
              marginTop: '32px',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.5s ease 0.2s',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 2vw, 22px)',
                fontStyle: 'italic',
                color: 'var(--accent-gold)',
                marginBottom: '8px',
              }}>
                {eq.name}
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--text-muted)',
                maxWidth: '480px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}>
                {eq.note}
              </p>
            </div>
          </div>

          {/* Dot indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px' }}>
            {equations.map((_, i) => (
              <button key={i}
                onClick={() => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true) }, 400) }}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === current ? 'var(--accent-gold)' : 'rgba(200,169,110,0.2)',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Source code preview */}
          <div style={{ marginTop: '32px' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px', letterSpacing: '0.1em',
              color: 'var(--text-muted)', marginBottom: '12px',
              textTransform: 'uppercase',
            }}>
              LaTeX Source
            </div>
            <div style={{
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '8px',
              padding: '16px 20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              color: 'var(--accent-cyan)',
              letterSpacing: '0.02em',
              overflow: 'auto',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}>
              ${`$`}{eq.latex}{`$`}$
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

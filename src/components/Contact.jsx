import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { professor } from '../data/professor'

const LINKS = [
  { label: 'Google Scholar', symbol: '∑', href: professor.googleScholar },
  { label: 'ResearchGate',   symbol: '∂', href: professor.researchGate  },
  { label: 'LinkedIn',       symbol: '⊕', href: professor.linkedin       },
]

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-panel', {
        y: 60, opacity: 0, duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.contact-panel', start: 'top 80%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={ref} style={{
      padding: 'var(--section-pad) 0',
      position: 'relative', zIndex: 1,
    }}>
      <div className="container">
        <div className="glass contact-panel" style={{
          maxWidth: '680px', margin: '0 auto',
          padding: 'clamp(40px, 6vw, 80px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Ambient glow */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center bottom, rgba(200,169,110,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '32px' }}>
            ∴ Let's Connect
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontStyle: 'italic',
            marginBottom: '20px',
          }}>
            Open to Collaboration
          </h2>

          <p style={{
            fontSize: 'clamp(15px, 1.5vw, 17px)',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            marginBottom: '40px',
          }}>
            Whether you're a researcher seeking collaboration, a student seeking mentorship,
            or an institution with opportunities — I'd be glad to hear from you.
          </p>

          {/* Inline LaTeX */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '14px', letterSpacing: '0.04em',
            color: 'var(--accent-gold)',
            background: 'rgba(200,169,110,0.06)',
            padding: '12px 20px', borderRadius: '8px',
            display: 'inline-block',
            marginBottom: '40px',
          }}>
            Contact = f(curiosity)
          </div>

          {/* Email */}
          <div style={{ marginBottom: '40px' }}>
            <a href={`mailto:${professor.email}`} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              color: 'var(--accent-gold)',
              letterSpacing: '0.06em',
            }}>
              {professor.email}
            </a>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px', color: 'var(--text-muted)',
              marginTop: '8px', letterSpacing: '0.06em',
            }}>
              {professor.institution}
            </div>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {LINKS.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px', letterSpacing: '0.06em',
                color: 'var(--text-muted)',
                border: '1px solid var(--border-glass)',
                padding: '10px 18px',
                borderRadius: '8px',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent-gold)'
                e.currentTarget.style.borderColor = 'var(--accent-gold)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-muted)'
                e.currentTarget.style.borderColor = 'var(--border-glass)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              >
                <span style={{ color: 'var(--accent-cyan)' }}>{link.symbol}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { teaching } from '../data/professor'

function TeachCard({ item }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="glass teach-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        minWidth: '260px',
        padding: 'clamp(28px, 3vw, 44px)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'transform var(--transition-smooth), border-color var(--transition-smooth), box-shadow var(--transition-smooth)',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark symbol */}
      <div style={{
        position: 'absolute', right: '-10px', bottom: '-20px',
        fontFamily: 'var(--font-display)',
        fontSize: '120px',
        color: hovered ? 'rgba(200,169,110,0.06)' : 'rgba(200,169,110,0.03)',
        userSelect: 'none', pointerEvents: 'none',
        transition: 'color var(--transition-smooth)',
        lineHeight: 1,
      }}>
        {item.symbol}
      </div>

      {/* Symbol */}
      <div style={{
        width: '56px', height: '56px',
        background: hovered ? 'rgba(200,169,110,0.12)' : 'rgba(200,169,110,0.07)',
        border: `1px solid ${hovered ? 'rgba(200,169,110,0.3)' : 'rgba(200,169,110,0.12)'}`,
        borderRadius: '12px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: '28px',
        color: 'var(--accent-gold)',
        marginBottom: '24px',
        transition: 'all var(--transition-smooth)',
      }}>
        {item.symbol}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(20px, 2vw, 24px)',
        fontWeight: 500,
        marginBottom: '4px',
      }}>
        {item.title}
      </h3>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--accent-cyan)',
        marginBottom: '20px',
      }}>
        {item.subtitle}
      </div>

      <p style={{
        fontSize: '15px', lineHeight: 1.7,
        color: 'var(--text-muted)',
        marginBottom: '28px',
      }}>
        {item.description}
      </p>

      {/* Topics */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {item.topics.map(t => (
          <span key={t} className="tag" style={{ fontSize: '11px' }}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Teaching() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.teach-card', {
        y: 80, opacity: 0,
        rotateX: 12,
        duration: 1, stagger: 0.2,
        ease: 'expo.out',
        transformOrigin: 'bottom center',
        scrollTrigger: { trigger: '.teach-cards', start: 'top 80%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="teaching" ref={ref} style={{
      padding: 'var(--section-pad) 0',
      position: 'relative', zIndex: 1,
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>§ Teaching</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontStyle: 'italic',
            marginTop: '16px',
          }}>
            What I Teach
          </h2>
        </div>

        <div className="teach-cards" style={{
          display: 'flex', gap: '24px', flexWrap: 'wrap',
          perspective: '1000px',
        }}>
          {teaching.map(item => <TeachCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  )
}

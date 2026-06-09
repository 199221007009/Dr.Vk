import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { timeline } from '../data/professor'

export default function Timeline() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-line-fill', {
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: '.timeline-wrap', start: 'top 70%', end: 'bottom 70%', scrub: 1 }
      })

      gsap.from('.tl-item', {
        x: (i) => i % 2 === 0 ? -50 : 50,
        opacity: 0, duration: 0.8, stagger: 0.15,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.timeline-wrap', start: 'top 75%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="timeline" ref={ref} style={{
      padding: 'var(--section-pad) 0',
      position: 'relative', zIndex: 1,
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>§ Journey</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontStyle: 'italic',
            marginTop: '16px',
          }}>
            Academic Journey
          </h2>
        </div>

        <div className="timeline-wrap" style={{
          maxWidth: '700px', margin: '0 auto',
          position: 'relative',
        }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0,
            width: '1px',
            background: 'rgba(200,169,110,0.1)',
            transform: 'translateX(-50%)',
          }}>
            <div className="timeline-line-fill" style={{
              width: '100%', height: '100%',
              background: 'linear-gradient(to bottom, var(--accent-gold), rgba(200,169,110,0.2))',
            }} />
          </div>

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={i} className="tl-item" style={{
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                marginBottom: '40px',
                paddingLeft: isLeft ? '0' : '50%',
                paddingRight: isLeft ? '50%' : '0',
              }}>
                <div className="glass" style={{
                  padding: '20px 24px',
                  maxWidth: '280px',
                  position: 'relative',
                  marginLeft: isLeft ? '0' : '24px',
                  marginRight: isLeft ? '24px' : '0',
                }}>
                  {/* Node dot */}
                  <div style={{
                    position: 'absolute',
                    [isLeft ? 'right' : 'left']: '-36px',
                    top: '50%', transform: 'translateY(-50%)',
                    width: '14px', height: '14px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '2px solid var(--accent-gold)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '8px',
                    color: 'var(--accent-gold)',
                  }}>
                    •
                  </div>

                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px', letterSpacing: '0.12em',
                    color: 'var(--accent-gold)',
                    marginBottom: '6px',
                  }}>
                    {item.year}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px', fontWeight: 500,
                    marginBottom: '4px',
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                  }}>
                    {item.detail}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile: single column */}
      <style>{`
        @media (max-width: 600px) {
          .tl-item {
            justify-content: flex-start !important;
            padding-left: 40px !important;
            padding-right: 0 !important;
          }
          .tl-item .glass {
            margin-left: 16px !important;
            margin-right: 0 !important;
            max-width: 100% !important;
          }
          .timeline-wrap > div:first-child { left: 20px !important; }
        }
      `}</style>
    </section>
  )
}

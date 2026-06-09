import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { publications, professor } from '../data/professor'

function PubCard({ pub, index }) {
  const isEven = index % 2 === 0

  return (
    <div className={`pub-card pub-card-${index}`} style={{
      marginLeft: isEven ? '0' : 'auto',
      maxWidth: '680px',
      marginBottom: '32px',
    }}>
      <div className="glass" style={{ padding: 'clamp(24px, 3vw, 40px)', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: '24px', right: '24px',
          fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em',
          color: 'var(--accent-gold)',
          background: 'rgba(200,169,110,0.1)', padding: '4px 10px', borderRadius: '100px',
        }}>{pub.year}</div>

        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2vw, 22px)',
          fontWeight: 500, color: 'var(--text-primary)',
          marginBottom: '10px', lineHeight: 1.3, paddingRight: '60px',
        }}>{pub.title}</h3>

        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.06em',
          color: 'var(--accent-cyan)', marginBottom: '16px',
        }}>{pub.journal} · {pub.volume}</div>

        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '24px' }}>
          {pub.abstract}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {pub.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
          <a href={pub.doi} target="_blank" rel="noreferrer" style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.08em', color: 'var(--accent-gold)',
          }}>DOI ↗</a>
        </div>
      </div>
    </div>
  )
}

export default function Publications() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      publications.forEach((_, i) => {
        const isEven = i % 2 === 0
        gsap.from(`.pub-card-${i}`, {
          x: isEven ? -60 : 60, opacity: 0, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: `.pub-card-${i}`, start: 'top 85%' }
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="publications" ref={ref} style={{ padding: 'var(--section-pad) 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>§ Research</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 56px)', fontStyle: 'italic', marginTop: '16px' }}>
            Publications
          </h2>
          <p style={{ marginTop: '16px', color: 'var(--text-muted)', maxWidth: '500px', margin: '16px auto 0' }}>
            Peer-reviewed research in analysis, geometry, and number theory.
          </p>
        </div>

        {publications.map((pub, i) => <PubCard key={pub.id} pub={pub} index={i} />)}

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href={professor.googleScholar} target="_blank" rel="noreferrer" style={{
            fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.1em',
            color: 'var(--text-muted)', border: '1px solid var(--border-glass)',
            padding: '12px 28px', borderRadius: '8px', display: 'inline-block',
            transition: 'all var(--transition-fast)',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-gold)'; e.currentTarget.style.borderColor = 'var(--accent-gold)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-glass)' }}
          >
            View all on Google Scholar ↗
          </a>
        </div>
      </div>
    </section>
  )
}

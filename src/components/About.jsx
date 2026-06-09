import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { professor } from '../data/professor'
// import professorImage from 'src/assets/professor.png'
import professorImage from '../assets/professor.png'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
const ref = useRef(null)

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from('.about-card', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.about-card',
        start: 'top 80%',
      },
    })

    gsap.from('.about-content', {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.about-card',
        start: 'top 80%',
      },
    })

    gsap.from('.about-image-wrap', {
      x: 100,
      opacity: 0,
      duration: 1.4,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.about-card',
        start: 'top 80%',
      },
    })

    gsap.from('.about-stat', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 85%',
      },
    })
  }, ref)

  return () => ctx.revert()
}, [])

return (
<section
id="about"
ref={ref}
style={{
padding: 'var(--section-pad) 0',
position: 'relative',
zIndex: 1,
}}
> <div className="container">
<div
className="section-label"
style={{
justifyContent: 'center',
marginBottom: '48px',
}}
>
§ About </div>

    <div
      className="glass about-card"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(32px, 5vw, 64px)',
        overflow: 'hidden',
      }}
    >
      <div
        className="about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 0.9fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        <div className="about-content">
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontStyle: 'italic',
              color: 'var(--text-muted)',
              borderLeft: '2px solid var(--accent-gold)',
              paddingLeft: '24px',
              marginBottom: '40px',
              lineHeight: 1.6,
            }}
          >
            "Mathematics is not about numbers, equations,
            computations, or algorithms: it is about understanding."

            <cite
              style={{
                display: 'block',
                marginTop: '12px',
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                fontStyle: 'normal',
                letterSpacing: '0.08em',
                color: 'var(--accent-gold)',
              }}
            >
              — William Paul Thurston
            </cite>
          </blockquote>

          {professor.bio.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: 'clamp(16px, 1.5vw, 18px)',
                lineHeight: 1.9,
                color: 'var(--text-secondary)',
                marginBottom: '22px',
              }}
            >
              {para}
            </p>
          ))}
        </div>

        <div
          className="about-image-wrap"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(79,195,247,.15), transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <img
            src={professorImage}
            alt={professor.name}
            style={{
              maxHeight: '620px',
              width: 'auto',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 2,
              filter: 'drop-shadow(0 25px 45px rgba(0,0,0,.4))',
              transition: 'all .4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                'translateY(-10px) scale(1.03)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                'translateY(0px) scale(1)'
            }}
          />
        </div>
      </div>

      <div
        className="about-stats"
        style={{
          display: 'flex',
          gap: '24px',
          marginTop: '60px',
          flexWrap: 'wrap',
        }}
      >
        {professor.stats.map((stat, i) => (
          <div
            key={i}
            className="about-stat glass"
            style={{
              flex: '1',
              minWidth: '180px',
              padding: '24px',
              textAlign: 'center',
              borderColor: 'rgba(200,169,110,0.15)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 600,
                color: 'var(--accent-gold)',
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              {stat.value}
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <style>{`
    @media (max-width: 900px) {
      .about-grid {
        grid-template-columns: 1fr !important;
      }

      .about-image-wrap {
        order: -1;
        margin-bottom: 30px;
      }
    }
  `}</style>
</section>
)
}
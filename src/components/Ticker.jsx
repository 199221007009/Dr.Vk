import { professor } from '../data/professor'

export default function Ticker() {
  const items = [...professor.ticker, ...professor.ticker] // duplicate for seamless loop

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: '36px', zIndex: 100,
      background: 'rgba(10,10,15,0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(200,169,110,0.1)',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', gap: '80px',
        animation: 'ticker-scroll 40s linear infinite',
        whiteSpace: 'nowrap',
      }}>
        {items.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.06em',
            color: 'var(--text-muted)',
          }}>
            <span style={{ color: 'var(--accent-gold)', marginRight: '12px' }}>◈</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

import { professor } from '../data/professor'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(200,169,110,0.1)',
      padding: '48px 0',
      position: 'relative', zIndex: 1,
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '16px',
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '18px',
          fontStyle: 'italic',
          color: 'var(--text-secondary)',
        }}>
          {professor.name}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontStyle: 'normal',
            fontSize: '14px',
            color: 'var(--accent-gold)',
            marginLeft: '12px',
          }}>
            □
          </span>
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--text-muted)',
          letterSpacing: '0.06em',
        }}>
          © {new Date().getFullYear()} · All rights reserved
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <span style={{ color: 'var(--accent-gold)' }}>∴</span>
          Q.E.D.
        </div>
      </div>
    </footer>
  )
}

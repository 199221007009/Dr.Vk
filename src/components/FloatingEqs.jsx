// Background floating LaTeX equation fragments
const FRAGMENTS = [
  'e^{iπ}+1=0', '∑ 1/n²', '∇²φ=0', '∂f/∂x',
  'lim_{x→0}', '∫∫ dA', 'det(A)=0', '⊗', '∀ε>0',
  '∃δ>0',      '∈ ℝⁿ',  '⊂ ℝ³',  '□', '∴',
  '∮ F·dr',   'ζ(s)',   'Γ(n)',   'Δ', '∞',
]

export default function FloatingEqs() {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
    }}>
      {/* Mathematical grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,169,110,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,169,110,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }} />

      {/* Floating fragments */}
      {FRAGMENTS.map((frag, i) => (
        <span key={i} style={{
          position: 'absolute',
          left: `${(i * 347 + 13) % 90 + 5}%`,
          top: `${(i * 211 + 7) % 100}%`,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: `${10 + (i % 4) * 4}px`,
          color: 'rgba(200,169,110,0.06)',
          animation: `float-up ${14 + (i % 6) * 3}s linear ${(i * 1.7) % 8}s infinite`,
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}>
          {frag}
        </span>
      ))}
    </div>
  )
}

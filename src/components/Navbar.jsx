// import { useState, useEffect } from 'react'
// import { professor } from '../data/professor'

// const NAV_LINKS = [
//   { label: 'About',        href: '#about',        symbol: '∂' },
//   { label: 'Research',     href: '#publications', symbol: '∑' },
//   { label: 'Teaching',     href: '#teaching',     symbol: '∫' },
//   { label: 'LaTeX',        href: '#latex',        symbol: 'λ' },
//   { label: 'Journey',      href: '#timeline',     symbol: '∞' },
//   { label: 'Contact',      href: '#contact',      symbol: '∴' },
// ]

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 60)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const navStyle = {
//     position: 'fixed',
//     top: '36px',
//     left: 0, right: 0,
//     zIndex: 90,
//     transition: 'background var(--transition-smooth), border-color var(--transition-smooth)',
//     background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
//     backdropFilter: scrolled ? 'blur(20px)' : 'none',
//     borderBottom: scrolled ? '1px solid rgba(200,169,110,0.1)' : '1px solid transparent',
//   }

//   return (
//     <nav style={navStyle}>
//       <div className="container" style={{
//         display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//         height: '70px',
//       }}>
//         {/* Logo */}
//         <a href="#hero" style={{
//           fontFamily: 'var(--font-display)',
//           fontSize: '20px',
//           color: 'var(--text-primary)',
//           fontStyle: 'italic',
//         }}>
//           {professor.shortName}
//           <span style={{ color: 'var(--accent-gold)', marginLeft: '6px', fontStyle: 'normal', fontSize: '14px' }}>
//             □
//           </span>
//         </a>

//         {/* Desktop links */}
//         <div style={{
//           display: 'flex', gap: '8px', alignItems: 'center',
//         }} className="desktop-nav">
//           {NAV_LINKS.map(link => (
//             <a key={link.href} href={link.href} style={{
//               fontFamily: 'var(--font-mono)',
//               fontSize: '12px',
//               letterSpacing: '0.08em',
//               color: 'var(--text-muted)',
//               padding: '8px 14px',
//               borderRadius: '6px',
//               transition: 'color var(--transition-fast), background var(--transition-fast)',
//               display: 'flex', alignItems: 'center', gap: '6px',
//             }}
//             onMouseEnter={e => {
//               e.currentTarget.style.color = 'var(--accent-gold)'
//               e.currentTarget.style.background = 'rgba(200,169,110,0.07)'
//             }}
//             onMouseLeave={e => {
//               e.currentTarget.style.color = 'var(--text-muted)'
//               e.currentTarget.style.background = 'transparent'
//             }}>
//               <span style={{ color: 'var(--accent-cyan)', fontSize: '13px' }}>{link.symbol}</span>
//               {link.label}
//             </a>
//           ))}
//         </div>

//         {/* Mobile hamburger */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           style={{
//             background: 'none', border: 'none',
//             color: 'var(--text-primary)', cursor: 'pointer',
//             fontSize: '20px', padding: '8px',
//             display: 'none',
//           }}
//           className="mobile-menu-btn"
//           aria-label="Menu"
//         >
//           {menuOpen ? '✕' : '☰'}
//         </button>
//       </div>

//       {/* Mobile overlay */}
//       {menuOpen && (
//         <div style={{
//           position: 'fixed', inset: 0,
//           background: 'rgba(10,10,15,0.97)',
//           backdropFilter: 'blur(20px)',
//           zIndex: 89,
//           display: 'flex', flexDirection: 'column',
//           alignItems: 'center', justifyContent: 'center',
//           gap: '32px',
//         }}>
//           {NAV_LINKS.map(link => (
//             <a key={link.href} href={link.href}
//               onClick={() => setMenuOpen(false)}
//               style={{
//                 fontFamily: 'var(--font-display)',
//                 fontSize: '32px',
//                 color: 'var(--text-primary)',
//                 display: 'flex', alignItems: 'center', gap: '16px',
//               }}>
//               <span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontSize: '20px' }}>
//                 {link.symbol}
//               </span>
//               {link.label}
//             </a>
//           ))}
//         </div>
//       )}

//       <style>{`
//         @media (max-width: 768px) {
//           .desktop-nav { display: none !important; }
//           .mobile-menu-btn { display: block !important; }
//         }
//       `}</style>
//     </nav>
//   )
// }



// import { useState, useEffect } from 'react'
// import { professor } from '../data/professor'

// const NAV_LINKS = [
// { label: 'About', href: '#about', symbol: '∂' },
// { label: 'Research', href: '#publications', symbol: '∑' },
// { label: 'Teaching', href: '#teaching', symbol: '∫' },
// { label: 'LaTeX', href: '#latex', symbol: 'λ' },
// { label: 'Journey', href: '#timeline', symbol: '∞' },
// { label: 'Contact', href: '#contact', symbol: '∴' },
// ]

// export default function Navbar() {
// const [scrolled, setScrolled] = useState(false)
// const [menuOpen, setMenuOpen] = useState(false)
// const [theme, setTheme] = useState(
//   localStorage.getItem('theme') || 'dark'
// )

// useEffect(() => {
//   document.documentElement.setAttribute(
//     'data-theme',
//     theme
//   )

//   localStorage.setItem('theme', theme)
// }, [theme])

// useEffect(() => {
// const onScroll = () => setScrolled(window.scrollY > 60)

// ```
// window.addEventListener('scroll', onScroll)

// return () => window.removeEventListener('scroll', onScroll)
// ```

// }, [])

// const navStyle = {
// position: 'fixed',
// top: '36px',
// left: 0,
// right: 0,
// zIndex: 90,
// transition: 'all 0.4s ease',
// background: scrolled
// ? 'rgba(10,10,15,0.88)'
// : 'transparent',
// backdropFilter: scrolled
// ? 'blur(20px)'
// : 'none',
// borderBottom: scrolled
// ? '1px solid rgba(200,169,110,0.12)'
// : '1px solid transparent',
// }

// return ( <nav style={navStyle}>
// <div
// className="container"
// style={{
// display: 'flex',
// alignItems: 'center',
// justifyContent: 'space-between',
// height: '70px',
// }}
// >
// {/* Logo */}
// <a
// href="#hero"
// style={{
// fontFamily: 'var(--font-display)',
// fontSize: '20px',
// color: 'var(--text-primary)',
// fontStyle: 'italic',
// transition: 'all 0.3s ease',
// }}
// >
// {professor.shortName}

// ```
//       <span
//         style={{
//           color: 'var(--accent-gold)',
//           marginLeft: '6px',
//           fontStyle: 'normal',
//           fontSize: '14px',
//         }}
//       >
//         □
//       </span>
//     </a>

//     {/* Desktop Navigation */}
//     <div
//       className="desktop-nav"
//       style={{
//         display: 'flex',
//         gap: '8px',
//         alignItems: 'center',
//       }}
//     >
//       {NAV_LINKS.map((link) => (<select
//   value={theme}
//   onChange={(e) => setTheme(e.target.value)}
//   style={{
//     background: 'var(--bg-secondary)',
//     color: 'var(--text-primary)',
//     border: '1px solid var(--border-glass)',
//     borderRadius: '8px',
//     padding: '8px 12px',
//     cursor: 'pointer',
//     marginLeft: '10px'
//   }}
// >
//   <option value="dark">🌙 Dark</option>
//   <option value="light">☀️ Light</option>
//   <option value="academic">🎓 Academic</option>
//   <option value="midnight">🌌 Midnight</option>
// </select>
//         <a
//           key={link.href}
//           href={link.href}
//           className="nav-link"
//         >
//           <span className="nav-symbol">
//             {link.symbol}
//           </span>

//           {link.label}

//           <span className="nav-glow-line"></span>
//         </a>
//       ))}
//     </div>

//     {/* Mobile Menu Button */}
//     <button
//       onClick={() => setMenuOpen(!menuOpen)}
//       className="mobile-menu-btn"
//       aria-label="Menu"
//       style={{
//         background: 'none',
//         border: 'none',
//         color: 'var(--text-primary)',
//         cursor: 'pointer',
//         fontSize: '20px',
//         padding: '8px',
//         display: 'none',
//       }}
//     >
//       {menuOpen ? '✕' : '☰'}
//     </button> {menuOpen && (<select
//   value={theme}
//   onChange={(e) => setTheme(e.target.value)}
//   style={{
//     marginTop: '20px',
//     padding: '12px',
//     borderRadius: '10px',
//     background: 'var(--bg-secondary)',
//     color: 'var(--text-primary)',
//     border: '1px solid var(--border-glass)',
//   }}
// >
//   <option value="dark">🌙 Dark</option>
//   <option value="light">☀️ Light</option>
//   <option value="academic">🎓 Academic</option>
//   <option value="midnight">🌌 Midnight</option>
// </select>
//   </div>

//   {/* Mobile Menu */}
//   {menuOpen && (
//     <div
//       style={{
//         position: 'fixed',
//         inset: 0,
//         background: 'rgba(10,10,15,0.97)',
//         backdropFilter: 'blur(20px)',
//         zIndex: 89,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: '32px',
//       }}
//     >
//       {NAV_LINKS.map((link) => (
//         <a
//           key={link.href}
//           href={link.href}
//           onClick={() => setMenuOpen(false)}
//           style={{
//             fontFamily: 'var(--font-display)',
//             fontSize: '32px',
//             color: 'var(--text-primary)',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px',
//           }}
//         >
//           <span
//             style={{
//               color: 'var(--accent-gold)',
//               fontFamily: 'var(--font-mono)',
//               fontSize: '20px',
//             }}
//           >
//             {link.symbol}
//           </span>

//           {link.label}
//         </a>
//       ))}
//     </div>
//   )}

//   <style>{`
//     .nav-link{
//       position:relative;
//       overflow:hidden;
//       font-family:var(--font-mono);
//       font-size:12px;
//       letter-spacing:.08em;
//       color:var(--text-muted);
//       padding:8px 14px;
//       border-radius:6px;
//       display:flex;
//       align-items:center;
//       gap:6px;
//       transition:all .3s ease;
//     }

//     .nav-link:hover{
//       color:var(--accent-cyan);
//       background:rgba(79,195,247,0.05);
//     }

//     .nav-symbol{
//       color:var(--accent-cyan);
//       font-size:13px;
//     }

//     .nav-glow-line{
//       position:absolute;
//       left:50%;
//       bottom:0;
//       transform:translateX(-50%);
//       width:0;
//       height:2px;
//       background:#4FC3F7;
//       box-shadow:
//         0 0 8px #4FC3F7,
//         0 0 20px #4FC3F7,
//         0 0 40px #4FC3F7;
//       transition:all .35s ease;
//     }

//     .nav-link:hover .nav-glow-line{
//       width:80%;
//     }

//     @media (max-width:768px){
//       .desktop-nav{
//         display:none !important;
//       }

//       .mobile-menu-btn{
//         display:block !important;
//       }
//     }
//   `}</style>
// </nav>


// )
// }


import { useState, useEffect } from 'react'
import { professor } from '../data/professor'

const NAV_LINKS = [
  { label: 'About', href: '#about', symbol: '∂' },
  { label: 'Research', href: '#publications', symbol: '∑' },
  { label: 'Teaching', href: '#teaching', symbol: '∫' },
  { label: 'LaTeX', href: '#latex', symbol: 'λ' },
  { label: 'Journey', href: '#timeline', symbol: '∞' },
  { label: 'Contact', href: '#contact', symbol: '∴' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) setTheme(savedTheme)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const navStyle = {
    position: 'fixed',
    top: '36px',
    left: 0,
    right: 0,
    zIndex: 90,
    transition: 'all 0.4s ease',
    background: scrolled
      ? 'rgba(10,10,15,0.88)'
      : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled
      ? '1px solid rgba(200,169,110,0.12)'
      : '1px solid transparent',
  }

  return (
    <>
      <nav style={navStyle}>
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              transition: 'all 0.3s ease',
            }}
          >
            {professor.shortName}

            <span
              style={{
                color: 'var(--accent-gold)',
                marginLeft: '6px',
                fontStyle: 'normal',
                fontSize: '14px',
              }}
            >
              □
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                <span className="nav-symbol">
                  {link.symbol}
                </span>

                {link.label}

                <span className="nav-glow-line" />
              </a>
            ))}

            {/* Theme Selector */}
            <select
              value={theme}
              onChange={(e) =>
                setTheme(e.target.value)
              }
              style={{
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border:
                  '1px solid var(--border-glass)',
                borderRadius: '8px',
                padding: '8px 12px',
                cursor: 'pointer',
                marginLeft: '12px',
              }}
            >
              <option value="dark">🌙 Dark</option>
              <option value="light">☀️ Light</option>
              <option value="academic">
                🎓 Academic
              </option>
              <option value="midnight">
                🌌 Midnight
              </option>
            </select>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="mobile-menu-btn"
            aria-label="Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background:
              'rgba(10,10,15,0.97)',
            backdropFilter: 'blur(20px)',
            zIndex: 89,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() =>
                setMenuOpen(false)
              }
              style={{
                fontFamily:
                  'var(--font-display)',
                fontSize: '32px',
                color:
                  'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <span
                style={{
                  color:
                    'var(--accent-gold)',
                  fontFamily:
                    'var(--font-mono)',
                  fontSize: '20px',
                }}
              >
                {link.symbol}
              </span>

              {link.label}
            </a>
          ))}

          <select
            value={theme}
            onChange={(e) =>
              setTheme(e.target.value)
            }
            style={{
              marginTop: '20px',
              padding: '12px',
              borderRadius: '10px',
              background:
                'var(--bg-secondary)',
              color:
                'var(--text-primary)',
              border:
                '1px solid var(--border-glass)',
            }}
          >
            <option value="dark">🌙 Dark</option>
            <option value="light">☀️ Light</option>
            <option value="academic">
              🎓 Academic
            </option>
            <option value="midnight">
              🌌 Midnight
            </option>
          </select>
        </div>
      )}

      <style>{`
        .desktop-nav{
          display:flex;
          align-items:center;
          gap:8px;
        }

        .nav-link{
          position:relative;
          overflow:hidden;
          font-family:var(--font-mono);
          font-size:12px;
          letter-spacing:.08em;
          color:var(--text-muted);
          padding:8px 14px;
          border-radius:6px;
          display:flex;
          align-items:center;
          gap:6px;
          transition:all .3s ease;
          text-decoration:none;
        }

        .nav-link:hover{
          color:var(--accent-cyan);
          background:rgba(79,195,247,0.05);
        }

        .nav-symbol{
          color:var(--accent-cyan);
          font-size:13px;
        }

        .nav-glow-line{
          position:absolute;
          left:50%;
          bottom:0;
          transform:translateX(-50%);
          width:0;
          height:2px;
          background:#4FC3F7;
          box-shadow:
            0 0 8px #4FC3F7,
            0 0 20px #4FC3F7,
            0 0 40px #4FC3F7;
          transition:all .35s ease;
        }

        .nav-link:hover .nav-glow-line{
          width:80%;
        }

        .mobile-menu-btn{
          background:none;
          border:none;
          color:var(--text-primary);
          cursor:pointer;
          font-size:20px;
          padding:8px;
          display:none;
        }

        @media (max-width:768px){
          .desktop-nav{
            display:none;
          }

          .mobile-menu-btn{
            display:block;
          }
        }
      `}</style>
    </>
  )
}
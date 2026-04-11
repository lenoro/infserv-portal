import { useState, useEffect } from 'react'

export default function Navbar({ onLogin }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Accueil',      href: '#hero' },
    { label: 'Applications', href: '#apps' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'À propos',     href: '#about' },
    { label: 'Contact',      href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '0 32px',
      background: scrolled ? 'rgba(10,14,26,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(59,79,216,0.2)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 64,
    }}>
      {/* Logo */}
      <a href="#hero" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, #3b4fd8, #7c3aed)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 16, color: '#fff',
        }}>IS</div>
        <span style={{ fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: 0.5 }}>
          infserv
        </span>
      </a>

      {/* Links desktop */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={{
            color: '#94a3b8', textDecoration: 'none', fontSize: 14, fontWeight: 500,
            padding: '6px 12px', borderRadius: 8, transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = '#94a3b8'}>
            {l.label}
          </a>
        ))}
        <button onClick={onLogin} style={{
          marginLeft: 8,
          background: 'linear-gradient(135deg, #3b4fd8, #7c3aed)',
          color: '#fff', border: 'none', borderRadius: 8,
          padding: '8px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.target.style.opacity = '0.85'}
        onMouseLeave={e => e.target.style.opacity = '1'}>
          Connexion
        </button>
      </div>
    </nav>
  )
}

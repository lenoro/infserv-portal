const TECHS = [
  { name: 'React 18',      color: '#61dafb', icon: '⚛️' },
  { name: 'Spring Boot',   color: '#6db33f', icon: '🍃' },
  { name: 'Java 21',       color: '#f89820', icon: '☕' },
  { name: 'MySQL',         color: '#4479a1', icon: '🗄️' },
  { name: 'JWT / OAuth',   color: '#f97316', icon: '🔐' },
  { name: 'Vite',          color: '#9333ea', icon: '⚡' },
  { name: 'REST API',      color: '#06b6d4', icon: '🔗' },
  { name: 'Linux / Nginx', color: '#e11d48', icon: '🐧' },
]

export default function Technologies() {
  return (
    <section id="technologies" style={{
      padding: '100px 32px',
      background: '#0a0e1a',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,79,216,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#7c3aed', textTransform: 'uppercase', marginBottom: 12 }}>
            Stack Technique
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: 16 }}>
            Technologies modernes
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            Nous utilisons les outils les plus fiables et performants pour garantir robustesse et pérennité.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {TECHS.map(t => (
            <div key={t.name} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: '24px 20px',
              display: 'flex', alignItems: 'center', gap: 14,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.borderColor = t.color + '55'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, fontSize: 22,
                background: t.color + '18', border: `1px solid ${t.color}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>{t.icon}</div>
              <span style={{ fontSize: 15, fontWeight: 600, color: '#e2e8f0' }}>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'

export default function Hero({ onDiscover }) {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '0 24px',
      background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,79,216,0.25) 0%, transparent 70%), #0a0e1a',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grille décorative */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* Cercles lumineux */}
      <div style={{ position:'absolute', top:'20%', left:'15%', width:300, height:300, borderRadius:'50%', background:'rgba(59,79,216,0.08)', filter:'blur(60px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'25%', right:'10%', width:250, height:250, borderRadius:'50%', background:'rgba(124,58,237,0.1)', filter:'blur(60px)', pointerEvents:'none' }} />

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'rgba(59,79,216,0.15)', border: '1px solid rgba(59,79,216,0.4)',
        borderRadius: 100, padding: '6px 16px', marginBottom: 28,
        fontSize: 13, color: '#93c5fd', fontWeight: 500,
      }}>
        <span style={{ width:6, height:6, borderRadius:'50%', background:'#3b82f6', display:'inline-block', boxShadow:'0 0 8px #3b82f6' }} />
        Solutions numériques sur mesure
      </div>

      {/* Titre */}
      <h1 style={{
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        fontWeight: 800, lineHeight: 1.1,
        marginBottom: 24, maxWidth: 800,
        background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #c4b5fd 100%)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      }}>
        Des applications<br />qui transforment<br />votre quotidien
      </h1>

      {/* Sous-titre */}
      <p style={{
        fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#94a3b8',
        maxWidth: 560, marginBottom: 40, lineHeight: 1.7,
      }}>
        Infserv conçoit des solutions métier modernes — gestion de stock, paie, ressources pédagogiques —
        avec les technologies les plus performantes du marché.
      </p>

      {/* Boutons */}
      <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center' }}>
        <button onClick={onDiscover} style={{
          background: 'linear-gradient(135deg, #3b4fd8, #7c3aed)',
          color: '#fff', border: 'none', borderRadius: 12,
          padding: '14px 32px', fontSize: 15, fontWeight: 600, cursor: 'pointer',
          boxShadow: '0 0 24px rgba(59,79,216,0.4)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 0 36px rgba(59,79,216,0.6)' }}
        onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 0 24px rgba(59,79,216,0.4)' }}>
          Découvrir nos applications →
        </button>
        <a href="#contact" style={{
          background: 'rgba(255,255,255,0.06)', color: '#e2e8f0',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 12, padding: '14px 32px', fontSize: 15, fontWeight: 600,
          textDecoration: 'none', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.1)'}
        onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.06)'}>
          Nous contacter
        </a>
      </div>

      {/* Stats */}
      <div style={{
        display: 'flex', gap: 48, marginTop: 72, flexWrap: 'wrap', justifyContent: 'center',
      }}>
        {[
          { val: '5+', label: 'Applications déployées' },
          { val: '100%', label: 'Web & multi-postes' },
          { val: '24/7', label: 'Disponibilité serveur' },
        ].map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{s.val}</div>
            <div style={{ fontSize: 13, color: '#64748b' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

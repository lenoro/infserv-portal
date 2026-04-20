import { useState } from 'react'

const APPS = [
  {
    key: 'gestionstock',
    icon: '📦',
    name: 'GestionStock',
    desc: 'Gestion complète du stock et du magasin — réceptions, affectations, inventaire, registres officiels.',
    tags: ['Stock', 'Magasin', 'Registres'],
    color: '#3b4fd8',
    url: 'https://gestionmagasin.infserv.ca',
    apiUrl: 'https://gestionmagasin.infserv.ca/api',
    status: 'live',
  },
  {
    key: 'calpaie',
    icon: '💰',
    name: 'CalPaie',
    desc: 'Calcul automatique des fiches de paie, gestion des agents, édition des bulletins officiels.',
    tags: ['Paie', 'RH', 'Bulletins'],
    color: '#059669',
    url: 'https://calpaie.infserv.ca',
    apiUrl: 'https://calpaie.infserv.ca/api',
    status: 'live',
  },
  {
    key: 'cantine',
    icon: '🍽️',
    name: 'Cantine',
    desc: 'Gestion des stocks de cantine scolaire — réceptions, sorties cuisine, alertes péremption.',
    tags: ['Cantine', 'Stock', 'FEFO'],
    color: '#7c3aed',
    url: 'https://cantine.infserv.ca',
    apiUrl: 'https://cantine.infserv.ca/api',
    status: 'live',
  },
  {
    key: 'gestionmagasin',
    icon: '🛒',
    name: 'GestionMagasin',
    desc: 'Facturation, gestion articles, clients, vendeurs — interface de caisse complète.',
    tags: ['Facturation', 'Caisse', 'Articles'],
    color: '#d97706',
    url: 'http://infserv.ca:8084',
    status: 'beta',
  },
]

export default function Apps({ onLaunch }) {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="apps" style={{
      padding: '100px 32px',
      background: 'linear-gradient(180deg, #0a0e1a 0%, #0d1120 100%)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Titre section */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: 2,
            color: '#3b82f6', textTransform: 'uppercase', marginBottom: 12,
          }}>Nos Applications</div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
            color: '#f1f5f9', marginBottom: 16,
          }}>Tout ce dont vous avez besoin</h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Chaque application est conçue pour un métier précis, accessible depuis n'importe quel poste.
          </p>
        </div>

        {/* Grille */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {APPS.map(app => (
            <div key={app.key}
              onMouseEnter={() => setHovered(app.key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === app.key
                  ? 'rgba(255,255,255,0.06)'
                  : 'rgba(255,255,255,0.03)',
                border: `1px solid ${hovered === app.key ? app.color + '55' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 20, padding: 28,
                transition: 'all 0.3s ease',
                transform: hovered === app.key ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hovered === app.key ? `0 20px 40px ${app.color}22` : 'none',
                cursor: 'default', display: 'flex', flexDirection: 'column', gap: 16,
              }}>

              {/* Header carte */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, fontSize: 24,
                  background: app.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `1px solid ${app.color}44`,
                }}>{app.icon}</div>
                <span style={{
                  fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 100,
                  background: app.status === 'live' ? '#052e16' : '#1c1917',
                  color: app.status === 'live' ? '#4ade80' : '#fbbf24',
                  border: `1px solid ${app.status === 'live' ? '#166534' : '#92400e'}`,
                }}>
                  {app.status === 'live' ? '● En ligne' : '⚡ Bêta'}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>{app.name}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{app.desc}</p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {app.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 11, padding: '3px 10px', borderRadius: 100,
                    background: app.color + '18', color: app.color + 'cc',
                    border: `1px solid ${app.color}33`,
                  }}>{t}</span>
                ))}
              </div>

              {/* Bouton */}
              <button onClick={() => onLaunch(app)} style={{
                marginTop: 'auto',
                background: hovered === app.key
                  ? `linear-gradient(135deg, ${app.color}, ${app.color}cc)`
                  : 'rgba(255,255,255,0.05)',
                color: '#fff', border: `1px solid ${app.color}44`,
                borderRadius: 10, padding: '10px 20px',
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}>
                Accéder à l'application
                <span style={{ fontSize: 16 }}>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

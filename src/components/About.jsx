const VALEURS = [
  { icon: '🎯', titre: 'Sur mesure', desc: 'Chaque application est conçue pour répondre précisément aux besoins métier de nos clients.' },
  { icon: '🚀', titre: 'Performance', desc: 'Architecture moderne full-stack garantissant rapidité et fluidité sur tous les postes.' },
  { icon: '🔒', titre: 'Sécurité', desc: 'Authentification JWT, contrôle des rôles, protection des données à chaque niveau.' },
  { icon: '🌐', titre: 'Accessible partout', desc: 'Nos solutions tournent sur serveur et sont accessibles depuis n\'importe quel navigateur.' },
]

export default function About() {
  return (
    <section id="about" style={{
      padding: '100px 32px',
      background: 'linear-gradient(180deg, #0a0e1a 0%, #0d1120 100%)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* Texte */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#3b82f6', textTransform: 'uppercase', marginBottom: 12 }}>
              À propos
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: 20, lineHeight: 1.2 }}>
              Infserv, votre partenaire numérique
            </h2>
            <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Infserv est une société spécialisée dans la conception d'applications métier modernes.
              Nous accompagnons les établissements de formation, les entreprises et les administrations
              dans leur transformation numérique.
            </p>
            <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              Nos solutions sont hébergées sur serveur sécurisé et accessibles en réseau local
              ou via internet selon vos besoins.
            </p>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(135deg, #3b4fd8, #7c3aed)',
              color: '#fff', textDecoration: 'none',
              borderRadius: 10, padding: '12px 24px', fontSize: 14, fontWeight: 600,
            }}>
              Travailler avec nous →
            </a>
          </div>

          {/* Valeurs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {VALEURS.map(v => (
              <div key={v.titre} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16, padding: '20px 18px',
              }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{v.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>{v.titre}</div>
                <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

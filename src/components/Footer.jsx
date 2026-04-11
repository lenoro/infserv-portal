export default function Footer() {
  return (
    <footer style={{
      padding: '40px 32px',
      background: '#060810',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #3b4fd8, #7c3aed)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 14, color: '#fff',
          }}>IS</div>
          <span style={{ fontWeight: 700, color: '#e2e8f0' }}>infserv</span>
          <span style={{ color: '#334155', marginLeft: 8, fontSize: 13 }}>© {new Date().getFullYear()} — Tous droits réservés</span>
        </div>
        <div style={{ fontSize: 13, color: '#334155' }}>
          Des solutions numériques sur mesure
        </div>
      </div>
    </footer>
  )
}

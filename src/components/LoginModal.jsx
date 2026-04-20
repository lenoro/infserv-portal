import { useState } from 'react'

export default function LoginModal({ app, onClose }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!app?.url) return
    setLoading(true)
    setError('')

    try {
      // Tentative d'auth sur l'app cible
      const endpoint = app.apiUrl || app.url
      const res = await fetch(`${endpoint}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      if (!res.ok) throw new Error('Identifiants incorrects')
      const data = await res.json()

      // Ouvre l'app dans un nouvel onglet avec le token en paramètre
      const target = `${app.url}?token=${data.token}&username=${username}&role=${data.role || ''}`
      window.open(target, '_blank')
      onClose()
    } catch (err) {
      setError('Identifiants incorrects ou application indisponible.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
    }} onClick={e => e.target === e.currentTarget && onClose()}>

      <div style={{
        background: '#0f1422', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 20, padding: 36, width: '100%', maxWidth: 420,
        boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div>
            <div style={{ fontSize: 13, color: '#64748b', marginBottom: 4 }}>Connexion à</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 22 }}>{app?.icon}</span>
              <span style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9' }}>{app?.name}</span>
            </div>
          </div>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.08)', border: 'none', color: '#94a3b8',
            width: 32, height: 32, borderRadius: 8, cursor: 'pointer', fontSize: 18,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>×</button>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {error && (
            <div style={{
              background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#fca5a5',
            }}>{error}</div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#94a3b8', marginBottom: 6 }}>
              Identifiant
            </label>
            <input value={username} onChange={e => setUsername(e.target.value)}
              placeholder="Nom d'utilisateur" required autoFocus
              style={{
                width: '100%', background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
                padding: '11px 14px', fontSize: 15, color: '#f1f5f9', outline: 'none',
              }}
              onFocus={e => e.target.style.borderColor = '#3b4fd8'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#94a3b8', marginBottom: 6 }}>
              Mot de passe
            </label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              placeholder="••••••••" required
              style={{
                width: '100%', background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
                padding: '11px 14px', fontSize: 15, color: '#f1f5f9', outline: 'none',
              }}
              onFocus={e => e.target.style.borderColor = '#3b4fd8'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          <button type="submit" disabled={loading} style={{
            marginTop: 6,
            background: loading ? '#1e293b' : `linear-gradient(135deg, ${app?.color || '#3b4fd8'}, #7c3aed)`,
            color: '#fff', border: 'none', borderRadius: 10,
            padding: '13px', fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'opacity 0.2s',
          }}>
            {loading ? 'Connexion...' : 'Se connecter →'}
          </button>
        </form>

        <div style={{ marginTop: 16, fontSize: 12, color: '#334155', textAlign: 'center' }}>
          Identifiants fournis par votre administrateur
        </div>
      </div>
    </div>
  )
}

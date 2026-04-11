import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const envoyer = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" style={{
      padding: '100px 32px',
      background: '#0a0e1a',
    }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#7c3aed', textTransform: 'uppercase', marginBottom: 12 }}>
            Contact
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: 16 }}>
            Parlons de votre projet
          </h2>
          <p style={{ color: '#64748b', fontSize: 16 }}>
            Une question, une demande de démo ? Nous vous répondons sous 24h.
          </p>
        </div>

        {sent ? (
          <div style={{
            background: 'rgba(4,120,87,0.15)', border: '1px solid #065f46',
            borderRadius: 16, padding: 32, textAlign: 'center',
          }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Message envoyé !</div>
            <div style={{ color: '#64748b' }}>Nous vous répondrons dans les plus brefs délais.</div>
          </div>
        ) : (
          <form onSubmit={envoyer} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { id: 'nom',     label: 'Nom complet',    type: 'text',  placeholder: 'Votre nom' },
              { id: 'email',   label: 'Email',           type: 'email', placeholder: 'votre@email.com' },
            ].map(f => (
              <div key={f.id}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#94a3b8', marginBottom: 6 }}>{f.label}</label>
                <input type={f.type} value={form[f.id]} onChange={e => setForm(p => ({...p, [f.id]: e.target.value}))}
                  placeholder={f.placeholder} required
                  style={{
                    width: '100%', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
                    padding: '12px 16px', fontSize: 15, color: '#f1f5f9', outline: 'none',
                  }}
                  onFocus={e => e.target.style.borderColor = '#3b4fd8'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#94a3b8', marginBottom: 6 }}>Message</label>
              <textarea value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))}
                placeholder="Décrivez votre besoin..." required rows={5}
                style={{
                  width: '100%', background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
                  padding: '12px 16px', fontSize: 15, color: '#f1f5f9', outline: 'none',
                  resize: 'vertical', fontFamily: 'inherit',
                }}
                onFocus={e => e.target.style.borderColor = '#3b4fd8'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <button type="submit" style={{
              background: 'linear-gradient(135deg, #3b4fd8, #7c3aed)',
              color: '#fff', border: 'none', borderRadius: 12,
              padding: '14px', fontSize: 15, fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 0 24px rgba(59,79,216,0.3)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              Envoyer le message →
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

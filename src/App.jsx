import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Apps from './components/Apps'
import Technologies from './components/Technologies'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [loginTarget, setLoginTarget] = useState(null)

  const openLogin = (app) => {
    setLoginTarget(app)
    setLoginOpen(true)
  }

  return (
    <div>
      <Navbar onLogin={() => setLoginOpen(true)} />
      <Hero onDiscover={() => document.getElementById('apps')?.scrollIntoView({ behavior:'smooth' })} />
      <Apps onLaunch={openLogin} />
      <Technologies />
      <About />
      <Contact />
      <Footer />
      {loginOpen && <LoginModal app={loginTarget} onClose={() => setLoginOpen(false)} />}
    </div>
  )
}

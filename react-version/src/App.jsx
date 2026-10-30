import { useCallback, useState } from 'react'
import useTheme from './useTheme.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Reviews from './components/Reviews.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'
import AuthModal from './components/AuthModal.jsx'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [authOpen, setAuthOpen] = useState(false)
  const openAuth = useCallback(() => setAuthOpen(true), [])
  const closeAuth = useCallback(() => setAuthOpen(false), [])

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} onOpenAuth={openAuth} />
      <main>
        <Hero />
        <Features />
        <Reviews />
        <Pricing onOpenAuth={openAuth} />
      </main>
      <Footer />
      <AuthModal open={authOpen} onClose={closeAuth} />
    </>
  )
}

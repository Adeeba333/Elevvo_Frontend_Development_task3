import { useEffect, useState } from 'react'

// Custom hook: keeps the theme in state and mirrors it to <html data-theme> and localStorage
export default function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  return [theme, toggleTheme]
}

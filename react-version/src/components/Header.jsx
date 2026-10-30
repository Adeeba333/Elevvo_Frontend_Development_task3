import { useState } from 'react'

const links = [['features', 'Features'], ['reviews', 'Reviews'], ['pricing', 'Pricing'], ['contact', 'Contact']]

export default function Header({ theme, onToggleTheme, onOpenAuth }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header" id="top">
      <div className="wrap">
        <nav aria-label="Main">
          <a className="logo" href="#top">
            <img src="/logo.png" alt="" width="44" height="44" />TaskFlow
          </a>

          <div
            className={'nav-links' + (menuOpen ? ' open' : '')}
            id="navLinks"
            onClick={e => e.target.tagName === 'A' && setMenuOpen(false)}
          >
            {links.map(([id, label]) => <a key={id} href={'#' + id}>{label}</a>)}
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" type="button" onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              {theme === 'dark' ? '\u2600' : '\u263E'}
            </button>
            <button className="btn btn-line" type="button" onClick={onOpenAuth}>Get started</button>
            <button className="theme-toggle menu-toggle" type="button" onClick={() => setMenuOpen(o => !o)}
              aria-expanded={menuOpen} aria-controls="navLinks"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? '\u2715' : '\u2630'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

import { useEffect, useState } from 'react'

export default function AuthModal({ open, onClose }) {
  const [tab, setTab] = useState('signup')
  const [msg, setMsg] = useState('')

  // Runs whenever the popup opens or closes
  useEffect(() => {
    if (!open) return
    setTab('signup')
    setMsg('')
    document.body.style.overflow = 'hidden'
    const onKey = e => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const switchTab = name => { setTab(name); setMsg('') }
  const submit = e => {
    e.preventDefault()               // stay on the same page
    setMsg('Done! (Demo only: nothing was saved.)')
    e.target.reset()
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="authTitle"
         onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" type="button" aria-label="Close" onClick={onClose}>&times;</button>
        <h2 id="authTitle">Welcome to TaskFlow</h2>

        <div className="tabs" role="tablist">
          {[['signup', 'Sign up'], ['login', 'Log in']].map(([name, label]) => (
            <button key={name} type="button" role="tab" aria-selected={tab === name}
              className={'tab' + (tab === name ? ' active' : '')} onClick={() => switchTab(name)}>
              {label}
            </button>
          ))}
        </div>

        {tab === 'signup' ? (
          <form onSubmit={submit}>
            <div className="field"><label htmlFor="suName">Full name</label><input id="suName" type="text" autoComplete="name" required /></div>
            <div className="field"><label htmlFor="suEmail">Email</label><input id="suEmail" type="email" autoComplete="email" required /></div>
            <div className="field"><label htmlFor="suPass">Password (8+ characters)</label><input id="suPass" type="password" autoComplete="new-password" minLength="8" required /></div>
            <button className="btn btn-gold full" type="submit">Create account</button>
            <p className="form-msg" aria-live="polite">{msg}</p>
          </form>
        ) : (
          <form onSubmit={submit}>
            <div className="field"><label htmlFor="liEmail">Email</label><input id="liEmail" type="email" autoComplete="email" required /></div>
            <div className="field"><label htmlFor="liPass">Password</label><input id="liPass" type="password" autoComplete="current-password" required /></div>
            <button className="btn btn-gold full" type="submit">Log in</button>
            <p className="form-msg" aria-live="polite">{msg}</p>
          </form>
        )}
      </div>
    </div>
  )
}

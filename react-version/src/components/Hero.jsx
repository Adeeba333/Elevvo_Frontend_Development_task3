import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <Reveal className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>Plan less. Finish more.</h1>
          <p>TaskFlow turns your messy to-do list into a clear plan for the day, so you always know what to do next.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#pricing">Start free</a>
            <a className="btn btn-line" href="#features">See how it works</a>
          </div>
        </div>
        <div className="hero-logo">
          <img src="/logo.png" alt="TaskFlow logo" width="420" height="420" />
        </div>
      </div>
    </Reveal>
  )
}

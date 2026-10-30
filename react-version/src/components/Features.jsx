import Reveal from './Reveal.jsx'

// Small reusable component: one card, written once, used three times.
function Feature({ icon, title, text }) {
  return (
    <article className="feature">
      <div className="icon"><svg viewBox="0 0 24 24">{icon}</svg></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

const features = [
  { title: 'Smart lists',
    text: 'Group tasks into projects, add due dates, and see what matters most at the top of your list.',
    icon: <><path d="M9 6h11M9 12h11M9 18h11" /><path d="M3.5 6l1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2" /></> },
  { title: 'Gentle reminders',
    text: 'Get a nudge at the right time, on your phone or computer, and snooze it with one tap.',
    icon: <><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 01-3.4 0" /></> },
  { title: 'Progress insights',
    text: 'See how many tasks you finish each week and spot the habits that help you get more done.',
    icon: <><path d="M3 20h18" /><rect x="5" y="11" width="3.5" height="6" rx="1" /><rect x="10.25" y="6" width="3.5" height="11" rx="1" /><rect x="15.5" y="9" width="3.5" height="8" rx="1" /></> },
]

export default function Features() {
  return (
    <Reveal id="features" className="cream">
      <div className="wrap">
        <h2 className="sec-title">Everything you need to stay on track</h2>
        <p className="sec-sub">Three simple tools that keep your day organized without getting in your way.</p>
        <div className="features">
          {features.map(f => <Feature key={f.title} {...f} />)}
        </div>
      </div>
    </Reveal>
  )
}

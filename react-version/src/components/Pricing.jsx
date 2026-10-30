import Reveal from './Reveal.jsx'
import { plans } from '../data.js'

function Plan({ name, price, per, blurb, items, cta, popular, onSelect }) {
  return (
    <article className={'plan' + (popular ? ' pop' : '')}>
      {popular && <span className="badge">Most popular</span>}
      <h3>{name}</h3>
      <div className="price">{price}<small>{per}</small></div>
      <p style={{ margin: 0, opacity: popular ? 0.85 : 0.8 }}>{blurb}</p>
      <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
      <button type="button" className={'btn' + (popular ? '' : ' btn-line')} onClick={onSelect}>{cta}</button>
    </article>
  )
}

export default function Pricing({ onOpenAuth }) {
  return (
    <Reveal id="pricing">
      <div className="wrap">
        <h2 className="sec-title" style={{ color: 'var(--accent)' }}>Simple pricing, no surprises</h2>
        <p className="sec-sub">Start free. Upgrade when you need more power. Cancel anytime.</p>
        <div className="plans">
          {plans.map(p => <Plan key={p.name} {...p} onSelect={onOpenAuth} />)}
        </div>
      </div>
    </Reveal>
  )
}

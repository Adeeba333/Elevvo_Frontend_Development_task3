import Reveal from './Reveal.jsx'
import { reviews } from '../data.js'

function Quote({ text, name, role }) {
  return (
    <blockquote className="quote">
      <p>{text}</p>
      <cite>{name}</cite>
      <span>{role}</span>
    </blockquote>
  )
}

export default function Reviews() {
  return (
    <Reveal id="reviews" className="gold">
      <div className="wrap">
        <h2 className="sec-title">People finish their lists with TaskFlow</h2>
        <p className="sec-sub">Here’s what students, freelancers, and teams say after their first month.</p>
        <div className="reviews">
          {reviews.map(r => <Quote key={r.name} {...r} />)}
        </div>
      </div>
    </Reveal>
  )
}

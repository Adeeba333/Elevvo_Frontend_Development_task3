import Reveal from './Reveal.jsx'

const social = [
  ['X (Twitter)', <><line x1="4" y1="4" x2="20" y2="20" /><line x1="20" y1="4" x2="4" y2="20" /></>],
  ['LinkedIn', <><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8" cy="8" r="1" /><line x1="8" y1="11" x2="8" y2="16" /><line x1="12" y1="11" x2="12" y2="16" /><polyline points="12,13 14,11 16,12 16,16" /></>],
  ['GitHub', <><circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="8" r="2" /><line x1="6" y1="8" x2="6" y2="16" /><polyline points="18,10 18,12 6,12" /></>],
  ['Instagram', <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></>],
]

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>{links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
    </div>
  )
}

export default function Footer() {
  return (
    <Reveal as="footer" id="contact">
      <div className="wrap">
        <div className="foot">
          <div className="social">
            {social.map(([label, shapes]) => (
              <a key={label} href="#" aria-label={label}><svg viewBox="0 0 24 24">{shapes}</svg></a>
            ))}
          </div>
          <FooterColumn title="Contact" links={[
            ['hello@taskflow.com', 'mailto:hello@taskflow.com'],
            ['+880 123456789', 'tel:+880123456789'],
            ['Help center', '#'],
          ]} />
          <FooterColumn title="Company" links={[
            ['Features', '#features'], ['Pricing', '#pricing'], ['Privacy policy', '#'],
          ]} />
        </div>
        <div className="copy">© 2026 TaskFlow. A fictional app made for web design practice. | Made by Adeeba</div>
      </div>
    </Reveal>
  )
}

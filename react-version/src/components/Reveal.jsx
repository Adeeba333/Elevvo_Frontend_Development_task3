import { useEffect, useRef, useState } from 'react'

// Wrapper component: fades its children in once when scrolled into view.
// "as" lets us render a <section> or a <footer> with the same behavior.
export default function Reveal({ as: Tag = 'section', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`${className} reveal${shown ? ' in' : ''}`} {...rest}>
      {children}
    </Tag>
  )
}

import { useEffect, useRef, useState } from 'react'

// ---- Navbar ----
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">IM</span>
          <span className="logo-bracket">/&gt;</span>
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link ${activeSection === l.href.slice(1) ? 'active' : ''}`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-link nav-cta">Contact</a>
          </li>
        </ul>
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link" onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="nav-link nav-cta" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  )
}

// ---- Reveal Wrapper ----
export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('revealed') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// ---- Typewriter ----
export function Typewriter() {
  const words = ['Full Stack Developer', 'SE Undergraduate', 'React Enthusiast', 'Problem Solver']
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[idx % words.length]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1))
        if (text.length === word.length) setTimeout(() => setDeleting(true), 1500)
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length === 0) { setDeleting(false); setIdx(i => i + 1) }
      }
    }, deleting ? 60 : 100)
    return () => clearTimeout(timeout)
  }, [text, deleting, idx])

  return <><span className="typewriter">{text}</span><span className="cursor">|</span></>
}

// ---- Counter ----
export function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(target / 50)
        const interval = setInterval(() => {
          start = Math.min(start + step, target)
          setCount(start)
          if (start >= target) clearInterval(interval)
        }, 30)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref} className="stat-number">{count}</span>
}

// ---- Skill Bar ----
export function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setAnimated(true)
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-fill ${animated ? 'animated' : ''}`}
          style={{ '--target-width': `${level}%` } as React.CSSProperties}
        />
      </div>
    </div>
  )
}

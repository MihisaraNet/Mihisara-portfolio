import { useEffect, useRef, useState } from 'react'

// ---- Navigation Bar ----
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
      <div className="nav-container">
        {/* Developer Logo */}
        <a href="#hero" className="nav-logo" aria-label="Isula Mihisara Portfolio Home">
          <span className="logo-text">IM</span>
          <span className="logo-slash">/&gt;</span>
        </a>

        {/* Center Nav Links */}
        <ul className="nav-links" role="menubar">
          {links.map((l) => {
            const isActive = activeSection === l.href.slice(1)
            return (
              <li key={l.href} role="none">
                <a
                  href={l.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{l.label}</span>
                  {isActive && <span className="nav-indicator" aria-hidden="true" />}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right Action Buttons */}
        <div className="nav-actions">
          <a
            href="/Mihisara_CV.pdf"
            className="nav-btn-cv"
            download="Mihisara_CV.pdf"
            aria-label="Download Isula Mihisara CV (PDF)"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 2V10M8 10L5 7M8 10L11 7M3 14H13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>CV</span>
          </a>

          <a href="#contact" className="btn btn-primary btn-sm nav-cta">
            <span>Contact</span>
          </a>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-menu"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-links">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`mobile-nav-link ${activeSection === l.href.slice(1) ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="mobile-menu-actions">
            <a
              href="/Mihisara_CV.pdf"
              className="btn btn-outline btn-full"
              download="Mihisara_CV.pdf"
              onClick={() => setMenuOpen(false)}
              aria-label="Download CV (PDF)"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 2V10M8 10L5 7M8 10L11 7M3 14H13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              className="btn btn-primary btn-full"
              onClick={() => setMenuOpen(false)}
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ---- Scroll Reveal Animation Wrapper ----
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ---- Typewriter Effect ----
const TYPEWRITER_WORDS = [
  'Full-Stack Developer',
  'Backend Developer',
  'DevOps Enthusiast',
  'Software Engineer',
]

export function Typewriter() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = TYPEWRITER_WORDS[idx % TYPEWRITER_WORDS.length]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(word.slice(0, text.length + 1))
          if (text.length === word.length) {
            setTimeout(() => setDeleting(true), 1700)
          }
        } else {
          setText(word.slice(0, text.length - 1))
          if (text.length === 0) {
            setDeleting(false)
            setIdx((i) => i + 1)
          }
        }
      },
      deleting ? 45 : 85
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, idx])

  return (
    <span className="typewriter-wrapper">
      <span className="typewriter">{text}</span>
      <span className="cursor" aria-hidden="true">|</span>
    </span>
  )
}

// ---- Counter Component ----
export function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const step = Math.ceil(target / 30) || 1
          const interval = setInterval(() => {
            start = Math.min(start + step, target)
            setCount(start)
            if (start >= target) clearInterval(interval)
          }, 40)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref} className="stat-number">{count}</span>
}

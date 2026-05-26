import { Counter, Reveal, Typewriter } from './Shared'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Seeking Internship Opportunities
        </div>
        <h1 className="hero-title">
          <span className="title-line">Hi, I'm</span>
          <span className="title-name">Isula Mihisara</span>
          <span className="title-role">
            <span className="role-prefix">—</span>
            <Typewriter />
          </span>
        </h1>
        <p className="hero-description">
          I'm an <strong>undergraduate student</strong> passionate about <strong>web and software development</strong>.
          Interested in building practical solutions and currently seeking <strong>internship opportunities</strong>.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-ghost">Get in Touch</a>
        </div>
        <div className="hero-stats">
          <Reveal>
            <div className="stat-item">
              <div className="stat-value">
                <Counter target={5} />
                <span className="stat-plus">+</span>
              </div>
              <span className="stat-label">Projects</span>
            </div>
          </Reveal>
          <div className="stat-divider" />
          <Reveal delay={100}>
            <div className="stat-item">
              <div className="stat-value">
                <Counter target={3} />
                <span className="stat-plus">+</span>
              </div>
              <span className="stat-label">Years Coding</span>
            </div>
          </Reveal>
          <div className="stat-divider" />
          <Reveal delay={200}>
            <div className="stat-item">
              <div className="stat-value">
                <Counter target={5} />
                <span className="stat-plus">+</span>
              </div>
              <span className="stat-label">Technologies</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-avatar-wrapper">
          <div className="avatar-ring ring-1" />
          <div className="avatar-ring ring-2" />
          <div className="avatar-ring ring-3" />
          <div className="avatar-glow" />
          <div className="avatar-inner">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="45" r="22" fill="url(#g1)" />
              <path d="M15 110 Q15 80 60 80 Q105 80 105 110" fill="url(#g2)" />
              <defs>
                <linearGradient id="g1" x1="38" y1="23" x2="82" y2="67" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="g2" x1="15" y1="80" x2="105" y2="110" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="tech-badges">
            <div className="tech-badge badge-react">⚛ React</div>
            <div className="tech-badge badge-node">⬡ Node.js</div>
            <div className="tech-badge badge-ts">TS</div>
            <div className="tech-badge badge-db">⛃ DB</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot" />
        <span>Scroll down</span>
      </div>
    </section>
  )
}

import { Counter, Reveal, Typewriter } from './Shared'
import profileImg from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction & Overview">
      <div className="hero-content">
        <div className="hero-badge" role="status">
          <span className="badge-dot" aria-hidden="true" />
          Seeking Software Engineering &amp; Full-Stack Internships
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
          <strong>BSc (Hons) IT Undergraduate at SLIIT</strong> &amp; aspiring <strong>Software Engineer</strong> specializing in
          full-stack web development, backend systems, and clean architectures with <strong>Java, Spring Boot, React, Next.js, and TypeScript</strong>.
          Actively seeking Software Engineering, Full-Stack, or Backend internship opportunities.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary" aria-label="Explore featured software engineering projects">
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/Mihisara_CV.pdf"
            className="btn btn-outline"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Isula Mihisara CV (PDF)"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 2V10M8 10L5 7M8 10L11 7M3 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download CV
          </a>
          <a href="#contact" className="btn btn-ghost" aria-label="Navigate to contact section">Get in Touch</a>
        </div>
        <div className="hero-stats">
          <Reveal>
            <div className="stat-item">
              <div className="stat-value">
                <Counter target={5} />
                <span className="stat-plus">+</span>
              </div>
              <span className="stat-label">Core Projects</span>
            </div>
          </Reveal>
          <div className="stat-divider" aria-hidden="true" />
          <Reveal delay={100}>
            <div className="stat-item">
              <div className="stat-value">
                <Counter target={3} />
                <span className="stat-plus">+</span>
              </div>
              <span className="stat-label">Years Coding</span>
            </div>
          </Reveal>
          <div className="stat-divider" aria-hidden="true" />
          <Reveal delay={200}>
            <div className="stat-item">
              <div className="stat-value">
                <Counter target={10} />
                <span className="stat-plus">+</span>
              </div>
              <span className="stat-label">Key Technologies</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-avatar-wrapper">
          <div className="avatar-ring ring-1" />
          <div className="avatar-ring ring-2" />
          <div className="avatar-ring ring-3" />
          <div className="avatar-glow" />
          <div className="avatar-inner">
            <img src={profileImg} alt="Isula Mihisara" className="avatar-img" />
          </div>
          <div className="tech-badges">
            <div className="tech-badge badge-react">⚛ React</div>
            <div className="tech-badge badge-node">⬡ Node.js</div>
            <div className="tech-badge badge-ts">TS</div>
            <div className="tech-badge badge-db">⛃ DB</div>
          </div>
        </div>
      </div>
    </section>
  )
}

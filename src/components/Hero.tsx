import { Counter, Reveal, Typewriter } from './Shared'
import profileImg from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction & Overview">
      <div className="container">
        {/* Two-Column Hero Composition */}
        <div className="hero-grid">
          {/* Left Column — 55% Content */}
          <div className="hero-content">
            <Reveal delay={40}>
              <div className="hero-badge" role="status">
                <span className="badge-pulse" aria-hidden="true" />
                <span className="badge-text">Software Development &amp; DevOps Intern Candidate</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="hero-title">
                <span className="hero-greeting">Hi, I'm</span>
                <span className="hero-name">
                  Isula <span className="hero-name-gradient">Mihisara</span>
                </span>
                <span className="hero-role-line">
                  <span className="role-prefix">—</span>
                  <Typewriter />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="hero-tagline">
                From the first line of code to the final deployment—I build things that work, scale, and matter.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="hero-description">
                A <strong>third-year Information Technology undergraduate at SLIIT</strong>, I enjoy turning complex ideas into practical software.
                From crafting intuitive interfaces to engineering robust backend systems, I work across the full development lifecycle with{' '}
                <strong className="tech-highlight">React, TypeScript, Java, Spring Boot, Node.js</strong>, and modern database technologies.
              </p>
              <p className="hero-description" style={{ marginTop: '0.75rem' }}>
                I believe great software isn't just about making things work—it's about making them work exceptionally well.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="hero-actions">
                <a
                  href="#projects"
                  className="btn btn-primary"
                  aria-label="Explore featured software engineering projects"
                >
                  <span>Explore Projects</span>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="/Mihisara_CV.pdf"
                  className="btn btn-outline"
                  download="Mihisara_CV.pdf"
                  aria-label="Download Isula Mihisara CV (PDF)"
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
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="hero-social-bar" aria-label="Professional Social Links">
                <span className="social-label">Connect:</span>
                <div className="social-links-group">
                  <a
                    href="https://github.com/MihisaraNet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                    aria-label="GitHub Profile (opens in new tab)"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/isula-mihisara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                    aria-label="LinkedIn Profile (opens in new tab)"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="mailto:mihisara.me@gmail.com"
                    className="social-pill"
                    aria-label="Send Email to Isula Mihisara"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span>Email</span>
                  </a>

                  <a
                    href="tel:+94760338655"
                    className="social-pill"
                    aria-label="Call or WhatsApp Isula Mihisara (+94 76 033 8655)"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column — 45% Visual Composition */}
          <div className="hero-visual-column">
            <Reveal delay={180}>
              <div className="hero-portrait-card">
                {/* Subtle Ambient Radial Lighting */}
                <div className="portrait-glow-backdrop" aria-hidden="true" />

                {/* Portrait Frame */}
                <div className="portrait-frame">
                  <img
                    src={profileImg}
                    alt="Isula Mihisara portrait"
                    className="portrait-image"
                    width="440"
                    height="440"
                    loading="eager"
                  />
                  <div className="portrait-overlay" aria-hidden="true" />
                </div>

                {/* Floating Tech Chips */}
                <div className="floating-badge badge-top-left" aria-hidden="true">
                  <span className="chip-dot dot-cyan" />
                  <span className="chip-label">React &amp; Next.js</span>
                </div>

                <div className="floating-badge badge-top-right" aria-hidden="true">
                  <span className="chip-dot dot-blue" />
                  <span className="chip-label">TypeScript</span>
                </div>

                <div className="floating-badge badge-bottom-left" aria-hidden="true">
                  <span className="chip-dot dot-blue" />
                  <span className="chip-label">Java / Spring Boot</span>
                </div>

                <div className="floating-badge badge-bottom-right" aria-hidden="true">
                  <span className="chip-dot dot-violet" />
                  <span className="chip-label">Docker &amp; CI/CD</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* SECTION 03 — Horizontal Statistics Section */}
        <Reveal delay={220}>
          <div className="hero-metrics-strip" aria-label="Key Engineering Metrics">
            <div className="metric-box">
              <div className="metric-number">
                <Counter target={6} />
                <span className="metric-plus">+</span>
              </div>
              <span className="metric-title">Shipped Projects</span>
              <span className="metric-sub">Production &amp; Systems</span>
            </div>

            <div className="metric-divider" aria-hidden="true" />

            <div className="metric-box">
              <div className="metric-number">
                <Counter target={3} />
                <span className="metric-plus">+</span>
              </div>
              <span className="metric-title">Years Coding</span>
              <span className="metric-sub">Dedicated Engineering</span>
            </div>

            <div className="metric-divider" aria-hidden="true" />

            <div className="metric-box">
              <div className="metric-number">
                <Counter target={5} />
                <span className="metric-plus">+</span>
              </div>
              <span className="metric-title">Core Technologies</span>
              <span className="metric-sub">Full-Stack &amp; DevOps</span>
            </div>

            <div className="metric-divider" aria-hidden="true" />

            <div className="metric-box">
              <div className="metric-number text-highlight">
                <span>SLIIT</span>
              </div>
              <span className="metric-title">Year 3, Semester 2</span>
              <span className="metric-sub">BSc (Hons) in IT</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

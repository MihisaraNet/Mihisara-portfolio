import { Reveal } from './Shared'

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">01 / Engineering Background</span>
            <h2 id="about-heading" className="section-title">Architecting Robust Systems &amp; Modern Experiences</h2>
            <p className="section-subtitle">
              Year 3 IT undergraduate at SLIIT specializing in enterprise full-stack development, cloud infrastructure, and automated DevOps workflows.
            </p>
          </div>
        </Reveal>

        {/* Editorial Two-Column Grid */}
        <div className="about-grid">
          {/* Left Column — Editorial Narrative & Capability Panels */}
          <div className="about-text-column">
            <Reveal delay={60}>
              <div className="about-narrative">
                <p>
                  I am a <strong className="text-highlight">Year 3 IT Undergraduate at the Sri Lanka Institute of Information Technology (SLIIT)</strong> with
                  a deep passion for software engineering, modular system design, and reliable cloud deployments.
                </p>
                <p>
                  Across <strong>6+ shipped software projects</strong>, I have developed complete web and mobile systems end-to-end — from database schema design and secure REST API services to responsive frontend user interfaces. I bridge the gap between frontend craft and robust backend engineering, supported by automated CI/CD pipelines on GitHub Actions, Docker, and AWS/Vercel.
                </p>
              </div>
            </Reveal>

            {/* Three Capability Panels */}
            <div className="capability-stack">
              <Reveal delay={100}>
                <div className="capability-card">
                  <div className="capability-header">
                    <span className="capability-icon">⚡</span>
                    <div>
                      <h3 className="capability-title">Full-Stack &amp; Backend Systems</h3>
                      <span className="capability-tech">Spring Boot • Java • Node.js • React • Next.js</span>
                    </div>
                  </div>
                  <p className="capability-desc">
                    Designing modular enterprise APIs, secure authentication systems (JWT/RBAC), and transactional data models across both relational (MySQL/PostgreSQL) and NoSQL (MongoDB) databases.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="capability-card">
                  <div className="capability-header">
                    <span className="capability-icon">🚀</span>
                    <div>
                      <h3 className="capability-title">DevOps &amp; Cloud Deployment</h3>
                      <span className="capability-tech">GitHub Actions • Docker • AWS EC2/S3 • Vercel</span>
                    </div>
                  </div>
                  <p className="capability-desc">
                    Engineering automated continuous integration and continuous deployment (CI/CD) pipelines, containerizing applications with Docker, and provisioning scalable cloud hosting environments.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="capability-card">
                  <div className="capability-header">
                    <span className="capability-icon">🎯</span>
                    <div>
                      <h3 className="capability-title">Engineering Principles &amp; Clean Code</h3>
                      <span className="capability-tech">OOP • Data Structures • N-Tier Architecture • Agile/Scrum</span>
                    </div>
                  </div>
                  <p className="capability-desc">
                    Rigorous application of Object-Oriented design patterns, clean code principles, algorithmic efficiency, and active collaboration in multi-member Agile sprint workflows.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={220}>
              <div className="about-cta-wrapper">
                <a
                  href="/Mihisara_CV.pdf"
                  className="btn btn-outline"
                  download="Mihisara_CV.pdf"
                  aria-label="Download Isula Mihisara's CV (PDF)"
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
                  <span>Download Curriculum Vitae</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column — Code-Editor-Style Profile Panel */}
          <div className="about-visual-column">
            <Reveal delay={120}>
              <div className="code-editor-card" aria-label="Developer Specification Specification">
                {/* Editor Header */}
                <div className="editor-top-bar">
                  <div className="window-dots" aria-hidden="true">
                    <span className="dot dot-close" />
                    <span className="dot dot-min" />
                    <span className="dot dot-max" />
                  </div>
                  <div className="editor-tab">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="#60A5FA" aria-hidden="true">
                      <path d="M2 3h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v6h10V5H3z" />
                    </svg>
                    <span>engineer.ts</span>
                  </div>
                  <div className="editor-meta">TypeScript 5.8</div>
                </div>

                {/* Editor Code Content with Line Numbers */}
                <div className="editor-body">
                  <div className="line-numbers" aria-hidden="true">
                    {Array.from({ length: 18 }, (_, i) => (
                      <span key={i + 1}>{i + 1}</span>
                    ))}
                  </div>
                  <pre className="code-area">
                    <code>
                      <span className="c-keyword">import</span> {'{'} <span className="c-type">SoftwareEngineer</span> {'}'} <span className="c-keyword">from</span> <span className="c-str">'@sliit/faculty-computing'</span>;{'\n\n'}
                      <span className="c-keyword">export const</span> <span className="c-var">isula</span>: <span className="c-type">SoftwareEngineer</span> = {'{'}{'\n'}
                      {'  '}<span className="c-prop">name</span>: <span className="c-str">"Isula Mihisara"</span>,{'\n'}
                      {'  '}<span className="c-prop">role</span>: <span className="c-str">"Full-Stack &amp; DevOps Intern Candidate"</span>,{'\n'}
                      {'  '}<span className="c-prop">degree</span>: <span className="c-str">"BSc (Hons) in Information Technology"</span>,{'\n'}
                      {'  '}<span className="c-prop">institution</span>: <span className="c-str">"SLIIT (Year 3, Semester 2)"</span>,{'\n'}
                      {'  '}<span className="c-prop">location</span>: <span className="c-str">"Colombo, Sri Lanka 🇱🇰"</span>,{'\n'}
                      {'  '}<span className="c-prop">status</span>: <span className="c-str">"Available for Internships"</span>,{'\n'}
                      {'  '}<span className="c-prop">backend</span>: [<span className="c-str">"Java"</span>, <span className="c-str">"Spring Boot"</span>, <span className="c-str">"Node.js"</span>],{'\n'}
                      {'  '}<span className="c-prop">frontend</span>: [<span className="c-str">"React"</span>, <span className="c-str">"TypeScript"</span>, <span className="c-str">"Next.js"</span>],{'\n'}
                      {'  '}<span className="c-prop">devOps</span>: [<span className="c-str">"Docker"</span>, <span className="c-str">"GitHub Actions"</span>, <span className="c-str">"AWS"</span>],{'\n'}
                      {'  '}<span className="c-prop">databases</span>: [<span className="c-str">"MySQL"</span>, <span className="c-str">"MongoDB"</span>, <span className="c-str">"PostgreSQL"</span>],{'\n'}
                      {'  '}<span className="c-prop">shippedProjects</span>: <span className="c-str">"6+"</span>,{'\n'}
                      {'  '}<span className="c-prop">phone</span>: <span className="c-str">"+94 76 033 8655"</span>,{'\n'}
                      {'  '}<span className="c-prop">email</span>: <span className="c-str">"mihisara.me@gmail.com"</span>{'\n'}
                      {'}'};
                    </code>
                  </pre>
                </div>

                {/* Editor Footer Status Bar */}
                <div className="editor-status-bar" aria-hidden="true">
                  <div className="status-item">
                    <span className="status-dot-ok" />
                    <span>0 errors, 0 warnings</span>
                  </div>
                  <div className="status-item">UTF-8</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

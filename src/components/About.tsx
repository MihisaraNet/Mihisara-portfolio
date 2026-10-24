import { Reveal } from './Shared'

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">01 / About</span>
            <h2 id="about-heading" className="section-title">Who Am I?</h2>
          </div>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <div className="about-text">
              <p>
                An <strong className="highlight">Information Technology Undergraduate</strong> at the{' '}
                <strong className="highlight">Sri Lanka Institute of Information Technology (SLIIT)</strong> with a
                focused passion for full-stack engineering, backend systems, and scalable software solutions.
              </p>
              <p>
                I develop clean, robust applications using modern technologies — from crafting dynamic, accessible user interfaces with{' '}
                <strong className="highlight">React &amp; Next.js</strong> to designing secure enterprise REST APIs and microservices with{' '}
                <strong className="highlight">Java, Spring Boot, and Node.js</strong>, supported by both relational and NoSQL databases.
              </p>
              <div className="about-highlights">
                {[
                  {
                    icon: '🚀',
                    title: 'Full-Stack & Backend Focus',
                    desc: 'Practical development with Java, Spring Boot, React, Next.js, and Node.js REST APIs.',
                  },
                  {
                    icon: '🎯',
                    title: 'Engineering Discipline',
                    desc: 'Emphasis on clean code, Object-Oriented Design, data structures, and database optimization.',
                  },
                  {
                    icon: '🤝',
                    title: 'Agile & Team Collaboration',
                    desc: 'Hands-on experience with Git/GitHub workflows, issue tracking, and collaborative sprints.',
                  },
                ].map(h => (
                  <div key={h.title} className="highlight-item">
                    <span className="highlight-icon" aria-hidden="true">{h.icon}</span>
                    <div>
                      <strong>{h.title}</strong>
                      <p>{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/Mihisara_CV.pdf"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                download
                aria-label="Download Isula Mihisara's CV in PDF format"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2V10M8 10L5 7M8 10L11 7M3 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download CV
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="code-window glass-card" aria-label="Developer summary code card">
              <div className="code-window-bar">
                <span className="dot dot-red" /><span className="dot dot-yellow" /><span className="dot dot-green" />
                <span className="code-window-title">about.ts</span>
              </div>
              <pre className="code-content"><code>
<span className="c-keyword">const</span> <span className="c-var">isula</span> {' = {'}{'\n'}
{'  '}<span className="c-prop">name</span>: <span className="c-str">"Isula Mihisara"</span>,{'\n'}
{'  '}<span className="c-prop">education</span>: <span className="c-str">"SLIIT (BSc Hons IT)"</span>,{'\n'}
{'  '}<span className="c-prop">role</span>: <span className="c-str">"Aspiring Software Engineer"</span>,{'\n'}
{'  '}<span className="c-prop">location</span>: <span className="c-str">"Matara, Sri Lanka 🇱🇰"</span>,{'\n'}
{'  '}<span className="c-prop">coreStack</span>: [<span className="c-str">"Java"</span>, <span className="c-str">"Spring Boot"</span>,{'\n'}
{'    '}<span className="c-str">"React"</span>, <span className="c-str">"Next.js"</span>,{'\n'}
{'    '}<span className="c-str">"TypeScript"</span>, <span className="c-str">"Node.js"</span>,{'\n'}
{'    '}<span className="c-str">"MongoDB"</span>, <span className="c-str">"MySQL"</span>, <span className="c-str">"Docker"</span>],{'\n'}
{'  '}<span className="c-prop">seeking</span>: <span className="c-str">"Software Engineering Internships"</span>,{'\n'}
{'  '}<span className="c-prop">available</span>: <span className="c-bool">true</span>,{'\n'}
{'  '}<span className="c-prop">hire</span>: () <span className="c-keyword">=&gt;</span> {'{'}{'\n'}
{'    '}<span className="c-keyword">return</span> <span className="c-str">"Let's build scalable systems!"</span>;{'\n'}
{'  '}{'}'}{'\n'}
{'}'};
              </code></pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

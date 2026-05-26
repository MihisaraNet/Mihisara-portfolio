import { Reveal } from './Shared'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">01 / About</span>
            <h2 className="section-title">Who Am I?</h2>
          </div>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <div className="about-text">
              <p>
                A <strong className="highlight">Software Engineering undergraduate</strong> with a
                passion for full-stack development and problem-solving. I enjoy building scalable
                web applications, exploring new technologies, and creating software solutions that
                make a real-world impact.
              </p>
              <p>
                Currently pursuing my degree while actively honing my skills across the full stack —
                from crafting intuitive UIs in <strong className="highlight">React</strong> to
                building robust backends with <strong className="highlight">Node.js</strong> and
                working with databases like <strong className="highlight">MongoDB</strong>.
              </p>
              <div className="about-highlights">
                {[
                  { icon: '🚀', title: 'Fast Learner', desc: 'Quickly adapts to new tools, frameworks, and paradigms.' },
                  { icon: '🎯', title: 'Detail Oriented', desc: 'Precision in every pixel and every line of code.' },
                  { icon: '🤝', title: 'Team Player', desc: 'Effective communicator in cross-functional teams.' },
                ].map(h => (
                  <div key={h.title} className="highlight-item">
                    <span className="highlight-icon">{h.icon}</span>
                    <div>
                      <strong>{h.title}</strong>
                      <p>{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="btn btn-outline">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2V10M8 10L5 7M8 10L11 7M3 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download CV
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="code-window glass-card">
              <div className="code-window-bar">
                <span className="dot dot-red" /><span className="dot dot-yellow" /><span className="dot dot-green" />
                <span className="code-window-title">about.ts</span>
              </div>
              <pre className="code-content"><code>
<span className="c-keyword">const</span> <span className="c-var">isula</span> {' = {'}{'\n'}
{'  '}<span className="c-prop">name</span>: <span className="c-str">"Isula Mihisara"</span>,{'\n'}
{'  '}<span className="c-prop">role</span>: <span className="c-str">"SE Undergraduate"</span>,{'\n'}
{'  '}<span className="c-prop">location</span>: <span className="c-str">"Sri Lanka 🇱🇰"</span>,{'\n'}
{'  '}<span className="c-prop">skills</span>: [<span className="c-str">"React"</span>, <span className="c-str">"Node.js"</span>,{'\n'}
{'    '}<span className="c-str">"TypeScript"</span>, <span className="c-str">"Java"</span>,<span className="c-str">"Python"</span>,{'\n'}
{'    '}<span className="c-str">"MongoDB"</span>, <span className="c-str">"Docker"</span>],{'\n'}
{'  '}<span className="c-prop">passion</span>: <span className="c-str">"Building things"</span>,{'\n'}
{'  '}<span className="c-prop">available</span>: <span className="c-bool">true</span>,{'\n'}
{'  '}<span className="c-prop">hire</span>: () <span className="c-keyword">=&gt;</span> {'{'}{'\n'}
{'    '}<span className="c-keyword">return</span> <span className="c-str">"Let's build!"</span>;{'\n'}
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

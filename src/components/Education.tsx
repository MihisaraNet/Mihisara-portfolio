import { Reveal } from './Shared'

interface EduEntry {
  id: string
  title: string
  institution: string
  period: string
  status: 'current' | 'completed'
  badge: string
  desc: string
  highlights: string[]
}

const educationHistory: EduEntry[] = [
  {
    id: 'sliit-degree',
    title: 'Bachelor of Science (Hons) in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: '2024 — Expected 2028',
    status: 'current',
    badge: 'Year 3, Semester 2',
    desc: 'Undergraduate academic degree focused on enterprise full-stack engineering, distributed systems, backend architectures, database design, and cloud deployments.',
    highlights: [
      'Data Structures & Algorithms',
      'Software Engineering & Agile',
      'Database Management Systems',
      'Computer Networks & Protocols',
      'Operating Systems & Concurrency',
      'Enterprise Application Development',
    ],
  },
  {
    id: 'alevel',
    title: 'G.C.E. Advanced Level (A/L) — Technology Stream',
    institution: 'Central College — Matara, Sri Lanka',
    period: '2021 — 2023',
    status: 'completed',
    badge: 'Technology Stream',
    desc: 'Completed secondary education in the Technology Stream, building solid mathematical, algorithmic, and practical computing fundamentals.',
    highlights: [
      'Engineering Technology',
      'Science for Technology',
      'Information & Communication Technology (ICT)',
    ],
  },
  {
    id: 'olevel',
    title: 'G.C.E. Ordinary Level (O/L)',
    institution: 'Central College — Matara, Sri Lanka',
    period: '2015 — 2020',
    status: 'completed',
    badge: 'Secondary Education',
    desc: 'Completed secondary foundation with 9 subject passes, establishing early discipline in analytical problem-solving and English language communication.',
    highlights: ['9 Subject Passes', 'Mathematics', 'Science', 'English Language'],
  },
]

export default function Education() {
  return (
    <section id="education" className="section education-section" aria-labelledby="education-heading">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">04 / Education &amp; Foundations</span>
            <h2 id="education-heading" className="section-title">Academic &amp; Technical Foundation</h2>
            <p className="section-subtitle">
              Formal computing degree and rigorous coursework providing the structural basis for my software engineering practices.
            </p>
          </div>
        </Reveal>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-spine" aria-hidden="true" />

          <div className="timeline-list">
            {educationHistory.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 100}>
                <div className={`timeline-entry ${item.status === 'current' ? 'is-current' : ''}`}>
                  {/* Timeline Indicator Node */}
                  <div className="timeline-node" aria-hidden="true">
                    <span className="node-inner" />
                  </div>

                  {/* Timeline Card */}
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <div>
                        <span className="timeline-period">{item.period}</span>
                        <h3 className="timeline-title">{item.title}</h3>
                        <p className="timeline-institution">{item.institution}</p>
                      </div>
                      <span className={`status-pill ${item.status === 'current' ? 'pill-active' : 'pill-done'}`}>
                        {item.badge}
                      </span>
                    </div>

                    <p className="timeline-desc">{item.desc}</p>

                    <div className="timeline-coursework">
                      <span className="coursework-label">Key Coursework / Focus Areas:</span>
                      <div className="coursework-tags">
                        {item.highlights.map((h) => (
                          <span key={h} className="coursework-tag">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

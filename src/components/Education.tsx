import { Reveal } from './Shared'

interface EduEntry {
  id: string
  type: 'degree' | 'school' | 'cert'
  icon: string
  title: string
  institution: string
  period: string
  status: 'current' | 'completed'
  badge: string
  badgeColor: string
  desc: string
  highlights?: string[]
}

const educationHistory: EduEntry[] = [
  {
    id: 'university',
    type: 'degree',
    icon: '🎓',
    title: 'BSc. (Hons) in Information Technology (Undergraduate)',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: '2024 — Present',
    status: 'current',
    badge: 'In Progress',
    badgeColor: 'badge-current',
    desc: 'A Software Engineering undergraduate with a passion for full-stack development and problem-solving. Building scalable web applications and creating software solutions that make a real-world impact.',
    highlights: [
      'Full Stack Web Development',
      'Software Architecture & Design Patterns',
      'Algorithms & Data Structures',
      'Database Management Systems',
      'Agile Software Development',
    ],
  },
  {
    id: 'alevel',
    type: 'school',
    icon: '📘',
    title: 'G.C.E. Advanced Level (A/L)',
    institution: 'Central College — Matara, Sri Lanka',
    period: '2021 — 2023',
    status: 'completed',
    badge: 'Completed',
    badgeColor: 'badge-done',
    desc: 'Completed Advanced Level examinations in the Technology stream with excellent results, forming a strong foundation in technological concepts and practical engineering applications.',
    highlights: [
      'Engineering Technology',
      'Science for Technology',
      'Information & Communication Technology (ICT)',
    ],
  },
  {
    id: 'olevel',
    type: 'school',
    icon: '📗',
    title: 'G.C.E. Ordinary Level (O/L)',
    institution: 'Central College — Matara, Sri Lanka',
    period: '2015 — 2020',
    status: 'completed',
    badge: 'Completed',
    badgeColor: 'badge-done',
    desc: 'Successfully completed Ordinary Level examinations with 9 subjects, demonstrating strong academic performance across all disciplines.',
    highlights: [
      '9 Subjects Passed',
      'Mathematics — B',
      'Science — B',
      'English — B',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">04 / Education</span>
            <h2 className="section-title">Education History</h2>
            <p className="section-subtitle">My academic journey — from school to university.</p>
          </div>
        </Reveal>

        <div className="edu-timeline">
          {educationHistory.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 120}>
              <div className={`edu-timeline-item ${entry.status === 'current' ? 'edu-current' : ''}`}>
                {/* Left: Year */}
                <div className="edu-period-col">
                  <span className="edu-period">{entry.period}</span>
                </div>

                {/* Center: Connector */}
                <div className="edu-connector">
                  <div className={`edu-node ${entry.status === 'current' ? 'edu-node-active' : ''}`}>
                    <span className="edu-node-icon">{entry.icon}</span>
                  </div>
                  {i < educationHistory.length - 1 && <div className="edu-connector-line" />}
                </div>

                {/* Right: Card */}
                <div className="edu-card glass-card">
                  <div className="edu-card-header">
                    <div className="edu-card-title-group">
                      <h3 className="edu-card-title">{entry.title}</h3>
                      <span className="edu-card-institution">{entry.institution}</span>
                    </div>
                    <span className={`edu-status-badge ${entry.badgeColor}`}>{entry.badge}</span>
                  </div>

                  <p className="edu-card-desc">{entry.desc}</p>

                  {entry.highlights && (
                    <div className="edu-highlights">
                      {entry.highlights.map(h => (
                        <span key={h} className="edu-highlight-tag">{h}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

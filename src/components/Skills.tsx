import { Reveal, SkillBar } from './Shared'

const skillCategories = [
  {
    icon: '⚡', title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / TailwindCSS', level: 88 },
      { name: 'Vue.js', level: 70 },
    ],
  },
  {
    icon: '🛠', title: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 92 },
      { name: 'Python / Django', level: 85 },
      { name: 'Java', level: 90 },
      { name: 'Go (Golang)', level: 70 },
    ],
  },
  {
    icon: '☁', title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS / GCP', level: 88 },
      { name: 'Docker / Kubernetes', level: 75 },
      { name: 'PostgreSQL / MongoDB', level: 82 },
      { name: 'CI/CD Pipelines', level: 70 },
    ],
  },
]

const techLogos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', name: 'Next.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">02 / Skills</span>
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-subtitle">Technologies I work with daily to build exceptional products.</p>
          </div>
        </Reveal>

        <div className="skills-categories">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 100}>
              <div className="skill-category glass-card">
                <div className="skill-cat-header">
                  <span className="skill-cat-icon">{cat.icon}</span>
                  <h3>{cat.title}</h3>
                </div>
                <div className="skill-items">
                  {cat.skills.map(s => (
                    <SkillBar key={s.name} name={s.name} level={s.level} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="tech-logos">
            {techLogos.map(t => (
              <div key={t.name} className="tech-logo-item">
                <img src={t.src} alt={t.name} loading="lazy" />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

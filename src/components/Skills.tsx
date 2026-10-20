import { Reveal, SkillBar } from './Shared'

const skillCategories = [
  {
    icon: '⚡', title: 'Frontend & Mobile',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript / JavaScript', level: 92 },
      { name: 'CSS / TailwindCSS', level: 88 },
      { name: 'React Native / Expo', level: 86 },
    ],
  },
  {
    icon: '🛠', title: 'Backend Development',
    skills: [
      { name: 'Spring Boot / Spring Security', level: 92 },
      { name: 'Java (OOP & Clean Architecture)', level: 90 },
      { name: 'Node.js / Express.js', level: 90 },
      { name: 'REST APIs / JWT / RBAC', level: 88 },
    ],
  },
  {
    icon: '☁', title: 'Databases & Cloud',
    skills: [
      { name: 'MongoDB / MySQL / PostgreSQL', level: 88 },
      { name: 'AWS (EC2, S3)', level: 82 },
      { name: 'Docker / GitHub Actions CI/CD', level: 80 },
      { name: 'Git & Version Control', level: 90 },
    ],
  },
]

const techLogos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', name: 'Spring Boot' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', name: 'AWS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind' },
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

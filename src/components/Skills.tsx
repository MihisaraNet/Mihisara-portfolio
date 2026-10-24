import { Reveal, SkillBar } from './Shared'

const skillCategories = [
  {
<<<<<<< Updated upstream
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
=======
    icon: '⚡',
    title: 'Frontend Development',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript / JavaScript', level: 90 },
      { name: 'HTML5 & Responsive CSS', level: 94 },
      { name: 'Tailwind CSS & Modern UI', level: 88 },
    ],
  },
  {
    icon: '🛠',
    title: 'Backend & APIs',
    skills: [
      { name: 'Java / Spring Boot', level: 90 },
      { name: 'Node.js / Express', level: 88 },
      { name: 'REST APIs & Microservices', level: 86 },
      { name: 'Python', level: 80 },
    ],
  },
  {
    icon: '☁',
    title: 'Databases, DevOps & Tools',
    skills: [
      { name: 'MongoDB / MySQL / PostgreSQL', level: 88 },
      { name: 'Docker Containerization', level: 78 },
      { name: 'Git & GitHub Version Control', level: 92 },
      { name: 'Agile & Project Coordination', level: 85 },
>>>>>>> Stashed changes
    ],
  },
]

const techLogos = [
<<<<<<< Updated upstream
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
=======
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', name: 'Spring Boot' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', name: 'Next.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git' },
>>>>>>> Stashed changes
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">02 / Skills</span>
            <h2 id="skills-heading" className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">
              Languages, frameworks, and engineering tools applied across academic and practical software projects.
            </p>
          </div>
        </Reveal>

        <div className="skills-categories">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 100}>
              <div className="skill-category glass-card">
                <div className="skill-cat-header">
                  <span className="skill-cat-icon" aria-hidden="true">{cat.icon}</span>
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
          <div className="tech-logos" aria-label="Core Technology Logos">
            {techLogos.map(t => (
              <div key={t.name} className="tech-logo-item">
                <img src={t.src} alt={`${t.name} logo`} width="40" height="40" loading="lazy" />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

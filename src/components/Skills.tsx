import { Reveal } from './Shared'

interface TechItem {
  name: string
  spec: string
  icon: string
}

interface SkillCategory {
  id: string
  title: string
  badge: string
  accentColor: string
  skills: TechItem[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    badge: 'Core Syntax',
    accentColor: '#2563EB',
    skills: [
      { name: 'Java', spec: 'OOP & Enterprise Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'TypeScript', spec: 'Strict Types & Modern ES', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', spec: 'ES6+, Async, DOM & Node', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Python', spec: 'Scripting & AI Workflows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', spec: 'Relational Schema & Queries', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    badge: 'User Interfaces',
    accentColor: '#22D3EE',
    skills: [
      { name: 'React.js', spec: 'Hooks, Context, State', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', spec: 'SSR & Production Apps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'React Native', spec: 'Cross-Platform Mobile & Expo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', spec: 'Utility-First Modern Styling', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'HTML5 & CSS3', spec: 'Semantic & Responsive Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'Vite', spec: 'High-Speed Bundler', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    badge: 'APIs & Services',
    accentColor: '#60A5FA',
    skills: [
      { name: 'Spring Boot 3', spec: 'Enterprise Microservices & REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Spring Security', spec: 'JWT Auth & Role-Based Access', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Node.js', spec: 'Asynchronous Event-Driven Runtime', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', spec: 'RESTful Middleware Routing', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'REST APIs', spec: 'Contract Design & Clean Endpoints', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Persistence',
    badge: 'Data Architecture',
    accentColor: '#8B5CF6',
    skills: [
      { name: 'MySQL', spec: 'ACID Relational Modeling', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', spec: 'Document NoSQL & Aggregations', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', spec: 'Structured Relational Storage', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud Infrastructure',
    badge: 'CI/CD & Cloud',
    accentColor: '#2563EB',
    skills: [
      { name: 'Docker', spec: 'Containerization & Multi-Stage Builds', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'GitHub Actions', spec: 'Automated CI/CD Workflows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
      { name: 'Vercel', spec: 'Edge Deployment & Serverless CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Git & GitHub', spec: 'Branching, PRs, Trunk Workflows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Postman', spec: 'API Test Suites & Mock Testing', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    ],
  },
  {
    id: 'architecture',
    title: 'Engineering Concepts & Architecture',
    badge: 'Foundations',
    accentColor: '#22D3EE',
    skills: [
      { name: 'OOP Principles', spec: 'Inheritance, Polymorphism, SOLID', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Data Structures', spec: 'Arrays, Lists, Queues, Hashmaps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'N-Tier Architecture', spec: 'Controller, Service, Repository', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Modular Monolith', spec: 'Domain-Driven Isolation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Agile & Scrum', spec: 'Sprints, Standups & Milestones', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'JWT Security', spec: 'Stateless Auth & RBAC Guards', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">02 / Technical Stack</span>
            <h2 id="skills-heading" className="section-title">Technical Expertise &amp; Tooling</h2>
            <p className="section-subtitle">
              Engineered with modern, production-grade tools across backend architecture, cloud infrastructure, and modern frontend platforms.
            </p>
          </div>
        </Reveal>

        {/* 6 Categorized Skill Panels Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <Reveal key={cat.id} delay={idx * 60}>
              <div className="skill-category-card">
                <div className="category-header">
                  <div>
                    <h3 className="category-title">{cat.title}</h3>
                    <span className="category-count">{cat.skills.length} Technologies</span>
                  </div>
                  <span className="category-badge" style={{ borderColor: cat.accentColor, color: cat.accentColor }}>
                    {cat.badge}
                  </span>
                </div>

                <div className="tech-tile-grid">
                  {cat.skills.map((s) => (
                    <div key={s.name} className="tech-tile" tabIndex={0} role="group" aria-label={`${s.name}: ${s.spec}`}>
                      <div className="tech-tile-icon-wrap">
                        <img
                          src={s.icon}
                          alt=""
                          width="24"
                          height="24"
                          loading="lazy"
                          className="tech-tile-icon"
                          onError={(e) => {
                            // Fallback to placeholder if devicon is unreachable
                            ;(e.target as HTMLElement).style.display = 'none'
                          }}
                        />
                      </div>
                      <div className="tech-tile-info">
                        <span className="tech-tile-name">{s.name}</span>
                        <span className="tech-tile-spec">{s.spec}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

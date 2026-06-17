import { useState } from 'react'
import { Reveal } from './Shared'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 12L12 2M12 2H7M12 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const projects = [
  {
    id: 'studynova',
    category: 'fullstack',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #a78bfa22 0%, #06b6d422 100%)',
    title: 'StudyNova — Smart Student Study Planner App',
    desc: 'A comprehensive academic organizer designed to optimize study habits. Features a React Native mobile frontend with custom analytics charts and state management, backed by a Spring Boot REST API secured with Spring Security, JWT, and MongoDB.',
    tags: ['React Native', 'Spring Boot', 'MongoDB', 'Spring Security', 'Expo', 'Zustand'],
    featured: false ,
    github: 'https://github.com/MihisaraNet/StudyNova',
    live: null
  },
  {
    id: 'layerforge',
    category: 'fullstack',
    icon: '🖨️',
    gradient: 'linear-gradient(135deg, #f9731622 0%, #ec489922 100%)',
    image: '/layerforge.png',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Expo', 'JWT'],
    title: 'LayerForge 3D — Custom 3D Printing Marketplace',
    desc: 'A premium end-to-end e-commerce and 3D printing service platform. Features a custom 3D printing wizard supporting STL uploads, print material selection (PLA/ABS/Resin), dynamic cost/price calculators, a role-based admin dashboard, and JWT-secured REST APIs.',
    featured: false,
    github: 'https://github.com/MihisaraNet/Ceylon-3D',
    live: 'layerforge3d.vercel.app'
  },
  {
    id: 'medicare',
    category: 'fullstack',
    icon: '💊',
    gradient: 'linear-gradient(135deg, #10b98122 0%, #3b82f622 100%)',
    tags: ['Spring Boot 3', 'React', 'Vite', 'MySQL', 'JWT', 'RBAC'],
    title: 'MediCare — Enterprise Pharmacy Management System',
    desc: 'An enterprise-grade, full-stack pharmacy management system. Features secure JWT role-based access control, batch expiry tracking, automated low-stock and sales reporting, and a streamlined administrative dashboard built with Spring Boot 3, React (Vite), and MySQL.',
    featured: false,
    github: 'https://github.com/MihisaraNet/Pharmacy-Management-System',
    live: null
  },
  {
    id: 'rentalx',
    category: 'fullstack',
    icon: '🚗',
    gradient: 'linear-gradient(135deg, #f59e0b22 0%, #ef444422 100%)',
    tags: ['Spring Boot', 'Java 21', 'OOP', 'JavaScript', 'REST API', 'File Storage'],
    title: 'RentalX — Vehicle Rental Management System',
    desc: 'A modular, zero-dependency vehicle rental application showcasing OOP and clean N-tier architecture. Engineered with a Spring Boot backend, a custom file-based .txt storage engine, custom sorting algorithms, and a dynamic ES6 JavaScript frontend.',
    featured: false,
    github: 'https://github.com/MihisaraNet/RentalX',
    live: null
  },
]

type Filter = 'all' | 'fullstack' | 'frontend' | 'backend'

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = projects.filter(p => filter === 'all' || p.category === filter)

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">03 / Projects</span>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">A selection of projects I've built — from idea to deployment.</p>
          </div>
        </Reveal>

        <div className="project-filters">
          {(['all', 'fullstack', 'frontend', 'backend'] as Filter[]).map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <article className={`project-card glass-card ${p.featured ? 'featured' : ''}`}>
                {p.featured && <div className="featured-badge">⭐ Featured</div>}

                <div className="project-content">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                  <div className="project-links">
                    {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link"><ArrowIcon /> Live Demo</a>}
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link"><GithubIcon /> Source</a>}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


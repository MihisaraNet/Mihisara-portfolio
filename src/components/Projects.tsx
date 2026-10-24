import { useState } from 'react'
import { Reveal } from './Shared'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 12L12 2M12 2H7M12 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

<<<<<<< Updated upstream
interface Project {
  id: string
  category: 'fullstack' | 'frontend' | 'backend'
  categories?: ('fullstack' | 'frontend' | 'backend')[]
  icon: string
  gradient: string
  tags: string[]
  title: string
  desc: string
  featured: boolean
  github: string
  live: string | null
  stars?: number
}

const projects: Project[] = [
  {
    id: 'layerforge',
    category: 'fullstack',
    categories: ['fullstack'],
    icon: '🖨️',
    gradient: 'linear-gradient(135deg, #f9731622 0%, #ec489922 100%)',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Expo', 'JWT'],
    title: 'LayerForge 3D — Custom 3D Printing Marketplace',
    desc: 'A premium end-to-end e-commerce and 3D printing service platform. Features a custom 3D printing wizard supporting STL uploads, print material selection (PLA/ABS/Resin), dynamic cost/price calculators, a role-based admin dashboard, and JWT-secured REST APIs.',
    featured: true,
    github: 'https://github.com/MihisaraNet/LayerForge3D',
    live: 'https://layerforge3d.vercel.app',
    stars: 6
  },
=======
interface ProjectItem {
  id: string
  category: 'fullstack' | 'frontend' | 'backend'
  icon: string
  title: string
  desc: string
  problem: string
  solution: string
  myRole: string
  keyFeatures: string
  technicalHighlights: string
  tags: string[]
  featured: boolean
  github: string | null
  live: string | null
}

const projects: ProjectItem[] = [
>>>>>>> Stashed changes
  {
    id: 'campustrace',
    category: 'fullstack',
    categories: ['fullstack', 'frontend'],
    icon: '🎒',
    title: 'CampusTrace — Lost & Found Web Application',
    desc: 'A full-stack MERN lost-and-found platform designed for university campuses. Features secure JWT authentication, Cloudinary media pipeline, claim verification, and an admin mediation panel.',
    problem: 'University campus communities frequently lose valuable items without a centralized, verified system to track, verify ownership, and return lost belongings.',
    solution: 'Engineered a centralized MERN web application where students report lost/found items with image proof, submit structured claim verification requests, and campus administrators moderate transactions.',
    myRole: 'Designed full-stack architecture, built RESTful endpoints with Node.js/Express, implemented JWT authentication, and connected Cloudinary image uploads.',
    keyFeatures: 'Cloudinary image uploads, claim verification workflow, role-based admin moderation hub, dual-theme glassmorphic interface.',
    technicalHighlights: 'Stateless JWT session security, MongoDB schema indexing for fast item lookups, responsive state management.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Cloudinary'],
    featured: false,
    github: 'https://github.com/MihisaraNet/CampusTrace',
    live: null,
    stars: 3
  },
  {
    id: 'studynova',
    category: 'fullstack',
    categories: ['fullstack', 'backend'],
    icon: '🎓',
    title: 'StudyNova — Smart Student Study Planner App',
    desc: 'A cross-platform academic organizer app featuring a React Native mobile client and a secure Spring Boot REST API for routine planning and progress tracking.',
    problem: 'Undergraduate students struggle to systematically schedule revision hours, track coursework deadlines, and measure academic productivity across multiple modules.',
    solution: 'Developed a cross-platform mobile study planner with interactive analytics charts, revision alarms, and secure cloud synchronization.',
    myRole: 'Built mobile user interfaces with React Native/Expo, configured Zustand client state management, and engineered Spring Boot REST API endpoints.',
    keyFeatures: 'Daily study routine planner, visual productivity charts, exam countdowns, cloud sync across devices.',
    technicalHighlights: 'Spring Security with JWT authentication, clean N-tier backend architecture, optimized mobile JSON payloads.',
    tags: ['React Native', 'Spring Boot', 'MongoDB', 'Spring Security', 'Expo', 'Zustand'],
<<<<<<< Updated upstream
    featured: false,
    github: 'https://github.com/MihisaraNet/StudyNova',
    live: null,
    stars: 4
=======
    featured: false,
    github: 'https://github.com/MihisaraNet/StudyNova',
    live: null
  },
  {
    id: 'layerforge',
    category: 'fullstack',
    icon: '🖨️',
    title: 'LayerForge 3D — Custom 3D Printing Marketplace',
    desc: 'An end-to-end e-commerce and 3D printing service portal supporting STL model uploads, dynamic volume/pricing calculators, and admin order tracking.',
    problem: 'Makers and clients lack a streamlined system to submit custom 3D models, calculate material costs, and monitor print fabrication status in real-time.',
    solution: 'Created an online service platform featuring automated 3D file pricing calculators, material selections, and order status dashboards.',
    myRole: 'Engineered dynamic pricing calculators based on material density and volume, developed backend order APIs, and implemented secure checkout flows.',
    keyFeatures: '3D STL file upload support, material selection (PLA/ABS/Resin), automated price quoting, role-based admin order tracker.',
    technicalHighlights: 'Custom volume calculation logic, JWT-secured RESTful endpoints, responsive React interface.',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Expo', 'JWT'],
    featured: false,
    github: 'https://github.com/MihisaraNet/Ceylon-3D',
    live: 'https://layerforge3d.vercel.app'
>>>>>>> Stashed changes
  },
  {
    id: 'medicare',
    category: 'fullstack',
    categories: ['fullstack', 'backend'],
    icon: '💊',
    title: 'MediCare — Enterprise Pharmacy Management System',
    desc: 'An enterprise healthcare management platform with batch expiry tracking, low-stock notifications, and role-based access control built with Spring Boot 3 and React.',
    problem: 'Community pharmacies face stock stockouts, financial losses due to untracked drug expiry dates, and slow manual counter sales.',
    solution: 'Built an enterprise pharmacy management platform that provides automated batch expiry tracking, low-stock threshold alerts, and role-based staff authorization.',
    myRole: 'Architected relational MySQL schema, implemented Spring Data JPA repositories and business services, and built responsive React dashboard views.',
    keyFeatures: 'Batch expiry monitoring, automated low-stock warnings, role-based access control (RBAC), transactional billing.',
    technicalHighlights: 'Spring Boot 3 REST APIs, Spring Security filter chains, relational indexing, ACID-compliant transactions.',
    tags: ['Spring Boot 3', 'React', 'Vite', 'MySQL', 'JWT', 'RBAC'],
    featured: false,
    github: 'https://github.com/MihisaraNet/Pharmacy-Management-System',
    live: null,
    stars: 5
  },
  {
    id: 'rentalx',
    category: 'backend',
<<<<<<< Updated upstream
    categories: ['backend'],
=======
>>>>>>> Stashed changes
    icon: '🚗',
    title: 'RentalX — Vehicle Rental Management System',
    desc: 'A modular, zero-dependency vehicle rental application showcasing OOP and clean N-tier architecture engineered with Java, Spring Boot, and custom data structures.',
    problem: 'Demonstrating robust software engineering design patterns and algorithm efficiency in managing fleet availability and customer bookings.',
    solution: 'Designed an N-tier vehicle rental management system applying strict Object-Oriented Programming (OOP) principles, custom sorting, and file persistence.',
    myRole: 'Engineered domain entities, service interfaces, custom persistence logic, and REST controllers.',
    keyFeatures: 'Vehicle fleet catalog, automated rate calculation, reservation scheduling, client-side dynamic search.',
    technicalHighlights: 'Clean N-tier architecture, custom sorting algorithms, SOLID design patterns, zero third-party database dependencies.',
    tags: ['Spring Boot', 'Java 21', 'OOP', 'JavaScript', 'REST API'],
    featured: false,
    github: 'https://github.com/MihisaraNet/RentalX',
    live: null,
    stars: 5
  },
  {
    id: 'portfolio',
    category: 'frontend',
    categories: ['frontend'],
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #06b6d422 0%, #3b82f622 100%)',
    tags: ['React 19', 'TypeScript', 'Vite', 'CSS3', 'GitHub Actions', 'Vercel'],
    title: 'Developer Portfolio — Modern Interactive Showcase',
    desc: 'A responsive portfolio website engineered with React 19, TypeScript, and Vite. Features custom animations, glassmorphic UI, dynamic project filtering, and automated CI/CD deployment via GitHub Actions to Vercel.',
    featured: false,
    github: 'https://github.com/MihisaraNet/Mihisara-portfolio',
    live: 'https://mihisara-portfolio.vercel.app',
    stars: 5
  },
]

type Filter = 'all' | 'fullstack' | 'frontend' | 'backend'

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = projects.filter(p => {
    if (filter === 'all') return true
    if (p.category === filter) return true
    if (p.categories && p.categories.includes(filter)) return true
    return false
  })

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">03 / Projects</span>
<<<<<<< Updated upstream
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">A selection of projects I\'ve built — from idea to deployment.</p>
=======
            <h2 id="projects-heading" className="section-title">Featured Engineering Work</h2>
            <p className="section-subtitle">
              A curated selection of software systems I have designed, engineered, and deployed — highlighting full-stack architectures, clean code, and practical problem-solving.
            </p>
>>>>>>> Stashed changes
          </div>
        </Reveal>

        <div className="project-filters" role="tablist" aria-label="Filter projects by category">
          {(['all', 'fullstack', 'frontend', 'backend'] as Filter[]).map(f => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
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
<<<<<<< Updated upstream
=======
                {p.featured && <div className="featured-badge" aria-label="Featured project">⭐ Featured</div>}

>>>>>>> Stashed changes
                <div className="project-content">
                  {p.featured && <div className="featured-badge">⭐ Featured</div>}
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>

                  <details className="project-deep-dive">
                    <summary className="project-summary-btn">
                      <span>Engineering Details (Problem &amp; Role)</span>
                    </summary>
                    <div className="project-deep-dive-content">
                      <div className="dive-item">
                        <strong>Problem:</strong> <span>{p.problem}</span>
                      </div>
                      <div className="dive-item">
                        <strong>Solution:</strong> <span>{p.solution}</span>
                      </div>
                      <div className="dive-item">
                        <strong>My Role:</strong> <span>{p.myRole}</span>
                      </div>
                      <div className="dive-item">
                        <strong>Key Features:</strong> <span>{p.keyFeatures}</span>
                      </div>
                      <div className="dive-item">
                        <strong>Highlights:</strong> <span>{p.technicalHighlights}</span>
                      </div>
                    </div>
                  </details>

                  <div className="project-tags" aria-label="Technologies used">
                    {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                  <div className="project-links">
<<<<<<< Updated upstream
                    {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link"><ArrowIcon /> Live Demo</a>}
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link"><GithubIcon /> Source</a>}
                    {p.stars !== undefined && (
                      <span className="project-stars" title={`${p.stars} stars on GitHub`}>
                        <StarIcon /> {p.stars}
                      </span>
=======
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View live demo for ${p.title} (opens in new tab)`}
                      >
                        <ArrowIcon /> Live Demo
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View source code for ${p.title} on GitHub (opens in new tab)`}
                      >
                        <GithubIcon /> Source Code
                      </a>
>>>>>>> Stashed changes
                    )}
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

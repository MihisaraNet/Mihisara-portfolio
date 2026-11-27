import { useState } from 'react'
import { Reveal } from './Shared'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 12L12 2M12 2H7M12 2V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

interface ProjectItem {
  id: string
  tier: 'featured' | 'secondary' | 'grid'
  category: 'fullstack' | 'frontend' | 'backend'
  categories: ('fullstack' | 'frontend' | 'backend')[]
  title: string
  subtitle: string
  timeline: string
  context: string
  problem: string
  contribution: string
  desc: string
  tags: string[]
  github: string
  live?: string | null
  statsLabel?: string
  mockupType: 'layerforge' | 'studynova' | 'medicare' | 'ridelink' | 'campustrace' | 'rentalx'
}

const projects: ProjectItem[] = [
  // 1. Large Featured Flagship Project
  {
    id: 'layerforge',
    tier: 'featured',
    category: 'fullstack',
    categories: ['fullstack'],
    title: 'LayerForge 3D — Custom 3D Printing E-Commerce Platform',
    subtitle: 'End-to-End Quotation Engine & Multi-Role Order Management',
    timeline: 'Jan 2026 – May 2026',
    context: 'SLIIT | 5-Member Agile Sprint Team',
    problem:
      'Makers and clients lacked an automated online ordering workflow to calculate material costs directly from raw 3D mesh model files without manual administrative delays.',
    contribution:
      'Served as the sole backend engineer for all auth and order pipelines across a 5-month sprint. Architected 3-tier JWT RBAC and engineered the volumetric geometry pricing engine.',
    desc: 'An end-to-end e-commerce and 3D printing service portal supporting STL model uploads, dynamic volume/pricing calculators, and admin order tracking.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT (RBAC)', 'React Native', 'Expo', 'RESTful API'],
    github: 'https://github.com/MihisaraNet/LayerForge3D',
    live: 'https://layerforge3d.vercel.app',
    statsLabel: '100% Automated Quotations',
    mockupType: 'layerforge',
  },

  // 2. Secondary Card 1
  {
    id: 'studynova',
    tier: 'secondary',
    category: 'fullstack',
    categories: ['fullstack', 'backend'],
    title: 'StudyNova — AI-Powered Student Productivity Companion',
    subtitle: 'Spring Boot Backend on AWS EC2 with Google Gemini Pro API',
    timeline: 'Apr 2026 – Jun 2026',
    context: 'Solo Engineering Project',
    problem:
      'Undergraduates struggle to balance complex coursework, assignment revisions, and upcoming exam timelines with static calendar tools.',
    contribution:
      'Architected full-stack solution deploying Spring Boot on AWS EC2, configured MongoDB Atlas, and integrated Google Gemini Pro API as an intelligent study advisor.',
    desc: 'Cross-platform productivity application with an AI Study Advisor that parses pending tasks and generates optimized, hour-by-hour study plans.',
    tags: ['Java', 'Spring Boot', 'AWS EC2', 'Google Gemini Pro', 'MongoDB', 'React Native', 'Zustand', 'JWT'],
    github: 'https://github.com/MihisaraNet/StudyNova',
    statsLabel: 'AWS Cloud + Gemini AI',
    mockupType: 'studynova',
  },

  // 3. Secondary Card 2
  {
    id: 'medicare',
    tier: 'secondary',
    category: 'fullstack',
    categories: ['fullstack', 'backend'],
    title: 'MediCare — Enterprise Pharmacy Management System',
    subtitle: 'Automated Stock Alerting & Role-Based Healthcare Operations',
    timeline: 'Jul 2025 – Nov 2025',
    context: 'SLIIT | 6-Member Team',
    problem:
      'Community dispensaries suffer significant financial waste and patient risk due to untracked batch expiry dates and manual paper ledger errors.',
    contribution:
      'Led backend development for 100+ SKU operations; built cron-driven low-stock and expiry monitoring routines and secure 2-tier Spring Security authorization.',
    desc: 'Full-stack pharmacy management platform handling inventory, sales, and staff workflows for a simulated 100+ SKU operation with real-time alerts.',
    tags: ['Java', 'Spring Boot 3', 'Spring Security', 'JWT', 'React.js', 'MySQL', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/MihisaraNet/Pharmacy-Management-System',
    statsLabel: '80% Less Inventory Review Time',
    mockupType: 'medicare',
  },

  // 4. Grid Project 1
  {
    id: 'ridelink',
    tier: 'grid',
    category: 'backend',
    categories: ['backend'],
    title: 'RideLink — Microservices Ride-Hailing Backend Platform',
    subtitle: '4 Autonomous Spring Boot Services, Database-per-Service & Docker Compose',
    timeline: 'Aug 2026 – Sep 2026',
    context: 'SLIIT | IT3130 – Application Development ',
    problem:
      'Ride-hailing ecosystems require decoupled services for auth, driver telematics, trip dispatching, and payments to avoid single points of failure and support independent scalability.',
    contribution:
      'Architected 4 autonomous Spring Boot microservices (Account: 8081, Driver: 8082, Ride: 8083, Fare: 8084) using database-per-service pattern with MongoDB, non-blocking RestClient communication, and Docker Compose orchestration.',
    desc: 'Enterprise-grade microservices ride-hailing backend engineered with Java 21, Spring Boot, MongoDB, and Docker Compose orchestration across 4 autonomous services.',
    tags: ['Java 21', 'Spring Boot 3', 'Microservices', 'MongoDB', 'Docker Compose', 'Spring Security', 'JWT', 'REST APIs', 'OpenAPI 3', 'GitHub Actions CI'],
    github: 'https://github.com/MihisaraNet/RideLink_AD_IT3130',
    statsLabel: '4 Microservices • Docker Compose',
    mockupType: 'ridelink',
  },

  // 5. Grid Project 2
  {
    id: 'campustrace',
    tier: 'grid',
    category: 'fullstack',
    categories: ['fullstack', 'frontend'],
    title: 'CampusTrace — Full-Stack Lost & Found Platform',
    subtitle: 'Verified Ownership Workflows with Cloudinary Media Pipeline',
    timeline: 'Apr 2026 – Jun 2026',
    context: 'Solo Engineering Project',
    problem:
      'University campuses lack a secure, unified verification hub to report lost belongings and validate ownership before handover.',
    contribution:
      'Built complete MERN application with role-separated student and administrative interfaces, Cloudinary image upload pipeline, and JWT auth.',
    desc: 'Full-stack MERN lost-and-found platform with role-separated student/admin workflows and Cloudinary media pipeline.',
    tags: ['React.js (Vite)', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'Multer'],
    github: 'https://github.com/MihisaraNet/CampusTrace',
    statsLabel: 'MERN Stack + Cloudinary',
    mockupType: 'campustrace',
  },

  // 6. Grid Project 3
  {
    id: 'rentalx',
    tier: 'grid',
    category: 'backend',
    categories: ['backend'],
    title: 'RentalX — Vehicle Rental Management System',
    subtitle: 'N-Tier Java Architecture with Custom Data Structures',
    timeline: 'Completed',
    context: 'SLIIT | 6-Member Team',
    problem:
      'Maintaining vehicle rental schedules and fleet availability efficiently without third-party database dependencies.',
    contribution:
      'Engineered N-tier Java architecture implementing custom linked list/queue data structures and Selection Sort algorithms for fleet tracking.',
    desc: 'Modular vehicle rental application engineered with clean OOP patterns, custom sorting, and N-tier architecture.',
    tags: ['Java', 'Spring Boot', 'OOP Patterns', 'Custom Data Structures', 'Algorithms', 'REST API'],
    github: 'https://github.com/MihisaraNet/RentalX',
    statsLabel: 'Custom OOP & Sorting Engine',
    mockupType: 'rentalx',
  },
]

type Filter = 'all' | 'fullstack' | 'backend' | 'frontend'

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = projects.filter((p) => {
    if (filter === 'all') return true
    if (p.category === filter) return true
    if (p.categories.includes(filter)) return true
    return false
  })

  // Separate tiers for the editorial composition
  const featured = filtered.find((p) => p.tier === 'featured')
  const secondary = filtered.filter((p) => p.tier === 'secondary')
  const gridProjects = filtered.filter((p) => p.tier === 'grid')

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <div className="container">
        <Reveal>
          <div className="section-header-left">
            <div className="section-title-wrap">
              <span className="section-tag">03 / Engineering Portfolio</span>
              <h2 id="projects-heading" className="section-title">Projects &amp; Systems Experience</h2>
              <p className="section-subtitle">
                Production-ready systems, full-stack applications, and enterprise backend architectures built with modern engineering standards.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="project-filters" role="tablist" aria-label="Filter projects by category">
              {(['all', 'fullstack', 'backend', 'frontend'] as Filter[]).map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  className={`filter-pill ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f === 'all'
                    ? 'All Projects (6)'
                    : f === 'fullstack'
                      ? 'Full-Stack'
                      : f === 'backend'
                        ? 'Backend APIs'
                        : 'Frontend'}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 1. Large Flagship Featured Project (Full Width) */}
        {featured && (
          <Reveal delay={80}>
            <article className="featured-project-card" aria-label={`Featured Project: ${featured.title}`}>
              <div className="featured-card-grid">
                {/* Visual Technical Mockup Window */}
                <div className="project-mockup-wrapper">
                  <div className="mockup-window">
                    <div className="mockup-header">
                      <div className="mockup-dots" aria-hidden="true">
                        <span className="dot dot-close" />
                        <span className="dot dot-min" />
                        <span className="dot dot-max" />
                      </div>
                      <div className="mockup-address-bar">
                        <span className="lock-icon" aria-hidden="true">🔒</span>
                        <span>https://layerforge3d.vercel.app</span>
                      </div>
                      <span className="mockup-status-tag">Live Production</span>
                    </div>

                    <div className="mockup-body mockup-layerforge">
                      <div className="layerforge-preview">
                        <div className="preview-top-badge">
                          <span className="badge-chip">3D Model Processing</span>
                          <span className="badge-chip chip-cyan">Automated Mesh Pricing</span>
                        </div>
                        <div className="preview-mesh-card">
                          <div className="mesh-icon-wrap" aria-hidden="true">🖨️</div>
                          <div className="mesh-info">
                            <span className="mesh-name">model_component_v2.stl</span>
                            <span className="mesh-calc">Volume: 84.5 cm³ • Infill: 20% • Material: PLA</span>
                          </div>
                          <div className="mesh-price-tag">LKR 3,850.00</div>
                        </div>
                        <div className="preview-terminal-strip">
                          <code>[Order Pipeline] JWT Verified (Admin/Staff/Customer) &rarr; Quote Stored &rarr; Dispatch Ready</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editorial Content */}
                <div className="featured-content">
                  <div className="project-meta-badges">
                    <span className="featured-flag">★ Flagship Project</span>
                    <span className="project-context">{featured.context}</span>
                  </div>

                  <h3 className="featured-title">{featured.title}</h3>
                  <p className="featured-subtitle">{featured.subtitle}</p>

                  <div className="project-detail-box">
                    <div className="detail-row">
                      <span className="detail-label">The Problem:</span>
                      <p className="detail-text">{featured.problem}</p>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">My Contribution:</span>
                      <p className="detail-text">{featured.contribution}</p>
                    </div>
                  </div>

                  <div className="tech-badge-cloud">
                    {featured.tags.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-actions">
                    {featured.live && (
                      <a
                        href={featured.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        aria-label={`Open live demo for ${featured.title}`}
                      >
                        <span>Live Demo</span>
                        <ArrowIcon />
                      </a>
                    )}
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      aria-label={`View GitHub repository for ${featured.title}`}
                    >
                      <GithubIcon />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {/* 2. Secondary Projects (2-Column Grid) */}
        {secondary.length > 0 && (
          <div className="secondary-projects-grid">
            {secondary.map((p, idx) => (
              <Reveal key={p.id} delay={120 + idx * 80}>
                <article className="secondary-project-card" aria-label={`Project: ${p.title}`}>
                  <div className="secondary-mockup-wrapper">
                    <div className="mockup-window-sm">
                      <div className="mockup-header">
                        <div className="mockup-dots" aria-hidden="true">
                          <span className="dot dot-close" />
                          <span className="dot dot-min" />
                          <span className="dot dot-max" />
                        </div>
                        <span className="mockup-tab-title">{p.id}.api.ts</span>
                        <span className="mockup-sub-badge">{p.statsLabel}</span>
                      </div>

                      <div className={`secondary-mockup-body mockup-${p.mockupType}`}>
                        {p.mockupType === 'studynova' && (
                          <div className="code-mockup-content">
                            <div className="mockup-metric-row">
                              <span className="badge-chip chip-blue">AWS EC2 Microservice</span>
                              <span className="badge-chip chip-violet">Gemini Pro AI</span>
                            </div>
                            <pre className="mockup-code">
                              <code>
                                <span className="c-comment">// Gemini Pro AI Study Advisor</span>{'\n'}
                                <span className="c-keyword">const</span> plan = <span className="c-keyword">await</span> gemini.generateStudySchedule({'{'}{'\n'}
                                {'  '}modules: [<span className="c-str">'DSA'</span>, <span className="c-str">'OS'</span>, <span className="c-str">'SE'</span>],{'\n'}
                                {'  '}dailyPace: <span className="c-str">'3.5h / day'</span>{'\n'}
                                {'}'});
                              </code>
                            </pre>
                          </div>
                        )}

                        {p.mockupType === 'medicare' && (
                          <div className="code-mockup-content">
                            <div className="mockup-metric-row">
                              <span className="badge-chip chip-red">Cron Alert Engine</span>
                              <span className="badge-chip chip-green">100+ Tracked SKUs</span>
                            </div>
                            <pre className="mockup-code">
                              <code>
                                <span className="c-comment">// Automated Expiry &amp; Low Stock Cron</span>{'\n'}
                                @Scheduled(cron = <span className="c-str">"0 0 0 * * ?"</span>){'\n'}
                                <span className="c-keyword">public void</span> checkStockLevels() {'{'}{'\n'}
                                {'  '}alertService.notifyPharmacists(lowStockItems);{'\n'}
                                {'}'}
                              </code>
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="secondary-card-content">
                    <div className="card-top-meta">
                      <span className="context-pill">{p.context}</span>
                      <span className="timeline-pill">{p.timeline}</span>
                    </div>

                    <h3 className="card-title">{p.title}</h3>
                    <p className="card-subtitle">{p.subtitle}</p>

                    <p className="card-desc">{p.contribution}</p>

                    <div className="tech-badge-cloud">
                      {p.tags.map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="project-card-actions">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                          aria-label={`View live demo for ${p.title}`}
                        >
                          <span>Live Demo</span>
                          <ArrowIcon />
                        </a>
                      )}
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                        aria-label={`View repository for ${p.title}`}
                      >
                        <GithubIcon />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {/* 3. Grid Projects (3-Column Layout) */}
        {gridProjects.length > 0 && (
          <div className="grid-projects-row">
            {gridProjects.map((p, idx) => (
              <Reveal key={p.id} delay={140 + idx * 70}>
                <article className="grid-project-card" aria-label={`Project: ${p.title}`}>
                  <div className="grid-card-mockup">
                    <div className="mockup-window-mini">
                      <div className="mockup-header-mini">
                        <div className="mockup-dots" aria-hidden="true">
                          <span className="dot dot-close" />
                          <span className="dot dot-min" />
                        </div>
                        <span className="mockup-mini-label">{p.statsLabel}</span>
                      </div>
                      <div className={`mini-mockup-body mini-${p.mockupType}`}>
                        {p.mockupType === 'ridelink' && (
                          <div className="mini-terminal">
                            <code>
                              <span className="c-method">DOCKER</span> 4 Services Up: 8081, 8082, 8083, 8084{'\n'}
                              <span className="c-json">MongoDB: Database-per-Service • RestClient</span>
                            </code>
                          </div>
                        )}
                        {p.mockupType === 'campustrace' && (
                          <div className="mini-terminal">
                            <code>
                              <span className="c-method">PATCH</span> /api/claims/verify{'\n'}
                              <span className="c-json">{'{'} verified: true, media: Cloudinary {'}'}</span>
                            </code>
                          </div>
                        )}
                        {p.mockupType === 'rentalx' && (
                          <div className="mini-terminal">
                            <code>
                              <span className="c-method">EXEC</span> SelectionSort(fleetQueue){'\n'}
                              <span className="c-json">O(n²) in-place &bull; Zero DB overhead</span>
                            </code>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid-card-body">
                    <span className="grid-card-context">{p.context}</span>
                    <h3 className="grid-card-title">{p.title}</h3>
                    <p className="grid-card-desc">{p.contribution}</p>

                    <div className="tech-badge-cloud compact">
                      {p.tags.slice(0, 4).map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                      {p.tags.length > 4 && (
                        <span className="tech-badge more">+{p.tags.length - 4}</span>
                      )}
                    </div>

                    <div className="grid-card-footer">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-action"
                        aria-label={`View GitHub repo for ${p.title}`}
                      >
                        <GithubIcon />
                        <span>View Repository</span>
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

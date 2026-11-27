import { Navbar } from './components/Shared'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Skip to Main Content link for Screen Readers & Keyboard Accessibility (WCAG 2.2 AA) */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Subtle Developer Background Grid & Ambient Blue Glow */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-ambient" aria-hidden="true">
        <div className="ambient-blue ambient-1" />
        <div className="ambient-blue ambient-2" />
      </div>

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </>
  )
}

export default App

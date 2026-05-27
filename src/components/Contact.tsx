import { useState, type FormEvent } from 'react'
import { Reveal } from './Shared'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setLoading(true)

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || '8f8561e2-4171-4fd1-b8bf-52cfb7ad646c'

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject || 'New Portfolio Contact Form Submission',
          message: form.message,
          from_name: 'Isula Mihisara Portfolio'
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        // Clear success state after 6 seconds
        setTimeout(() => setSubmitted(false), 6000)
      } else {
        setErrors(prev => ({ ...prev, submit: result.message || 'Something went wrong. Please try again.' }))
      }
    } catch (err) {
      setErrors(prev => ({ ...prev, submit: 'Failed to send message. Please check your internet connection.' }))
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    // Clear field-specific error and also the global submit error if any
    setErrors(er => ({ ...er, [e.target.name]: '', submit: '' }))
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">05 / Contact</span>
            <h2 className="section-title">Let's Build Together</h2>
            <p className="section-subtitle">Have a project in mind? I'd love to hear from you. Let's create something extraordinary.</p>
          </div>
        </Reveal>
        <div className="contact-grid">
          <Reveal>
            <div className="contact-info-card glass-card">
              <h3>Get in Touch</h3>
              <div className="contact-methods">
                <a href="mailto:isuimk@gmail.com" className="contact-method">
                  <div className="contact-method-icon">✉</div>
                  <div>
                    <span className="contact-method-label">Email</span>
                    <span className="contact-method-value">isuimk@gmail.com</span>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/isula-mihisara" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="contact-method-icon">💼</div>
                  <div>
                    <span className="contact-method-label">LinkedIn</span>
                    <span className="contact-method-value">isula-mihisara</span>
                  </div>
                </a>
                <a href="https://github.com/MihisaraNet" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="contact-method-icon">⌨</div>
                  <div>
                    <span className="contact-method-label">GitHub</span>
                    <span className="contact-method-value">MihisaraNet</span>
                  </div>
                </a>
                <div className="contact-method">
                  <div className="contact-method-icon">📍</div>
                  <div>
                    <span className="contact-method-label">Location</span>
                    <span className="contact-method-value">Sri Lanka 🇱🇰</span>
                  </div>
                </div>
              </div>
              <div className="social-links">
                {[
                  {
                    id: 'github', label: 'GitHub', href: 'https://github.com/MihisaraNet',
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                  },
                  {
                    id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/isula-mihisara',
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  },
                  {
                    id: 'email', label: 'Email', href: 'mailto:isuimk@gmail.com',
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  },
                ].map(s => (
                  <a key={s.id} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="social-link" aria-label={s.label}>{s.icon}</a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contactName">Full Name</label>
                  <input
                    type="text" id="contactName" name="name"
                    placeholder="Full Name" value={form.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    autoComplete="name"
                  />
                  <span className="form-error">{errors.name}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="contactEmail">Email Address</label>
                  <input
                    type="email" id="contactEmail" name="email"
                    placeholder="name@example.com" value={form.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    autoComplete="email"
                  />
                  <span className="form-error">{errors.email}</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text" id="contactSubject" name="subject"
                  placeholder="Project Inquiry" value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage">Message</label>
                <textarea
                  id="contactMessage" name="message" rows={5}
                  placeholder="Tell me about your project..." value={form.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                />
                <span className="form-error">{errors.message}</span>
              </div>
              <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8H14M14 8L10 4M14 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              {submitted && (
                <div className="form-success">
                  <span>✓</span> Message sent! I'll get back to you within 24 hours.
                </div>
              )}
              {errors.submit && (
                <div className="form-error" style={{ textAlign: 'center', marginTop: '16px', color: '#ef4444' }}>
                  ⚠️ {errors.submit}
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

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
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address'
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
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject || 'New Portfolio Contact Form Submission',
          message: form.message,
          from_name: 'Isula Mihisara Portfolio',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 6000)
      } else {
        setErrors((prev) => ({ ...prev, submit: result.message || 'Something went wrong. Please try again.' }))
      }
    } catch {
      setErrors((prev) => ({ ...prev, submit: 'Failed to send message. Please check your network connection.' }))
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((er) => ({ ...er, [e.target.name]: '', submit: '' }))
  }

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">05 / Get In Touch</span>
            <h2 id="contact-heading" className="section-title">Have an idea? Let's build something great.</h2>
            <p className="section-subtitle">
              I'm always interested in meaningful projects, engineering opportunities, and connecting with people in technology.
            </p>
          </div>
        </Reveal>

        {/* Two-Column Contact Layout */}
        <div className="contact-grid">
          {/* Left Column — Contact Information Cards */}
          <div className="contact-info-column">
            <Reveal delay={60}>
              <div className="contact-card-midnight">
                <h3 className="contact-card-heading">Direct Channels</h3>
                <p className="contact-card-sub">
                  Actively open for Software Development &amp; DevOps internships, open-source engineering, and technical discussions.
                </p>

                <div className="contact-channel-list">
                  <a
                    href="mailto:mihisara.me@gmail.com"
                    className="contact-channel-item"
                    aria-label="Send email to mihisara.me@gmail.com"
                  >
                    <div className="channel-icon-wrap" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div className="channel-info">
                      <span className="channel-label">Email Address</span>
                      <span className="channel-value">mihisara.me@gmail.com</span>
                    </div>
                  </a>

                  <a
                    href="tel:+94760338655"
                    className="contact-channel-item"
                    aria-label="Call or message Isula Mihisara (+94 76 033 8655)"
                  >
                    <div className="channel-icon-wrap" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div className="channel-info">
                      <span className="channel-label">Phone &amp; WhatsApp</span>
                      <span className="channel-value">+94 76 033 8655</span>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/isula-mihisara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-channel-item"
                    aria-label="LinkedIn Profile (opens in new tab)"
                  >
                    <div className="channel-icon-wrap" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div className="channel-info">
                      <span className="channel-label">LinkedIn</span>
                      <span className="channel-value">linkedin.com/in/isula-mihisara</span>
                    </div>
                  </a>

                  <a
                    href="https://github.com/MihisaraNet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-channel-item"
                    aria-label="GitHub Profile (opens in new tab)"
                  >
                    <div className="channel-icon-wrap" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </div>
                    <div className="channel-info">
                      <span className="channel-label">GitHub</span>
                      <span className="channel-value">github.com/MihisaraNet</span>
                    </div>
                  </a>

                  <div className="contact-channel-item static-item">
                    <div className="channel-icon-wrap" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="channel-info">
                      <span className="channel-label">Based in</span>
                      <span className="channel-value">Colombo, Sri Lanka 🇱🇰</span>
                    </div>
                  </div>
                </div>

                <div className="contact-cv-box">
                  <a
                    href="/Mihisara_CV.pdf"
                    className="btn btn-outline btn-full"
                    download="Mihisara_CV.pdf"
                    aria-label="Download Isula Mihisara's CV (PDF)"
                  >
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M8 2V10M8 10L5 7M8 10L11 7M3 14H13"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Download Curriculum Vitae</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column — Interactive Web3Forms Form */}
          <div className="contact-form-column">
            <Reveal delay={120}>
              <div className="contact-form-card">
                <h3 className="form-title">Send a Message</h3>
                <p className="form-subtitle">
                  Fill in your details below. I typically respond within 24 business hours.
                </p>

                <form onSubmit={handleSubmit} noValidate className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contactName" className="form-label">
                        Your Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? 'is-error' : ''}`}
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'contactNameError' : undefined}
                      />
                      {errors.name && (
                        <span id="contactNameError" className="field-error" role="alert">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contactEmail" className="form-label">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        name="email"
                        placeholder="Name@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'is-error' : ''}`}
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'contactEmailError' : undefined}
                      />
                      {errors.email && (
                        <span id="contactEmailError" className="field-error" role="alert">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactSubject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contactSubject"
                      name="subject"
                      placeholder="Internship Inquiry / Project Collaboration"
                      value={form.subject}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactMessage" className="form-label">
                      Message <span className="req">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      name="message"
                      rows={5}
                      placeholder="Share details regarding your opportunity or inquiry..."
                      value={form.message}
                      onChange={handleChange}
                      className={`form-textarea ${errors.message ? 'is-error' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'contactMessageError' : undefined}
                    />
                    {errors.message && (
                      <span id="contactMessageError" className="field-error" role="alert">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-full form-submit-btn"
                    disabled={loading}
                    aria-busy={loading}
                  >
                    <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                    {!loading && (
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M2 8H14M14 8L10 4M14 8L10 12"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>

                  {submitted && (
                    <div className="form-feedback success" role="status">
                      <span className="feedback-icon">✓</span>
                      <span>Message sent successfully! I will get back to you shortly.</span>
                    </div>
                  )}

                  {errors.submit && (
                    <div className="form-feedback error" role="alert">
                      <span className="feedback-icon">⚠️</span>
                      <span>{errors.submit}</span>
                    </div>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

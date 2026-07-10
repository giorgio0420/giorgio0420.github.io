import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder — hook up to a backend/Formspree when ready
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="page-wrapper">
      <section className="section section--contact">
        <div className="container">
          <span className="section-label">Get in touch</span>
          <h1 className="section-title">Let's talk</h1>
          <p className="section-sub">
            Whether it's a project idea, a collaboration, or just a hello —
            my inbox is always open.
          </p>

          <div className="contact-layout">

            {/* Links */}
            <div className="contact-links">
              <a href="mailto:giorgio.desantis@example.com" className="contact-link glass-card">
                <Mail size={22} className="contact-icon" />
                <div>
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">giorgio.desantis@example.com</span>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link glass-card">
                <Linkedin size={22} className="contact-icon" />
                <div>
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">Giorgio De Santis</span>
                </div>
              </a>
              <a href="https://github.com/giorgio0420" target="_blank" rel="noreferrer" className="contact-link glass-card">
                <Github size={22} className="contact-icon" />
                <div>
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-value">@giorgio0420</span>
                </div>
              </a>
            </div>

            {/* Form */}
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" type="text" className="form-input" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input id="email" type="email" className="form-input" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-input form-textarea" placeholder="Tell me about your project..." required rows={5} />
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                {sent ? '✓ Message sent!' : <><Send size={16} /> Send message</>}
              </button>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}

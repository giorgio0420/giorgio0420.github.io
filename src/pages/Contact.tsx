import { useState, type FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { Mail, Send, CheckCircle2, FileText } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xanyqpyq', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 4000);
      } else {
        const name = (data.get('name') as string) || '';
        const message = (data.get('message') as string) || '';
        window.location.href = `mailto:desantisgiorgio20@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
        setSent(true);
        setTimeout(() => setSent(false), 4000);
      }
    } catch {
      const name = (data.get('name') as string) || '';
      const message = (data.get('message') as string) || '';
      window.location.href = `mailto:desantisgiorgio20@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <span className="section-label">{t.contact.label}</span>
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-sub">{t.contact.sub}</p>

        <div className="contact-layout">
          
          {/* DIRECT SOCIAL CARDS */}
          <div className="contact-links">
            
            <a
              href="mailto:desantisgiorgio20@gmail.com"
              className="contact-link glass-card"
            >
              <div className="contact-icon-wrap contact-icon--email">
                <Mail size={22} />
              </div>
              <div>
                <span className="contact-link-label">{t.contact.emailLabel}</span>
                <span className="contact-link-value">desantisgiorgio20@gmail.com</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/giorgio-de-santis/"
              target="_blank"
              rel="noreferrer"
              className="contact-link glass-card"
            >
              <div className="contact-icon-wrap contact-icon--linkedin">
                <LinkedinIcon size={22} />
              </div>
              <div>
                <span className="contact-link-label">{t.contact.linkedinLabel}</span>
                <span className="contact-link-value">Giorgio De Santis</span>
              </div>
            </a>

            <a
              href="https://github.com/giorgio0420"
              target="_blank"
              rel="noreferrer"
              className="contact-link glass-card"
            >
              <div className="contact-icon-wrap contact-icon--github">
                <GithubIcon size={22} />
              </div>
              <div>
                <span className="contact-link-label">{t.contact.githubLabel}</span>
                <span className="contact-link-value">@giorgio0420</span>
              </div>
            </a>

            <a
              href="/Giorgio_De_Santis_CV.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="contact-link glass-card"
            >
              <div className="contact-icon-wrap contact-icon--cv">
                <FileText size={22} />
              </div>
              <div>
                <span className="contact-link-label">{t.contact.cvLabel}</span>
                <span className="contact-link-value">Giorgio_De_Santis_CV.pdf</span>
              </div>
            </a>

          </div>

          {/* CONTACT FORM */}
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">{t.contact.namePlaceholder}</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder={t.contact.namePlaceholder}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">{t.contact.emailPlaceholder}</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder={t.contact.emailPlaceholder}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">{t.contact.messagePlaceholder}</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder={t.contact.messagePlaceholder}
                required
                rows={5}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
              {sent ? (
                <>
                  <CheckCircle2 size={18} />
                  <span>{t.contact.sentMessage}</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>{loading ? 'Sending...' : t.contact.sendBtn}</span>
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

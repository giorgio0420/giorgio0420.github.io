import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe, Mail } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'it' : 'en');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="nav-content">
        
        {/* LOGO GDS */}
        <button onClick={() => scrollToSection('home')} className="nav-logo">
          GDS
        </button>

        {/* NAV LINKS & ACTIONS */}
        <div className="nav-right">
          
          <nav className="nav-links">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              {t.nav.home}
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              {t.nav.projects}
            </button>
            <button onClick={() => scrollToSection('education')} className="nav-link">
              {t.nav.education}
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link nav-link--contact-highlight">
              <Mail size={15} />
              <span>{t.nav.contacts}</span>
            </button>
          </nav>

          {/* LANGUAGE TOGGLE TOP RIGHT */}
          <div className="nav-actions">
            <button
              onClick={toggleLanguage}
              className="lang-toggle-btn"
              title={`Switch to ${language === 'en' ? 'Italian' : 'English'}`}
            >
              <Globe size={16} />
              <span className="lang-code">{language.toUpperCase()}</span>
            </button>
          </div>

        </div>

      </div>
    </header>
  );
}

import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Home, Code2, GraduationCap, Mail, Globe } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 180; // Navbar offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'it' : 'en');
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="nav-content">

        {/* LOGO GDS - GOLD METALLIC MONOGRAM BADGE */}
        <button onClick={() => scrollToSection('home')} className="nav-logo nav-logo--badge">
          <span className="nav-logo-badge-text">GDS</span>
        </button>

        {/* NAV LINKS & ACTIONS */}
        <div className="nav-right">

          <nav className="nav-links">
            <button
              onClick={() => scrollToSection('home')}
              className={`nav-link ${activeSection === 'home' ? 'nav-link--active' : ''}`}
              title={t.nav.home}
            >
              <Home size={16} />
              <span className="nav-link-text">{t.nav.home}</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`nav-link ${activeSection === 'projects' ? 'nav-link--active' : ''}`}
              title={t.nav.projects}
            >
              <Code2 size={16} />
              <span className="nav-link-text">{t.nav.projects}</span>
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className={`nav-link ${activeSection === 'education' ? 'nav-link--active' : ''}`}
              title={t.nav.education}
            >
              <GraduationCap size={16} />
              <span className="nav-link-text">{t.nav.education}</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`nav-link ${activeSection === 'contact' ? 'nav-link--active' : ''}`}
              title={t.nav.contacts}
            >
              <Mail size={16} />
              <span className="nav-link-text">{t.nav.contacts}</span>
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

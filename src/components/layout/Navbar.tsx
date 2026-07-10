import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="nav-content">
        <span className="nav-logo">GDS</span>
        <div className="nav-links">
          <Link to="/" className={`nav-link${isActive('/') ? ' nav-link--active' : ''}`}>
            Chi Sono
          </Link>
          <Link to="/projects" className={`nav-link${isActive('/projects') ? ' nav-link--active' : ''}`}>
            Projects
          </Link>
          <Link to="/contact" className={`nav-link${isActive('/contact') ? ' nav-link--active' : ''}`}>
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
}

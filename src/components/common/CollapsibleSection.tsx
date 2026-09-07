import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface CollapsibleSectionProps {
  id?: string;
  className?: string;
  label: string;
  title: string;
  sub?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function CollapsibleSection({
  id,
  className = '',
  label,
  title,
  sub,
  defaultOpen = true,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { language } = useLanguage();

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const badgeText = isOpen
    ? (language === 'it' ? 'Nascondi' : 'Hide')
    : (language === 'it' ? 'Mostra' : 'Show');

  return (
    <section id={id} className={`section collapsible-section ${isOpen ? 'collapsible-section--open' : 'collapsible-section--closed'} ${className}`}>
      <div className="container">
        {/* Interactive Clickable Header */}
        <button
          type="button"
          onClick={toggleOpen}
          className="collapsible-header-btn"
          aria-expanded={isOpen}
        >
          <div className="collapsible-header-text">
            <span className="section-label">{label}</span>
            <h2 className="section-title">{title}</h2>
            {sub && <p className="section-sub">{sub}</p>}
          </div>

          <div className="collapsible-trigger-badge">
            <span className="collapsible-badge-text">
              {badgeText}
            </span>
            <ChevronDown
              size={20}
              className={`collapsible-chevron ${isOpen ? 'collapsible-chevron--open' : ''}`}
            />
          </div>
        </button>

        {/* Collapsible Body with Smooth Transition */}
        <div className={`collapsible-body ${isOpen ? 'collapsible-body--open' : 'collapsible-body--closed'}`}>
          <div className="collapsible-content-wrap">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useLanguage } from '../../context/LanguageContext';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

export function ExperienceEducation() {
  const { t } = useLanguage();

  return (
    <div className="timeline-grid timeline-grid--single">
      {/* BACKGROUND */}
      <div className="timeline-column">
        <div className="timeline-header">
          <h2 className="timeline-column-title">
            <GraduationCap size={24} className="timeline-icon" />
            {t.experienceEducation.educationTitle}
          </h2>
        </div>

        <div className="timeline-list">
          {t.experienceEducation.educationList.map((edu, idx) => (
            <div key={idx} className="timeline-card glass-card">
              <div className="timeline-card-meta">
                <span className="timeline-period">
                  <Calendar size={14} />
                  {edu.period}
                </span>
              </div>
              <h3 className="timeline-role">{edu.degree}</h3>
              <div className="timeline-org">
                <MapPin size={14} />
                {edu.institution}
              </div>
              <p className="timeline-desc">{edu.desc}</p>
              {(edu as any).thesis && (
                <div className="timeline-thesis-badge">
                  <BookOpen size={14} className="thesis-icon" />
                  <span>{(edu as any).thesis}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useLanguage } from '../../context/LanguageContext';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export function ExperienceEducation() {
  const { t } = useLanguage();

  return (
    <div className="timeline-grid timeline-grid--single">
      {/* ACADEMIC BACKGROUND */}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

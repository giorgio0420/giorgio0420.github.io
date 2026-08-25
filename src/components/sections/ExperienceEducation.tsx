import { useLanguage } from '../../context/LanguageContext';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export function ExperienceEducation() {
  const { t } = useLanguage();

  return (
    <section id="experience-education" className="section section--timeline">
      <div className="container">
        <div className="timeline-grid">
          
          {/* EXPERIENCE */}
          <div className="timeline-column">
            <div className="timeline-header">
              <span className="section-label">{t.experienceEducation.experienceLabel}</span>
              <h2 className="timeline-column-title">
                <Briefcase size={24} className="timeline-icon" />
                {t.experienceEducation.experienceTitle}
              </h2>
            </div>

            <div className="timeline-list">
              {t.experienceEducation.experienceList.map((exp, idx) => (
                <div key={idx} className="timeline-card glass-card">
                  <div className="timeline-card-meta">
                    <span className="timeline-period">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-org">
                    <MapPin size={14} />
                    {exp.org}
                  </div>
                  <p className="timeline-desc">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div className="timeline-column">
            <div className="timeline-header">
              <span className="section-label">{t.experienceEducation.educationLabel}</span>
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
      </div>
    </section>
  );
}

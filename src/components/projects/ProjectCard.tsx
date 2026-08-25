import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { KNOWN_REPO_GIFS, type Project } from '../../data/projects';
import { GithubIcon } from '../common/Icons';
import { Star, GitFork, Bot, Code2, Cpu } from 'lucide-react';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { t } = useLanguage();

  const candidates = KNOWN_REPO_GIFS[project.name] || (project.gifUrl ? [project.gifUrl] : [
    `https://raw.githubusercontent.com/giorgio0420/${project.name}/main/gif.gif`,
    `https://raw.githubusercontent.com/giorgio0420/${project.name}/main/preview.gif`,
    `https://raw.githubusercontent.com/giorgio0420/${project.name}/master/gif.gif`,
  ]);

  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const currentImageUrl = candidateIndex < candidates.length ? candidates[candidateIndex] : null;

  const handleImageError = () => {
    if (candidateIndex + 1 < candidates.length) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const getLanguageDotClass = (lang?: string) => {
    if (!lang) return 'lang-dot';
    const l = lang.toLowerCase();
    if (l.includes('python')) return 'lang-dot lang-dot--python';
    if (l.includes('c++') || l.includes('cpp')) return 'lang-dot lang-dot--cpp';
    if (l.includes('matlab')) return 'lang-dot lang-dot--matlab';
    if (l.includes('notebook') || l.includes('jupyter')) return 'lang-dot lang-dot--jupyter';
    if (l.includes('c')) return 'lang-dot lang-dot--c';
    return 'lang-dot';
  };

  return (
    <div className="project-card glass-card">
      
      {/* GIF MEDIA PREVIEW CONTAINER — ALWAYS ANIMATES & LOOPS CONTINUOUSLY */}
      {currentImageUrl && !imageError && (
        <div className="project-media-container">
          <img
            src={currentImageUrl}
            alt={`${project.name} live GIF preview`}
            className="project-media-img"
            onError={handleImageError}
            loading="lazy"
          />
        </div>
      )}

      {/* CARD HEADER */}
      <div className="project-card-header">
        <div className="project-category-badge">
          <span className={getLanguageDotClass(project.language)} />
          <span>{project.language || 'Code'}</span>
        </div>
        {project.fork && (
          <span className="project-metrics-badge">Fork</span>
        )}
      </div>

      {/* CARD TITLE & DESC */}
      <h3 className="project-title">{project.title || project.name}</h3>
      
      <p className="project-desc">
        {project.description || 'No description provided for this repository.'}
      </p>

      {/* TOPICS / TAGS */}
      {project.topics && project.topics.length > 0 && (
        <div className="project-stack">
          {project.topics.slice(0, 5).map((topic) => (
            <span key={topic} className="tech-tag">
              #{topic}
            </span>
          ))}
        </div>
      )}

      {/* FOOTER & METRICS */}
      <div className="project-card-footer">
        <a
          href={project.html_url}
          target="_blank"
          rel="noreferrer"
          className="project-link-btn project-link-btn--github"
        >
          <GithubIcon size={18} />
          <span>{t.projects.viewCode}</span>
        </a>

        <div className="project-stats-meta" style={{ marginLeft: 'auto', display: 'flex', gap: '0.9rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <Star size={15} /> {project.stargazers_count}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <GitFork size={15} /> {project.forks_count}
          </span>
        </div>
      </div>

    </div>
  );
}

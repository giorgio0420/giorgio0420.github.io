import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { REAL_GITHUB_REPOS_FALLBACK, REPO_LANGUAGE_OVERRIDES, type Project } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';

const CACHE_KEY = 'giorgio0420_github_repos_v3';
const CACHE_TIME_KEY = 'giorgio0420_github_repos_time_v3';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes TTL

export function Projects() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>(REAL_GITHUB_REPOS_FALLBACK);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'matlab' | 'python' | 'notebook'>('all');

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      // 1. Check local session cache first to prevent rate limits
      const cached = sessionStorage.getItem(CACHE_KEY);
      const cachedTime = sessionStorage.getItem(CACHE_TIME_KEY);
      const now = Date.now();

      if (cached && cachedTime && now - parseInt(cachedTime, 10) < CACHE_TTL_MS) {
        try {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setProjects(parsed);
            return;
          }
        } catch {
          // Ignore cache parse error and proceed to fetch
        }
      }

      // 2. Perform SINGLE efficient fetch for user repos
      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/giorgio0420/repos?sort=updated&per_page=100');
        if (!res.ok) throw new Error(`GitHub API HTTP ${res.status}`);
        
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const sorted = [...data].sort((a, b) => {
            const timeA = new Date(a.pushed_at || a.updated_at || 0).getTime();
            const timeB = new Date(b.pushed_at || b.updated_at || 0).getTime();
            return timeB - timeA;
          });
          setProjects(sorted);
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(sorted));
          sessionStorage.setItem(CACHE_TIME_KEY, now.toString());
        }
      } catch (err) {
        console.warn('Falling back to local real repos due to network/rate-limit:', err);
        setProjects(REAL_GITHUB_REPOS_FALLBACK);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    const lang = (p.language || '').toLowerCase();
    const customLang = (REPO_LANGUAGE_OVERRIDES[p.name] || '').toLowerCase();
    if (filter === 'matlab') return lang.includes('matlab') || customLang.includes('coppelia');
    if (filter === 'python') return lang.includes('python') || customLang.includes('python');
    if (filter === 'notebook') return lang.includes('notebook') || lang.includes('jupyter');
    return true;
  });

  return (
    <div className="page-wrapper">
      <section className="section section--projects">
        <div className="container">
          
          <span className="section-label">{t.projects.label}</span>
          <h1 className="section-title">{t.projects.title}</h1>
          <p className="section-sub">{t.projects.sub}</p>

          {/* FILTER TABS */}
          <div className="project-filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {t.projects.filterAll}
            </button>
            <button
              className={`filter-btn ${filter === 'matlab' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('matlab')}
            >
              MATLAB & Robotics
            </button>
            <button
              className={`filter-btn ${filter === 'python' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('python')}
            >
              Python & AI
            </button>
            <button
              className={`filter-btn ${filter === 'notebook' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('notebook')}
            >
              Jupyter Notebooks
            </button>
          </div>

          {/* PROJECTS GRID */}
          {loading ? (
            <div className="projects-loading">Loading real GitHub repositories...</div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

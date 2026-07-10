import { useEffect, useState } from 'react';
import { ProjectCard, type ProjectData } from '../components/projects/ProjectCard';

// ----- CONFIGURAZIONE -----
// Inserisci qui l'owner/repo dei repository extra a cui hai partecipato
// Esempio: 'facebook/react'
const EXTRA_REPOS: string[] = [
  
];

// Inserisci qui i nomi (o user/repo) dei repository che NON vuoi mostrare
// Esempio: 'giorgio0420/test-repo-vecchio'
const HIDDEN_REPOS: string[] = [
  
];
// --------------------------

export function Projects() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('https://api.github.com/users/giorgio0420/repos?sort=updated&per_page=100');
        let data: ProjectData[] = await res.json();
        
        if (EXTRA_REPOS.length > 0) {
          const extraPromises = EXTRA_REPOS.map(repo =>
            fetch(`https://api.github.com/repos/${repo}`).then(r => r.json())
          );
          const extraData = await Promise.all(extraPromises);
          const validExtra = extraData.filter(item => !item.message);
          data = [...validExtra, ...data];
        }

        data = data.filter(repo => {
          if (!repo || (!repo.full_name && !repo.name)) return false;
          return !HIDDEN_REPOS.includes(repo.full_name || '') && !HIDDEN_REPOS.includes(repo.name);
        });

        const uniqueRepos = Array.from(new Map(data.map(item => [item.id, item])).values());
        uniqueRepos.sort((a, b) => new Date(b.pushed_at || 0).getTime() - new Date(a.pushed_at || 0).getTime());

        setProjects(uniqueRepos);
      } catch (err) {
        console.error("Failed to fetch projects", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="page-wrapper">
      <section className="section section--projects">
        <div className="container">
          <span className="section-label">GitHub</span>
          <h1 className="section-title">My Projects</h1>
          <p className="section-sub">
            A dynamic portfolio of my work — spanning robotics, AI, and embedded systems.
          </p>

          {loading ? (
            <div className="projects-loading">Loading repositories…</div>
          ) : (
            <div className="projects-grid">
              {projects.map(repo => (
                <ProjectCard key={repo.id} project={repo} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

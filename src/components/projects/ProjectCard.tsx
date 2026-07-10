import { Star, GitFork, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export interface ProjectData {
  id: number;
  name: string;
  full_name?: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  default_branch?: string;
  pushed_at?: string;
  owner?: {
    login: string;
  };
}

interface Props {
  project: ProjectData;
}

export function ProjectCard({ project }: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const owner = project.owner?.login || 'giorgio0420';

  useEffect(() => {
    // Fetch repo root contents to find any gif or png
    fetch(`https://api.github.com/repos/${owner}/${project.name}/contents/`)
      .then(r => r.json())
      .then((files: { name: string; download_url: string; type: string }[]) => {
        if (!Array.isArray(files)) return;
        const images = files.filter(f => f.type === 'file' && /\.(gif|png|jpg|jpeg|webp)$/i.test(f.name));
        // Prefer gif over other formats
        const gif = images.find(f => /\.gif$/i.test(f.name));
        const other = images.find(f => /\.(png|jpg|jpeg|webp)$/i.test(f.name));
        const chosen = gif || other || null;
        setImageUrl(chosen ? chosen.download_url : null);
      })
      .catch(() => setImageUrl(null));
  }, [owner, project.name]);

  return (
    <a href={project.html_url} target="_blank" rel="noreferrer" className="project-card" style={{ display: 'flex', flexDirection: 'column' }}>
      
      {imageUrl && (
        <div 
          className="project-image-container" 
          style={{ 
            width: '100%', 
            height: '150px', 
            borderRadius: '4px', 
            marginBottom: '1rem', 
            backgroundColor: '#1a1a24',
            overflow: 'hidden',
            position: 'relative'
          }} 
        >
          <img 
            src={imageUrl}
            alt={`${project.name} cover`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      <div className="project-title">
        <BookOpen size={20} />
        {project.name}
      </div>

      <div className="project-desc" style={{ flexGrow: 1 }}>
        {project.description || "No description provided."}
      </div>

      <div className="project-meta" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
        {project.language && (
          <div className="meta-item">
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent-color)', display: 'inline-block' }}></span>
            {project.language}
          </div>
        )}
        <div className="meta-item" title="Stars">
          <Star size={14} />
          {project.stargazers_count}
        </div>
        <div className="meta-item" title="Forks">
          <GitFork size={14} />
          {project.forks_count}
        </div>
      </div>
      
    </a>
  );
}


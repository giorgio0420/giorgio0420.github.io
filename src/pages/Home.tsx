import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useLanguage } from '../context/LanguageContext';
import { ExperienceEducation } from '../components/sections/ExperienceEducation';
import { BentoGrid } from '../components/sections/BentoGrid';
import { Contact } from './Contact';
import { REAL_GITHUB_REPOS_FALLBACK, type Project } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { FileText, Bot, Cpu, CircuitBoard, ChevronDown, MapPin } from 'lucide-react';

interface TechIconInfo {
  slug: string;
  color: string;
}

const TECH_ICON_SLUG_MAP: Record<string, TechIconInfo> = {
  // Robotics & Simulation
  'ROS 2': { slug: 'ros', color: '22314E' },
  'Gazebo': { slug: 'gazebo', color: 'F58220' },
  'CoppeliaSim': { slug: 'lua', color: '002F6C' },
  'MathWorks': { slug: 'cplusplus', color: '0076A8' },
  'NVIDIA': { slug: 'nvidia', color: '76B900' },

  // Electronics & Embedded
  'Arduino': { slug: 'arduino', color: '00878F' },
  'Texas Instruments': { slug: 'stmicroelectronics', color: 'CC0000' },
  'LTspice': { slug: 'stmicroelectronics', color: '9B111E' },
  'TINA-TI': { slug: 'stmicroelectronics', color: '004B87' },
  'FreeRTOS': { slug: 'freertos', color: '00B0D7' },
  'STM32': { slug: 'stmicroelectronics', color: '03234C' },
  'ESP32': { slug: 'espressif', color: 'E7352C' },
  'KiCad': { slug: 'kicad', color: '314685' },

  // AI, Deep Learning & Data Science
  'PyTorch': { slug: 'pytorch', color: 'EE4C2C' },
  'TensorFlow': { slug: 'tensorflow', color: 'FF6F00' },
  'Keras': { slug: 'keras', color: 'D00000' },
  'OpenCV': { slug: 'opencv', color: '5C3EE8' },
  'Hugging Face': { slug: 'huggingface', color: 'FFD21E' },
  'Weights & Biases': { slug: 'weightsandbiases', color: 'FFBE00' },
  'Kaggle': { slug: 'kaggle', color: '20BEFF' },
  'Scikit-Learn': { slug: 'scikitlearn', color: 'F7931E' },
  'NumPy': { slug: 'numpy', color: '013243' },
  'Pandas': { slug: 'pandas', color: '150458' },
  'SciPy': { slug: 'scipy', color: '8CAAE6' },
  'SymPy': { slug: 'sympy', color: '3B5526' },
  'Jupyter': { slug: 'jupyter', color: 'F37626' },
  'Anaconda': { slug: 'anaconda', color: '44A833' },
  'Miniconda': { slug: 'anaconda', color: '43B02A' },

  // Mathematics & Scientific Computing
  'Wolfram Mathematica': { slug: 'wolfram', color: 'DD1100' },
  'Gnuplot': { slug: 'gnu', color: 'ffffff' },
  'R': { slug: 'r', color: '276DC3' },
  'LaTeX': { slug: 'latex', color: '008080' },

  // Languages, Systems & DevOps
  'C++': { slug: 'cplusplus', color: '00599C' },
  'C': { slug: 'c', color: 'A8B9CC' },
  'Python': { slug: 'python', color: '3776AB' },
  'Lua': { slug: 'lua', color: '2C2D72' },
  'CMake': { slug: 'cmake', color: '064F8C' },
  'Linux': { slug: 'linux', color: 'FCC624' },
  'Ubuntu': { slug: 'ubuntu', color: 'E95420' },
  'Docker': { slug: 'docker', color: '2496ED' },
  'VS Code': { slug: 'visualstudiocode', color: '007ACC' },
  'Git': { slug: 'git', color: 'F05032' },
  'GitHub': { slug: 'github', color: 'ffffff' },
};

export function Home() {
  const { t } = useLanguage();
  
  // Projects state & single-fetch caching
  const [projects, setProjects] = useState<Project[]>(REAL_GITHUB_REPOS_FALLBACK);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'robotics' | 'ai'>('all');

  useEffect(() => {
    const fetchGitHubRepos = async () => {
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
          // Fall through to fetch
        }
      }

      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/giorgio0420/repos?sort=updated&per_page=100');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
          sessionStorage.setItem(CACHE_TIME_KEY, now.toString());
        }
      } catch (err) {
        console.warn('Using fallback real repos:', err);
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
    const name = (p.name || '').toLowerCase();
    const desc = (p.description || '').toLowerCase();
    const topics = (p.topics || []).join(' ').toLowerCase();
    const fullText = `${lang} ${name} ${desc} ${topics}`;

    if (filter === 'robotics') {
      return lang.includes('matlab') || lang.includes('c++') || lang.includes('c') || fullText.includes('robot') || fullText.includes('stm32') || fullText.includes('control') || fullText.includes('ros') || fullText.includes('slam') || fullText.includes('hardware');
    }
    if (filter === 'ai') {
      return lang.includes('python') || lang.includes('notebook') || fullText.includes('ai') || fullText.includes('vision') || fullText.includes('pytorch') || fullText.includes('learning') || fullText.includes('detection');
    }
    return true;
  });

  return (
    <div className="page-wrapper">

      {/* 1. HERO / HOME SECTION */}
      <section id="home" className="hero">
        <div className="hero-inner container">

          <div className="hero-text">
            <p className="hero-eyebrow">{t.hero.eyebrow}</p>
            <h1 className="hero-title">
              <span className="hero-name">{t.hero.name}</span>
            </h1>
            
            <p className="hero-role">
              <Typewriter
                words={t.hero.roles}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={35}
                delaySpeed={2000}
              />
            </p>
            
            <p className="hero-bio">{t.hero.bio}</p>
            
            {/* HERO CTA BUTTONS */}
            <div className="hero-cta">
              <a
                href="/Giorgio_De_Santis_CV.pdf"
                download
                className="btn btn-primary btn-hero-cv"
              >
                <FileText size={18} />
                <span>{t.hero.downloadCv}</span>
              </a>

              <a
                href="https://github.com/giorgio0420"
                target="_blank"
                rel="noreferrer"
                className="social-btn social-btn--github social-btn--lg"
              >
                <GithubIcon size={20} />
                <span>{t.hero.github}</span>
              </a>

              <a
                href="https://www.linkedin.com/in/giorgio-de-santis/"
                target="_blank"
                rel="noreferrer"
                className="social-btn social-btn--linkedin social-btn--lg"
              >
                <LinkedinIcon size={20} />
                <span>{t.hero.linkedin}</span>
              </a>
            </div>
          </div>

          {/* HERO PROFILE PHOTO CARD */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-card glass-card">
              <div className="photo-inner">
                <img
                  src="/profile.jpg"
                  alt="Giorgio De Santis"
                  className="hero-profile-img"
                />
                <div className="photo-overlay-badge">
                  <span className="status-dot-pulse" />
                  <span className="photo-badge-text">Giorgio De Santis — AI & Robotics</span>
                </div>
              </div>
            </div>
            <div className="hero-photo-glow" />
          </div>

        </div>

        <button
          className="scroll-cue"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label={t.hero.scroll}
        >
          <ChevronDown size={24} />
        </button>
      </section>

      {/* 2. ABOUT SECTION (ACADEMIC & TECHNICAL PROFILE ONLY) */}
      <section id="about" className="section section--about">
        <div className="container">
          <span className="section-label">{t.about.label}</span>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-sub">{t.about.sub}</p>
          
          <div className="about-card glass-card">
            <p className="about-text">{t.about.text1}</p>
            <p className="about-text">{t.about.text2}</p>
            
            <div className="about-meta">
              <div className="about-stat">
                <span className="stat-num">{t.about.stat1Number}</span>
                <span className="stat-label">{t.about.stat1Label}</span>
              </div>
              <div className="about-stat">
                <span className="stat-num">{t.about.stat2Number}</span>
                <span className="stat-label">{t.about.stat2Label}</span>
              </div>
              <div className="about-stat">
                <span className="stat-num">{t.about.stat3Number}</span>
                <span className="stat-label">{t.about.stat3Label}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section id="skills" className="section section--skills">
        <div className="container">
          <span className="section-label">{t.skills.label}</span>
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-sub">{t.skills.sub}</p>
          <div className="skills-grid">
            {t.skills.categories.map((group) => {
              const isAiCategory = group.category.includes('AI') || group.category.includes('Deep Learning');
              return (
                <div
                  key={group.category}
                  className={`skill-card glass-card ${isAiCategory ? 'skill-card--wide' : ''}`}
                >
                  <h3 className="skill-category">{group.category}</h3>
                  <div className="skills-badges-wrap">
                    {group.items.map((skill) => {
                      const iconInfo = TECH_ICON_SLUG_MAP[skill];
                      return (
                        <div key={skill} className="skill-tech-pill">
                          {iconInfo ? (
                            <img
                              src={`https://cdn.simpleicons.org/${iconInfo.slug}/${iconInfo.color}`}
                              alt={`${skill} icon`}
                              className="skill-tech-icon"
                              loading="lazy"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <span className="skill-dot" />
                          )}
                          <span className="skill-tech-name">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SHOWCASE SECTION */}
      <section id="projects" className="section section--projects">
        <div className="container">
          <span className="section-label">{t.projects.label}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-sub">{t.projects.sub}</p>

          <div className="project-filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {t.projects.filterAll}
            </button>
            <button
              className={`filter-btn ${filter === 'robotics' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('robotics')}
            >
              {t.projects.filterRobotics}
            </button>
            <button
              className={`filter-btn ${filter === 'ai' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('ai')}
            >
              {t.projects.filterAI}
            </button>
          </div>

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

      {/* 5. EDUCATION & EXPERIENCE TIMELINE SECTION */}
      <section id="education">
        <ExperienceEducation />
      </section>

      {/* 6. OTHER PASSIONS & PERSONAL INTERESTS (BENTO GRID SECTION AT THE END) */}
      <section id="passions" className="section section--passions">
        <div className="container">
          <span className="section-label">{t.passions.label}</span>
          <h2 className="section-title">{t.passions.title}</h2>
          <p className="section-sub">{t.passions.sub}</p>

          <BentoGrid />
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <Contact />

    </div>
  );
}

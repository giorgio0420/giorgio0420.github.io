import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const skills = [
  { category: 'Robotics & AI', items: ['ROS2', 'SLAM', 'Computer Vision', 'Deep Learning', 'Reinforcement Learning'] },
  { category: 'Embedded Systems', items: ['STM32', 'Arduino', 'FreeRTOS', 'CAN Bus', 'SPI/I2C/UART'] },
  { category: 'Languages', items: ['Python', 'C/C++', 'MATLAB', 'TypeScript', 'Bash'] },
  { category: 'Tools & Design', items: ['KiCad', 'SolidWorks', 'Git', 'Docker', 'Linux'] },
];

export function Home() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner container">

          {/* Left: text */}
          <div className="hero-text">
            <p className="hero-eyebrow">Hello, I'm</p>
            <h1 className="hero-title">
              <span className="hero-name">Giorgio<br />De Santis</span>
            </h1>
            <p className="hero-role">
              <Typewriter
                words={['Robotics Engineer', 'AI Developer', 'Embedded Systems Specialist', 'Hardware Designer']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </p>
            <p className="hero-bio">
              Building smart systems from circuits to algorithms.
              I bridge the gap between hardware and intelligence.
            </p>
            <div className="hero-cta">
              <a href="https://github.com/giorgio0420" target="_blank" rel="noreferrer" className="btn btn-primary">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-ghost">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right: photo placeholder */}
          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <div className="hero-photo-inner">
                <span>FOTO<br />BRONCO<br />SFOCATA</span>
              </div>
            </div>
            <div className="hero-photo-glow" />
          </div>

        </div>

        {/* Scroll cue */}
        <button className="scroll-cue" onClick={scrollToAbout} aria-label="Scorri in basso">
          <ChevronDown size={28} />
        </button>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section section--about">
        <div className="container">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who am I?</h2>
          <div className="about-grid">
            <div className="about-card glass-card">
              <p className="about-text">
                I'm a passionate engineer at the intersection of Robotics, Artificial Intelligence,
                and Embedded Electronics. I love designing systems that perceive, think, and act —
                from writing firmware for microcontrollers to training neural networks.
              </p>
              <p className="about-text">
                Currently focused on autonomous systems and edge-AI applications. Always looking
                for the next hard problem to solve.
              </p>
              <div className="about-meta">
                <div className="about-stat">
                  <span className="stat-num">5+</span>
                  <span className="stat-label">Years coding</span>
                </div>
                <div className="about-stat">
                  <span className="stat-num">20+</span>
                  <span className="stat-label">Projects built</span>
                </div>
                <div className="about-stat">
                  <span className="stat-num">∞</span>
                  <span className="stat-label">Curiosity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="section section--skills">
        <div className="container">
          <span className="section-label">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="skill-card glass-card">
                <h3 className="skill-category">{group.category}</h3>
                <ul className="skill-list">
                  {group.items.map((skill) => (
                    <li key={skill} className="skill-item">
                      <span className="skill-dot" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

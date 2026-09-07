import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ChessLogoIcon } from '../common/Icons';
import { BookOpen, Music, ExternalLink, Zap, Swords } from 'lucide-react';

interface ChessStats {
  rapid?: number;
  blitz?: number;
  tactics?: number;
  avatarUrl?: string;
}

export function BentoGrid() {
  const { t } = useLanguage();
  const b = t.passions.bento;

  const [chessData, setChessData] = useState<ChessStats>({});

  useEffect(() => {
    const fetchChessData = async () => {
      try {
        const [profileRes, statsRes] = await Promise.all([
          fetch('https://api.chess.com/pub/player/gbest2'),
          fetch('https://api.chess.com/pub/player/gbest2/stats')
        ]);
        if (profileRes.ok && statsRes.ok) {
          const profile = await profileRes.json();
          const stats = await statsRes.json();
          setChessData({
            avatarUrl: profile.avatar,
            rapid: stats.chess_rapid?.last?.rating,
            blitz: stats.chess_blitz?.last?.rating,
            tactics: stats.tactics?.highest?.rating,
          });
        }
      } catch (err) {
        console.warn('Chess.com API fallback:', err);
      }
    };
    fetchChessData();
  }, []);

  return (
    <div className="bento-container">
      
      {/* 1. STRAVA LIVE WIDGET CARD */}
      <div className="bento-card bento-card--strava bento-card--widget glass-card">
        <div className="bento-header">
          <span className="bento-badge bento-badge--strava">
            <span className="bento-pulse" />
            {b.stravaTitle}
          </span>
          <a
            href="https://www.strava.com/athletes/157048898"
            target="_blank"
            rel="noreferrer"
            className="bento-link-hint"
          >
            Strava <ExternalLink size={12} />
          </a>
        </div>

        {/* EMBEDDED LIVE STRAVA ACTIVITY SUMMARY IFRAME WIDGET */}
        <div className="bento-strava-widget-wrapper">
          <iframe
            title="Strava Activity Summary"
            height="160"
            width="100%"
            frameBorder="0"
            allowTransparency
            scrolling="no"
            src="https://www.strava.com/athletes/157048898/activity-summary/cdd281d7e56f4de861189ad7e1fd6436ad189956"
            className="bento-strava-iframe"
          />
        </div>
      </div>

      {/* 2. CHESS.COM LIVE WIDGET CARD (@gbest2) */}
      <div className="bento-card bento-card--chess glass-card">
        <div className="bento-header">
          <span className="bento-badge bento-badge--chess">
            {chessData.avatarUrl ? (
              <img
                src={chessData.avatarUrl}
                alt="Chess.com Avatar"
                style={{ width: 20, height: 20, borderRadius: '50%', objectFit: 'cover' }}
              />
            ) : (
              <ChessLogoIcon size={18} />
            )}
            {b.chessTitle}
          </span>
          <span className="bento-username-tag">@gbest2</span>
        </div>

        <div className="bento-body">
          <div className="bento-chess-stats-grid">
            <div className="bento-chess-stat">
              <span className="chess-stat-label">
                <Zap size={13} className="chess-icon-zap" /> Rapid
              </span>
              <span className="chess-stat-val">
                {chessData.rapid ? `${chessData.rapid} ELO` : 'Active'}
              </span>
            </div>
            <div className="bento-chess-stat">
              <span className="chess-stat-label">
                <Swords size={13} className="chess-icon-swords" /> Blitz
              </span>
              <span className="chess-stat-val">
                {chessData.blitz ? `${chessData.blitz} ELO` : 'Active'}
              </span>
            </div>
          </div>
        </div>

        <div className="bento-footer">
          <a
            href="https://www.chess.com/member/gbest2"
            target="_blank"
            rel="noreferrer"
            className="bento-link-btn-chess"
          >
            Chess.com Profile <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* 3. CONSIGLI & SUBSTACK (Books, Film, Essays) */}
      <div className="bento-card bento-card--recommendations glass-card">
        <div className="bento-header">
          <span className="bento-badge">
            <BookOpen size={15} className="bento-icon-accent" />
            {b.recommendationsTitle}
          </span>
          <span className="bento-tag">{b.recommendationsSub}</span>
        </div>
        <div className="bento-body">
          <p className="bento-desc">{b.recommendationsDesc}</p>
          <div className="bento-authors-list" style={{ marginTop: '0.6rem' }}>
            {b.recommendationsAuthors.map((author) => (
              <span key={author} className="bento-author-pill">
                {author}
              </span>
            ))}
          </div>
        </div>
        <div className="bento-footer">
          <span className="bento-highlight-text" style={{ fontSize: '0.82rem', color: 'var(--text-sub)' }}>
            Substack & Personal Selection
          </span>
          <span className="bento-username-tag" style={{ background: 'rgba(212, 149, 106, 0.12)', borderColor: 'rgba(212, 149, 106, 0.3)', color: 'var(--accent-warm)' }}>
            Coming Soon
          </span>
        </div>
      </div>

      {/* 4. MUSIC & AUDIO WAVEFORM */}
      <div className="bento-card bento-card--music glass-card">
        <div className="bento-header">
          <span className="bento-badge">
            <Music size={15} className="bento-icon-accent" />
            {b.musicTitle}
          </span>
          <div className="bento-music-bars">
            <span className="bar bar-1" />
            <span className="bar bar-2" />
            <span className="bar bar-3" />
          </div>
        </div>
        <div className="bento-body">
          <p className="bento-desc">{b.musicDesc}</p>
          <div className="bento-authors-list" style={{ marginTop: '0.5rem' }}>
            <span className="bento-author-pill">Kanye West</span>
            <span className="bento-author-pill">Drake</span>
            <span className="bento-author-pill">Italian Rap</span>
          </div>
        </div>
        <div className="bento-footer">
          <span className="bento-tag">{b.musicSub}</span>
        </div>
      </div>

    </div>
  );
}

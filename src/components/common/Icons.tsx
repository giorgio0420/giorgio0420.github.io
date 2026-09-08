import React from 'react';

export const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98z" />
  </svg>
);

export const ChessLogoIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 22H5v-2h14v2zm-2-4H7v-1.5l1.5-1.5h7L17 16.5V18zm-2-4.5h-6v-2h6v2zm-1.5-3.5h-3c-1.5 0-2.5-1.2-2.5-2.7V6c0-1.7 1.3-3 3-3s3 1.3 3 3v1.3c0 1.5-1 2.7-2.5 2.7z" />
  </svg>
);

export const GoldEmblemIcon: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => {
  const id = React.useId().replace(/:/g, '');
  const goldBase = `gold-base-${id}`;
  const goldLight = `gold-light-${id}`;
  const goldDark = `gold-dark-${id}`;
  const goldSpecular = `gold-specular-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', filter: 'drop-shadow(0 2px 6px rgba(217, 119, 6, 0.4))' }}
    >
      <defs>
        <linearGradient id={goldBase} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="25%" stopColor="#FCD34D" />
          <stop offset="55%" stopColor="#D97706" />
          <stop offset="85%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#361302" />
        </linearGradient>

        <linearGradient id={goldLight} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FEF08A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        <linearGradient id={goldDark} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B45309" />
          <stop offset="50%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#1E0B02" />
        </linearGradient>

        <linearGradient id={goldSpecular} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      <g transform="translate(250, 250)">
        {/* 4 DIAGONAL CRESTS (Top-Right, Bottom-Right, Bottom-Left, Top-Left) */}
        {[45, 135, 225, 315].map((angle, idx) => (
          <g key={angle} transform={`rotate(${angle})`}>
            {/* Scalloped Crest Outer Outline & Shell */}
            <path
              d="M 0,-85 
                 C -25,-95 -50,-115 -75,-135 
                 C -95,-115 -115,-95 -135,-75 
                 C -115,-50 -95,-25 -85,0 
                 C -70,-15 -55,-40 -40,-60 
                 C -25,-40 -35,-20 -40,0 Z"
              fill={`url(#${goldBase})`}
              stroke="#FFFBEB"
              strokeWidth="2"
            />
            <path
              d="M 0,-85 
                 C 25,-95 50,-115 75,-135 
                 C 95,-115 115,-95 135,-75 
                 C 115,-50 95,-25 85,0 
                 C 70,-15 55,-40 40,-60 
                 C 25,-40 35,-20 40,0 Z"
              fill={`url(#${goldDark})`}
              stroke="#FFFBEB"
              strokeWidth="2"
            />

            {/* Inward Curved Claws/Horns */}
            <path d="M -25,-35 C -35,-25 -25,-10 -10,-15 C -5,-10 -10,-5 -20,-10 Z" fill={`url(#${goldLight})`} />
            <path d="M 25,-35 C 35,-25 25,-10 10,-15 C 5,-10 10,-5 20,-10 Z" fill={`url(#${goldLight})`} />

            {/* Embossed Geometric Symbols inside crest */}
            <circle cx="-45" cy="-75" r="9" fill={`url(#${goldSpecular})`} stroke="#451A03" strokeWidth="1.5" />
            <circle cx="45" cy="-75" r="9" fill={`url(#${goldSpecular})`} stroke="#451A03" strokeWidth="1.5" />

            {idx % 2 === 0 ? (
              <rect x="-9" y="-84" width="18" height="18" fill={`url(#${goldSpecular})`} transform="rotate(45, 0, -75)" stroke="#451A03" strokeWidth="1.5" />
            ) : (
              <polygon points="0,-86 -10,-68 10,-68" fill={`url(#${goldSpecular})`} stroke="#451A03" strokeWidth="1.5" />
            )}
          </g>
        ))}

        {/* 4 CARDINAL FACETED 3D SPIKES (Top, Right, Bottom, Left) */}
        {[0, 90, 180, 270].map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            {/* Top Tip - Left Facet (Shadow) */}
            <polygon points="0,-225 -55,-155 0,-165" fill={`url(#${goldDark})`} />
            {/* Top Tip - Right Facet (Highlight) */}
            <polygon points="0,-225 55,-155 0,-165" fill={`url(#${goldSpecular})`} />

            {/* Middle Facet Left */}
            <polygon points="-55,-155 0,-165 0,-105 -45,-120" fill={`url(#${goldBase})`} />
            {/* Middle Facet Right */}
            <polygon points="55,-155 0,-165 0,-105 45,-120" fill={`url(#${goldLight})`} />

            {/* Sharp Center Spine */}
            <line x1="0" y1="-225" x2="0" y2="-105" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
          </g>
        ))}

        {/* Center Void Cross / Square */}
        <polygon points="0,-25 25,0 0,25 -25,0" fill="#000000" />
        <polygon points="0,-12 12,0 0,12 -12,0" fill={`url(#${goldSpecular})`} />
      </g>
    </svg>
  );
};


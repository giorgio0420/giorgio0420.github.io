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

export const GoldEmblemIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => {
  const id = React.useId().replace(/:/g, '');
  const mainGrad = `gold-main-${id}`;
  const lightGrad = `gold-light-${id}`;
  const darkGrad = `gold-dark-${id}`;
  const innerGrad = `gold-inner-${id}`;
  const glowFilter = `gold-glow-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', filter: `url(#${glowFilter})` }}
    >
      <defs>
        <linearGradient id={mainGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9E6" />
          <stop offset="20%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="80%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>

        <linearGradient id={lightGrad} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FEF08A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        <linearGradient id={darkGrad} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#78350F" />
          <stop offset="50%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#FCD34D" />
        </linearGradient>

        <radialGradient id={innerGrad} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="60%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#78350F" />
        </radialGradient>

        <filter id={glowFilter} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#F59E0B" floodOpacity="0.75" />
        </filter>
      </defs>

      <g>
        {/* Outer Ornate Square Frame with Corner Fleur-de-lis Spikes */}
        <path
          d="M32 2 L38 10 L48 6 L46 16 L58 18 L52 28 L62 32 L52 36 L58 46 L46 48 L48 58 L38 54 L32 62 L26 54 L16 58 L18 48 L6 46 L12 36 L2 32 L12 28 L6 18 L18 16 L16 6 L26 10 Z"
          fill={`url(#${mainGrad})`}
          stroke="#FFF9E6"
          strokeWidth="0.8"
        />

        {/* Ornate Filigree Corner Loops */}
        <rect
          x="12"
          y="12"
          width="40"
          height="40"
          rx="4"
          fill="none"
          stroke={`url(#${lightGrad})`}
          strokeWidth="2"
        />

        {/* Inner Diamond Star Mesh */}
        <path
          d="M32 8 L37 22 L52 17 L42 27 L56 32 L42 37 L52 47 L37 42 L32 56 L27 42 L12 47 L22 37 L8 32 L22 27 L12 17 L27 22 Z"
          fill={`url(#${darkGrad})`}
        />

        {/* Central 3D Faceted Crystal Gem */}
        <polygon points="32,16 44,32 32,48 20,32" fill={`url(#${innerGrad})`} stroke="#FFF9E6" strokeWidth="1" />

        {/* Facet Top-Left Reflection */}
        <polygon points="32,16 44,32 32,32" fill={`url(#${lightGrad})`} opacity="0.9" />

        {/* Facet Bottom-Right Shadow */}
        <polygon points="32,32 44,32 32,48" fill="#451A03" opacity="0.7" />

        {/* Center Radiant Core */}
        <circle cx="32" cy="32" r="5" fill="#FFFFFF" opacity="0.95" />
        <circle cx="32" cy="32" r="2.5" fill="#FEF08A" />
      </g>
    </svg>
  );
};


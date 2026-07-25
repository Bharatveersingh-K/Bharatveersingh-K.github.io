// Decorative "sticker sheet" for the scrapbook-style collage - every shape
// here is drawn from scratch, standing in for the stock photo stickers
// (butterfly / cat / heart) in the reference design with dev-themed doodles.

export function TerminalSticker({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="46" fill="#0F2A4A" />
      <rect x="20" y="30" width="60" height="40" rx="6" fill="#0B4F8A" />
      <rect x="20" y="30" width="60" height="10" rx="6" fill="#1E8FE1" />
      <circle cx="27" cy="35" r="1.6" fill="#EAF6FF" />
      <circle cx="32" cy="35" r="1.6" fill="#EAF6FF" />
      <circle cx="37" cy="35" r="1.6" fill="#EAF6FF" />
      <path d="M28 50l7 6-7 6" stroke="#6FC3FF" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 62h16" stroke="#6FC3FF" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function AtomSticker({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="46" fill="#EAF6FF" stroke="#CFE7FB" strokeWidth="2" />
      <g stroke="#1E8FE1" strokeWidth="3" fill="none">
        <ellipse cx="50" cy="50" rx="28" ry="11" />
        <ellipse cx="50" cy="50" rx="28" ry="11" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="28" ry="11" transform="rotate(120 50 50)" />
      </g>
      <circle cx="50" cy="50" r="6" fill="#0B4F8A" />
    </svg>
  );
}

export function CoffeeSticker({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="46" fill="#FFF6E2" stroke="#FFE1A3" strokeWidth="2" />
      <path d="M30 44h32v18a10 10 0 0 1-10 10H40a10 10 0 0 1-10-10V44Z" fill="#0F2A4A" />
      <path d="M62 48h4a7 7 0 0 1 0 14h-4" fill="none" stroke="#0F2A4A" strokeWidth="3.4" />
      <path d="M37 38c-2-4 2-5 1-9M46 38c-2-4 2-5 1-9M55 38c-2-4 2-5 1-9" stroke="#FFC23C" strokeWidth="2.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function CodeHeartSticker({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="46" fill="#0B4F8A" />
      <path
        d="M50 68S32 56 32 43a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 13-18 25-18 25Z"
        fill="#FF6B6B"
      />
      <path d="M23 50l-7 5 7 5M77 50l7 5-7 5" stroke="#EAF6FF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CodeStar({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <defs>
        <clipPath id="starClip">
          <path d="M60 6 74 42 112 46 84 71 92 110 60 90 28 110 36 71 8 46 46 42Z" />
        </clipPath>
        <filter id="starShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0B4F8A" floodOpacity="0.22" />
        </filter>
      </defs>
      <path
        d="M60 6 74 42 112 46 84 71 92 110 60 90 28 110 36 71 8 46 46 42Z"
        fill="#F7FBFF"
        stroke="#1E8FE1"
        strokeWidth="2.5"
        filter="url(#starShadow)"
      />
      <g clipPath="url(#starClip)" opacity="0.8" fontFamily="ui-monospace, monospace" fontSize="7.2" fill="#4F97D6" fontWeight="600">
        {Array.from({ length: 9 }).map((_, i) => (
          <text key={i} x="4" y={16 + i * 12}>
            {'</> const app = () => {} '}
          </text>
        ))}
      </g>
    </svg>
  );
}

export function ConfettiBurst({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className}>
      <g fill="#1E8FE1">
        <path d="M4 30 16 26 16 34Z" />
        <path d="M10 12 20 20 13 24Z" />
        <path d="M30 4 32 16 24 14Z" />
      </g>
      <g fill="#FFC23C">
        <circle cx="12" cy="46" r="2.4" />
        <circle cx="34" cy="8" r="2" />
      </g>
    </svg>
  );
}

export function SparkleTrio({ className = '' }) {
  return (
    <svg viewBox="0 0 60 40" className={className} fill="#1E8FE1">
      <path d="M14 4c.6 4 2.7 6.1 6.7 6.7-4 .6-6.1 2.7-6.7 6.7-.6-4-2.7-6.1-6.7-6.7 4-.6 6.1-2.7 6.7-6.7Z" />
      <path d="M42 16c.4 2.7 1.8 4.1 4.5 4.5-2.7.4-4.1 1.8-4.5 4.5-.4-2.7-1.8-4.1-4.5-4.5 2.7-.4 4.1-1.8 4.5-4.5Z" />
      <path d="M28 24c.3 2 1.3 3 3.3 3.3-2 .3-3 1.3-3.3 3.3-.3-2-1.3-3-3.3-3.3 2-.3 3-1.3 3.3-3.3Z" />
    </svg>
  );
}

export function GridDotsIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      {[6, 12, 18].map((cy) =>
        [6, 18].map((cx) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.8" />)
      )}
    </svg>
  );
}

export function WashiTape({ className = '', rotate = -4 }) {
  return (
    <svg
      viewBox="0 0 120 34"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <rect x="0" y="0" width="120" height="34" fill="#BFE3FF" opacity="0.85" />
      <rect x="0" y="0" width="120" height="34" fill="url(#tapeStripes)" opacity="0.35" />
      <defs>
        <pattern id="tapeStripes" width="10" height="10" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <rect width="5" height="10" fill="#ffffff" />
        </pattern>
      </defs>
    </svg>
  );
}

export function PaperclipIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 12.5 15 4.5a3.5 3.5 0 0 1 5 5l-9 9a5.5 5.5 0 0 1-7.8-7.8L12 2" />
    </svg>
  );
}

export function PinBadge({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <circle cx="20" cy="20" r="18" fill="#FF6B6B" />
      <circle cx="20" cy="20" r="18" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
      <circle cx="20" cy="16" r="5" fill="white" />
      <path d="M20 21v9" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function ButterflySticker({ className = '' }) {
  return (
    <svg viewBox="0 0 80 70" className={className}>
      <g fill="none" stroke="#0B4F8A" strokeWidth="1.2">
        <path d="M40 15v40" strokeWidth="2" />
        <path d="M40 15c-3-8-10-10-18-6s-14 14-10 24 14 14 24 8" fill="#1E8FE1" fillOpacity="0.2" />
        <path d="M40 15c3-8 10-10 18-6s14 14 10 24-14 14-24 8" fill="#1E8FE1" fillOpacity="0.2" />
        <path d="M40 30c-4-4-10-4-14 0s-6 12-2 18 10 8 16 4" fill="#6FC3FF" fillOpacity="0.4" />
        <path d="M40 30c4-4 10-4 14 0s6 12 2 18-10 8-16 4" fill="#6FC3FF" fillOpacity="0.4" />
        <circle cx="36" cy="26" r="2" fill="#0B4F8A" />
        <circle cx="44" cy="26" r="2" fill="#0B4F8A" />
      </g>
      <path d="M38 10c-2-5-1-8 2-8s4 3 2 8" stroke="#0B4F8A" strokeWidth="1.2" fill="none" />
      <path d="M42 10c2-5 1-8-2-8s-4 3-2 8" stroke="#0B4F8A" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export function PhotoSticker({ className = '', imgSrc }) {
  const id = 'photoMask' + Math.random().toString(36).slice(2, 8);
  return (
    <svg viewBox="0 0 90 100" className={className}>
      <defs>
        <clipPath id={id}>
          <rect x="5" y="5" width="80" height="70" rx="4" />
        </clipPath>
      </defs>
      <rect x="0" y="0" width="90" height="100" rx="6" fill="white" filter="drop-shadow(0 4px 8px rgba(11,79,138,0.18))" />
      <rect x="5" y="5" width="80" height="70" rx="4" fill="#EAF6FF" />
      {imgSrc && <image href={imgSrc} x="5" y="5" width="80" height="70" clipPath={`url(#${id})`} preserveAspectRatio="xMidYMid slice" />}
      <text x="45" y="90" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#0B4F8A">that's me!</text>
    </svg>
  );
}

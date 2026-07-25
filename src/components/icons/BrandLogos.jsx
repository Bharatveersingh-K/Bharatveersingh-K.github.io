// Hand-authored, full-colour recreations of real tool/tech marks (not an
// icon-library import) - sized and framed like app icons, matching the
// "actual logo" tiles used in the reference design's "What I work with" grid.

export function ReactLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="16" fill="#0B1E33" />
      <g stroke="#61DAFB" strokeWidth="2.6" fill="none">
        <ellipse cx="32" cy="32" rx="19" ry="7.6" />
        <ellipse cx="32" cy="32" rx="19" ry="7.6" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="19" ry="7.6" transform="rotate(120 32 32)" />
      </g>
      <circle cx="32" cy="32" r="4.2" fill="#61DAFB" />
    </svg>
  );
}

export function ReactNativeLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="16" fill="#EAF6FF" stroke="#CFE7FB" strokeWidth="1.5" />
      <rect x="21" y="10" width="22" height="44" rx="5" fill="none" stroke="#0B4F8A" strokeWidth="2.6" />
      <circle cx="32" cy="44" r="2.6" fill="#0B4F8A" />
      <g stroke="#1E8FE1" strokeWidth="2.2" fill="none">
        <ellipse cx="32" cy="27" rx="12.5" ry="5" />
        <ellipse cx="32" cy="27" rx="12.5" ry="5" transform="rotate(60 32 27)" />
        <ellipse cx="32" cy="27" rx="12.5" ry="5" transform="rotate(120 32 27)" />
      </g>
      <circle cx="32" cy="27" r="2.8" fill="#1E8FE1" />
    </svg>
  );
}

export function NodeLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="16" fill="#F0FBF0" stroke="#CDEACC" strokeWidth="1.5" />
      <path
        d="M32 8 54 20.5v23L32 56 10 43.5v-23L32 8Z"
        fill="#539E43"
      />
      <path
        d="M32 8 54 20.5v23L32 56V8Z"
        fill="#71C46A"
        opacity="0.55"
      />
      <path
        d="M25 39V27c0-2.4 1.7-3.8 4-3.8s4 2 4 4.4v6.8c0 2.4 1.7 4.4 4 4.4s4-1.4 4-3.8V21.5"
        fill="none"
        stroke="#0B2A0F"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FigmaLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="16" fill="white" stroke="#E7ECF3" strokeWidth="1.5" />
      <g transform="translate(21 8)">
        <path d="M0 0h11v11H0a5.5 5.5 0 0 1 0-11Z" fill="#F24E1E" />
        <path d="M11 0h11a5.5 5.5 0 0 1 0 11H11V0Z" fill="#FF7237" />
        <path d="M0 11h11v11H5.5a5.5 5.5 0 0 1-5.5-5.5V11Z" fill="#A259FF" />
        <circle cx="16.5" cy="16.5" r="5.5" fill="#1ABCFE" />
        <path d="M0 22a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" fill="#0ACF83" />
      </g>
    </svg>
  );
}

export function GitLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="16" fill="#F05133" />
      <g stroke="white" strokeWidth="2.8" fill="none" strokeLinecap="round">
        <circle cx="22" cy="18" r="3.4" fill="white" stroke="none" />
        <circle cx="22" cy="46" r="3.4" fill="white" stroke="none" />
        <circle cx="42" cy="32" r="3.4" fill="white" stroke="none" />
        <path d="M22 21.4v21.2" />
        <path d="M23.2 20.8c5.6 1.6 11.2 4.6 17.6 8.7" />
      </g>
    </svg>
  );
}

export function SocketLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="16" fill="#0B213C" />
      <rect x="18" y="24" width="28" height="18" rx="4" fill="none" stroke="#6FC3FF" strokeWidth="2.6" />
      <path d="M25 24v-6a4 4 0 0 1 4-4M39 24v-6a4 4 0 0 0-4-4" stroke="#6FC3FF" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M32 42v6M24 48h16" stroke="#6FC3FF" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="32" cy="33" r="3.4" fill="#6FC3FF" />
    </svg>
  );
}

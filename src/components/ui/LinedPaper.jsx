export default function LinedPaper({ className = '' }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="lined-paper" width="100%" height="34" patternUnits="userSpaceOnUse">
          <line x1="0" y1="33.5" x2="100%" y2="33.5" stroke="var(--color-line)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lined-paper)" />
      <line x1="46" y1="0" x2="46" y2="100%" stroke="#FFC9C9" strokeWidth="1.5" />
    </svg>
  );
}

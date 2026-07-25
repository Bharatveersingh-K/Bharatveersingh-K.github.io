export default function ExperienceBadge({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Soft pulsing outer halo */}
      <span
        aria-hidden="true"
        className="absolute inset-[-5px] rounded-full border-2 border-[var(--color-accent)]"
        style={{ animation: 'badge-pulse 3.2s ease-in-out infinite' }}
      />

      {/* Static blue body */}
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <circle cx="60" cy="60" r="58" fill="var(--color-accent)" />
      </svg>

      {/* Smooth spinning ring + label */}
      <svg
        viewBox="0 0 120 120"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ animation: 'badge-spin 22s linear infinite' }}
      >
        <defs>
          <path
            id="expBadgeCircle"
            d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
          />
        </defs>
        <circle
          cx="60"
          cy="60"
          r="49"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.2"
          strokeDasharray="2.5 4.5"
          strokeLinecap="round"
        />
        <text
          fill="#ffffff"
          fontSize="10"
          fontWeight="700"
          letterSpacing="2.2"
          fontFamily="var(--font-body)"
        >
          <textPath href="#expBadgeCircle" startOffset="0%">
            • YEARS OF EXPERIENCE • BUILDING PRODUCTS
          </textPath>
        </text>
      </svg>

      {/* Static center */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="font-display text-[2.2rem] font-bold leading-none">3</span>
        <span className="mt-0.5 font-script text-base leading-none sm:text-lg">years</span>
      </div>

      <style>{`
        @keyframes badge-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes badge-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}

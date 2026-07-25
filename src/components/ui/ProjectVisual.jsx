import { motion } from 'framer-motion';

/**
 * Bold, colourful hand-built SVG "cover art" for each project — standing in
 * for screenshots we can't show (client/NDA work) while keeping every visual
 * on the site as an original vector, not a stock asset or photo.
 */

const pulse = {
  animate: { opacity: [0.4, 1, 0.4] },
  transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
};

function CardBg({ id, from, to }) {
  return (
    <>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <pattern id={`${id}-dots`} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.4" fill="white" fillOpacity="0.16" />
        </pattern>
      </defs>
      <rect width="320" height="200" fill={`url(#${id})`} />
      <rect width="320" height="200" fill={`url(#${id}-dots)`} />
    </>
  );
}

function VideoManagement() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full">
      <CardBg id="g1" from="#1E8FE1" to="#0B4F8A" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const x = 26 + col * 68;
          const y = 30 + row * 52;
          const active = (row + col) % 5 === 0;
          return (
            <g key={`${row}-${col}`}>
              <rect x={x} y={y} width="54" height="38" rx="4" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.55)" />
              {active && (
                <motion.circle cx={x + 46} cy={y + 8} r="3" fill="#FFC23C" {...pulse} />
              )}
              <path d={`M${x + 10} ${y + 26} l8 -10 6 6 10 -12`} stroke="white" strokeOpacity="0.85" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          );
        })
      )}
    </svg>
  );
}

function VideoCall() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full">
      <CardBg id="g2" from="#0B4F8A" to="#0B213C" />
      <circle cx="120" cy="100" r="46" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.5)" />
      <circle cx="120" cy="86" r="16" fill="none" stroke="white" strokeOpacity="0.9" strokeWidth="1.8" />
      <path d="M92 132c0-16 12-24 28-24s28 8 28 24" fill="none" stroke="white" strokeOpacity="0.9" strokeWidth="1.8" />
      <circle cx="210" cy="100" r="34" fill="rgba(255,255,255,0.18)" stroke="#6FC3FF" />
      <circle cx="210" cy="90" r="11" fill="none" stroke="#6FC3FF" strokeWidth="1.8" />
      <path d="M192 116c0-11 8-16 18-16s18 5 18 16" fill="none" stroke="#6FC3FF" strokeWidth="1.8" />
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M168 100 q10 ${-14 + i * 14} 20 0`}
          stroke="#FFC23C"
          strokeWidth="1.6"
          fill="none"
          opacity={0.5}
          animate={{ opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25 }}
        />
      ))}
    </svg>
  );
}

function ReadyRider() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full">
      <CardBg id="g3" from="#1E8FE1" to="#22A6A0" />
      <path d="M30 160 C 90 160, 90 60, 160 60 S 260 140, 290 50" stroke="rgba(255,255,255,0.4)" strokeWidth="10" fill="none" strokeLinecap="round" />
      <motion.path
        d="M30 160 C 90 160, 90 60, 160 60 S 260 140, 290 50"
        stroke="white"
        strokeWidth="2.8"
        strokeDasharray="10 14"
        fill="none"
        strokeLinecap="round"
        animate={{ strokeDashoffset: [0, -48] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
      />
      <path d="M28 172c0-8 6-14 14-14s14 6 14 14" fill="none" stroke="white" strokeWidth="1.8" />
      <circle cx="42" cy="152" r="6" fill="none" stroke="white" strokeWidth="1.8" />
      <motion.circle cx={285} cy="50" r="5" fill="#FFC23C" animate={{ cx: [285, 291, 285] }} transition={{ duration: 2, repeat: Infinity }} />
      <path d="M280 30v14M273 44h14" stroke="#FFC23C" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function SupplyChain() {
  const nodes = [
    [48, 100], [120, 50], [120, 150], [200, 100], [272, 50], [272, 150],
  ];
  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5],
  ];
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full">
      <CardBg id="g4" from="#0B4F8A" to="#1E8FE1" />
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="rgba(255,255,255,0.55)" strokeWidth="1.6" />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="rgba(255,255,255,0.2)" stroke="white" />
          {i === 3 && <motion.circle cx={x} cy={y} r="10" fill="none" stroke="#FFC23C" strokeWidth="2.2" {...pulse} />}
        </g>
      ))}
    </svg>
  );
}

function SmartParking() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full">
      <CardBg id="g5" from="#22A6A0" to="#0B4F8A" />
      <rect x="40" y="40" width="240" height="120" rx="8" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.5)" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={100 + i * 40} y1="40" x2={100 + i * 40} y2="160" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
      ))}
      <rect x="100" y="80" width="36" height="60" rx="6" fill="none" stroke="white" strokeWidth="1.8" />
      <text x="152" y="70" fontSize="34" fontWeight="700" fill="white" fontFamily="Fredoka, sans-serif">P</text>
      <motion.circle cx="240" cy="55" r="4" fill="#FFC23C" {...pulse} />
    </svg>
  );
}

function CommandCenter() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full">
      <CardBg id="g6" from="#0B213C" to="#0B4F8A" />
      <rect x="24" y="30" width="150" height="70" rx="6" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.5)" />
      <polyline points="34,85 60,60 85,72 110,45 160,55" fill="none" stroke="#6FC3FF" strokeWidth="2.4" />
      <rect x="188" y="30" width="108" height="70" rx="6" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.5)" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={200 + i * 24} y={70 - i * 12} width="14" height={12 + i * 12} fill="#6FC3FF" opacity="0.85" />
      ))}
      <rect x="24" y="112" width="272" height="58" rx="6" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.5)" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.circle
          key={i}
          cx={44 + i * 44}
          cy="141"
          r="4"
          fill={i === 2 ? '#FFC23C' : 'white'}
          fillOpacity={i === 2 ? 1 : 0.7}
          animate={i === 2 ? { opacity: [0.4, 1, 0.4] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

const VISUALS = {
  'video-management': VideoManagement,
  'video-call': VideoCall,
  'ready-rider': ReadyRider,
  'supply-chain': SupplyChain,
  'smart-parking': SmartParking,
  'command-center': CommandCenter,
};

export default function ProjectVisual({ projectKey }) {
  const Visual = VISUALS[projectKey] ?? VideoManagement;
  return <Visual />;
}

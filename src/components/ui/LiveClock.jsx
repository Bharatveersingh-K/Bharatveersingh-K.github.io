import { useEffect, useState } from 'react';

/**
 * A beautiful analog clock with decorative leaves that tracks the current time
 * in Asia/Kolkata. Built from scratch with SVG.
 */
export default function LiveClock({ className = '' }) {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const ist = new Date(
    time.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
  );
  const seconds = ist.getSeconds();
  const minutes = ist.getMinutes() + seconds / 60;
  const hours = (ist.getHours() % 12) + minutes / 60;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6;
  const hourDeg = hours * 30;

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" className="h-full w-full">
        {/* Decorative leaves behind clock */}
        <g opacity="0.9">
          {/* Top left leaf branch */}
          <g transform="translate(30, 30) rotate(-30)">
            <ellipse cx="0" cy="-20" rx="4" ry="12" fill="#5CB894" />
            <ellipse cx="-8" cy="-12" rx="3" ry="10" fill="#7FD4A8" transform="rotate(-25)" />
            <ellipse cx="8" cy="-12" rx="3" ry="10" fill="#5CB894" transform="rotate(25)" />
            <ellipse cx="-12" cy="-4" rx="3" ry="8" fill="#7FD4A8" transform="rotate(-40)" />
            <ellipse cx="12" cy="-4" rx="3" ry="8" fill="#5CB894" transform="rotate(40)" />
          </g>
          {/* Top right leaf branch */}
          <g transform="translate(170, 30) rotate(30)">
            <ellipse cx="0" cy="-20" rx="4" ry="12" fill="#4A9B7F" />
            <ellipse cx="-8" cy="-12" rx="3" ry="10" fill="#5CB894" transform="rotate(-25)" />
            <ellipse cx="8" cy="-12" rx="3" ry="10" fill="#4A9B7F" transform="rotate(25)" />
            <ellipse cx="-12" cy="-4" rx="3" ry="8" fill="#5CB894" transform="rotate(-40)" />
            <ellipse cx="12" cy="-4" rx="3" ry="8" fill="#4A9B7F" transform="rotate(40)" />
          </g>
          {/* Bottom left berries and leaves */}
          <g transform="translate(25, 165)">
            <ellipse cx="0" cy="0" rx="3" ry="10" fill="#5CB894" transform="rotate(45)" />
            <ellipse cx="10" cy="5" rx="3" ry="8" fill="#7FD4A8" transform="rotate(30)" />
            <circle cx="-5" cy="12" r="4" fill="#A8E6CF" />
            <circle cx="2" cy="18" r="3" fill="#B8F0D8" />
            <circle cx="10" cy="15" r="3.5" fill="#A8E6CF" />
          </g>
          {/* Bottom right berries and leaves */}
          <g transform="translate(175, 165)">
            <ellipse cx="0" cy="0" rx="3" ry="10" fill="#4A9B7F" transform="rotate(-45)" />
            <ellipse cx="-10" cy="5" rx="3" ry="8" fill="#5CB894" transform="rotate(-30)" />
            <circle cx="5" cy="12" r="4" fill="#A8E6CF" />
            <circle cx="-2" cy="18" r="3" fill="#B8F0D8" />
            <circle cx="-10" cy="15" r="3.5" fill="#A8E6CF" />
          </g>
          {/* Left side leaves */}
          <g transform="translate(15, 100)">
            <ellipse cx="0" cy="-15" rx="3" ry="10" fill="#5CB894" transform="rotate(-15)" />
            <ellipse cx="0" cy="0" rx="3" ry="10" fill="#7FD4A8" transform="rotate(-5)" />
            <ellipse cx="0" cy="15" rx="3" ry="10" fill="#5CB894" transform="rotate(15)" />
          </g>
          {/* Right side leaves */}
          <g transform="translate(185, 100)">
            <ellipse cx="0" cy="-15" rx="3" ry="10" fill="#4A9B7F" transform="rotate(15)" />
            <ellipse cx="0" cy="0" rx="3" ry="10" fill="#5CB894" transform="rotate(5)" />
            <ellipse cx="0" cy="15" rx="3" ry="10" fill="#4A9B7F" transform="rotate(-15)" />
          </g>
        </g>

        {/* Clock face background */}
        <circle cx="100" cy="100" r="75" fill="white" />
        
        {/* Blue outer ring */}
        <circle
          cx="100"
          cy="100"
          r="75"
          fill="none"
          stroke="#4FB8E8"
          strokeWidth="8"
        />

        {/* Inner shadow ring */}
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="#E8F4F8"
          strokeWidth="3"
        />

        {/* Minute tick marks */}
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i * 6 * Math.PI) / 180;
          const isHour = i % 5 === 0;
          const r1 = isHour ? 58 : 62;
          const r2 = 66;
          const x1 = 100 + r1 * Math.sin(angle);
          const y1 = 100 - r1 * Math.cos(angle);
          const x2 = 100 + r2 * Math.sin(angle);
          const y2 = 100 - r2 * Math.cos(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isHour ? '#1E5F7A' : '#B8D4E3'}
              strokeWidth={isHour ? 2 : 1}
              strokeLinecap="round"
            />
          );
        })}

        {/* Hour numbers */}
        {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const r = 50;
          const x = 100 + r * Math.sin(angle);
          const y = 100 - r * Math.cos(angle) + 5;
          return (
            <text
              key={num}
              x={x}
              y={y}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fontFamily="inherit"
              fill="#1E5F7A"
            >
              {num}
            </text>
          );
        })}

        {/* Hour hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="60"
          stroke="#1E3A5F"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${hourDeg}, 100, 100)`}
        />

        {/* Minute hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="42"
          stroke="#1E3A5F"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${minuteDeg}, 100, 100)`}
        />

        {/* Second hand */}
        <line
          x1="100"
          y1="108"
          x2="100"
          y2="35"
          stroke="#F5C842"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${secondDeg}, 100, 100)`}
        />

        {/* Center dot */}
        <circle cx="100" cy="100" r="5" fill="#1E3A5F" />
        <circle cx="100" cy="100" r="3" fill="#F5C842" />
      </svg>
    </div>
  );
}

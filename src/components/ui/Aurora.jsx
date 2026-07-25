import { useId, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Decorative, hand-authored gradient-blob backdrop used for the parallax
 * effect behind sections. Purely generated shapes, not stock artwork.
 */
export default function Aurora({ className = '', variant = 'default' }) {
  const uid = useId();
  const idA = `aurora-a-${uid}`;
  const idB = `aurora-b-${uid}`;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yA = useTransform(scrollYProgress, [0, 1], ['-8%', '12%']);
  const yB = useTransform(scrollYProgress, [0, 1], ['6%', '-14%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, variant === 'reverse' ? -18 : 18]);

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.svg
        style={{ y: yA }}
        className="absolute -left-40 top-0 h-[520px] w-[520px] opacity-70 blur-3xl"
        viewBox="0 0 400 400"
      >
        <defs>
          <radialGradient id={idA} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#BFE3FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#BFE3FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="200" fill={`url(#${idA})`} />
      </motion.svg>

      <motion.svg
        style={{ y: yB, rotate }}
        className="absolute -right-32 bottom-0 h-[460px] w-[460px] opacity-60 blur-3xl"
        viewBox="0 0 400 400"
      >
        <defs>
          <radialGradient id={idB} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE7B8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFE7B8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="200" fill={`url(#${idB})`} />
      </motion.svg>
    </div>
  );
}

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experience } from '../../data/profile';
import Reveal from '../ui/Reveal';
import { CalendarIcon, CheckIcon, MapPinIcon, ArrowRightIcon } from '../icons/UiIcons';
import styles from './Experience.module.scss';

import cpplusLogo from '../../assets/images/companyLogo/cpplus_logo.png';
import maxtraLogo from '../../assets/images/companyLogo/maxtra.png';
import ajeeviLogo from '../../assets/images/companyLogo/ajeevi.png';
import waredotLogo from '../../assets/images/companyLogo/waredot.png';

const LOGO_MAP = {
  cpplus: cpplusLogo,
  maxtra: maxtraLogo,
  ajeevi: ajeeviLogo,
  waredot: waredotLogo,
};

function OutlierBadge({ className = '' }) {
  return (
    <svg viewBox="0 0 96 96" className={className}>
      <rect width="96" height="96" rx="18" fill="#0B0F1A" />
      <circle cx="48" cy="48" r="22" fill="none" stroke="#6C8CFF" strokeWidth="6" />
      <circle cx="48" cy="48" r="8" fill="#6C8CFF" />
      <path d="M70 26l8-8M26 70l-8 8" stroke="#A8B8FF" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function CompanyMark({ logoKey, brand, className = '' }) {
  if (logoKey === 'outlier') {
    return <OutlierBadge className={className} />;
  }
  const src = LOGO_MAP[logoKey];
  if (!src) {
    return (
      <span className={`${styles.logoFallback} ${className}`}>
        {brand.slice(0, 2).toUpperCase()}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt={`${brand} logo`}
      className={`${styles.logoImg} ${className}`}
      loading="lazy"
    />
  );
}

function ChevronLeft({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 56 : -56, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -56 : 56, opacity: 0 }),
};

export default function Experience() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = experience.length;
  const job = experience[index];

  const goTo = useCallback((next) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }, [index]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    const onKey = (e) => {
      const section = document.getElementById('journey');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3;
      if (!inView) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  return (
    <section id="journey" className={`relative overflow-hidden px-6 py-20 sm:px-10 ${styles.section}`}>
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={`relative mx-auto max-w-5xl ${styles.shell}`}>
        <Reveal className={styles.headingBlock}>
          <p className={styles.eyebrow}>Career path</p>
          <h2 className={styles.title}>
            <span className={styles.titleScript}>My journey</span>
            <span className={styles.titleAccent}> so far</span>
          </h2>
          <p className={styles.subtitle}>
            One role at a time - pick a company tab or slide through the timeline.
          </p>
        </Reveal>

        <Reveal delay={0.08} className={styles.statsRow}>
          {[
            { value: '2+', label: 'Years' },
            { value: String(total), label: 'Roles' },
            { value: '6+', label: 'Products' },
          ].map((stat) => (
            <div key={stat.label} className={styles.statPill}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.12} className={styles.tabWrap}>
          <div className={styles.tabBar} role="tablist" aria-label="Companies">
            {experience.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => goTo(i)}
                className={`${styles.tab} ${i === index ? styles.tabActive : ''}`}
              >
                <span className={styles.tabLogo}>
                  <CompanyMark logoKey={item.logoKey} brand={item.brand} />
                </span>
                <span className={styles.tabLabel}>
                  <span className={styles.tabBrand}>{item.brand}</span>
                  <span className={styles.tabYear}>{item.year}</span>
                </span>
                {item.current && <span className={styles.liveDot} />}
              </button>
            ))}
          </div>
        </Reveal>

        <div className={styles.slider}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={prev}
            aria-label="Previous role"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className={styles.viewport}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={job.id}
                role="tabpanel"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60 || info.velocity.x < -400) next();
                  else if (info.offset.x > 60 || info.velocity.x > 400) prev();
                }}
                className={`${styles.card} ${job.current ? styles.cardCurrent : ''}`}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.logoBox}>
                    <CompanyMark logoKey={job.logoKey} brand={job.brand} />
                  </span>

                  <div className={styles.headerCopy}>
                    <div className={styles.roleRow}>
                      <h3 className={styles.role}>{job.role}</h3>
                      {job.current && <span className={styles.nowBadge}>Now</span>}
                    </div>
                    <p className={styles.companyLine}>
                      <span className={styles.brandScript}>{job.brand}</span>
                      <span className={styles.companySep}>·</span>
                      <span className={styles.companyName}>{job.company}</span>
                    </p>
                  </div>

                  <div className={styles.counter} aria-hidden="true">
                    <span className={styles.counterCurrent}>{String(index + 1).padStart(2, '0')}</span>
                    <span className={styles.counterSep}>/</span>
                    <span>{String(total).padStart(2, '0')}</span>
                  </div>
                </div>

                <div className={styles.metaRow}>
                  <span className={styles.metaChip}>
                    <CalendarIcon className="h-3.5 w-3.5" />
                    {job.period}
                  </span>
                  <span className={styles.metaChip}>
                    <MapPinIcon className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                  <span className={styles.metaChip}>{job.duration}</span>
                  <span className={`${styles.metaChip} ${styles.typeChip}`}>{job.type}</span>
                </div>

                <p className={styles.impact}>
                  <span className={styles.impactLabel}>Highlight</span>
                  {job.impact}
                </p>

                <div className={styles.techRow}>
                  {job.tech.map((t) => (
                    <span key={t} className={styles.techBadge}>{t}</span>
                  ))}
                </div>

                <ul className={styles.points}>
                  {job.points.map((point) => (
                    <li key={point}>
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <button type="button" className={styles.nextHint} onClick={next}>
                    Next role
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <button
            type="button"
            className={styles.navBtn}
            onClick={next}
            aria-label="Next role"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>

        <div className={styles.footerNav}>
          <div className={styles.dots} role="presentation">
            {experience.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to ${item.brand}`}
                onClick={() => goTo(i)}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              />
            ))}
          </div>
          <div className={styles.progressTrack} aria-hidden="true">
            <motion.div
              className={styles.progressFill}
              animate={{ width: `${((index + 1) / total) * 100}%` }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

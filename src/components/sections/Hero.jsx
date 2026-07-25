import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import ExperienceBadge from '../ui/ExperienceBadge';
import { GithubIcon, LinkedinIcon, DownloadIcon, ArrowRightIcon } from '../icons/UiIcons';
import dashboardImg from '../../assets/images/projects/command-center.png';
import mobileAppImg from '../../assets/images/hero-mobile-app.png';
import tabletAppImg from '../../assets/images/hero-tablet-app.png';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-36">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[var(--color-accent-pale)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-64 h-64 w-64 rounded-full bg-[var(--color-surface-3)] blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-sm font-semibold tracking-wide text-[var(--color-ink)] sm:text-base"
          >
            MERN Stack&nbsp;
            <span className="text-[var(--color-accent)]">|</span>&nbsp; React
            Native&nbsp;
            <span className="text-[var(--color-accent)]">|</span>&nbsp; Real-time
            Apps
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 leading-[0.95]"
          >
            <span className="block font-script text-[clamp(3.4rem,10vw,6rem)] text-[var(--color-ink)]">
              Portfolio
            </span>
            <span className="-mt-3 block font-display text-[clamp(3rem,11vw,6.4rem)] font-bold text-[var(--color-accent)]">
              2026
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-md font-body text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg"
          >
            {profile.name} is a MERN stack &amp; React Native developer who
            turns ideas into <strong className="text-[var(--color-ink)]">fast, dependable products</strong> —
            from ride-hailing apps to city-scale dashboards, currently building
            at <strong className="text-[var(--color-ink)]">CP Plus</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 font-body text-sm font-semibold text-white shadow-[var(--shadow-pop)] transition-transform hover:-translate-y-0.5"
            >
              See my work <ArrowRightIcon className="h-4 w-4" />
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-ink)] px-6 py-3 font-body text-sm font-semibold text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
            >
              Résumé <DownloadIcon className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
            <span className="font-body text-sm font-medium text-[var(--color-ink-soft)]">{profile.location}</span>
          </motion.div>
        </div>

        {/* Right collage — one grounded product stack */}
        <div className="relative mx-auto flex h-[400px] w-full max-w-[460px] items-end justify-center sm:h-[450px]">
          <div className="relative h-full w-full">
            {/* Ground contact shadow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[8%] bottom-1 z-0 h-8 rounded-[100%]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(15,42,74,0.28) 0%, rgba(15,42,74,0.1) 40%, transparent 72%)',
              }}
            />

            {/* Dashboard */}
            <div
              className="absolute left-[4%] top-[11%] z-[8] w-[78%] -rotate-[2deg] overflow-hidden rounded-xl border border-[#c9d9ea] bg-white sm:left-[5%] sm:w-[76%]"
              style={{
                filter:
                  'drop-shadow(0 2px 3px rgba(15,42,74,0.12)) drop-shadow(0 14px 28px rgba(15,42,74,0.18)) drop-shadow(0 32px 40px rgba(15,42,74,0.12))',
              }}
            >
              <div className="flex items-center gap-1.5 border-b border-[#e8eef5] bg-[#f4f8fc] px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 hidden truncate rounded-md bg-white px-3 py-0.5 font-body text-[9px] font-medium text-[var(--color-ink-mute)] sm:inline">
                  command-center.app
                </span>
              </div>
              <img
                src={dashboardImg}
                alt="City operations dashboard"
                className="block h-auto w-full"
                loading="lazy"
              />
            </div>

            {/* Tablet tucked under dashboard bottom-left */}
            <div
              className="absolute bottom-[7%] left-0 z-[12] w-[50%] max-w-[230px] -rotate-[5deg]"
              style={{
                filter:
                  'drop-shadow(0 3px 4px rgba(15,42,74,0.16)) drop-shadow(0 16px 30px rgba(15,42,74,0.24))',
              }}
            >
              <div className="rounded-[1.1rem] border-[5px] border-[#1a1f2e] bg-[#1a1f2e] p-1">
                <div className="overflow-hidden rounded-[0.7rem] bg-white">
                  <img
                    src={tabletAppImg}
                    alt="Tablet video-management app"
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                </div>
                <span className="mx-auto mt-1 block h-1 w-8 rounded-full bg-white/25" />
              </div>
            </div>

            {/* Mobile overlapping dashboard bottom-right */}
            <div
              className="absolute bottom-[4%] right-[2%] z-20 w-[36%] max-w-[145px] rotate-[4deg] sm:right-[3%]"
              style={{
                filter:
                  'drop-shadow(0 4px 6px rgba(15,42,74,0.18)) drop-shadow(0 18px 34px rgba(15,42,74,0.28))',
              }}
            >
              <div className="rounded-[1.7rem] border-[5px] border-[#0f172a] bg-[#0f172a] p-[3px]">
                <div className="relative overflow-hidden rounded-[1.35rem] bg-white">
                  <span className="absolute left-1/2 top-1.5 z-10 h-1.5 w-8 -translate-x-1/2 rounded-full bg-[#0f172a]/85" />
                  <img
                    src={mobileAppImg}
                    alt="Mobile ride-hailing app"
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Experience badge — top right */}
            <div
              className="absolute right-[2%] top-[2%] z-30 sm:right-[4%] sm:top-[3%]"
              style={{
                filter:
                  'drop-shadow(0 3px 5px rgba(15,42,74,0.2)) drop-shadow(0 12px 20px rgba(30,143,225,0.45))',
              }}
            >
              <ExperienceBadge className="h-[5rem] w-[5rem] sm:h-[5.75rem] sm:w-[5.75rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

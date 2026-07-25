import { motion } from 'framer-motion';
import { profile, education, certifications, languages } from '../../data/profile';
import { workWith } from '../../data/skills';
import Reveal from '../ui/Reveal';
import StickyNote from '../ui/StickyNote';
import { SparkleTrio, WashiTape, PaperclipIcon } from '../icons/Doodles';
import profilePhoto from '../../assets/images/profile.png';

const eduItems = [
  ...education.map((e) => ({ title: e.degree, sub: e.school, period: e.period })),
  ...certifications.map((c) => ({ title: c.title, sub: c.issuer, period: c.period })),
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Row 1: portrait + intro */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[300px_minmax(0,1fr)]">
          <Reveal className="mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-none">
            <div className="relative w-full">
              <WashiTape className="absolute -top-3 left-1/2 z-10 w-24 -translate-x-1/2" />
              <StickyNote
                peel
                rotate={-1.2}
                bg="white"
                className="w-full border border-[var(--color-line)] p-3"
              >
                <img
                  src={profilePhoto}
                  alt={profile.name}
                  className="aspect-[4/5] w-full rounded-xl object-cover object-top"
                />
                <p className="mt-2.5 text-center font-script text-2xl leading-none text-[var(--color-accent)]">
                  that&apos;s me!
                </p>
              </StickyNote>
            </div>
          </Reveal>

          <div className="flex min-w-0 flex-col justify-between gap-6">
            <div>
              <Reveal className="flex items-end gap-3">
                <h2 className="font-script text-[clamp(2.75rem,5.5vw,3.75rem)] leading-[0.9] text-[var(--color-ink)]">
                  Hi there!
                </h2>
                <SparkleTrio className="mb-1.5 h-9 w-12 shrink-0" />
              </Reveal>

              <Reveal delay={0.06} className="mt-4 space-y-3.5 font-body text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-[1.05rem]">
                <p>
                  I&apos;m <strong className="text-[var(--color-ink)]">{profile.name}</strong>, a MERN
                  stack developer with <strong className="text-[var(--color-accent)]">3 years</strong> of
                  experience and a background that spans e-commerce clones, enterprise
                  dashboards, and a full ride-hailing app used by real riders and drivers.
                </p>
                <p>
                  I currently build video &amp; surveillance-facing products at{' '}
                  <strong className="text-[var(--color-ink)]">CP Plus</strong>, blending{' '}
                  <strong className="text-[var(--color-accent)]">React &amp; React Native</strong> on the
                  frontend with <strong className="text-[var(--color-accent)]">Node/Express &amp; Socket</strong>{' '}
                  systems underneath. I care about the small details - the loading skeleton, the
                  empty state, the 200ms transition - as much as the big architecture calls.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-h-[84px] flex-col justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-2)] px-3 py-3 text-center transition-colors hover:border-[var(--color-accent-soft)] hover:bg-white"
                >
                  <p className="font-display text-xl font-semibold leading-none text-[var(--color-accent-deep)] sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-body text-[10px] font-semibold uppercase leading-snug tracking-[0.08em] text-[var(--color-ink-mute)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        {/* Row 2: Education + Languages - fills the former empty band */}
        <div className="mt-10 grid grid-cols-1 gap-5 pt-4 md:grid-cols-2 md:items-stretch">
          <Reveal className="h-full pt-3">
            <div className="relative flex h-full flex-col rounded-2xl border border-[var(--color-line)] bg-white p-5 pb-7 pt-7 shadow-[var(--shadow-card)] sm:p-6 sm:pb-8 sm:pt-8">
              <PaperclipIcon className="absolute -top-3 left-5 z-10 h-9 w-9 -rotate-12 text-[var(--color-ink-mute)] drop-shadow-sm" />

              <p className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Background
              </p>
              <h3 className="mt-1 font-script text-3xl leading-none text-[var(--color-ink)] sm:text-4xl">
                Education
              </h3>

              <div className="mt-5 flex flex-1 flex-col gap-4">
                {eduItems.map((item, i) => (
                  <div
                    key={item.title}
                    className={`rounded-xl border border-[var(--color-line-soft)] bg-[var(--color-surface-2)]/70 px-4 py-3.5 ${
                      i > 0 ? '' : ''
                    }`}
                  >
                    <p className="font-display text-sm font-semibold leading-snug text-[var(--color-ink)] sm:text-[0.95rem]">
                      {item.title}
                    </p>
                    <p className="mt-1.5 font-body text-xs leading-relaxed text-[var(--color-ink-soft)] sm:text-[0.8125rem]">
                      {item.sub}
                    </p>
                    <p className="mt-1 font-body text-[11px] font-semibold text-[var(--color-accent-deep)]">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-8 w-8"
                style={{
                  background: '#E4C9A0',
                  clipPath: 'polygon(100% 0, 8% 100%, 100% 100%)',
                }}
              />
            </div>
          </Reveal>

          <Reveal delay={0.06} className="h-full pt-3">
            <div className="grid-paper relative flex h-full flex-col rounded-2xl border border-[var(--color-line)] p-5 pt-7 shadow-[var(--shadow-card)] sm:p-6 sm:pt-8">
              <WashiTape className="absolute -top-3 left-7 z-10 w-16" rotate={-5} />
              <PaperclipIcon className="absolute -top-3 right-6 z-10 h-9 w-9 rotate-12 text-[var(--color-ink-mute)] drop-shadow-sm" />

              <div className="flex flex-wrap items-end justify-between gap-2 pr-8">
                <div>
                  <p className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    Spoken daily
                  </p>
                  <h3 className="mt-1 font-script text-3xl leading-none text-[var(--color-ink)] sm:text-4xl">
                    Languages
                  </h3>
                </div>
              </div>

              <p className="mt-3 max-w-md font-body text-xs leading-relaxed text-[var(--color-ink-mute)] sm:text-sm">
                Comfortable collaborating with teams across India and remote clients.
              </p>

              <div className="mt-5 grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex flex-col justify-center rounded-xl border border-[var(--color-line)] bg-white px-4 py-4 shadow-sm"
                  >
                    <p className="font-display text-lg font-semibold text-[var(--color-ink)]">
                      {lang.name}
                    </p>
                    <p className="mt-1.5 font-body text-sm leading-snug text-[var(--color-ink-soft)]">
                      {lang.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Skills */}
        <Reveal delay={0.08} className="mt-14 flex items-center gap-3 sm:mt-16">
          <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
            What I work with
          </h3>
          <SparkleTrio className="h-8 w-12 shrink-0" />
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workWith.map(({ title, description, Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <Icon className="h-16 w-16 drop-shadow-sm" />
              <h4 className="mt-4 font-display text-lg font-semibold text-[var(--color-ink)]">
                {title}
              </h4>
              <p className="mt-2 font-body text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

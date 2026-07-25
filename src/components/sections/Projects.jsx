import { featuredProjects, earlyProjects } from '../../data/projects';
import { companies } from '../../data/companies';
import Reveal from '../ui/Reveal';
import StickyNote from '../ui/StickyNote';
import ProjectVisual from '../ui/ProjectVisual';
import BrowserFrame from '../ui/BrowserFrame';
import { ConfettiBurst, SparkleTrio } from '../icons/Doodles';
import { ArrowUpRightIcon, GithubIcon, BriefcaseIcon } from '../icons/UiIcons';

// Company logos
import cpplusLogo from '../../assets/images/companyLogo/cpplus_logo.png';
import maxtraLogo from '../../assets/images/companyLogo/maxtra.png';
import ajeeviLogo from '../../assets/images/companyLogo/ajeevi.png';
import krognosLogo from '../../assets/images/companyLogo/krognos.png';
import waredotLogo from '../../assets/images/companyLogo/waredot.png';
import readyriderLogo from '../../assets/images/companyLogo/readyrider.png';

// Project mockup images
import videoManagementImg from '../../assets/images/projects/video-management.png';
import videoCallImg from '../../assets/images/projects/video-call.png';
import readyRiderImg from '../../assets/images/projects/ready-rider.png';
import supplyChainImg from '../../assets/images/projects/supply-chain.png';
import smartParkingImg from '../../assets/images/projects/smart-parking.png';
import commandCenterImg from '../../assets/images/projects/command-center.png';

const companyLogos = {
  'CP Plus': cpplusLogo,
  'Maxtra Technologies': maxtraLogo,
  'Ajeevi Technologies': ajeeviLogo,
  'SPAR Krognos': krognosLogo,
  'Waredot Security': waredotLogo,
  'Ready Rider': readyriderLogo,
};

// Project data - company logos and mockup images
const projectAssets = {
  'video-management': { logo: cpplusLogo, image: videoManagementImg },
  'video-call': { logo: cpplusLogo, image: videoCallImg },
  'ready-rider': { logo: readyriderLogo, image: readyRiderImg },
  'supply-chain': { logo: krognosLogo, image: supplyChainImg },
  'smart-parking': { logo: ajeeviLogo, image: smartParkingImg },
  'command-center': { logo: ajeeviLogo, image: commandCenterImg },
};

const rotations = [-1.4, 1.2, -0.8, 1.6, -1.2, 0.9];

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex items-center justify-center gap-4 text-center">
          <ConfettiBurst className="h-9 w-9 sm:h-11 sm:w-11" />
          <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            My latest <span className="text-[var(--color-accent)]">work</span>
          </h2>
          <ConfettiBurst className="h-9 w-9 -scale-x-100 sm:h-11 sm:w-11" />
        </Reveal>
        <Reveal delay={0.06} className="mx-auto mt-3 max-w-xl text-center font-body text-[var(--color-ink-soft)] sm:text-lg">
          A mix of enterprise client work and independent products. The newer builds
          are under client NDA, so I've described the problem and my role instead of
          linking a private repo.
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.key} delay={(i % 2) * 0.08}>
              <StickyNote
                rotate={rotations[i % rotations.length]}
                bg="white"
                className="flex h-full flex-col border border-[var(--color-line)] p-3 transition-transform duration-300 hover:-translate-y-1 hover:rotate-0"
              >
                <div className="relative h-44 overflow-hidden rounded-xl">
                  {/* Project mockup image */}
                  {projectAssets[project.key]?.image ? (
                    <img
                      src={projectAssets[project.key].image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)]">
                      <ProjectVisual projectKey={project.key} />
                    </div>
                  )}
                  {/* Company logo badge */}
                  {projectAssets[project.key]?.logo && (
                    <div className="absolute bottom-2 right-2 rounded-lg bg-white/95 p-1.5 shadow-lg backdrop-blur-sm">
                      <img
                        src={projectAssets[project.key].logo}
                        alt="Company logo"
                        className="h-8 w-auto max-w-[80px] object-contain"
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 px-2 pb-2 pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 font-body text-xs uppercase tracking-wide text-[var(--color-ink-mute)]">
                        {project.org} · {project.period}
                      </p>
                    </div>
                    {(project.links?.github || project.links?.live) && (
                      <div className="flex shrink-0 items-center gap-1.5">
                        {project.links?.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} on GitHub`}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink-mute)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                          >
                            <GithubIcon className="h-4 w-4" />
                          </a>
                        )}
                        {project.links?.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} live`}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink-mute)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                          >
                            <ArrowUpRightIcon className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <p className="font-body text-sm font-semibold text-[var(--color-accent)]">
                    {project.tagline}
                  </p>
                  <p className="font-body text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-2)] px-3 py-1 font-body text-xs text-[var(--color-ink-soft)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </StickyNote>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <StickyNote
              rotate={-1}
              bg="var(--color-accent-pale)"
              className="flex h-full flex-col items-center justify-center gap-3 border-2 border-dashed border-[var(--color-accent-soft)] p-8 text-center"
            >
              <BriefcaseIcon className="h-8 w-8 text-[var(--color-accent)]" />
              <p className="font-display text-lg font-semibold text-[var(--color-ink)]">
                What&apos;s next?
              </p>
              <p className="font-body text-sm leading-relaxed text-[var(--color-ink-soft)]">
                Currently shipping more video &amp; realtime features at CP Plus —
                open to interesting freelance builds on the side. Say hello below!
              </p>
            </StickyNote>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-mute)]">
            Early &amp; open-source builds
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {earlyProjects.map((p, i) => (
              <a
                key={p.title}
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-3 rounded-xl border border-[var(--color-line)] bg-white p-3 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
                style={{ transform: `rotate(${i % 2 === 0 ? '-0.8' : '0.8'}deg)` }}
              >
                <BrowserFrame>
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    className="h-28 w-full object-cover object-top"
                    loading="lazy"
                  />
                </BrowserFrame>
                <div className="flex flex-col gap-1.5 px-1.5 pb-1">
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm font-semibold text-[var(--color-ink)]">
                      {p.title}
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 text-[var(--color-ink-mute)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-accent)]" />
                  </div>
                  <p className="font-body text-xs leading-relaxed text-[var(--color-ink-mute)]">
                    {p.description}
                  </p>
                  <p className="mt-auto font-body text-[11px] uppercase tracking-wide text-[var(--color-ink-mute)]">
                    {p.tech}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-24 flex items-center justify-center gap-3 text-center">
          <SparkleTrio className="h-8 w-11" />
          <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
            Companies I&apos;ve built for
          </h3>
          <SparkleTrio className="h-8 w-11" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.06}>
              <div className="flex h-full gap-4 rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-card)]">
                {companyLogos[c.name] ? (
                  <img
                    src={companyLogos[c.name]}
                    alt={`${c.name} logo`}
                    className="h-12 w-12 shrink-0 rounded-lg object-contain"
                  />
                ) : (
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                    style={{ background: c.color }}
                  >
                    {c.initials}
                  </span>
                )}
                <div>
                  <p className="font-display text-base font-semibold text-[var(--color-ink)]">
                    {c.name}
                  </p>
                  <p className="mt-0.5 font-body text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                    {c.sub}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {c.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

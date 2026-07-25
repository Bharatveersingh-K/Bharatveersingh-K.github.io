import { profile } from '../../data/profile';
import { GithubIcon, LinkedinIcon, MailIcon } from '../icons/UiIcons';
import LiveClock from '../ui/LiveClock';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface-2)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <div className="h-28 w-28 shrink-0">
            <LiveClock />
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-[var(--color-ink)]">
              Bharatveer Singh
            </p>
            <p className="font-body text-sm text-[var(--color-ink-mute)]">
              Local time in {profile.location.split(',')[0]} · India Standard Time
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)] py-6">
        <p className="mx-auto max-w-6xl px-6 text-center font-body text-xs text-[var(--color-ink-mute)] sm:px-10">
          © {year} Bharatveer Singh. Designed &amp; built from scratch — every icon and illustration on this page is hand-coded SVG.
        </p>
      </div>
    </footer>
  );
}

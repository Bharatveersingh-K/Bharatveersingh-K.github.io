import { useState } from 'react';
import { profile } from '../../data/profile';
import Reveal from '../ui/Reveal';
import LinedPaper from '../ui/LinedPaper';
import { SparkleTrio } from '../icons/Doodles';
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon } from '../icons/UiIcons';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Reveal className="flex items-center gap-3">
            <span className="font-script text-5xl leading-none text-[var(--color-ink)] sm:text-6xl">
              Thanks for
            </span>
          </Reveal>
          <Reveal delay={0.04} className="flex items-center gap-3">
            <span className="font-script text-5xl leading-none text-[var(--color-accent)] sm:text-6xl">
              reading!
            </span>
            <SparkleTrio className="h-9 w-12" />
          </Reveal>

          <Reveal delay={0.1} className="mt-6 max-w-md font-body text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
            Have a role, a freelance build, or just want to talk shop about React
            Native and real-time systems? I&apos;d love to hear from you.
          </Reveal>

          <Reveal delay={0.16} className="mt-8 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-ink)] text-white transition-transform hover:-translate-y-0.5"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)] text-white transition-transform hover:-translate-y-0.5"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-sun)] text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </Reveal>

          <Reveal delay={0.2} className="mt-6 font-body text-sm text-[var(--color-ink-mute)]">
            Based in {profile.location} — open to remote work worldwide.
          </Reveal>

          <Reveal delay={0.26} className="mt-10">
            <h3 className="font-display text-[clamp(2.2rem,6vw,3.6rem)] font-bold leading-none text-[var(--color-accent-deep)]">
              LET&apos;S CONNECT!
            </h3>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <LinedPaper className="opacity-70" />
            <div className="relative flex flex-col gap-4">
              <input
                required
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-xl border border-[var(--color-line)] bg-white/80 px-4 py-3 font-body text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-mute)] focus:border-[var(--color-accent)] focus:outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-xl border border-[var(--color-line)] bg-white/80 px-4 py-3 font-body text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-mute)] focus:border-[var(--color-accent)] focus:outline-none"
              />
              <textarea
                required
                rows={5}
                placeholder="Type your message here"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full resize-none rounded-xl border border-[var(--color-line)] bg-white/80 px-4 py-3 font-body text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-mute)] focus:border-[var(--color-accent)] focus:outline-none"
              />
              <button
                type="submit"
                className="mt-1 inline-flex w-fit items-center gap-2 self-start rounded-full bg-[var(--color-accent)] px-7 py-3 font-body text-sm font-semibold text-white shadow-[var(--shadow-pop)] transition-transform hover:-translate-y-0.5"
              >
                Submit <ArrowRightIcon className="h-4 w-4" />
              </button>
              <p className="font-body text-xs text-[var(--color-ink-mute)]">
                Opens your email client, addressed to {profile.email}.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

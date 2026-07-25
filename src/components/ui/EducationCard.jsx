import { education, certifications } from '../../data/profile';
import { PaperclipIcon } from '../icons/Doodles';

export default function EducationCard({ className = '', rotate = 0 }) {
  const items = [
    ...education.map((e) => ({ title: e.degree, sub: e.school, period: e.period })),
    ...certifications.map((c) => ({ title: c.title, sub: c.issuer, period: c.period })),
  ];

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl rounded-br-none border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6 ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <PaperclipIcon className="absolute -top-2 left-5 h-8 w-8 -rotate-12 text-[var(--color-ink-mute)]" />

      <p className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
        Background
      </p>
      <h3 className="mt-1 font-script text-3xl leading-none text-[var(--color-ink)]">
        Education
      </h3>

      <div className="mt-4 flex flex-col gap-3.5">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={i > 0 ? 'border-t border-dashed border-[var(--color-line)] pt-3.5' : ''}
          >
            <p className="font-display text-sm font-semibold leading-snug text-[var(--color-ink)]">
              {item.title}
            </p>
            <p className="mt-1 font-body text-xs leading-relaxed text-[var(--color-ink-soft)]">
              {item.sub}
            </p>
            <p className="mt-0.5 font-body text-[11px] font-medium text-[var(--color-ink-mute)]">
              {item.period}
            </p>
          </div>
        ))}
      </div>

      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-9 w-9"
        style={{
          background: '#E4C9A0',
          clipPath: 'polygon(100% 0, 8% 100%, 100% 100%)',
          boxShadow: '-4px -4px 10px rgba(15, 42, 74, 0.14)',
        }}
      />
    </div>
  );
}

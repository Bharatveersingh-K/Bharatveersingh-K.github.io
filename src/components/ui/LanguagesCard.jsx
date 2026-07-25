import { languages } from '../../data/profile';
import { WashiTape } from '../icons/Doodles';

export default function LanguagesCard({ className = '', rotate = 0 }) {
  return (
    <div
      className={`grid-paper relative w-full overflow-hidden rounded-2xl border border-[var(--color-line)] p-5 pl-8 shadow-[var(--shadow-card)] sm:p-6 ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <span className="absolute bottom-2 left-4 top-2 w-px bg-[var(--color-accent-soft)]" aria-hidden="true" />

      <WashiTape className="absolute -top-3 left-1/2 w-20 -translate-x-1/2" rotate={-5} />

      <h3 className="font-script text-3xl leading-none text-[var(--color-accent)]">
        Languages
      </h3>

      <div className="mt-4 flex flex-col gap-2.5">
        {languages.map((lang) => (
          <p key={lang.name} className="font-body text-sm leading-relaxed text-[var(--color-ink-soft)]">
            <strong className="text-[var(--color-ink)]">{lang.name}:</strong> {lang.level}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function BrowserFrame({ children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-2)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-[var(--color-line)] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-line)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-line)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-line)]" />
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

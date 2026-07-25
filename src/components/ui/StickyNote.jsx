/**
 * A hand-styled "sticky note" card with a peeled corner - used for the
 * project grid and collage stickers to get the scrapbook feel without any
 * external image assets.
 */
export default function StickyNote({
  children,
  className = '',
  rotate = 0,
  bg = 'var(--color-surface-2)',
  peel = true,
  as: Component = 'div',
  ...rest
}) {
  return (
    <Component
      className={`relative rounded-2xl ${peel ? 'rounded-br-none' : ''} shadow-[var(--shadow-card)] ${className}`}
      style={{ background: bg, transform: `rotate(${rotate}deg)` }}
      {...rest}
    >
      {children}
      {peel && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-5 w-5 rounded-bl-lg bg-white"
          style={{
            clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
            boxShadow: '-3px -3px 8px rgba(15, 42, 74, 0.12)',
          }}
        />
      )}
    </Component>
  );
}

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { DownloadIcon, CloseIcon } from '../icons/UiIcons';
import { GridDotsIcon } from '../icons/Doodles';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-[var(--color-line)] bg-white/90 backdrop-blur' : 'border-transparent bg-[var(--color-surface-2)]'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-10">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="flex items-center gap-0.5"
        >
          <span className="font-display text-2xl font-bold tracking-tight text-[var(--color-ink)]">B</span>
          <span className="font-display text-2xl font-bold tracking-tight text-[var(--color-accent)]">S</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-[var(--color-line)] bg-white/80 p-1.5 shadow-sm lg:flex">
          {LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`relative z-0 rounded-full px-4 py-1.5 font-body text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-[var(--color-ink)] hover:text-[var(--color-accent-deep)]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 z-0 rounded-full bg-[var(--color-accent-deep)] shadow-[0_2px_8px_rgba(15,90,160,0.35)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center lg:flex">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-2 font-body text-sm font-medium text-white shadow-[var(--shadow-pop)] transition-transform hover:-translate-y-0.5"
          >
            Résumé <DownloadIcon className="h-4 w-4" />
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <GridDotsIcon className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-[var(--color-line)] bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className={`w-full rounded-xl px-4 py-3 text-left font-body text-base font-semibold ${
                      active === link.id
                        ? 'bg-[var(--color-accent-deep)] text-white shadow-sm'
                        : 'text-[var(--color-ink)]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={profile.resumeUrl}
                  download
                  className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-3 font-body text-sm font-medium text-white"
                >
                  Download Résumé <DownloadIcon className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Every icon in this file is a hand-drawn inline SVG — no icon library involved.
// Consistent monoline style: 24x24 viewBox, currentColor stroke, rounded caps.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function GithubIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 4.2 2.73 7.77 6.51 9.03.48.09.65-.21.65-.46 0-.23-.01-.98-.01-1.78-2.65.49-3.34-.65-3.55-1.24-.12-.3-.63-1.24-1.08-1.49-.37-.2-.9-.68-.01-.69.83-.01 1.42.77 1.62 1.08.95 1.6 2.47 1.15 3.07.87.1-.69.37-1.15.68-1.42-2.36-.27-4.83-1.18-4.83-5.24 0-1.16.41-2.11 1.08-2.85-.11-.27-.47-1.35.1-2.8 0 0 .88-.28 2.88 1.08a9.9 9.9 0 0 1 5.25 0c2-1.36 2.88-1.08 2.88-1.08.57 1.45.21 2.53.1 2.8.67.74 1.08 1.68 1.08 2.85 0 4.07-2.48 4.97-4.84 5.23.38.33.72.97.72 1.96 0 1.42-.01 2.56-.01 2.91 0 .25.17.56.66.46A9.51 9.51 0 0 0 21.5 12c0-5.25-4.25-9.5-9.5-9.5Z" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <path d="M8.2 10.2v6.3M8.2 7.6v.02M12 16.5v-3.6c0-1.5.85-2.5 2.2-2.5 1.3 0 2.05.9 2.05 2.5v3.6" />
      <path d="M12 16.5v-3.6" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 3.6h2.3l1.2 3.6-1.8 1.4a10.6 10.6 0 0 0 4.9 4.9l1.4-1.8 3.6 1.2v2.3c0 1-.9 1.8-1.9 1.7A16.8 16.8 0 0 1 4.9 5.5c-.1-1 .7-1.9 1.7-1.9Z" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.5s6.75-6.42 6.75-11.25a6.75 6.75 0 1 0-13.5 0c0 4.83 6.75 11.25 6.75 11.25Z" />
      <circle cx="12" cy="10.25" r="2.35" />
    </svg>
  );
}

export function DownloadIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5v11.4M8 11.3l4 4 4-4" />
      <path d="M4.5 17.2v1.6c0 1 .8 1.8 1.8 1.8h11.4c1 0 1.8-.8 1.8-1.8v-1.6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function BriefcaseIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7.5" width="18" height="12" rx="2.2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3 12.8c2.7 1.4 5.7 2.1 9 2.1s6.3-.7 9-2.1" />
    </svg>
  );
}

export function GradCapIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m2.5 8.5 9.5-4 9.5 4-9.5 4-9.5-4Z" />
      <path d="M7 10.6v4.1c0 1.3 2.24 2.8 5 2.8s5-1.5 5-2.8v-4.1M21 9.2v5.4" />
    </svg>
  );
}

export function CalendarIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-6.5-5.4-6.5-10.2A6.5 6.5 0 0 1 12 4.3a6.5 6.5 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.8" r="2.2" />
    </svg>
  );
}

export function SparkIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c.5 3 2.2 4.7 5.2 5.2-3 .5-4.7 2.2-5.2 5.2-.5-3-2.2-4.7-5.2-5.2 3-.5 4.7-2.2 5.2-5.2Z" />
      <path d="M18.5 15.5c.3 1.5 1.1 2.3 2.6 2.6-1.5.3-2.3 1.1-2.6 2.6-.3-1.5-1.1-2.3-2.6-2.6 1.5-.3 2.3-1.1 2.6-2.6Z" />
    </svg>
  );
}

export function LayersIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5M3.5 16.3 12 20.8l8.5-4.5" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function CodeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m9 8-5 4 5 4M15 8l5 4-5 4M13.5 5 10.5 19" />
    </svg>
  );
}

export function TargetIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function BuildingIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3.5" width="10" height="17" rx="1.2" />
      <path d="M15 9h4v11.5H5M8 7.5h.01M11.5 7.5h.01M8 11h.01M11.5 11h.01M8 14.5h.01M11.5 14.5h.01" />
    </svg>
  );
}

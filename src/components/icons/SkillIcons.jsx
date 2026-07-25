// Stylised, hand-drawn monoline marks for each technology — deliberately not
// pixel copies of official brand logos, kept to one consistent line-art
// language so the whole grid feels like a single designed system.

const base = {
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function ReactMark(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="16" cy="16" rx="11" ry="4.4" />
      <ellipse cx="16" cy="16" rx="11" ry="4.4" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="11" ry="4.4" transform="rotate(120 16 16)" />
      <circle cx="16" cy="16" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ReactNativeMark(props) {
  return (
    <svg {...base} {...props}>
      <rect x="9.5" y="3.5" width="13" height="25" rx="3" />
      <ellipse cx="16" cy="16" rx="7.4" ry="3" />
      <ellipse cx="16" cy="16" rx="7.4" ry="3" transform="rotate(60 16 16)" />
      <circle cx="16" cy="16" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function JsMark(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="25" height="25" rx="5" />
      <path d="M12.6 11v8.4c0 2-1 2.9-2.6 2.9-1 0-1.8-.4-2.3-1M18 11.2c-.7-.6-1.6-1-2.6-1-1.5 0-2.5.8-2.5 2 0 3 5.4 1.6 5.4 4.9 0 1.4-1.1 2.3-2.7 2.3-1.2 0-2.2-.5-2.9-1.3" />
    </svg>
  );
}

export function HtmlMark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 4h20l-1.8 20L16 27l-8.2-3L6 4Z" />
      <path d="M22 8H10.6l.4 4H21l-.6 6.3-4.4 1.4-4.4-1.4-.3-3" />
    </svg>
  );
}

export function CssMark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 4h20l-1.8 20L16 27l-8.2-3L6 4Z" />
      <path d="M22 8H10l.3 3.6H21.6L21 18l-5 1.7-5-1.7-.3-2.3" />
    </svg>
  );
}

export function TailwindMark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 16c1-4 3-6 7-6s5.5 2.3 7 4.3c-1-1-2.2-1.6-4-1.3-1.4.2-2.3 1.1-3 3-1 4-3 6-7 6s-5.5-2.3-7-4.3c1 1 2.2 1.6 4 1.3 1.4-.2 2.3-1.1 3-3Z" />
    </svg>
  );
}

export function BootstrapMark(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="4" width="20" height="24" rx="4" />
      <path d="M13 9.5h5.2c2 0 3.3 1.1 3.3 2.9 0 1.4-.8 2.4-2 2.7 1.5.3 2.4 1.4 2.4 3 0 2-1.5 3.2-3.7 3.2H13V9.5Zm2.6 2.2v3.6h2.3c1.2 0 1.9-.6 1.9-1.8s-.7-1.8-1.9-1.8h-2.3Zm0 5.7v3.9h2.6c1.4 0 2.2-.7 2.2-2 0-1.2-.8-1.9-2.2-1.9h-2.6Z" />
    </svg>
  );
}

export function MuiMark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M16 4 6 9.6v12.8L16 28l10-5.6V9.6L16 4Z" />
      <path d="M16 4v11l-10-6.4M16 15 26 9.6M16 15v13" />
    </svg>
  );
}

export function NodeMark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M16 3.5 27 10v12L16 28.5 5 22V10L16 3.5Z" />
      <path d="M12 19.8V13c0-1.2.8-1.9 2-1.9s2 1 2 2.2v3.4c0 1.2.8 2.2 2 2.2s2-.7 2-1.9v-6.8" />
    </svg>
  );
}

export function ExpressMark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20c2-.2 3.4-1.2 4.6-3l2-3.2c1.6-2.6 3.6-4 6.6-4 3.6 0 6 2 6.7 5.4" />
      <path d="M6.6 20.5 12 9M9.5 9l9.5 15.5" />
    </svg>
  );
}

export function MongoMark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M16 3.8c4 3.6 6.2 8 6.2 12 0 5.4-2.8 8.7-6.2 10.4-3.4-1.7-6.2-5-6.2-10.4 0-4 2.2-8.4 6.2-12Z" />
      <path d="M16 15v13" />
    </svg>
  );
}

export function FirebaseMark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 25 12.2 4.4l3.4 6.4 2-3.8 5.4 18-14-3Z" />
      <path d="M9 25 20 15" />
    </svg>
  );
}

export function GitMark(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="10" cy="8" r="2.2" />
      <circle cx="10" cy="24" r="2.2" />
      <circle cx="22" cy="16" r="2.2" />
      <path d="M10 10.2V21.8M10.8 9.6c3 .8 6 2.4 9.4 4.6" />
    </svg>
  );
}

export function FigmaMark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13 4h4a4 4 0 0 1 0 8h-4V4Z" />
      <path d="M13 12h4a4 4 0 0 1 0 8h-4v-8Z" />
      <path d="M13 20h4a4 4 0 0 1 0 8 4 4 0 0 1-4-4v-4Z" />
      <path d="M13 4H9a4 4 0 0 0 0 8h4V4Z" />
      <circle cx="9" cy="16" r="4" />
    </svg>
  );
}

export function CanvaMark(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="12.5" />
      <path d="M11 19c-1.6 0-2.7-1.2-2.7-3.2 0-2.6 1.9-4.6 4.3-4.6 1 0 1.7.4 2.2 1l.3-.7h2l-1.6 6.1c-.1.4 0 .6.3.6.6 0 1.6-1 2-2.4M17 12.6c1.2-1 2.2-1.4 3-1.4 1.5 0 2.2 1 1.8 2.6l-.9 3.4c-.1.4 0 .6.3.6.6 0 1.6-1 2-2.4" />
    </svg>
  );
}

export function LeafletMark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M16 4C10 8 7 12.4 7 17a9 9 0 0 0 18 0c0-4.6-3-9-9-13Z" />
      <path d="M16 11v14" />
    </svg>
  );
}

export function SocketMark(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="4.4" />
      <path d="M16 3.5v4.4M16 24v4.4M28.4 16H24M8 16H3.5M23 9l-3 3M12 20l-3 3M23 23l-3-3M12 12 9 9" />
    </svg>
  );
}

export function DatabaseMark(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="16" cy="7.5" rx="10" ry="3.5" />
      <path d="M6 7.5v17c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5v-17" />
      <path d="M6 16c0 1.9 4.5 3.5 10 3.5S26 17.9 26 16" />
    </svg>
  );
}

export function ApiMark(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="13" width="7" height="6" rx="1.4" />
      <rect x="21" y="13" width="7" height="6" rx="1.4" />
      <path d="M11 16h3M18 16h3M14 12v-2h4v2M14 20v2h4v-2" />
    </svg>
  );
}

export function DotNetMark(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="12.5" />
      <path d="M8.5 20V12l5 8v-8M17 12h5.5M19.5 12v8M25 18.6v.1" />
    </svg>
  );
}

export function ChartMark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 27V5M5 27h22" />
      <rect x="9" y="17" width="3.4" height="7" />
      <rect x="15" y="12" width="3.4" height="12" />
      <rect x="21" y="8" width="3.4" height="16" />
    </svg>
  );
}

export function VideoMark(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="9" width="16" height="14" rx="2.4" />
      <path d="m20 13.5 6.5-4v13l-6.5-4Z" />
    </svg>
  );
}

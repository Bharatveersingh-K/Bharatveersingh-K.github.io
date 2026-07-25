# Bharatveer Singh — Portfolio

Personal portfolio of **Bharatveer Singh** — MERN Stack & React Native developer, currently building at **CP Plus** (Aditya Infotech Pvt. Ltd.).

A light blue–white, scrapbook-inspired single-page site with hand-authored SVGs, device mockups, and Framer Motion — no icon libraries, no UI kits.

**Live:** [Bharatveersingh-K.github.io](https://Bharatveersingh-K.github.io)

---

## Highlights

- **Hero** — product collage (dashboard · tablet · mobile) + animated 3-year experience badge
- **About** — polaroid photo, education & languages cards, skill marks with real brand logos
- **Journey** — interactive tabbed slider (one company at a time, swipe / keyboard)
- **Work** — project cards with mockups + company logos; “Companies I’ve built for”
- **Contact** — lined-paper form + social links
- **Footer** — working analog clock SVG

## Stack

| Layer | Choice |
| --- | --- |
| App | React 19 + Vite 5 |
| Styling | Tailwind CSS v4 + SCSS modules |
| Motion | Framer Motion |
| Icons / doodles | Hand-written inline SVGs |
| Lint | Oxlint |
| Deploy | GitHub Actions → GitHub Pages |

## Project structure

```
src/
  assets/images/     profile, company logos, project & hero mockups
  components/
    icons/           UiIcons, Doodles, BrandLogos
    layout/          Navbar, Footer, ScrollProgress, BackToTop
    sections/        Hero, About, Experience, Projects, Contact
    ui/              Reveal, Aurora, LiveClock, StickyNote, ExperienceBadge, …
  data/              profile.js, skills.js, projects.js, companies.js
  hooks/             useTypewriter
  styles/            global.css (design tokens + Tailwind)
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # → dist/
npm run preview   # preview production build
npm run lint      # oxlint
```

**Node:** 18+ recommended (CI uses Node 22).

## Editing content

All copy lives in `src/data/`. Prefer editing those files over component markup.

| File | What to change |
| --- | --- |
| `profile.js` | Name, roles, bio, contact, experience timeline, education, languages, stats |
| `projects.js` | Project titles, descriptions, tech, links |
| `skills.js` | “What I work with” cards |
| `companies.js` | “Companies I’ve built for” list |

### Assets

- **Profile photo:** `src/assets/images/profile.png`
- **Company logos:** `src/assets/images/companyLogo/`
- **Project / hero mockups:** `src/assets/images/projects/` and `hero-*.png`
- **Résumé PDF:** `public/Bharatveer-Singh-Resume.pdf` (navbar + hero download)

### Project / social links

Client work may have empty `links: {}` in `projects.js`. Add `github` / `live` when you can share them. GitHub & LinkedIn URLs are in `profile.js`.

## Design notes

- Theme tokens (`--color-accent`, fonts, shadows) live in `src/styles/global.css`
- Palette: sky blue + white (light theme)
- Fonts: **Caveat** (script), **Fredoka** (display), **Inter** (body) via Google Fonts in `index.html`
- No third-party icon packs — UI marks and doodles are custom SVG components

## Deployment

On every push to `main`, `.github/workflows/deploy.yml`:

1. Installs deps (`npm ci`)
2. Builds the site
3. Publishes `dist/` to GitHub Pages

One-time setup: **Repo → Settings → Pages → Source → GitHub Actions**.

`vite.config.js` uses `base: '/'` for a user/org pages site (`username.github.io`). For a project pages URL (`username.github.io/repo`), set `base: '/repo/'`.

## Contact

- **Email:** bharatveersingh271@gmail.com
- **GitHub:** [Bharatveersingh-K](https://github.com/Bharatveersingh-K)
- **LinkedIn:** [bharatveer-singh](https://www.linkedin.com/in/bharatveer-singh-71995525b/)
- **Location:** Noida, Uttar Pradesh, India

---

Built with care — not a template.

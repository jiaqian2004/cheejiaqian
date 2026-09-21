# CLAUDE.md

This file provides guidance for working on the personal-portfolio project.

## 1. Project Brief

A personal portfolio website built by the user (a software engineer) for two purposes:
- To showcase projects and technical skills to interviewers when applying for IT / software engineering jobs.
- To serve as a long-term learning project for building application.

The site is intended to be publicly hosted (not just run locally) once ready.

The whole site lives in `frontend/` — a React + TypeScript SPA built with Vite.

## 2. Repository Structure

```
CLAUDE.md
README.md               - public-facing overview (features, run, deploy); keep it accurate
docs/                   - screenshots used by README.md
frontend/
  index.html            - page title ("jiaqian") + favicon links
  public/               - static files served as-is, at the site root
    img/                - images (WebP; see Conventions)
    models/main.glb     - the 3D character used by the Hero section
    resume/resume.pdf   - the file behind the "Resume" download button
    favicon.png, apple-touch-icon.png
  src/
    main.tsx, App.tsx   - entry; App picks the page from the URL
    pages/              - HomePage (all home sections), ProjectsPage (/projects)
    components/         - one folder-less component per file (+ its .css)
    content/siteContent.ts  - ALL site text/data (typed); edit content here
    hooks/, lib/        - useTimelineScroll, and the small router (lib/router.ts)
    three/              - React Three Fiber scene (Hero 3D character)
    index.css           - design-token CSS variables + shared classes
```

## 3. Frontend

- Framework/tooling: React 19, TypeScript, Vite 8, ESLint. 3D: three, @react-three/fiber, @react-three/drei.
- Pages: `/` (Hero, About, Work, Projects, Contact) and `/projects` (all projects). Routing is a small custom History-API router in `src/lib/router.ts` (no react-router). The hosting must serve `index.html` for every path, otherwise opening `/projects` directly returns 404 (on Vercel, `frontend/vercel.json` does this).
- Content lives in `src/content/siteContent.ts`; components read from it instead of hardcoding text. Adding a project = one new entry there (with a unique `slug`).
- Key paths: `frontend/src/App.tsx`, `frontend/src/main.tsx`, `frontend/src/content/siteContent.ts`

## 4. Conventions / Notes

- Images: use WebP (same dimensions, quality ~82, keep transparency for cut-outs). Reference them from `public/` with an absolute path (`/img/name.webp`) and make the filename's case match exactly — the Vite dev server and Linux hosts are case-sensitive, so a mismatch silently returns `index.html` instead of the image. Delete the PNG original after converting.
- Shared page background: the two fixed lime glows are the `AmbientGlow` component and should appear on every page. Put it before the page content and give that content `position: relative; z-index: 1` so it sits in front.
- Responsive design: any visual layout change must be checked across multiple
  viewport widths (e.g. laptop ~1440px, common desktop ~1920px, larger
  monitor ~2560px+), not just the width of whichever screen it was built on.
  Prefer relative units (`vw`/`vh`/`%`, `clamp()`) over fixed `px`/`rem` for
  sizes and positions in layouts that need to hold up across screen sizes.
  Verify visually (e.g. via a headless browser screenshot at a few widths)
  before considering a UI change done.
- (To be expanded as conventions are established.)

## 5. Status / Caveats

- The site is feature-complete and is being prepared for deployment.
- Resume, GitHub and LinkedIn links are real; project video demos are Google Drive links whose sharing permission the owner must keep set to "anyone with the link".
- Do not assume features exist beyond what is present in the code.

## 6. Learning / Development Approach

- This is a long-term learning project as well as a production-style personal portfolio.
- Explain important implementation decisions and relevant concepts when introducing new features.
- Explain important code changes in a way that helps the user understand the implementation, rather than simply generating code.
- Prefer the existing technology stack unless there is a clear reason to change it.
- Avoid unnecessary over-engineering.

## 7. Language

- Communicate with the user primarily in Mandarin Chinese for explanations.
- Keep all professional/technical terms in English (e.g., tool names, commands, frameworks, git terminology) — do not translate them into Chinese.
- Keep code, variable names, class names, function names, file names, API paths, and technical identifiers in English.
- Technical terms can remain in English when they are clearer or commonly used that way.

## 8. Change & Approval Rules
- Do not install new dependencies, change the architecture, remove existing files, or modify major configuration without approval.
- Do not overwrite working code unnecessarily.

## 9. Code style
- Need reuseable and clean code

## 10. DESIGN SYSTEM
- dark theme, finalized. Define these as CSS custom properties (e.g. in `index.css` or a theme constants file) and use them consistently — don't introduce ad-hoc colors elsewhere:
- Overall mood: "dopamine" energy inside a dark, tech-feeling shell — bright lime/orange pops with glow effects against near-black, matching the character's own playful illustration style (stickers, alien emoji, lightning bolt motifs), not a moody/cyberpunk look — the dark background is a stage for the bright colors, not the point in itself.

| Role | Name | Hex |
|---|---|---|
| Background | Deep Charcoal | `#111111` |
| Surface / Card | Dark Gray | `#1A1A1A` |
| Primary | Dopamine Lime | `#A8E63A` |
| Primary Hover | Bright Lime | `#B8F04A` |
| Accent | Tech Orange | `#FF8A1E` |
| Text Primary | Soft White | `#F5F5F2` |
| Text Secondary | Cool Gray | `#A6A6A0` |
| Border | Dark Border | `#303030` |
| Tech Accent | Neon Green | `#8DFF3F` |




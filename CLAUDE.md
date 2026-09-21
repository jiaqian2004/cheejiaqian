# CLAUDE.md

This file provides guidance for working on the personal-portfolio project.

## 1. Project Brief

A personal portfolio website built by the user (a software engineer) for two purposes:
- To showcase projects and technical skills to interviewers when applying for IT / software engineering jobs.
- To serve as a long-term learning project for building and deploying a production-style full-stack application.

The site is intended to be publicly hosted (not just run locally) once ready.

- `frontend/` — React + TypeScript SPA (built with Vite)
- `backend/portfolio/` — Java/Spring Boot API (built with Maven)

## 2. Repository Structure

```
frontend/               - React + TypeScript + Vite SPA
backend/portfolio/      - Spring Boot (Java 25, Maven) API
```

## 3. Frontend

- Framework/tooling: React 19, TypeScript, Vite 8, ESLint
- Key paths: `frontend/src/App.tsx`, `frontend/src/main.tsx`

## 4. Backend

- Framework/tooling: Spring Boot 4.1.1, Java 25, Maven
- Key paths: `backend/portfolio/src/main/java/com/jiaqian/portfolio/PortfolioApplication.java`
- Database: PostgreSQL is the chosen database for this project (not yet implemented in code).

## 5. Conventions / Notes

- Backend base package: `com.jiaqian.portfolio`
- Responsive design: any visual layout change must be checked across multiple
  viewport widths (e.g. laptop ~1440px, common desktop ~1920px, larger
  monitor ~2560px+), not just the width of whichever screen it was built on.
  Prefer relative units (`vw`/`vh`/`%`, `clamp()`) over fixed `px`/`rem` for
  sizes and positions in layouts that need to hold up across screen sizes.
  Verify visually (e.g. via a headless browser screenshot at a few widths)
  before considering a UI change done.
- (To be expanded as conventions are established.)

## 6. Status / Caveats

- Both frontend and backend are currently near-default scaffolds (Vite React template; Spring Initializr output) with no custom API endpoints or components yet.
- Do not assume features exist beyond what is present in the code.

## 7. Learning / Development Approach

- This is a long-term learning project as well as a production-style personal portfolio.
- Explain important implementation decisions and relevant concepts when introducing new features.
- Explain important code changes in a way that helps the user understand the implementation, rather than simply generating code.
- Prefer the existing technology stack unless there is a clear reason to change it.
- Avoid unnecessary over-engineering.

## 8. Language

- Communicate with the user primarily in Mandarin Chinese for explanations.
- Keep all professional/technical terms in English (e.g., tool names, commands, frameworks, git terminology) — do not translate them into Chinese.
- Keep code, variable names, class names, function names, file names, API paths, and technical identifiers in English.
- Technical terms can remain in English when they are clearer or commonly used that way.

## 9. Change & Approval Rules
- Do not install new dependencies, change the architecture, remove existing files, or modify major configuration without approval.
- Do not overwrite working code unnecessarily.

## 10. Code style
- Need reuseable and clean code



DESIGN SYSTEM — dark theme, finalized. Define these as CSS custom properties (e.g. in `index.css` or a theme constants file) and use them consistently — don't introduce ad-hoc colors elsewhere:

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

Usage rule (important — these two greens are close in hue and must not compete): **Primary (`#A8E63A`)** is for interactive/clickable elements — buttons, nav highlights, CTAs, active states. **Tech Accent (`#8DFF3F`)** is reserved only for decorative glow/emphasis effects — hover glows, card border glow, rim-light on the 3D model, small "tech" flourishes — never for a clickable element's base color. Background vs Surface gives layering (page background `#111111`, cards/panels sit on `#1A1A1A` with a `#303030` border). Text Secondary for de-emphasized copy (dates, tags, captions), Text Primary for headings/body.

Overall mood: "dopamine" energy inside a dark, tech-feeling shell — bright lime/orange pops with glow effects against near-black, matching the character's own playful illustration style (stickers, alien emoji, lightning bolt motifs), not a moody/cyberpunk look — the dark background is a stage for the bright colors, not the point in itself.

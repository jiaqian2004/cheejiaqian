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

- Before making significant changes, explain the proposed approach and wait for approval.
- Do not install new dependencies, change the architecture, remove existing files, or modify major configuration without approval.
- Prefer small, incremental changes.
- Do not overwrite working code unnecessarily.

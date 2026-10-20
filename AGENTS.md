# AGENTS.md

## Overview

Monorepo: Bun + Hono backend at the repo root, Vite + React + TypeScript frontend in `frontend/`.

## MUST FOLLOW

- Do exactly what is asked, nothing extra and no addons.
- Always ask doubts using the question tool; do not assume anything.
- Read rules mentioned in below and you must follow them

## RULES

- always stick to plan, dont ever assume anything and do task upto what is told only, no extra things
- while designing the ui follow the rules clearly mentioned in design.md file

## Layout

```
index.ts             Bun server entry: { port, fetch: app.fetch }
src/app.ts           Hono app, /api routes, static serving in production
src/routes/health.ts GET /api/health
frontend/            Vite + React + TypeScript app
frontend/dist/       build output, served by the backend
```

## Ports

| Process | Dev | Deploy |
| --- | --- | --- |
| Frontend (Vite) | 6969 (strict) | — |
| Backend (Hono) | 6970 (`PORT`) | 6970 (`PORT`) |

In dev, Vite proxies `/api` to `http://localhost:6970`. Allowed dev host: `me.iamsdr.in`.
On deploy, the backend serves `frontend/dist` and falls back to `index.html` for SPA routes.

## Conventions

- **Runtime:** Bun only; do not use `npm`, `yarn`, or `pnpm`.
- **Language:** TypeScript everywhere, strict mode.
- **Server entrypoint:** `index.ts` exports Bun's default server object.
- **Environment:** port from `PORT`, default `6970`.
- **Dependencies:** ask before adding any package; no extra libraries for UI, routing, or state.

# mycloudy

Monorepo: Hono backend at the repo root, React frontend in `frontend/`.

## Ports

| Process | Dev port |
| --- | --- |
| Vite (frontend) | 6969 |
| Hono (backend) | 6970 (override with `PORT`) |

In dev, Vite proxies `/api` to the backend, so the frontend always calls relative URLs.
On deploy, the backend serves the built frontend from `frontend/dist`.

## Scripts

```bash
bun install          # install dependencies
bun run dev          # backend + frontend concurrently (6969 / 6970)
bun run typecheck    # typecheck backend and frontend
bun run build        # build frontend to frontend/dist
bun run start        # production: single server on PORT (default 6970)
```

## Layout

```
index.ts             Bun server entrypoint
src/app.ts           Hono app, API routes, static serving in production
src/routes/health.ts GET /api/health
frontend/            Vite + React + TypeScript app
frontend/dist/       build output served by the backend
```

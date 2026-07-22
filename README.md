# starter-fullstack-node

> A Skilluv starter — NestJS 11 backend + SvelteKit 5 frontend + PostgreSQL 18.

[![CI](https://github.com/skilluv-community/starter-fullstack-node/actions/workflows/ci.yml/badge.svg)](https://github.com/skilluv-community/starter-fullstack-node/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Skilluv](https://img.shields.io/badge/skilluv-community-emerald)](https://skilluv.io)

## English

### What this is

A production-ready fullstack starter on the Node stack:

- **Backend**: NestJS 11, TypeORM 0.3, PostgreSQL 18, class-validator DTOs, global `ValidationPipe`
- **Frontend**: SvelteKit 5 (runes) + Tailwind v4
- **Orchestration**: Docker Compose (postgres + backend + frontend)
- **Tests**: Jest (backend) + Vitest + Playwright (frontend)
- **CI**: GitHub Actions

### Quickstart

```bash
git clone git@github.com:skilluv-community/starter-fullstack-node.git
cd starter-fullstack-node
cp .env.example .env
docker compose up --build
```

- Frontend: <http://localhost:5173>
- Backend: <http://localhost:3001/health>

### Structure

```
backend/     NestJS app (health + hello + notes CRUD, TypeORM entity)
frontend/    SvelteKit app (Svelte 5 runes, Tailwind v4)
docs/        Bilingual docs (fr, en)
.github/     CI + dependabot + PR template
```

### What's inside

- `GET /health` — liveness probe
- `GET /api/hello?name=Ada` — greeting endpoint
- `GET/POST/DELETE /api/notes` — CRUD demo (TypeORM + PostgreSQL)
- SvelteKit pages `/` (hello demo) and `/notes` (CRUD demo)

### Docs

- [`docs/en/getting-started.md`](./docs/en/getting-started.md)
- [`docs/en/architecture.md`](./docs/en/architecture.md)

---

## Français

Starter fullstack Node/NestJS + SvelteKit prêt-à-l'emploi. Voir [`docs/fr/getting-started.md`](./docs/fr/getting-started.md) et [`docs/fr/architecture.md`](./docs/fr/architecture.md).

```bash
git clone git@github.com:skilluv-community/starter-fullstack-node.git
cd starter-fullstack-node
cp .env.example .env
docker compose up --build
```

---

## License

MIT — see [LICENSE](./LICENSE).

## Related

- [Skilluv](https://skilluv.io)
- [Skilluv Community Charter](https://github.com/skilluv-community/community-charter)
- [Other starters](https://github.com/orgs/skilluv-community/repositories?q=starter)

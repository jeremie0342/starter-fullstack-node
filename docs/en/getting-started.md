# Getting started — starter-fullstack-node

## Prerequisites

- Docker + Docker Compose 2.24+
- (Optional, for local dev without Docker) Node 22 or 24 LTS, PostgreSQL 18

## First run

```bash
git clone git@github.com:skilluv-community/starter-fullstack-node.git
cd starter-fullstack-node
cp .env.example .env
docker compose up --build
```

Wait ~1-2 minutes for the first build (npm install + Nest build).

- Frontend at <http://localhost:5173>
- Backend health at <http://localhost:3001/health>

## Making changes

- **Backend** (`backend/`): `nest start --watch` provides hot-reload; restart the container to pick up new deps.
- **Frontend** (`frontend/`): Vite HMR reloads automatically.
- **DB schema**: TypeORM `synchronize: true` is enabled for demo simplicity — turn it off in production and use migrations (`typeorm-ts-node-commonjs migration:generate`).

## Running tests

```bash
make test
```

## Deploying

Point Coolify at this repo. Both `backend/` and `frontend/` build via Docker.

For production, at minimum:

- Set `NODE_ENV=production`
- Set `synchronize: false` in `AppModule` and run migrations manually
- Restrict `CORS_ORIGIN` to your frontend URL
- Set a strong `POSTGRES_PASSWORD`

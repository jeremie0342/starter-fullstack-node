# Architecture — starter-fullstack-node

## Opinionated choices

### 1. NestJS 11

Modular, decorator-based, batteries-included. Ships with DI, validation, testing, and clear conventions for controllers, services, and modules.

### 2. TypeORM over Prisma

- Native to the NestJS ecosystem via `@nestjs/typeorm`.
- Decorator-driven entities align with Nest's style.
- If your team leans Prisma, swap `TypeOrmModule` for `PrismaModule` — the controllers stay the same.

### 3. `synchronize: true` (for the starter only)

TypeORM auto-syncs schema in dev so you don't need migrations to get started. **Turn it off** before production and generate migrations with `typeorm-ts-node-commonjs migration:generate`.

### 4. Global `ValidationPipe`

Every DTO is validated by `class-validator`, and extra fields are rejected (`forbidNonWhitelisted: true`). This catches malformed input at the edge.

### 5. `setGlobalPrefix('api')` with `/health` exempt

Standard `/api/*` layout for business endpoints, plus a bare `/health` route for orchestrators.

### 6. SvelteKit 5 frontend

Same choices as `starter-frontend-svelte` — runes + Tailwind v4 + `adapter-node`.

## What's out of scope

- Auth (add `@nestjs/passport` or an external IdP).
- Rate limiting (use `@nestjs/throttler`).
- OpenAPI (drop in `@nestjs/swagger` behind a `NODE_ENV=development` flag).
- Multi-tenancy.

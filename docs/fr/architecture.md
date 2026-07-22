# Architecture — starter-fullstack-node

## Choix opinionated

### 1. NestJS 11

Modulaire, décorateurs, batteries-included. DI, validation, testing et conventions claires.

### 2. TypeORM plutôt que Prisma

- Natif à l'écosystème Nest via `@nestjs/typeorm`.
- Entités par décorateurs alignées avec le style Nest.
- Si l'équipe préfère Prisma, remplacer `TypeOrmModule` par `PrismaModule`, les controllers restent identiques.

### 3. `synchronize: true` (démo uniquement)

Auto-sync du schéma en dev. **À désactiver** en prod, utiliser des migrations générées via `typeorm-ts-node-commonjs migration:generate`.

### 4. `ValidationPipe` global

Tous les DTO validés par `class-validator`, champs extras rejetés (`forbidNonWhitelisted: true`).

### 5. `setGlobalPrefix('api')` avec `/health` exempté

Layout `/api/*` pour le métier, `/health` bare pour les orchestrateurs.

### 6. Frontend SvelteKit 5

Mêmes choix que `starter-frontend-svelte`.

## Hors scope

- Auth (`@nestjs/passport` ou IdP externe).
- Rate limiting (`@nestjs/throttler`).
- OpenAPI (`@nestjs/swagger` derrière un flag `NODE_ENV=development`).
- Multi-tenancy.

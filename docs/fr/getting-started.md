# Démarrage — starter-fullstack-node

## Prérequis

- Docker + Docker Compose 2.24+
- (Optionnel) Node 22 ou 24 LTS, PostgreSQL 18

## Premier lancement

```bash
git clone git@github.com:skilluv-community/starter-fullstack-node.git
cd starter-fullstack-node
cp .env.example .env
docker compose up --build
```

Attendre ~1-2 min au premier build (npm install + build Nest).

- Frontend : <http://localhost:5173>
- Health backend : <http://localhost:3001/health>

## Modifier le code

- **Backend** (`backend/`) : `nest start --watch` hot-reload, redémarrer le conteneur pour nouvelles deps.
- **Frontend** (`frontend/`) : HMR Vite auto.
- **Schéma DB** : `synchronize: true` activé pour la démo, à désactiver en prod (utiliser les migrations TypeORM).

## Tests

```bash
make test
```

## Déploiement

Pointer Coolify sur ce repo. Les deux services buildent via Docker. En prod :

- `NODE_ENV=production`
- `synchronize: false`
- Restreindre `CORS_ORIGIN`
- Vrai `POSTGRES_PASSWORD`

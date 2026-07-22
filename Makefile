.PHONY: dev test lint build fmt clean help

help:
	@echo "Targets:"
	@echo "  dev    — docker compose up (postgres + backend + frontend)"
	@echo "  test   — backend jest + frontend vitest"
	@echo "  lint   — eslint on both"
	@echo "  build  — production build for both"
	@echo "  fmt    — auto-format"
	@echo "  clean  — remove build artifacts"

dev:
	docker compose up --build

test:
	cd backend && npm test
	cd frontend && npm run test:unit -- --run

lint:
	cd backend && npm run lint
	cd frontend && npm run lint && npm run check

build:
	cd backend && npm run build
	cd frontend && npm run build

fmt:
	cd backend && npm run format
	cd frontend && npm run format

clean:
	rm -rf backend/node_modules backend/dist frontend/node_modules frontend/build frontend/.svelte-kit

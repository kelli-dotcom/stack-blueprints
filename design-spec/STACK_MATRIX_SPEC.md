# Stack Blueprints — Specification (`design-spec/STACK_MATRIX_SPEC.md`)

> **Owner:** CRTA Tech Solutions · MIT License

## Golden Rule of Stack Selection
Always start at the **lowest tier** that satisfies the product's real requirements. Upgrade a tier only when a concrete constraint (auth, semantic search, native hardware, or multi-team scale) demands it.

## Tier Boundaries
- **Tier 0 (`< 5 KB`, `0` deps):** No bundler required. Runs directly in browser or Node/Bun.
- **Tier 1 (`< 60 KB` JS):** Single lightweight web framework + embedded SQLite/Turso.
- **Tier 2 (`~115 KB` JS):** Full-stack TypeScript (Next.js 15 + Drizzle + PostgreSQL `pgvector` + Docker Compose).
- **Tier 3 (Cross-Platform):** Native mobile shell (Expo/Flutter) sharing JSON design tokens (`feather-themes`) and offline-first sync.
- **Tier 4 (Heavy Enterprise):** Monorepo, dedicated background queues, observability, and multi-region infrastructure.

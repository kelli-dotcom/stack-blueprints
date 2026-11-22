---
name: stack-selector
description: Select the lightest, fastest developer stack (Tier 0 Featherweight to Tier 4 Enterprise) and exact workflow file-creation order for any new project based on RAM, speed, and product specs.
---

# Stack Selector & Workflow File-Order Skill

Use this skill in the first 5 minutes of any new project before installing dependencies.

## Workflow
1. **Measure Real Constraints:** Ask or detect target user hardware (RAM/network), hosting budget, and whether native mobile or enterprise scale is genuinely required.
2. **Pick the Lowest Qualifying Tier:**
   - **Tier 0 (`<5 KB`, 0 deps):** Static tools, theme/perf kits, calculators, Chromebooks.
   - **Tier 1 (`<60 KB`):** Fast directories, docs, solo MVPs on a \$5 VPS (Astro/Vite + SQLite).
   - **Tier 2 (`~115 KB`):** Interactive SaaS / AI web apps (Next.js 15 + Drizzle + Postgres `pgvector` + Docker).
   - **Tier 3 (Mobile + Web):** Field/offline apps needing camera/NFC/push (Expo/Flutter + Postgres).
   - **Tier 4 (Heavy Enterprise):** Multi-team high-throughput platforms (Turborepo + Go/Rust + Redis + K8s).
3. **Follow the Exact File Order (`node bin/stack-blueprints.mjs order <key>`):**
   - Always create `AGENTS.md`, `HANDOFF.md`, `mistakes.md`, `design-spec/`, and `LICENSE` **before** scaffolding app code.
   - Always finish with green CI, a real visual demonstration (`demo.gif` or `preview.svg`), and a top-GitHub `README.md`.

# Stack Blueprints — Mistakes & Guardrails (`mistakes.md`)

### 1. Defaulting to Heavy Stacks for Lightweight Tools
- **Never Repeat:** Never scaffold a multi-package monorepo or heavy ORM when a Tier 0 (`<5 KB`, 0 deps) or Tier 1 (`<60 KB`) stack solves the spec faster and runs cleanly on low-RAM hardware.

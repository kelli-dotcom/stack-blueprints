/**
 * Stack Blueprints — Lightest-to-Heaviest Developer Stack Matrix & Workflow File Orders
 * Built by CRTA Tech Solutions | MIT License | 0 Dependencies
 */

export const STACK_TIERS = [
  {
    tier: 0,
    id: "featherweight",
    name: "Tier 0 · Featherweight (Ultra-Light)",
    bundleTarget: "< 5 KB",
    minRamGb: 1,
    speedRating: "Instant (0ms build)",
    frontend: "Plain HTML5 + Vanilla ES Modules + Feather Themes CSS (1,092 WCAG AA/AAA themes)",
    backend: "Static files or single Node/Bun script (0 npm deps) + Feather Speed ECO profile",
    database: "JSON / LocalStorage / Browser IndexedDB",
    hosting: "GitHub Pages / Cloudflare Pages / Local file",
    bestFor: "Micro-tools, theme explorers, school Chromebooks, offline utilities, calculators, docs",
    crtaExample: "stack-blueprints, feather-themes, feather-speed",
  },
  {
    tier: 1,
    id: "lightweight",
    name: "Tier 1 · Lightweight Fast Web",
    bundleTarget: "< 60 KB",
    minRamGb: 2,
    speedRating: "Sub-second build",
    frontend: "Astro or Vite + Preact / Vanilla TypeScript + Tailwind CSS",
    backend: "Lightweight Edge/Node API routes + Feather Speed auto-tuning",
    database: "SQLite / Turso (libSQL)",
    hosting: "$5 VPS (Docker) / Cloudflare / Coolify",
    bestFor: "Fast public directories, marketing sites, solo MVPs, low-RAM hosting",
    crtaExample: "Tech Worth Knowing / Niche static-dynamic directories",
  },
  {
    tier: 2,
    id: "balanced",
    name: "Tier 2 · Balanced Full-Stack SaaS",
    bundleTarget: "~115 KB First Load JS",
    minRamGb: 4,
    speedRating: "Fast (10-15s prod build)",
    frontend: "Next.js 15 App Router + TypeScript + Tailwind + Feather Themes",
    backend: "Next.js Server Components + Drizzle ORM + Feather Speed concurrency",
    database: "PostgreSQL 16 + pgvector (HNSW semantic search)",
    hosting: "Docker Compose (standalone) / Coolify / Dokploy / VPS",
    bestFor: "Interactive SaaS, live remote job boards, AI-powered web apps",
    crtaExample: "openflex (https://github.com/kelli-dotcom/openflex)",
  },
  {
    tier: 3,
    id: "cross-platform",
    name: "Tier 3 · Cross-Platform Mobile + Web",
    bundleTarget: "Native binary + < 150 KB web",
    minRamGb: 8,
    speedRating: "Moderate (native builds)",
    frontend: "Expo (React Native) or Flutter + Feather Themes tokens.json",
    backend: "TypeScript API / Supabase (Postgres + Auth + Storage + Realtime)",
    database: "PostgreSQL + offline SQLite sync",
    hosting: "App Store / Google Play + Docker/Coolify web",
    bestFor: "Field operations, food trucks, school kitchens, NFC/camera mobile apps",
    crtaExample: "GetCrowd, School Kitchen OS",
  },
  {
    tier: 4,
    id: "heavy-enterprise",
    name: "Tier 4 · Heavy High-Scale Enterprise",
    bundleTarget: "Multi-package monorepo",
    minRamGb: 16,
    speedRating: "Heavy (CI-cached builds)",
    frontend: "Turborepo Monorepo + Shared Design System + Next.js/Web Apps",
    backend: "Dedicated Go/Rust/Node microservices + Queue Workers (Redis/BullMQ)",
    database: "Managed HA PostgreSQL + Read Replicas + Object Storage + Vector DB",
    hosting: "Kubernetes / Terraform / Multi-region cloud + OpenTelemetry",
    bestFor: "Multi-team enterprise orgs, millions of daily requests, strict SOC2/HIPAA",
    crtaExample: "Enterprise scale-out target",
  },
];

export const WORKFLOW_ORDERS = {
  kickoff: {
    name: "Standard New Repo Kickoff Order",
    when: "Starting any clean-room CRTA project from scratch",
    steps: [
      "1. Governance & Spec First: AGENTS.md -> HANDOFF.md -> mistakes.md -> design-spec/ -> LICENSE",
      "2. Environment & Config: .gitignore -> .env.example -> package.json -> tsconfig.json",
      "3. Data & Contracts: src/db/schema.ts (or JSON schemas) -> types -> validators",
      "4. Core Pure Logic: src/lib/* (scrapers, scoring, engines — zero UI coupling)",
      "5. UI & Themes: globals.css (Feather Themes) -> layout -> interactive components -> page",
      "6. Automation & QA: scripts/* -> .github/workflows/ci.yml -> typecheck & production build",
      "7. Launch Proof: assets/banner.png -> real assets/demo.gif -> top-GitHub README.md",
    ],
  },
  mvp: {
    name: "Rapid Solo Weekend MVP Order",
    when: "Validating an idea in 24–48 hours with minimum code weight",
    steps: [
      "1. Pick Tier 0 or Tier 1 stack (avoid heavy monorepos & microservices)",
      "2. Write 1-page design-spec/MVP_SPEC.md answering Who/What/When/Where/Why/How",
      "3. Build the single core data flow end-to-end with synthetic/live fallback data",
      "4. Apply Feather Themes CSS variables + Feather Perf eco budgets",
      "5. Verify with fresh clone + live browser check -> ship README + demo.gif",
    ],
  },
  "multi-agent": {
    name: "Multi-Agent Governed Build Order (Agent Etiquette)",
    when: "Orchestrating 2–3 AI coding agents in parallel without loops or conflicts",
    steps: [
      "1. Lock AGENTS.md (max 3 active agents, clear folder ownership, Rule of 2)",
      "2. Lock handoff schema (.agents/handoff.schema.json) + CLI validator",
      "3. Agent 1 (Ingestion/Data) builds src/lib/* and emits verified_artifacts",
      "4. Agent 2 (Gatekeeper/QA) runs typecheck, lint, tests & security checks -> status: pass",
      "5. Agent 3 (Launch Director — dormant until pass) ships UI, demo.gif & README.md",
    ],
  },
  eco: {
    name: "Low-RAM / Eco-Hardware Build Order",
    when: "Building for 2–4 GB RAM laptops, Chromebooks, older phones, or $5 VPS",
    steps: [
      "1. Run `feather-perf diagnose` to measure real host RAM & CPU tier",
      "2. Choose Tier 0 (0 deps) or Tier 1 (<60 KB JS) — ban CSS-in-JS & heavy animation libs",
      "3. Cap backend worker concurrency (`os.freemem()` / `os.cpus().length`) and DB pools",
      "4. Stream/slice external responses (first 32 KB) and discard full bodies in memory",
      "5. Use pure-CSS animations & lightweight PNG/SVG assets (<100 KB each)",
    ],
  },
  launch: {
    name: "Public Open-Source Launch Order",
    when: "Flipping a repo from Private to Public for maximum GitHub star velocity",
    steps: [
      "1. Run IP & Trademark Safety Audit (docs/IP_SAFETY.md, MIT LICENSE, no competitor marks)",
      "2. Capture real live assets/demo.gif (Mandatory Integrated Demo rule) + banner",
      "3. Apply Top-GitHub README archetype (Product Showcase / Developer SDK / System Map)",
      "4. Verify green GitHub Actions CI + scheduled maintenance cron + SEO topics",
      "5. Publish Show HN, X, Reddit & LinkedIn copy (Tue–Thu, 8:00–10:00 AM EST)",
    ],
  },
};

export function recommendStack({ ramGb = 4, need = "saas" } = {}) {
  const n = String(need).toLowerCase();
  if (n.includes("mobile") || n.includes("ios") || n.includes("android")) {
    return STACK_TIERS[3];
  }
  if (n.includes("enterprise") || n.includes("scale") || n.includes("micro")) {
    return STACK_TIERS[4];
  }
  if (ramGb <= 2 || n.includes("static") || n.includes("tool") || n.includes("theme") || n.includes("eco")) {
    return STACK_TIERS[0];
  }
  if (ramGb <= 4 && (n.includes("mvp") || n.includes("blog") || n.includes("fast") || n.includes("light"))) {
    return STACK_TIERS[1];
  }
  return STACK_TIERS[2];
}

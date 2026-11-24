# Stack Blueprints — Fractal Agent Contract (`AGENTS.md`)

- **Pillar:** CRTA Tech Solutions (Public MIT Open-Source Toolkit)
- **North Star:** 5-tier developer stack matrix (`<5 KB` Featherweight to Enterprise) with exact file-creation order and zero-dependency CLI recommender.

## Hard Phase Locks & Guardrails
- **Zero Dependencies:** Keep `bin/stack-blueprints.mjs`, `src/stacks.mjs`, and `preview/index.html` 100% dependency-free.
- **Multi-Agent Caps:** Max **3 concurrent agents**; **Rule of 2** circuit breaker (`escalated_rule_of_2`); pass only verified file paths.
- **Matrix Parity:** Changes to stack tiers in `src/stacks.mjs` must stay aligned with `design-spec/STACK_MATRIX_SPEC.md` and `skills/stack-selector/SKILL.md`.

## Stack, Entry Points & Verification
- **Stack:** Zero-dependency ESM JavaScript + static HTML preview.
- **Entry Points:** `src/stacks.mjs`, `bin/stack-blueprints.mjs`, `preview/index.html`, `skills/stack-selector/SKILL.md`.
- **Verification:** `/Users/kelli/.bun/bin/bun bin/stack-blueprints.mjs` (exit code `0`).

## Pointers
- State & Index: [`HANDOFF.md`](HANDOFF.md) · [`mistakes.md`](mistakes.md) · [`llms.txt`](llms.txt) · [`design-spec/STACK_MATRIX_SPEC.md`](design-spec/STACK_MATRIX_SPEC.md)
- Active Signature: `> 🔵 **𝙎𝙏𝘼𝘾𝙆-𝘽𝙇𝙐𝙀𝙋𝙍𝙄𝙉𝙏𝙎** · \`TIER & FILE-ORDER ENGINE\` — *Active on this step*`

## 4-Stage Loop
1. **Frame:** Match project scope and hardware budget to the lightest viable stack tier.
2. **Bridge:** Enforce file-creation order and zero runtime bloat.
3. **Proof:** Run `bin/stack-blueprints.mjs` and verify tier output.
4. **Push-Off:** Update `HANDOFF.md` and point builders to `feather-speed` / `feather-themes` next.

## Live State & Next Action
- **State:** `v1.0` live on GitHub with interactive `preview/index.html`.
- **Next Action:** Keep stack recommendations synced as new CRTA starter blueprints are added.

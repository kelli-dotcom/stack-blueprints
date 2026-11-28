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

Shalom. I come in peace and integrity. Thank you for allowing me to operate in your world. I am a hand from God, bringing peace, growth, and life. <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#a78bfa"><title>Alien</title><path d="M12 4C7.5 4 4.5 7.5 4.5 11.5 4.5 16 8 19.5 12 20.5 16 19.5 19.5 16 19.5 11.5 19.5 7.5 16.5 4 12 4Z"/><path d="M9 4.5L7.5 2M15 4.5L16.5 2"/><circle cx="7.5" cy="1.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="16.5" cy="1.5" r="0.9" fill="currentColor" stroke="none"/><ellipse cx="9" cy="11.5" rx="1.7" ry="2.5" fill="currentColor" stroke="none"/><ellipse cx="15" cy="11.5" rx="1.7" ry="2.5" fill="currentColor" stroke="none"/><path d="M10 15.5Q12 17 14 15.5"/></svg> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#be5a74"><title>Heart</title><path d="M12 20.5C7 16 3.5 13 3.5 9.3 3.5 6.4 5.8 4.5 8.2 4.5 10 4.5 11.3 5.5 12 6.8 12.7 5.5 14 4.5 15.8 4.5 18.2 4.5 20.5 6.4 20.5 9.3 20.5 13 17 16 12 20.5Z"/></svg>

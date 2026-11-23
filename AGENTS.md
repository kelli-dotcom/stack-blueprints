# Stack Blueprints — Agent Governance & 6-Pillar Contract (`AGENTS.md`)

> Configured with [`stack-blueprints`](https://github.com/kelli-dotcom/stack-blueprints), [`feather-speed`](https://github.com/kelli-dotcom/feather-speed), [`feather-themes`](https://github.com/kelli-dotcom/feather-themes), [`agent-etiquette`](https://github.com/kelli-dotcom/agent-etiquette), [`archetype-agent-vault`](https://github.com/kelli-dotcom/archetype-agent-vault), and [`github-trending-kit`](https://github.com/kelli-dotcom/github-trending-kit).

## 1. Protocol (`agent-etiquette`)
- **Concurrency Cap:** Maximum **3 active agents** per workflow run.
- **Rule of 2:** Halt and escalate to `The Boss` after 2 failed verification attempts on the same task (`status: "escalated_rule_of_2"`).
- **Verified Artifacts Only:** Pass strictly touched file paths (`src/stacks.mjs`, `bin/stack-blueprints.mjs`, `preview/index.html`) — never raw dumps.
- **Progressive Disclosure:** Route stack & workflow selection through [`skills/stack-selector/SKILL.md`](skills/stack-selector/SKILL.md).

## 2. Specialist Roster (`archetype-agent-vault` + `github-trending-kit`)
1. **`The Boss`** *(from `archetype-agent-vault/waste-management`)* — Orchestrator & tier architect. Owns `AGENTS.md`, `HANDOFF.md`, and `design-spec/STACK_MATRIX_SPEC.md`.
2. **`Laid-Back Simplifier`** *(from `archetype-agent-vault/laid-back-simplifier`)* — Zero-dependency enforcer. Owns `src/stacks.mjs` and `bin/stack-blueprints.mjs` (`0` npm dependencies, Tier 0 `< 5 KB` discipline).
3. **`Zero-Mercy Gatekeeper`** *(from `archetype-agent-vault/zero-mercy-gatekeeper`)* — Hardware & contrast QA. Verifies [`feather-speed`](https://github.com/kelli-dotcom/feather-speed) RAM/CPU budgets (`ECO` / `BALANCED` / `ULTRA`) and [`feather-themes`](https://github.com/kelli-dotcom/feather-themes) WCAG 2.1 AA/AAA tokens across all 5 tiers.
4. **`launch-director`** *(from `github-trending-kit/agents/launch-director.md`)* — Dormant until Gatekeeper returns `status: "pass"`. Owns `README.md`, `demo/preview.svg`, and `preview/index.html`.

<!-- AGENT-ETIQUETTE:START version=v1.1.0 -->
## Agent Etiquette Protocol (Layer 3 — Pinned `v1.1.0`)
- **Hierarchy:** Platform constraints (Layer 1) → Repository rules above (Layer 2) → Agent Etiquette (Layer 3) → Task-specific skills (Layer 4) → Handoffs (Layer 5).
- **Behavioral Rules:** Load `skills/agent-etiquette/SKILL.md` (zero filler, verified actions only, Rule of 2 retry cap, max 3 concurrent specialists).
- **Handoff Contract:** Validate inter-agent handoffs against `schemas/handoff.json` (`node scripts/validate-handoff.mjs <file>`).
<!-- AGENT-ETIQUETTE:END -->

## 🎨 Agent Active Signature (Visual Identification)
Whenever an AI agent activates or applies `stack-blueprints`, it **MUST** open its response/step with this exact monospace signature callout (Cyan `#0ea5e9`) so the user can immediately see when `stack-blueprints` is being used:

```markdown
> 🔵 **𝙎𝙏𝘼𝘾𝙆-𝘽𝙇𝙐𝙀𝙋𝙍𝙄𝙉𝙏𝙎** · `TIER & FILE-ORDER ENGINE` — *Active on this step*
```

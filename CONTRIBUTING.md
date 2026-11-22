# Contributing to Stack Blueprints (`CONTRIBUTING.md`)

Thank you for contributing to **Stack Blueprints**! Both **human engineers** and **AI coding agents** are welcome to propose stack refinements, workflow file-creation orders, and CLI improvements.

---

## 1. High-Impact Ways to Contribute
- **Stack Tier Refinements (`Tier 0` → `Tier 4`):** Update bundle budgets, RAM floors, or battle-tested stack combinations in `src/stacks.mjs`.
- **New Workflow File-Creation Orders:** Add specialized build orders (e.g., `cli-tool`, `browser-extension`, `offline-first-pwa`, `security-audit`) to `WORKFLOW_ORDERS`.
- **Interactive Explorer (`preview/index.html`):** Expand the zero-dependency live HTML stack recommender and file-order explorer.

## 2. Human & AI Agent Guardrails (`AGENTS.md` + `llms.txt`)
- **Zero Dependencies (`0` npm packages):** Keep `src/stacks.mjs` and `bin/stack-blueprints.mjs` 100% dependency-free.
- **Lightest-First Discipline:** Always recommend the lowest tier that satisfies the user's real hardware and product requirements.
- **6-Pillar Alignment:** Ensure changes stay aligned with `feather-speed`, `feather-themes`, `agent-etiquette`, `archetype-agent-vault`, and `github-trending-kit`.

## 3. 60-Second Verification Gate (Required Before Every PR)
```bash
node bin/stack-blueprints.mjs list && node bin/stack-blueprints.mjs recommend --ram=2 --need=mvp && node bin/stack-blueprints.mjs order kickoff
```

## 4. 3-Step Pull Request Workflow
1. **Fork & Branch:** `git checkout -b feat/your-stack-or-order`
2. **Verify Locally:** Run the 3 CLI commands above and confirm exit code `0`.
3. **Submit a Pull Request:** Open a PR against `main` with your CLI output. *(Mobile contributors can edit `skills/stack-selector/SKILL.md` or `design-spec/STACK_MATRIX_SPEC.md` directly in the GitHub web/mobile UI.)*

## 5. IP Safety & MIT License
All contributions must be original clean-room work (no competitor trademarks in comparison tables) and are licensed under the repository's [MIT License](LICENSE).

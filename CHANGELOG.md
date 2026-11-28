# Changelog

All updates are opt-in. Nothing updates on its own. A dev reads this file
first, then chooses whether to update, and stays on the old version for
as long as they want.

## 1.0.1 — 2026-11-28

What changed in this release:

- stack-selector retro-updated to the maker's standard (title, trigger, job, steps, what it is not, what it never does, real cases, the rule in one line, the tag, under 8 KB).

What breaks in 1.0.1:

- Nothing breaking.

What a dev should check before updating:

- Read this entry first, then update only if they want the new bits.
- Run the verification command after updating: `bun bin/stack-blueprints.mjs list && bun bin/stack-blueprints.mjs recommend --ram=2 --need=mvp && bun bin/stack-blueprints.mjs order kickoff`.
- If they do not want any of this, they can stay on their old version. Nothing will change in their project until they run the update.

## 0.1.0 — [date]

What changed in this release:

- First release. [Write one short line per change.]

What breaks in 0.1.0:

- Nothing breaking. [Or: list exactly what breaks, and what to check.]

What a dev should check before updating:

- Read this entry first, then update only if they want the new bits.
- Install the pinned version: `npm install [package-name]@0.1.0`.
- Run `node tests/smoke.test.mjs` after updating.
- If they do not want any of this, they can stay on their old version.
  Nothing will change in their project until they run the update.

## How to version

- A fix is a patch version: 0.1.0 becomes 0.1.1.
- A new feature is a minor version: 0.1.0 becomes 0.2.0.
- A breaking change is a major version: 0.1.0 becomes 1.0.0.

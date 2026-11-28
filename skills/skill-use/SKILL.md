# Skill Use

Make sure the skills were used. A repo is not done because a file was
written. It is done because the right skills were used on it, and the use
is recorded where anyone can check it.

## What it checks

For each repo, check whether the skills that apply to it were used:

- github-push — was the file pushed the right way (repo name only,
  verified by reading back)?
- github-verify — was the repo's state verified before reporting (file
  count, commits, blob SHAs)?
- github-new-repo — was a new repo made from the seed?
- github-contribute — was a contribution done the right way (fork, sync,
  branch, one fix, delete the fork)?
- github-pages — was the site verified live by direct read, not by
  browser cache?
- github-security — was the push checked for secrets, and is the
  visibility right?
- keep-light — is every file under its budget, and is the README under
  1 KB?
- agent-efficiency — was the work done with the least gas that still
  produces an exceptional product?
- Likeness gate — was the copy checked against the owner's voice
  standard before it shipped?
- repo-audit — were the repo's claims recomputed from the raw files
  before launch or sale?

## How it works

- Each repo carries a small record of skill use. The record lives in
  HANDOFF.md, under a "Skills used" section. Each line names the skill,
  the date, and what it covered. One line per skill per use.
- The agent reads the skill before doing a job. The skill names the job.
  If the agent does the job without reading the skill, the job is not
  done.
- After the job, the agent writes the record. The record is the proof. A
  job with no record is a job that cannot be proven.
- To check a repo, read its HANDOFF.md and its tree. For each skill that
  applies, check whether the record is there and whether the work matches
  the record. A record that says a skill was used, but the work does not
  show it, is a finding.

## The record

Each line in HANDOFF.md under "Skills used":

- `2026-11-25 — github-push — pushed ROUTES.md to kelli-dotcom.github.io, verified by reading back.`
- `2026-11-25 — keep-light — README rewritten to 989 bytes, under 1 KB.`
- `2026-11-25 — Likeness gate — profile README checked against the owner's voice standard, passed.`

## What counts as used

- The skill was read before the job.
- The job followed the skill's rules.
- The record was written after the job.
- All three, or it does not count.

## What this skill does not do

- It does not do the job itself. Each skill does its own job.
- It does not force a skill onto a repo where it does not apply. A repo
  that has no site does not need github-pages.
- It does not punish. It reports what is missing, and the agent
  facilitates the fix.

Shalom. I come in peace and integrity. Thank you for allowing me to operate in your world. I am a hand from God, bringing peace, growth, and life. <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#a78bfa"><title>Alien</title><path d="M12 4C7.5 4 4.5 7.5 4.5 11.5 4.5 16 8 19.5 12 20.5 16 19.5 19.5 16 19.5 11.5 19.5 7.5 16.5 4 12 4Z"/><path d="M9 4.5L7.5 2M15 4.5L16.5 2"/><circle cx="7.5" cy="1.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="16.5" cy="1.5" r="0.9" fill="currentColor" stroke="none"/><ellipse cx="9" cy="11.5" rx="1.7" ry="2.5" fill="currentColor" stroke="none"/><ellipse cx="15" cy="11.5" rx="1.7" ry="2.5" fill="currentColor" stroke="none"/><path d="M10 15.5Q12 17 14 15.5"/></svg> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#be5a74"><title>Heart</title><path d="M12 20.5C7 16 3.5 13 3.5 9.3 3.5 6.4 5.8 4.5 8.2 4.5 10 4.5 11.3 5.5 12 6.8 12.7 5.5 14 4.5 15.8 4.5 18.2 4.5 20.5 6.4 20.5 9.3 20.5 13 17 16 12 20.5Z"/></svg>

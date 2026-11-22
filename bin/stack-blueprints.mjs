#!/usr/bin/env node
import { recommendStack, STACK_TIERS, WORKFLOW_ORDERS } from "../src/stacks.mjs";

const args = process.argv.slice(2);
const cmd = args[0] || "list";
const getFlag = (name, fallback = null) => {
  const found = args.find((a) => a.startsWith(`--${name}=`));
  return found ? found.split("=").slice(1).join("=") : fallback;
};

if (cmd === "list") {
  console.log("[STACK BLUEPRINTS] Lightest (Tier 0) -> Heavy Enterprise (Tier 4)\n");
  for (const s of STACK_TIERS) {
    console.log(`  ${s.name} | Bundle: ${s.bundleTarget} | Min RAM: ${s.minRamGb}GB | Speed: ${s.speedRating}`);
    console.log(`     FE: ${s.frontend}`);
    console.log(`     BE: ${s.backend} | DB: ${s.database}\n`);
  }
  process.exit(0);
}

if (cmd === "recommend") {
  const ramGb = Number(getFlag("ram", "4"));
  const need = getFlag("need", "saas");
  const pick = recommendStack({ ramGb, need });
  console.log(`[STACK RECOMMENDER] Input: ram=${ramGb}GB, need="${need}"\n`);
  console.log(`  Recommended: ${pick.name}`);
  console.log(`  Bundle:      ${pick.bundleTarget} (${pick.speedRating})`);
  console.log(`  Frontend:    ${pick.frontend}`);
  console.log(`  Backend:     ${pick.backend}`);
  console.log(`  Database:    ${pick.database}`);
  console.log(`  Hosting:     ${pick.hosting}`);
  console.log(`  Best For:    ${pick.bestFor}`);
  process.exit(0);
}

if (cmd === "order") {
  const key = args[1] || "kickoff";
  const wf = WORKFLOW_ORDERS[key];
  if (!wf) {
    console.error(`Unknown workflow "${key}". Available: ${Object.keys(WORKFLOW_ORDERS).join(", ")}`);
    process.exit(1);
  }
  console.log(`[WORKFLOW FILE ORDER] ${wf.name}`);
  console.log(`When: ${wf.when}\n`);
  for (const step of wf.steps) console.log(`  ${step}`);
  process.exit(0);
}

console.log(`Stack Blueprints CLI (0 dependencies)
Commands:
  node bin/stack-blueprints.mjs list
  node bin/stack-blueprints.mjs recommend --ram=2 --need=mvp
  node bin/stack-blueprints.mjs order <kickoff|mvp|multi-agent|eco|launch>`);

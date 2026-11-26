import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny one-line review a dog gives the mailman, built in three beats:
// the daily grievance, the bribe, and the twist — the dog now works for him.
const grievance =
  "One star. He rattles my letterbox every morning, shoves paper through MY door, then runs";
const bribe = "yesterday he bribed me with a biscuit";
const twist =
  "now I guard his route and bark at the neighbours instead";
const review = `${grievance} — but ${bribe}, so ${twist}.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");

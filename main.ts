// Two-Sentence Horror — entry program for make.fun
// (u-suroto-two-sentence-horror-acea9253).
//
// The program writes exactly one horror story of two sentences to
// /output/entry.txt. The story is held as a single constant and written
// verbatim, with no trailing newline, so two runs produce byte-identical
// output. Only the Node standard library is used; no network, no clock,
// no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The story — WINNER of the local pairwise race (V3, 4-0).
// Angle: a recipe book; the twist is a fact, not an explanation:
// the final ingredient is the reader. Two sentences, ASCII only,
// exactly two full stops in total: one closing each sentence.
const STORY =
  "A new recipe appeared in my grandmother's cookbook, written in handwriting identical to mine, for a dish I have never made. " +
  "The ingredients list ends with my name, my weight, and the words serve warm.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, STORY, "utf8");

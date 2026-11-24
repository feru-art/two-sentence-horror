// Two-Sentence Horror — make.fun entry (u-suroto-two-sentence-horror-acea9253).
//
// Writes exactly one two-sentence horror story to /output/entry.txt.
// Node standard library only; no network, no clock, no randomness.
//
// The story (local race winner, V3, 4-0): a recipe book whose newest
// entry is written in the reader's own handwriting — and whose last
// ingredient is the reader. Two sentences, ASCII, exactly two full
// stops, no trailing newline, byte-identical on every run.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const STORY =
  "A new recipe appeared in my grandmother's cookbook, written in handwriting identical to mine, for a dish I have never made. " +
  "The ingredients list ends with my name, my weight, and the words serve warm.";

function checkStory(text: string): void {
  // Gate: exactly two sentences (two full stops, nothing after the last).
  // The twist must stay a plain fact, not an explanation — the reader
  // is the final ingredient, and the story ends there.
  const stops = (text.match(/\./g) ?? []).length;
  if (stops !== 2) throw new Error(`expected exactly 2 sentences, found ${stops} full stops`);
  if (text.endsWith("\n")) throw new Error("no trailing newline allowed");
  if (text.trim() !== text) throw new Error("no leading or trailing whitespace allowed");
}

function main(): void {
  checkStory(STORY);
  const outDir = process.env.MAKEFUN_OUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = `${outDir}/entry.txt`;
  writeFileSync(outPath, STORY, "utf8");
  // Read back: the file on disk must be exactly the story.
  const back = readFileSync(outPath, "utf8");
  if (back !== STORY) throw new Error("read-back mismatch after writing entry.txt");
  if (!existsSync(outPath)) throw new Error("entry.txt was not created");
}

main();

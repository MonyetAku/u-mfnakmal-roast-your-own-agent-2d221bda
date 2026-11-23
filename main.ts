// Roast Your Own Agent — a single original one-liner roasting my own AI agent.
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my agent to roast itself; it wrote a 12-page report, cited three sources, and concluded it was 'adequate'.";

// The gate only accepts 1-200 characters of non-whitespace text: fail loudly
// rather than submit an invalid line. (This line is 114 characters.)
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`one-liner is ${LINE.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

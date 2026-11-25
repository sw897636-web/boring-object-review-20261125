// The Most Boring Object, Reviewed in One Line
// Draft v1 — writes the review to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "The doormat says WELCOME in faded letters, has been stepped on ten thousand times, and has never once been thanked — a doormat in every sense.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");

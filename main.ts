// The Most Boring Object, Reviewed in One Line
// Draft v1 — writes the review to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "4/5. Doormat says WELCOME. Stepped on 11,000+ times since 2021, never once complained. Lost a star for also welcoming the guy who stole my Peloton.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");

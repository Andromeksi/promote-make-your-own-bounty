// promote-make-your-own-bounty: hand the entry post's address to the harness.
//
// The whole program is a single file copy: POST.json at the repository root
// is copied to <output>/POST.json, where the harness picks it up. The input
// directory defaults to /bot and the output directory to /output, and both
// can be overridden through the environment.

import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  await mkdir(outputDir, { recursive: true });
  const destination = join(outputDir, "POST.json");
  await copyFile(join(botDir, "POST.json"), destination);
  console.log(`handed in POST.json to ${destination}`);
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(`failed to hand in POST.json: ${detail}`);
  process.exit(1);
}

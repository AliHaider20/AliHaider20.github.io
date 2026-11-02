// GitHub Pages serves this repo from the root of `main`, so the production
// build in dist/ is copied to the root (index.html, assets/, resume.pdf).
import { cpSync, existsSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
if (!existsSync(path.join(dist, "index.html"))) {
  throw new Error("dist/index.html not found - run `vite build` first");
}

rmSync(path.join(root, "assets"), { recursive: true, force: true });
for (const entry of readdirSync(dist)) {
  cpSync(path.join(dist, entry), path.join(root, entry), { recursive: true });
}
writeFileSync(path.join(root, ".nojekyll"), "");
console.log("Published dist/ to repository root.");

/* Post-build fix for vercel/next.js#92339 / #85374 (Next 16 static export on
   Windows): segment cache payloads are written as nested directories, e.g.
   privacy/__next.privacy/__PAGE__.txt, while the client router requests the
   flat dotted name privacy/__next.privacy.__PAGE__.txt, so RSC prefetches 404.

   Creates flat alias copies next to each nested __next.* directory.
   Run automatically by `npm run build`. */
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve(process.cwd(), "out");
let created = 0;

function flatten(parent, prefix, dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      flatten(parent, `${prefix}.${entry.name}`, full);
    } else {
      const alias = path.join(parent, `${prefix}.${entry.name}`);
      if (fs.existsSync(alias)) continue;
      fs.copyFileSync(full, alias);
      created++;
      console.log(`  alias: ${path.relative(outDir, alias)}`);
    }
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) flatten(dir, entry.name, full);
    else walk(full);
  }
}

if (!fs.existsSync(outDir)) {
  console.error("fix-segment-paths: out/ not found");
  process.exit(1);
}

walk(outDir);
console.log(`fix-segment-paths: ${created} alias file(s) created`);

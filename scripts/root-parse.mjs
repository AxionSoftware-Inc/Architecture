import fs from "node:fs";
import path from "node:path";

const roots = ["app", "components"];
const exts = new Set([".ts", ".tsx", ".js", ".jsx"]);
const ignore = new Set(["node_modules", ".next", "out", "dist"]);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignore.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (exts.has(path.extname(ent.name))) out.push(p);
  }
  return out;
}

function tryParse(file) {
  const code = fs.readFileSync(file, "utf8");
  // Node TypeScript/JSX ni parse qilmaydi, shuning uchun SWC CLI ishlatamiz
  // Next bilan birga SWC binary odatda keladi.
  return code;
}

const files = roots.flatMap((r) => (fs.existsSync(r) ? walk(r) : []));

console.log(`Checking ${files.length} files...`);
let failed = 0;

for (const f of files) {
  try {
    // SWC orqali parse: @swc/core mavjud bo‘lishi kerak (Next bilan ko‘pincha bor).
    const swc = await import("@swc/core");
    await swc.parse(fs.readFileSync(f, "utf8"), {
      syntax: f.endsWith(".ts") || f.endsWith(".tsx") ? "typescript" : "ecmascript",
      tsx: f.endsWith(".tsx") || f.endsWith(".jsx"),
      decorators: false,
      dynamicImport: true,
    });
  } catch (e) {
    failed++;
    console.error("\n❌ PARSE FAILED:", f);
    console.error(String(e?.message || e));
  }
}

if (failed) {
  console.error(`\nFAILED: ${failed} file(s). Fix the first one above.`);
  process.exit(1);
} else {
  console.log("\n✅ All files parsed OK.");
}

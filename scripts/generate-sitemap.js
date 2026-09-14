// scripts/generate-sitemap.js
// Regenerates public/sitemap.xml, including every published portfolio
// project from Sanity so individual project pages can be discovered
// and indexed by search engines (they were previously missing entirely).
import { createClient } from "@sanity/client";
import { readFileSync, existsSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

// Load .env.local for local runs; on Vercel the real env vars are already set.
const envLocalPath = path.join(rootDir, ".env.local");
if (existsSync(envLocalPath)) {
  for (const line of readFileSync(envLocalPath, "utf-8").split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (!match) continue;
    const [, key, rawValue = ""] = match;
    if (process.env[key] === undefined) {
      process.env[key] = rawValue.replace(/^['"]|['"]$/g, "");
    }
  }
}

const BASE_URL = "https://www.anastasiasyrmais.pro";

const STATIC_PAGES = [
  { loc: "/", changefreq: "monthly", priority: "1.0" },
  { loc: "/about", changefreq: "monthly", priority: "0.8" },
  { loc: "/portfolio", changefreq: "weekly", priority: "0.9" },
  { loc: "/contacts", changefreq: "yearly", priority: "0.7" },
];

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || "production";
const apiVersion = process.env.VITE_SANITY_API_VERSION || "2023-01-01";

const toIsoDate = (value) => {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime())
    ? new Date().toISOString().slice(0, 10)
    : date.toISOString().slice(0, 10);
};

const urlBlock = ({ loc, lastmod, changefreq, priority }) => `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${BASE_URL}${loc}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${loc}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${loc}"/>
  </url>`;

async function fetchProjectSlugs() {
  if (!projectId || projectId === "your_project_id") {
    console.warn(
      "⚠️  VITE_SANITY_PROJECT_ID not set — sitemap will only contain static pages."
    );
    return [];
  }

  const client = createClient({ projectId, dataset, apiVersion, useCdn: false });
  const query = `*[_type == "project" && defined(slug.current)]{
    "slug": slug.current,
    "updatedAt": _updatedAt
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("❌ Failed to fetch project slugs from Sanity:", error.message);
    return [];
  }
}

async function main() {
  const today = toIsoDate();
  const staticEntries = STATIC_PAGES.map((page) =>
    urlBlock({ ...page, lastmod: today })
  );

  const projects = await fetchProjectSlugs();
  const projectEntries = projects.map((project) =>
    urlBlock({
      loc: `/portfolio/${project.slug}`,
      lastmod: toIsoDate(project.updatedAt),
      changefreq: "monthly",
      priority: "0.6",
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...staticEntries, ...projectEntries].join("\n")}
</urlset>
`;

  const outPath = path.join(rootDir, "public", "sitemap.xml");
  writeFileSync(outPath, xml, "utf-8");
  console.log(
    `✅ sitemap.xml written with ${STATIC_PAGES.length} static + ${projectEntries.length} project pages.`
  );
}

main();

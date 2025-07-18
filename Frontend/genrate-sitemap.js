import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = "https://pankeet-manubarwala.vercel.app/"; 

const routes = [
  "/",
  "/projects"
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <changefreq>monthly</changefreq>
      <priority>${route === "/" ? "1.0" : "0.8"}</priority>
    </url>`).join("")}
</urlset>
`;

fs.writeFileSync(path.resolve(__dirname, "public", "sitemap.xml"), sitemap);
console.log("Sitemap generated!");

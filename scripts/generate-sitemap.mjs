import fs from 'fs';
import path from 'path';

function readFile(relPath) {
  return fs.readFileSync(path.resolve(process.cwd(), relPath), 'utf8');
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-');
}

function extractSlugsFromTradespeople(content) {
  const slugs = [];
  const slugRegex = /slug:\s*'([^']+)'/g;
  let m;
  while ((m = slugRegex.exec(content))) {
    slugs.push(m[1]);
  }
  return slugs;
}

function extractLocationsFromTradespeople(content) {
  const locations = new Set();
  const locRegex = /location:\s*'([^']+)'/g;
  let m;
  while ((m = locRegex.exec(content))) {
    locations.add(m[1]);
  }
  return Array.from(locations);
}

function extractCategoriesFromTradeServices(content) {
  const categories = new Set();
  // Find the object literal after "export const tradeServices"
  const start = content.indexOf('export const tradeServices');
  if (start === -1) return [];
  const braceStart = content.indexOf('{', start);
  const braceEnd = content.indexOf('};', braceStart);
  if (braceStart === -1 || braceEnd === -1) return [];
  const block = content.slice(braceStart + 1, braceEnd);
  const keyRegex = /(?:\n|\s*)(?:"([^"]+)"|([a-zA-Z0-9_\-]+))\s*:/g;
  let m;
  while ((m = keyRegex.exec(block))) {
    categories.add(m[1] || m[2]);
  }
  return Array.from(categories).filter(Boolean);
}

function extractBlogSlugs(content) {
  const slugs = new Set();
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = slugRegex.exec(content))) {
    slugs.add(m[1]);
  }
  return Array.from(slugs);
}

async function build() {
  const SITE_URL = process.env.SITE_URL;
  if (!SITE_URL) {
    console.error('Error: SITE_URL environment variable must be set. Example: SITE_URL="https://www.yoursite.com" node scripts/generate-sitemap.mjs');
    process.exit(1);
  }

  // Read data files
  const tradespeopleContent = readFile('client/data/tradespeople.ts');
  const tradeServicesContent = readFile('client/data/tradeServices.ts');
  const blogPageContent = readFile('client/pages/BlogPage.tsx');

  const tradespersonSlugs = extractSlugsFromTradespeople(tradespeopleContent);
  const locations = extractLocationsFromTradespeople(tradespeopleContent).map(slugify);
  const categories = extractCategoriesFromTradeServices(tradeServicesContent);
  const blogSlugs = extractBlogSlugs(blogPageContent);

  const staticPaths = [
    '/',
    '/home',
    '/seo-template',
    '/how-it-works',
    '/verification-promise',
    '/why-us',
    '/faq',
    '/cost-guides',
    '/holiday-homes',
    '/landlords',
    '/about',
    '/contact',
    '/blog',
    '/join-as-tradesperson',
    '/tradesperson/details',
    '/tradesperson/review',
    '/tradesperson/submitted',
    '/login',
    '/customer-dashboard',
    '/dashboard',
    '/post-job',
    '/post-job/success',
    '/post-job/results',
    '/review-trade',
    '/pro/dashboard',
    '/terms',
    '/privacy-policy',
    '/cookie-policy',
    '/download-app',
    '/signup',
  ];

  const urls = new Set();

  // Add static
  for (const p of staticPaths) urls.add(p);

  // Add category pages
  for (const cat of categories) {
    urls.add(`/trades/${cat}`);
    // Add trade pages with each location
    for (const loc of locations) {
      urls.add(`/trades/${cat}/${loc}`);
    }
  }

  // Add tradesperson pages
  for (const s of tradespersonSlugs) {
    urls.add(`/tradesperson/${s}`);
  }

  // Add blog posts
  for (const bs of blogSlugs) {
    urls.add(`/blog/${bs}`);
  }

  const today = new Date().toISOString().split('T')[0];

  const sitemapEntries = Array.from(urls)
    .sort()
    .map((p) => {
      return `  <url>\n    <loc>${SITE_URL.replace(/\/$/, '')}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>`;

  const outDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'sitemap.xml');
  fs.writeFileSync(outPath, sitemap, 'utf8');
  console.log(`Sitemap written to ${outPath} with ${urls.size} URLs`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});

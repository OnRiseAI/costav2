import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// --- CONFIGURATION ---
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY;
const DOMAIN = 'https://www.costatrades.com'; 

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("❌ Missing Supabase Keys in .env file.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function generateSitemap() {
  console.log("🗺️  Fetching data from Supabase...");

  // FIX: Only fetch 'slug', do not fetch 'updated_at' to avoid errors
  const { data: locations, error: locError } = await supabase.from('location_profiles').select('slug');
  const { data: trades, error: tradeError } = await supabase.from('trade_profiles').select('service_slug');

  if (locError || tradeError) {
    console.error("❌ Database Error:", locError || tradeError);
    return;
  }

  console.log(`📊 Found ${locations.length} Locations and ${trades.length} Trades.`);

  let urls = [];
  const today = new Date().toISOString().split("T")[0];

  // 2. Add Static Pages
  const staticPaths = [
    "/", "/home", "/how-it-works", "/verification-promise", "/why-us", 
    "/faq", "/cost-guides", "/holiday-homes", "/landlords", "/about", 
    "/contact", "/blog", "/join-as-tradesperson", "/login", "/post-job"
  ];

  staticPaths.forEach(p => {
    urls.push({ 
        loc: `${DOMAIN}${p}`, 
        lastmod: today,
        priority: '1.0' 
    });
  });

  // 3. Add Tier 1 & Tier 2 Pages (Hub Pages)
  locations.forEach(loc => {
    urls.push({
      loc: `${DOMAIN}/locations/${loc.slug}`,
      lastmod: today,
      priority: '0.9'
    });
  });

  // 4. Add Tier 3 Pages (Service Pages)
  locations.forEach(loc => {
    trades.forEach(trade => {
      urls.push({
        loc: `${DOMAIN}/locations/${loc.slug}/${trade.service_slug}`,
        lastmod: today,
        priority: '0.8'
      });
    });
  });

  // 5. Build XML String
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // 6. Write to File
  const outputPath = path.resolve('public', 'sitemap.xml'); 
  
  try {
    fs.writeFileSync(outputPath, sitemapContent);
    console.log(`✅ Sitemap generated with ${urls.length} URLs!`);
    console.log(`📂 Saved to: ${outputPath}`);
  } catch (err) {
    console.error("❌ Could not save file. Make sure a 'public' folder exists.", err);
  }
}

generateSitemap();
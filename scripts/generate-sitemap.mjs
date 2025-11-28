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
${urls.map(u => `  <url>
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

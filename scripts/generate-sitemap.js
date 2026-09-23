import fs from 'fs';
import { APPS_DATA } from '../src/data/apps.js';
import { GUIDES_DATA } from '../src/data/guides.js';
import { BLOG_POSTS } from '../src/data/blog.js';

const staticPages = [
  { url: 'https://allyonoapp.app/', priority: '1.0', changefreq: 'daily' },
  { url: 'https://allyonoapp.app/apps', priority: '0.9', changefreq: 'daily' },
  { url: 'https://allyonoapp.app/new-apps', priority: '0.9', changefreq: 'daily' },
  { url: 'https://allyonoapp.app/how-to-play', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://allyonoapp.app/blog', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://allyonoapp.app/about', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://allyonoapp.app/contact', priority: '0.6', changefreq: 'monthly' },
  { url: 'https://allyonoapp.app/privacy', priority: '0.4', changefreq: 'monthly' },
  { url: 'https://allyonoapp.app/terms', priority: '0.4', changefreq: 'monthly' },
  { url: 'https://allyonoapp.app/disclaimer', priority: '0.5', changefreq: 'monthly' }
];

const today = '2026-09-14';

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
xml += '  <!-- Core Static Pages -->\n';

for (const p of staticPages) {
  xml += '  <url>\n';
  xml += `    <loc>${p.url}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
  xml += `    <priority>${p.priority}</priority>\n`;
  xml += '  </url>\n';
}

xml += `\n  <!-- Application Detail Pages (${APPS_DATA.length} Apps) -->\n`;
for (const app of APPS_DATA) {
  xml += '  <url>\n';
  xml += `    <loc>https://allyonoapp.app/app/${app.slug}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += '    <priority>0.8</priority>\n';
  xml += '  </url>\n';
}

xml += `\n  <!-- Educational Guide Pages (${GUIDES_DATA.length} Guides) -->\n`;
for (const guide of GUIDES_DATA) {
  xml += '  <url>\n';
  xml += `    <loc>https://allyonoapp.app/guide/${guide.slug}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '    <changefreq>monthly</changefreq>\n';
  xml += '    <priority>0.7</priority>\n';
  xml += '  </url>\n';
}

xml += `\n  <!-- Editorial & Research Blog Posts (${BLOG_POSTS.length} Posts) -->\n`;
for (const post of BLOG_POSTS) {
  xml += '  <url>\n';
  xml += `    <loc>https://allyonoapp.app/blog/${post.slug}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '    <changefreq>monthly</changefreq>\n';
  xml += '    <priority>0.7</priority>\n';
  xml += '  </url>\n';
}

xml += '</urlset>\n';

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
const total = staticPages.length + APPS_DATA.length + GUIDES_DATA.length + BLOG_POSTS.length;
console.log(`sitemap.xml successfully generated with ${total} URLs.`);

import { languages } from '../data/languages';
import { normalizeLanguageName } from './seo';

export function generateSitemap(): string {
  const baseUrl = 'https://helloworld.yhc.so';
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  // Static pages
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/rankings', priority: '0.8', changefreq: 'weekly' },
    { url: '/sources', priority: '0.7', changefreq: 'monthly' }
  ];

  // Dynamic language pages
  const languagePages = languages.map(lang => ({
    url: `/${normalizeLanguageName(lang.name)}-hello-world`,
    priority: '0.9',
    changefreq: 'weekly'
  }));

  const allPages = [...staticPages, ...languagePages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}
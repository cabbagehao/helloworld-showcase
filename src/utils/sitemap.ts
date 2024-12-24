import { languages } from '../data/languages';
import { routes } from './routes';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export function generateSitemap(baseUrl: string): string {
  const urls: SitemapUrl[] = [
    {
      loc: `${baseUrl}${routes.home}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: `${baseUrl}${routes.rankings}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}${routes.sources}`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7
    },
    // Add language pages
    ...languages.map(lang => ({
      loc: `${baseUrl}${routes.language(lang.name)}`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.9
    }))
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}
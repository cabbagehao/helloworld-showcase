import { languages } from '../data/languages';
import { routes } from './routes';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export function generateSitemap(baseUrl: string): string {
  const currentDate = new Date().toISOString();
  
  const urls: SitemapUrl[] = [
    // Main pages
    {
      loc: `${baseUrl}${routes.home}`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${baseUrl}${routes.rankings}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}${routes.sources}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    
    // Language detail pages
    ...languages.map(lang => ({
      loc: `${baseUrl}${routes.language(lang.name)}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    }))
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;}
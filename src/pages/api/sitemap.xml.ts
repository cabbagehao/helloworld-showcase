import { generateSitemap } from '../../utils/sitemap';

export default function handler(req: Request) {
  const baseUrl = new URL(req.url).origin;
  const sitemap = generateSitemap(baseUrl);
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
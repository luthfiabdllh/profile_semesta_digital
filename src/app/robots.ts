import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/node_modules/',
          '/.next/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/api/', '/admin/'],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://semesta.vc/sitemap.xml', 
    host: 'https://semesta.vc', 
  };
}
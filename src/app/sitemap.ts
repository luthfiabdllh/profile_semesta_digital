import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://semestadatadigital.com';
  
  // Halaman utama
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/statistic`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
  
  // Untuk halaman layanan dinamis, idealnya Anda bisa mengambil data dari CMS atau API
  // Contoh statis untuk demonstrasi
  const services = [
    { id: 'big-data-analytics', updatedAt: new Date() },
    { id: 'artificial-intelligence', updatedAt: new Date() },
    { id: 'digital-transformation', updatedAt: new Date() },
    { id: 'data-visualization', updatedAt: new Date() },
    { id: 'startup-mentorship', updatedAt: new Date() },
  ];
  
  const serviceRoutes = services.map(service => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: service.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  return [...routes, ...serviceRoutes];
}
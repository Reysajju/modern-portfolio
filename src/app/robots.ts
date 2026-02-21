import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://sajjad.escritura.site'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/reset-password'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

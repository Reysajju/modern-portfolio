import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sajjad.escritura.site'

  const bookSlugs = [
    'china-ate-red-apple',
    'his-last-day',
    'the-face-you-know',
    'the-whispering-ledger',
    'the-weiner-effect',
    'beneath-the-willowbridge',
    'yellow-room-number-three',
    'the-guilt-eater',
    'carmillas-orchard',
    'the-vault-of-amontillado-lane',
    'the-shell',
    'the-memory',
    'the-choice',
    'the-bridge',
    'the-seed',
    'the-spiral',
    'vision-in-red',
    'unblinking',
    'the-bitter-well',
    'naming-the-night',
    'hollow-ground',
    'the-gardeners-of-aethelgard',
    'the-ghost-frequency',
    'the-correction-protocol',
    'the-peshawar-protocol',
    'the-disconnect',
  ]

  const bookPages: MetadataRoute.Sitemap = bookSlugs.map((slug) => ({
    url: `${baseUrl}/books/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    images: [`/books/${slug}.jpg`],
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: ['/og-image.png'],
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/library`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...bookPages,
  ]
}

import type { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://mariodicaprio.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://mariodicaprio.com/impressum',
            changeFrequency: 'never',
            priority: 0.5,
        },
    ]
}

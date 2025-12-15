export const project = {
    name: 'project',
    title: 'Realizacja',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tytuł Realizacji',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'location',
            title: 'Lokalizacja',
            description: 'Np. Nowy Sącz, Limanowa (Ważne dla SEO)',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Zdjęcie główne',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'gallery',
            title: 'Galeria zdjęć i wideo',
            type: 'array',
            of: [
                { type: 'image', options: { hotspot: true } },
                { type: 'file', title: 'Wideo', options: { accept: 'video/*' } }
            ]
        },
    ],
}

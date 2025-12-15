export const post = {
    name: 'post',
    title: 'Post (Blog)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tytuł',
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
            name: 'mainImage',
            title: 'Zdjęcie główne',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'publishedAt',
            title: 'Data publikacji',
            type: 'datetime',
        },
        {
            name: 'body',
            title: 'Treść',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    options: { hotspot: true }
                }
            ]
        },
    ],
}

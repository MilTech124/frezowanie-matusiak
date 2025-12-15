export const homepage = {
    name: 'homepage',
    title: 'Strona Główna',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tytuł Sekcji',
            type: 'string',
            initialValue: 'Strona Główna - Ustawienia',
            readOnly: true
        },
        {
            name: 'showcaseGallery',
            title: 'Galeria "Zobacz Efekty"',
            type: 'array',
            of: [
                { type: 'image', options: { hotspot: true } },
                { type: 'file', title: 'Wideo', options: { accept: 'video/*' } }
            ],
            description: 'Dodaj zdjęcia i wideo do sekcji przesuwanej na stronie głównej.'
        }
    ]
}

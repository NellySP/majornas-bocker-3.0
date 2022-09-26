export default {
  name: 'aboutGallery',
  title: 'Om oss: bildgalleri',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      description: 'Namn på denna sektion av sidan.',
      type: 'string',
    },
    {
      name: 'gallery',
      title: 'Galleri',
      description: 'Här läggs bilder som visas på om oss-sidan till.',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Bild',
          type: 'image',
          option: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Alt-text till bilden',
              description: 'Beskriv kortfattat vad bilden innehåller',
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
              validation: (Rule) => [
                Rule.required()
                  .max(80)
                  .error('Undvik att skriva långa alt-texter. Max 80 tecken.'),
              ],
            },
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: 'attribution',
              type: 'string',
              title: 'Attribution',
            },
          ],
        },
      ],
    },
  ],
};

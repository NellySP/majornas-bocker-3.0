export default {
  name: 'aboutGallery',
  title: 'About Gallery',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          option: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Alt text till bilden',
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

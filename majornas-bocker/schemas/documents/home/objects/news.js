export default {
  name: 'news',
  title: 'News',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'internalLink',
      title: 'Länk till undersida',
      description: 'Välj en undersida',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'aboutPage' }, { type: 'newsPage' }],
        },
      ],
      validation: (Rule) => [
        Rule.required().max(1).error('Välj max en undersida'),
      ],
    },
    {
      name: 'imageStore',
      title: 'Book store image',
      description: 'Lägg till bild på butik här',
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
};

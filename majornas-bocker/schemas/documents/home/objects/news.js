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
    },
  ],
};

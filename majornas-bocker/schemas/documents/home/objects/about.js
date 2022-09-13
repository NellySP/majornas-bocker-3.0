export default {
  name: 'about',
  title: 'About',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'imageOne',
      title: 'First image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'imageTwo',
      title: 'Second Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'internalLink',
      title: 'Länk till undersida',
      description: 'Välj en sida',
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
  ],
};

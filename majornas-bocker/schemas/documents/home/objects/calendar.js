export default {
  name: 'calendar',
  title: 'Kalendarium',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'internalLinkText',
      title: 'Textlänk till undersidan',
      type: 'string',
    },
    {
      name: 'internalLink',
      title: 'Länk till undersida',
      description: 'Välj en sida',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'aboutPage' },
            { type: 'newsPage' },
            { type: 'calendarPage' },
          ],
        },
      ],
      validation: (Rule) => [
        Rule.required().max(1).error('Välj max en undersida'),
      ],
    },
  ],
};

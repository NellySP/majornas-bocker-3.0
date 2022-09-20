import { array } from 'prop-types';

export default {
  name: 'calendarPost',
  title: 'Calendar Post',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'text',
      title: 'text',
      type: 'string',
    },
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
    {
      name: 'eventType',
      title: 'Ange vad det är för typ av event',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => [
        Rule.required().max(1).error('Välj max en typ av event'),
      ],
    },
    {
      name: 'date',
      title: 'Ange datum för eventet',
      type: 'string',
      placeholder: 'T.ex: Tisdag 11/10',
    },
    {
      name: 'time',
      title: 'Ange vilken tid eventet börjar',
      type: 'string',
      placeholder: 'T.ex: 18:00',
      validation: (Rule) => [
        Rule.required().error('Vänligen ange vilken tid eventet börjar'),
      ],
    },
    {
      name: 'link',
      title: 'link',
      description:
        'Use this field to add a link to the source. For external links use full url e.g. ‘https://google.com/’. For internal links use the page path e.g. ‘companies’',
      type: 'string',
    },
  ],
};

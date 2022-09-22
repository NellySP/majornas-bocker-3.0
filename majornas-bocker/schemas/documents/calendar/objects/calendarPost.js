import { array } from 'prop-types';

export default {
  name: 'calendarPost',
  title: 'Calendar Post',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Titel för eventet',
      type: 'string',
    },
    {
      name: 'eventType',
      title: 'Ange vad det är för typ av event',
      description: 'Ange max en typ av event',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => [
        Rule.required().max(1).error('Välj max en typ av event'),
      ],
    },
    {
      name: 'text',
      title: 'Beskrivning av eventet',
      type: 'text',
      rows: 4,
    },
    {
      name: 'image',
      title: 'Lägg till en eventbild',
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
      name: 'day',
      title: 'Ange datum för eventet, två siffror',
      type: 'string',
      placeholder: 'T.ex: 05',
    },
    {
      name: 'month',
      title: 'Ange månad för eventet, tre bokstäver',
      type: 'string',
      placeholder: 'T.ex: OKT',
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
      title: 'Länk till föranmälan/intresseanmälan',
      description:
        'Här kan du lägga till antingen en e-postlänk eller en länk till en extern sida.',
      type: 'string',
    },
    {
      name: 'linkText',
      title: 'Länktext till föranmälan/intresseanmälan',
      description: "T.ex. 'Föranmäl dig här!'",
      type: 'string',
    },
  ],
};

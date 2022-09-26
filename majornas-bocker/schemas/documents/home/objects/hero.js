export default {
  name: 'hero',
  title: 'Startsida: Information',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Title',
      description: 'Namn på sidan som redigeras.',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      description: 'Namn på hemsidan.',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero description',
      description: 'Kort beskrivning under hemsidans namn som förklarar företaget.',
      type: 'text',
      rows: 3,
    },
    {
      name: 'mainLink',
      title: 'Social link text',
      description: 'Text för att följa sociala medier.',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      description: 'Länk till instagram-konto.',
      type: 'url',
    },
    {
      name: 'heroImage',
      title: 'Huvudbild',
      description: 'Här väljs omslagsbilden som syns överst på startsidan.',
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

    // {
    //   name: 'image',
    //   type: 'image',
    //   title: 'Image',
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       name: 'alt',
    //       type: 'string',
    //       title: 'Alternative text',
    //     },
    //   ],
    // },
  ],
};

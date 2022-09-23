export default {
  name: "aboutHero",
  title: "About Hero",
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
      description: "H1 goes here",
      type: "string",
    },
    {
      name: "heroDescription",
      title: "Hero description",
      type: "text",
      rows: 3,
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
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
      name: "openingHoursTitle",
      title: "Opening Hours Title",
      description: "H2 goes here",
      type: "string",
    },
    {
      name: "openingHours",
      title: "Opening Hours",
      type: "array",
      of: [
        {
          name: "day",
          title: "Day",
          type: "string",
        },
      ],
    },
  ],
};

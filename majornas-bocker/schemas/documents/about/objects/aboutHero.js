export default {
  name: "aboutHero",
  title: "Om oss: information",
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Titel",
      description: "Sektionens namn",
      type: "string",
    },
    {
      name: "heading",
      title: "Sidrubrik",
      description: "Tips: undvik långa rubriker",
      type: "string",
    },
    {
      name: "heroDescription",
      title: "Brödtext till sidan",
      description: "Texten syns under sidrubriken.",
      type: "text",
      rows: 3,
    },
    {
      name: "heroImage",
      title: "Bild",
      type: "image",
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
    {
      name: "openingHoursTitle",
      title: "Underrubrik",
      description: "Rubrik för sektionen om öppettider",
      type: "string",
    },
    {
      name: "openingHours",
      title: "Öppettider",
      description:"Ändra eller lägg till öppettiderna här. Klicka i textfälten för att ändra, klicka och dra i punkterna till vänster om textfältet för att ändra i ordningen.",
      type: "array",
      of: [
        {
          name: "day",
          title: "Dag",
          type: "string",
        },
      ],
    },
  ],
};

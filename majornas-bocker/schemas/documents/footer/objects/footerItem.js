export default {
    name: 'footerItem',
    title: 'Sidfot-sektion',
    type: 'object',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Titel',
        type: 'string',
      },
      {
        name: 'heading',
        title: 'Rubrik',
        description: 'Rubriken för sektionen',
        type: 'string',
      },

      {
        name: 'portableText',
        type: 'array',
        title: 'Textinnehåll',
        description: 'Texten syns under sektionens rubrik. Möjligt att lägga till länkar.',
        of: [
          {
            type: 'block',
            marks: {
              annotations: [
                {
                    name: 'link',
                    type: 'object',
                    title: 'Länk',
                    fields: [
                      {
                        name: 'href',
                        type: 'url',
                        title: 'URL',
                        validation: (Rule) =>
                            Rule.required().uri({
                            allowRelative: true, // Allow relative links
                            relativeOnly: false, // Force only relative links
                            scheme: ["https", "http", "mailto", "tel"],})
                      },
                    ]
                  },
              ]
            },
          }
        ]
        },
    ],
}


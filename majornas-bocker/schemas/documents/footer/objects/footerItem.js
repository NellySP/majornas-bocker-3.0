export default {
    name: 'footerItem',
    title: 'Footer Item',
    type: 'object',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string',
      },
      {
        name: 'heading',
        title: 'Heading',
        description: 'H4 goes here',
        type: 'string',
      },

      {
        name: 'portableText',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block',
            marks: {
              annotations: [
                {
                    name: 'link',
                    type: 'object',
                    title: 'External link',
                    fields: [
                      {
                        name: 'href',
                        type: 'url',
                        title: 'URL',
                        validation: (Rule) =>
                            Rule.required().uri({
                            allowRelative: true, // Allow relative links
                            relativeOnly: false, // Force only relative links
                            scheme: ["https", "http", "mailto"],})
                      },
                      {
                        title: 'Open in new tab',
                        name: 'blank',
                        description: 'Read https://css-tricks.com/use-target_blank/',
                        type: 'boolean'
                      }
                    ]
                  },
              ]
            },
          }
        ]
        },
    ],
}


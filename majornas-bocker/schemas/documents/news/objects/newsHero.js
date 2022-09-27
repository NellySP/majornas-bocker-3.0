export default {
  name: "newsHero",
  title: "Händelser i butiken: Information",
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: 'Title',
      description: 'Namn på sidan som redigeras.',
      type: "string",
    },
    {
      name: "heading",
      title: "Sidorubrik",
      description: "Rubrik sidan: Händelser i butiken",
      type: "string",
    },
    {
      name: "heroDescription",
      title: "Sidobeskrivning",
      description: "Kort beskrivning som kort förklarar vad sidan handlar om.",
      type: "text",
      rows: 3,
    },
    {
      name: "noticeOfInterest",
      title: "Intresseanmälan",
      description: "Underrubrik som förklarar hur besökare gör sin intresseanmälan för events.",
      type: "string",
    },
    {
      name: "noticeText",
      title: "Instruktioner för intresseanmälan",
      description: "Kontaktuppgifter eller mail för intresseanmälan.",
      type: "array",
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
                          scheme: ["https", "http", "mailto"],})
                    },
                  ]
                },
            ]
          },
        }
      ]
    },
  ],
};

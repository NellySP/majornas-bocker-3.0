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

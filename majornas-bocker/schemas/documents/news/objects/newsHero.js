export default {
  name: "newsHero",
  title: "News Hero",
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
      name: "noticeOfInterest",
      title: "Notice of interest",
      description: "H2 goes here",
      type: "string",
    },
    {
      name: "noticeText",
      title: "noticeText",
      type: "text",
      rows: 3,
    },
  ],
};

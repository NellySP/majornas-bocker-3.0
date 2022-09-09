export default {
  name: "singleNews",
  title: "Single News",
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      option: {
        hotspot: true,
      },
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "text",
      title: "text",
      type: "string",
    },
    {
      name: "link",
      title: "link",
      description:
        "Use this field to add a link to the source. For external links use full url e.g. ‘https://google.com/’. For internal links use the page path e.g. ‘companies’",
      type: "string",
    },
  ],
};

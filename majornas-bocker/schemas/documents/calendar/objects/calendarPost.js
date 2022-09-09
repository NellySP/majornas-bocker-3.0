export default {
    name: "calendarPost",
    title: "Calendar Post",
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
        name: "date",
        title: "Date",
        type: "datetime",
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
  
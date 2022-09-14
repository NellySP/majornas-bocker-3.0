export default {
  name: 'hero',
  title: 'Hero',
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
      description: 'H1 goes here',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'mainLink',
      title: 'Main link text',
      description: 'Instagram link goes here',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      description: 'URL for main link',
      type: 'url',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      option: {
        hotspot: true,
      },
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

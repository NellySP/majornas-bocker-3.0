export default {
  name: 'aboutGallery',
  title: 'About Gallery',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          option: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

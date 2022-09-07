export default {
  name: 'about',
  title: 'About',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'imageOne',
      title: 'First image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'imageTwo',
      title: 'Second Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'internalLinkUrl',
      title: 'Internal Link Url',
      description:
        'Ej färdig. Kunden ska kunna välja länk till någon undersida här.',
      type: 'url',
    },
  ],
};

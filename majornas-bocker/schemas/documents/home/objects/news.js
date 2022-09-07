export default {
  name: 'news',
  title: 'News',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'storeLinkText',
      title: 'Store link text',
      description: 'Store link text goes here',
      type: 'string',
    },
    {
      name: 'storeLinkUrl',
      title: 'Store Link Url',
      description:
        'Ej färdig. Kunden ska kunna välja länk till någon undersida här.',
      type: 'url',
    },
    {
      name: 'imageStore',
      title: 'Book store image',
      description: 'Lägg till bild på butik här',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
  ],
};

export default {
  name: 'siteConfig',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
      description: 'Titeln på hemsidan',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'URL-länken till hemsidan',
    },
    {
      title: 'Navigation',
      name: 'nav',
      description: 'Välj sidor till toppmenyn',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'homePage' }, { type: 'aboutPage' }],
        },
      ],
    },
  ],
};